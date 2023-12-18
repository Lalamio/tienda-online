import PropTypes from "prop-types"

const OrdersCard = ({ totalPrice, totalProduct }) => {

  return (
    <div className='flex justify-between items-center mb-3 border-black'>
      <p>
        <span>15.12.2023</span>
        <span>{totalProduct}</span>
        <span>{totalPrice}</span>
      </p>
    </div>
  )
}

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProduct: PropTypes.object.isRequired,
}

export default OrdersCard 