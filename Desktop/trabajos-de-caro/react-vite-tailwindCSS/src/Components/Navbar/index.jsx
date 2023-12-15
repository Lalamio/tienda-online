import { NavLink } from "react-router-dom" /* es un tipo especial de <Link> para saber si su contenido está activo, pendiente o en transición. esta herramienta nos ayudará a asignarle clases a nuevos elementos dependiendo de su estado */

const Navbar = () => {
  let activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className='flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-500'>

    {/* --> navbar izquierdo */}
      <ul className='flex items-center gap-3'>
        <li className='font-semibold text-lg'>
          <NavLink
            to='/'> 
            
              berry 
          </NavLink>
        </li>

        {<li>
          <NavLink
            to='/' 
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              all 
          </NavLink>
        </li>}

        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => (
              isActive ? activeStyle : undefined
            )}>
              clothes 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/teddies'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              teddies
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/accessories'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              accessories 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/dolls'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              dolls 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/blankets'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              blankets
          </NavLink>
        </li>
      </ul>

    {/* --> navbar derecho */}
      <ul className='flex items-center gap-3'>
        <li className='text-black/50'> {/* le quitamos el navlink porque no queremos que nos lleve a ninguna parte */}
          caro@platzi.com
        </li>

        <li>
          <NavLink
            to='/my-order'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              my order
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              my orders 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              my account 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              sign in
          </NavLink>
        </li>

        <li>
          🛒 0
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar