import React, { useEffect, useState } from 'react'
import ProductCard from './components/ProductCard'
import "./App.css"


const PROD_PER_PAGE = 12
const App = () => {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const getProducts = async() =>{
      try {
        const response = await fetch('https://dummyjson.com/products?limit=194')
        const json = await response.json()
        setProducts(json.products)
      } catch (error) {
        console.log(error);
      }
  }

  useEffect(() => {
     getProducts()
  }, [])

  const total_page = Math.ceil(products.length/PROD_PER_PAGE)
  const start = currentPage*PROD_PER_PAGE
  const end = start+PROD_PER_PAGE
  
  return (
    <div className='pagination'>
        <h1>Pagination</h1>
        <div className='pagination-container'>
        {[...Array(total_page).keys().map((n)=><button onClick={()=>setCurrentPage(n)}>{n}</button>)]}
        </div>
        <div className="card-container">
          {
            products.slice(start,end).map((prod)=> <ProductCard key={prod.id} image={prod.thumbnail} title={prod.title}/>)
          }
         
        </div>
    </div>
  )
}

export default App
