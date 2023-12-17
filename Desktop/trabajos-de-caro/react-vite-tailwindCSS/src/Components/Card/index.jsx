import PropTypes from "prop-types"
import { useContext } from 'react'
import { BerryContext } from '../../Context'

const Card = ({data}) => { /* indicamos que el componente card va a recibir también información de la API */

  const Context = useContext(BerryContext);

  const showProduct = (productDetail) => {
    Context.OpenProductDetail();
    Context.setProductShown(productDetail);
  }

  const addProducts = (event, productData) => {
    event.stopPropagation()
    Context.setCarritoDeCompras([...Context.carritoDeCompras, productData])
    Context.OpenSideMenu();
    Context.CloseProductDetail()
    Context.setCount(Context.count + 1)
  }

  const renderIcon = (id) => {
    const isInCart = Context.carritoDeCompras.filter(product => product.id === id).length > 0

    if (isInCart) {
      return (
        <button className='check-icon absolute top-0 right-0 bg-black flex justify-center items-center w-6 h-6 rounded-full m-2 text-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </button>
      )

      
    } else {
      return (
        <button 
          className='absolute top-0 right-0  flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-lg'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="add-icon w-5 h-6" 
              onClick={(event) => 
                addProducts(event, data)
              }>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
            </svg>
       </button>
      )
     }
  }

  return (
    <article 
      className='bg-white cursor-pointer w-56 h-60'
      onClick={() => showProduct(data)}
    >
      <figure className='relative mb-2 w-full h-4/5'>
        <span 
          className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black/60 text-sm m-2 px-3 py-0.5' >{data.category.name}
        </span>
        <img className='object-cover h-full w-full rounded-lg' src={data.images[0]} alt='doll'/>
        {renderIcon(data.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">${data.price}</span>
      </p>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card 