import React from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom' // Correct import for react-router-dom
import { increment } from '../store/Slice/counterSlice'

const Home = () => {
  const products = useSelector((state) => state.products.items)
  const loading = useSelector((state) => state.products.loading)
  const isLoggedIn = useSelector((state)=>state.login.login)
  const dispatch = useDispatch();
  const handleClick = (prod)=>{
    dispatch(increment(prod))
  }
  console.log('products:', products)

  return (
    <div className='flex flex-wrap gap-4 p-5 items-center align-middle justify-center'>
      {loading ? (
        <p>Loading products...</p>
      ) : 
      Array.isArray(products) && products.length > 0 ? (
        products.map((item) => (
          <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700" key={item.id}>
            <Link to={`/product/${item.id}`}> {/* Use a proper route */}
              <img className="p-8 rounded-t-lg size-110 " src={item.image} alt="product image" />
            </Link>
            <div className="px-5 pb-5"> 
              <Link to={`/product/${item.id}`}> {/* Ensure the link directs to an actual product route */}
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
              </Link>
              <div className="flex items-center mt-2.5 mb-5">
                <div className="flex items-center space-x-1 rtl:space-x-reverse">
                  {[...Array(Math.floor(item.rating))].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < item.rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'}`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                    </svg>
                  ))}
                </div>
              </div>
              <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-sm dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.price}</span>
                <button 
                  type='button'
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 cursor-pointer"
                  disabled= {!isLoggedIn}
                  onClick={()=>handleClick(item)}
                  >
                    Add to cart
                </button>

                  
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No products available.</p>
      )}
    </div>
  )
}

export default Home
