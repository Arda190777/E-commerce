import { useState } from 'react'
import Drawer from '@mui/material/Drawer'
import Divider from '@mui/material/Divider'
import './App.css'
import Header from './components/Header'
import RouterConfig from './config/RouterConfig'

function App() {
  const [cart, setCart] = useState([])
  const [cartOpen, setCartOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [search, setSearch] = useState('')

  const toggleTheme = () => {
    const root = document.documentElement
    setDarkMode(!darkMode)
    if (!darkMode) {
      root.setAttribute('data-theme', 'dark')
    } else {
      root.removeAttribute('data-theme')
    }
  }

  const addToCart = (product, count = 1) => {
    const existing = cart.find(item => item.id === product.id)
    if (existing) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, count: item.count + count } : item
      ))
    } else {
      setCart([...cart, { ...product, count }])
    }
  }

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const updateCount = (id, newCount) => {
    if (newCount < 1) {
      removeFromCart(id)
      return
    }
    setCart(cart.map(item => item.id === id ? { ...item, count: newCount } : item))
  }

  const totalItems = cart.reduce((sum, item) => sum + item.count, 0)
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.count, 0)

  return (
    <div>
      <Header
        cartCount={totalItems}
        onCartOpen={() => setCartOpen(true)}
        darkMode={darkMode}
        onThemeToggle={toggleTheme}
        search={search}
        onSearch={setSearch}
      />

      <RouterConfig addToCart={addToCart} search={search} />

      <Drawer
        anchor="right"
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        PaperProps={{
          sx: {
            width: 380,
            background: 'var(--bg-secondary)',
            color: 'var(--text-primary)',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <div className="drawer-header">
          <h2 className="drawer-title">My Cart</h2>
          <span className="drawer-count">{totalItems} items</span>
        </div>

        <Divider sx={{ borderColor: 'var(--border-color)' }} />

        <div className="drawer-items">
          {cart.length === 0 ? (
            <div className="drawer-empty">
              <span className="drawer-empty-icon">🛒</span>
              <p>Your cart is empty</p>
              <small>Start shopping to add items</small>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="drawer-item">
                <img src={item.image} alt={item.title} className="drawer-item-img" />
                <div className="drawer-item-info">
                  <p className="drawer-item-title">{item.title}</p>
                  <p className="drawer-item-price">${(item.price * item.count).toFixed(2)}</p>
                  <div className="drawer-item-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateCount(item.id, item.count - 1)}
                    >-</button>
                    <span className="qty-number">{item.count}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateCount(item.id, item.count + 1)}
                    >+</button>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >Remove</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <>
            <Divider sx={{ borderColor: 'var(--border-color)' }} />
            <div className="drawer-footer">
              <div className="drawer-total">
                <span>Total</span>
                <span className="drawer-total-amount">${totalAmount.toFixed(2)}</span>
              </div>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </>
        )}
      </Drawer>
    </div>
  )
}

export default App
