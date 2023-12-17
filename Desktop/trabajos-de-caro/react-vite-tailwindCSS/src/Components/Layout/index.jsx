import PropTypes from 'prop-types' /* importar los props para poder usarlos */

const Layout = ({ children }) => { /* para que no aparezca un error debemos instalar npm i prop-types --save */
Layout.propTypes = {
  children: PropTypes.node.isRequired, /* y esto */
}
  return (
    <div className='flex flex-col items-center mt-20'>
      {children}
    </div>
  )
}

export default Layout