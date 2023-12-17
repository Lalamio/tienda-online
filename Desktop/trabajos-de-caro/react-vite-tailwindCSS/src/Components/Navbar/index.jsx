import { NavLink } from "react-router-dom" /* es un tipo especial de <Link> para saber si su contenido está activo, pendiente o en transición. esta herramienta nos ayudará a asignarle clases a nuevos elementos dependiendo de su estado */
import { useContext } from 'react'
import { BerryContext } from '../../Context'

const Navbar = () => {

  const Context = useContext(BerryContext);
  let activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0  w-full py-5 px-8 text-sm font-500'>

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
            to='/electronics'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              electronics
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              toys 
          </NavLink>
        </li>

        <li>
          <NavLink
            to='/others'
            className={({ isActive }) =>
              isActive ? activeStyle : undefined
            }>
              others 
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
          🛒 {Context.count}
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar