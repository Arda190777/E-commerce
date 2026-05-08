import ProductList from '../components/ProductList'

function Home({ addToCart, search }) {
  return (
    <div>
      <ProductList addToCart={addToCart} search={search} />
    </div>
  )
}

export default Home
