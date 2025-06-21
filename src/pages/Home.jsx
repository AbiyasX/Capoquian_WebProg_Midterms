import { Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

// styles
import './Home.css'

export default function Home({products}) {

  return (
    <div className="home">
      <h2>Shoes</h2>      
      {products && products.map(product => (
        <div key={product.id} className="card">
          <h3>{product.product_Name}</h3>
          <img src={product.imageURL}/>
          <p><strong>Price</strong> {product.price}</p>
          <Link to={`/products/${product.id}`}>Read More...</Link>
        </div>
      ))}
    </div>
  )
}
