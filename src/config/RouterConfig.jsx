import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetails from '../components/ProductDetails'

function RouterConfig({ addToCart, search }) {
  return (
    <Routes>
      <Route path="/" element={<Home addToCart={addToCart} search={search} />} />
      <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
    </Routes>
  )
}

export default RouterConfig
