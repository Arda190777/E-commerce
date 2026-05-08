import { useState, useEffect } from 'react'
import axios from 'axios'
import Product from './Product'
import Loading from './Loading'

function ProductList({ addToCart, search }) {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [category, setCategory] = useState('all')

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError('Could not load products. Please try again.')
        setLoading(false)
      })
  }, [])

  const categories = ['all', ...new Set(products.map(p => p.category))]

  const filtered = products.filter(p => {
    const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'all' || p.category === category
    return matchesSearch && matchesCategory
  })

  if (loading) return <Loading />

  if (error) {
    return (
      <div className="error-state">
        <span>⚠️</span>
        <p>{error}</p>
      </div>
    )
  }

  return (
    <div className="product-list-wrapper">
      <div className="category-filters">
        {categories.map(cat => (
          <button
            key={cat}
            className={'category-btn' + (category === cat ? ' active' : '')}
            onClick={() => setCategory(cat)}
          >
            {cat === 'all' ? 'All' : cat}
          </button>
        ))}
      </div>

      <p className="result-count">{filtered.length} products found</p>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <span>🔍</span>
          <p>No products found.</p>
        </div>
      ) : (
        <div className="product-grid">
          {filtered.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductList
