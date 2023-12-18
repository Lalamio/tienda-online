import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BerryContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'

const CheckoutSideMenu = () => {
  const Context = useContext(BerryContext);

  const handleDelete = (id) => {
    const filteredProducts = Context.carritoDeCompras.filter(product => product.id != id)
    Context.setCarritoDeCompras(filteredProducts)
  }

  const handleCheckout = () => {
    const ordersToAdd = {
      date: '18.12.23',
      products: Context.carritoDeCompras,
      totalProducts: Context.carritoDeCompras.length,
      totalPrice: totalPrice(Context.carritoDeCompras)
    }

    Context.setOrder([...Context.order, ordersToAdd])
    Context.setCarritoDeCompras([]);
  }

  return (
    <aside 
      className={`${Context.isSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>
            My order
        </h2>
        <button onClick={() =>
          Context.CloseSideMenu()}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='svg w-6 h-6 cursor-pointer'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <article className='px-6 overflow-y-scroll flex-1'>
        {
          Context.carritoDeCompras.map(product => (
            <OrderCard 
              id={product.id}
              key={product.id}
              title={product.title}
              imgUrl={product.images}
              price={product.price}
              handleDelete={handleDelete}
            />
          ))
        }
      </article>
      <div className='px-12 mb-6 '>
        <p className='flex justify-between'>
          <span>Total: </span>
          <span 
            className='font-semibold'>
              ${totalPrice(Context.carritoDeCompras)}
          </span>
        </p>
          <Link to='/my-orders/last'>
            <button className='w-full bg-black py-3 text-white rounded-lg mt-5' onClick={() => handleCheckout()}>Checkout</button>
          </Link>
      </div>
    </aside>  
  )
}

export default CheckoutSideMenu