import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { CiCirclePlus, CiCircleMinus } from 'react-icons/ci'
import Loading from './Loading'

function ProductDetails({ addToCart }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [count, setCount] = useState(1)
  const [added, setAdded] = useState(false)

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/' + id)
      .then(res => {
        setProduct(res.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [id])

  const handleAdd = () => {
    addToCart(product, count)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  if (loading) return <Loading />

  if (!product) {
    return <div className="details-loading"><p>Product not found.</p></div>
  }

  const { price, image, title, description, category, rating } = product

  return (
    <div className="details-wrapper">
      <button className="back-btn" onClick={() => navigate('/')}>
        Back to Shopping
      </button>

      <div className="details-content">
        <div className="details-img-wrapper">
          <img src={image} alt={title} className="details-img" />
        </div>

        <div className="details-info">
          {category && <span className="details-category">{category}</span>}
          <h1 className="details-title">{title}</h1>
          {rating && (
            <div className="details-rating">
              <span className="star">★</span>
              <span>{rating.rate}</span>
              <span className="rating-count">({rating.count} reviews)</span>
            </div>
          )}
          <p className="details-description">{description}</p>
          <div className="details-price">${price}</div>

          <div className="details-qty">
            <CiCircleMinus className="qty-icon" onClick={() => setCount(c => Math.max(1, c - 1))} />
            <span className="qty-value">{count}</span>
            <CiCirclePlus className="qty-icon" onClick={() => setCount(c => c + 1)} />
          </div>

          <button
            className={`btn-add-basket${added ? ' added' : ''}`}
            onClick={handleAdd}
          >
            {added ? 'Added to Cart!' : 'Add to Cart'}
          </button>

          <p className="details-total">
            Total: <strong>${(price * count).toFixed(2)}</strong>
          </p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
