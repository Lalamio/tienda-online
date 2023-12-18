import PropTypes from "prop-types"

const OrderCard = ({ id, title, imgUrl, price, handleDelete }) => {
 let renderIconClose
 if (handleDelete) {
  renderIconClose = <button onClick={() => handleDelete(id)}>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className='close-order-icon w-5 h-5 ml-6 cursor-pointer'>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
</button>
 }

  return (
    <div className='flex justify-between items-center mb-3'>
      <article className='flex items-center gap-2'>
        <figure className='w-20 h-20'>
          <img className='w-full h-full rounded-lg object-cover' src={imgUrl} alt={title} />
        </figure>
        <h2 className='text-sm font-light' >{title}</h2>
      </article>
      <article className='flex items-center gap-2'>
        <p className='text-lg font-medium'>${price}</p>
      {renderIconClose}
      </article>
    </div>
  )
}

OrderCard.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
  handleDelete: PropTypes.func.isRequired
}

export default OrderCard 