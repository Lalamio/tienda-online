import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BerryContext } from '../../Context'
import Layout from "../../Components/Layout"
import OrdersCards from '../../Components/OrdersCards'

function MyOrders() {
  const Context = useContext(BerryContext);

  return (
      <Layout>
        <div className='flex justify-center items-center relative w-80'>
          <h1>My Orders</h1>
        </div>
        {
          Context.order.map((order, index) => {
            <Link key={index} to={`/my-orders/${order.id}`}>
            <OrdersCards 
              totalPrice={order.totalPrice} 
              totalProduct={order.totalProduct}
            />
            </Link>
          })
        }
      </Layout>
  )
}

export default MyOrders