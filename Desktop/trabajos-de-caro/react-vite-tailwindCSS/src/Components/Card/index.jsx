import PropTypes from "prop-types"
import { useContext } from 'react'
import { BerryContext } from '../../Context'

const Card = ({data}) => { /* indicamos que el componente card va a recibir también información de la API */

  const Context = useContext(BerryContext);
  
  return (
    <article className='bg-white cursor-pointer w-56 h-60'>
      <figure className='relative mb-2 w-full h-4/5'>
        <span 
          className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black/60 text-sm m-2 px-3 py-0.5' >{data.category.name}
        </span> {/* ponemos dos veces el data para primero hacer referencia a la data que usamos de argumento y la segunda para hacer referencia ahora sí a los productos, de lo contrario nos saldrá un error que nos dice que no se ha podido leer las propiedades de name */}
        <img className='object-cover h-full w-full rounded-lg' src={data.images[0]} alt='doll'/>
        <button 
          className='absolute top-0 right-0  flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 text-lg'
          onClick={() => Context.setCount(Context.count + 1)}>
          + 
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.title}</span>
        <span className="text-lg font-medium">{data.price}</span>
      </p>
    </article>
  )
}

Card.propTypes = {
  data: PropTypes.object.isRequired
}

export default Card 