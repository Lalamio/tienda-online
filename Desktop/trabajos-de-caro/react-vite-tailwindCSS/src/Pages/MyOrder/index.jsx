import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BerryContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrderCard from '../../Components/OrderCard'

function MyOrder() {
  const Context = useContext(BerryContext);
  return (
      <Layout>
        <div className='flex justify-center items-center relative w-80 mb-6'>
          <Link to='/my-orders' className='absolute left-0'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}   stroke="currentColor" className='w-6 h-6 cursor-pointer'>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
          </Link>
          <h1>My Order</h1>
        </div>
        <article className='flex flex-col w-80'>
          {
            Context.order?.slice(-1)[0].products.map(product => (
              <OrderCard 
                id={product.id}
                key={product.id}
                title={product.title}
                imgUrl={product.images}
                price={product.price}
              />
            ))
          }
        </article>
      </Layout>
  )
}

export default MyOrder