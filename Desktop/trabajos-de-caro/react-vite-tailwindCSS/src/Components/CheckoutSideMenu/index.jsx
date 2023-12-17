import { useContext } from 'react'
import { BerryContext } from '../../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {
  const Context = useContext(BerryContext);

  const handleDelete = (id) => {
    const filteredProducts = Context.carritoDeCompras.filter(product => product.id != id)
    Context.setCarritoDeCompras(filteredProducts)
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
      <article className='px-6 overflow-y-scroll'>
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
      
    </aside>
  )
}

export default CheckoutSideMenu