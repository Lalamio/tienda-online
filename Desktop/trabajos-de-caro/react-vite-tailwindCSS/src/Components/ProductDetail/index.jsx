import { useContext } from 'react'
import { BerryContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {
  const Context = useContext(BerryContext);
  console.log('PRODUCT TO SHOW:', Context.productShown);
  return (
    <aside 
      /* si el estado de isProductDetailOpen es true, entonces se le aplicará la clase flex, pero si es false, entonces se le aplicará hidden */
      className={`${Context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-xl'>
            Details
        </h2>
        <button onClick={() => {
          Context.CloseProductDetail()
          Context.CloseSideMenu()
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='svg w-6 h-6 cursor-pointer'>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <figure className='px-6'>
        <img 
          className='w-full h-full rounded-lg' 
          src={Context.productShown.images} 
          alt={Context.productShown.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-2'>${Context.productShown.price}</span>
        <span className='font-medium text-md'>${Context.productShown.title}</span>
        <span className='font-light text-sm'>${Context.productShown.description}</span>
      </p>
    </aside>
  )
}

export default ProductDetail