import React from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import store from './redux/store';
import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import ProductList from './components/ProductList';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { calculateBasket, setDrawer } from './redux/slices/basketSlice';
import { useEffect } from 'react';


function AppContent() {
  const dispatch = useDispatch();
  const { products, drawer, totalAmount } = useSelector((state) => state.basket);
useEffect(()=>{
  dispatch(calculateBasket());
}, [])
  return (
    <PageContainer>
      <Loading />
      <Header />
      <RouterConfig />

      <Drawer
        className='drawer'
        sx={{ padding: '20px' }}
        anchor='right'
        open={drawer}
        onClose={() => dispatch(setDrawer())}
      >
        <div style={{ width: '300px', padding: '20px' }}>
          <h2>Sepet</h2>
          {products && products.length > 0 ? (
            products.map((product) => (
              <div key={product.id} className='flex-row' style={{ padding: '10px 0', borderBottom: '1px solid #ccc' }}>
                <img src={product.image} width={50} height={50} alt={product.title} />
                <div style={{ marginLeft: '10px' }}>
                  <p style={{ margin: 0 }}>{product.title} ({product.count})</p>
                  <p style={{ margin: 0 }}>{product.price}₺</p>
                  <button>Sil</button>
                </div>

                
                
              </div>
            ))
          ) : (
            <p>Sepet boş</p>
          )}
        </div>
                <div>
                  <p style={{textAlign: 'center', fontSize: '25px', fontWeight: 'bolder'}}>Total Amount: {totalAmount} $</p>
                </div>
      </Drawer>
    </PageContainer>
  );
}


function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

export default App;
