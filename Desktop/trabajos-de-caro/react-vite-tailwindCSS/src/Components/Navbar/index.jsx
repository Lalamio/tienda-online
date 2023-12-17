import { NavLink } from "react-router-dom" /* es un tipo especial de <Link> para saber si su contenido está activo, pendiente o en transición. esta herramienta nos ayudará a asignarle clases a nuevos elementos dependiendo de su estado */
import { useContext } from 'react'
import { BerryContext } from '../../Context'
import './styles.css'

const Navbar = () => {

  const Context = useContext(BerryContext);
  let activeStyle = 'underline underline-offset-4'
  
  return (
    <nav className='flex justify-between items-center fixed z-10 top-0  w-full py-5 px-8 text-sm font-500 bg-white'>

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

        <li className='flex'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
          </svg>
          <div className='contador'>
          {Context.count}
          </div>
        </li>
        
      </ul>
    </nav>
  )
}

export default Navbar