import { useRoutes, BrowserRouter } from 'react-router-dom'; /* después de instalarlo en la terminal con npm install react-router-dom vamos a importarlo al archivo principal y esto no ayudará a crear rutas para que serán asignadas a cada archivo para que nos manden a una página diferente cuando se lo indiquemos por la url */
/* browserRouter es quien se encargara de mostrar las rutas */
import { BerryProvider } from '../../Context';
import Home from '../Home';
import MyAccount from '../MyAccount';
import MyOrder from '../MyOrder';
import MyOrders from '../MyOrders';
import NotFound from '../NotFound';
import SigIn from '../SignIn';
import Navbar from '../../Components/Navbar';
import './App.css';

const AppRoutes = () => {
 let routes = useRoutes([ /* a esta variable le vamos a encargar el hook, dentro tendrá un array y dentro objetos */
    { path: '/', /* la asignación de la ruta */ element: <Home /> },
    { path: '/my-account', element: <MyAccount /> },
    { path: '/my-order', element: <MyOrder /> },
    { path: '/my-orders', element: <MyOrders /> },
    { path: '/*', element: <NotFound /> },
    { path: '/sign-in', element: <SigIn /> },
  ])

  return routes /* vamos a retornar la ruta donde llamemos a esta función */
}

function App() {
  return (
    <>
      <BerryProvider>
        <BrowserRouter>
        <Navbar />
        <AppRoutes />
        </BrowserRouter>
      </BerryProvider>
     
    </>
  )
}

export default App
