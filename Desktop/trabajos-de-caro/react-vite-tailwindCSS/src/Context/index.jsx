import { createContext, useState } from 'react'
import PropTypes from "prop-types"


export const BerryContext = createContext();

export const BerryProvider = ({children}) => {
  /* contador de productos en el carrito */
  const [count, setCount] = useState(0)

  /* para mostrar los detalles del producto al que le hemos hecho click */
  const [productShown, setProductShown] = useState({});

  /* estado para añadir productos al carrito de compras */
  const [carritoDeCompras, setCarritoDeCompras] = useState([]);

  const [order, setOrder] = useState([]);

  /* para abrir y cerrar la sección de los detalles del producto */
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const OpenProductDetail = () => setIsProductDetailOpen(true);
  const CloseProductDetail = () => setIsProductDetailOpen(false);

  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const OpenSideMenu = () => setIsSideMenuOpen(true);
  const CloseSideMenu = () => setIsSideMenuOpen(false);
  console.log(isSideMenuOpen);

  return (
    <BerryContext.Provider value={{
      count,
      setCount,
      OpenProductDetail,
      CloseProductDetail,
      isProductDetailOpen,
      productShown,
      setProductShown,
      carritoDeCompras,
      setCarritoDeCompras,
      isSideMenuOpen,
      setIsSideMenuOpen,
      CloseSideMenu,
      OpenSideMenu,
      order,
      setOrder
    }}>
    {children}
    </BerryContext.Provider>
  )
}

BerryProvider.propTypes = {
  children: PropTypes.object.isRequired
}
