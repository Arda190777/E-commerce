import { useNavigate } from 'react-router-dom'
import '../CSS/Product.css'

function Product({ product, addToCart }) {
  const { id, price, image, title, category, rating } = product
  const navigate = useNavigate()

  const handleAdd = (e) => {
    e.stopPropagation()
    addToCart(product)
  }

  return (
    <div className="card" onClick={() => navigate('/product-details/' + id)}>
      <span className="card-category">{category}</span>
      <div className="card-img-wrapper">
        <img className="card-img" src={image} alt={title} />
      </div>
      <div className="card-body">
        <p className="card-title">{title}</p>
        {rating && (
          <div className="card-rating">
            <span className="star">★</span>
            <span>{rating.rate}</span>
            <span className="rating-count">({rating.count})</span>
          </div>
        )}
        <div className="card-footer">
          <span className="card-price">${price}</span>
          <button className="btn-add-cart" onClick={handleAdd} title="Add to cart">+</button>
        </div>
      </div>
      <div className="card-actions">
        <button className="btn-detail">View Details</button>
      </div>
    </div>
  )
}

export default Product
