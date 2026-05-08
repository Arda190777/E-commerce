import Badge from '@mui/material/Badge'
import { CiShoppingBasket, CiLight } from 'react-icons/ci'
import { IoMdMoon } from 'react-icons/io'
import '../CSS/Header.css'

function Header({ cartCount, onCartOpen, darkMode, onThemeToggle, search, onSearch }) {
  return (
    <header className="header">
      <div className="header-logo">
        <span className="logo-text">🛍️ ShopReact</span>
      </div>

      <div className="header-search">
        <span className="search-icon">🔍</span>
        <input
          className="search-input"
          type="text"
          placeholder="Search for products..."
          value={search}
          onChange={e => onSearch(e.target.value)}
        />
      </div>

      <div className="header-actions">
        <button className="icon-btn" onClick={onThemeToggle} title="Toggle theme">
          {darkMode ? <IoMdMoon /> : <CiLight />}
        </button>
        <button className="icon-btn" onClick={onCartOpen} title="Cart">
          <Badge badgeContent={cartCount} color="error" max={99}>
            <CiShoppingBasket />
          </Badge>
        </button>
      </div>
    </header>
  )
}

export default Header
