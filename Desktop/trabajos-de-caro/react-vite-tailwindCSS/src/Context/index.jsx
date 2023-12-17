import { createContext,useState } from 'react'
import PropTypes from "prop-types"


export const BerryContext = createContext();

export const BerryProvider = ({children}) => {
  const [count, setCount] = useState(0)
  return (
    <BerryContext.Provider value={{
      count,
      setCount
    }}>
    {children}
    </BerryContext.Provider>
  )
}

BerryProvider.propTypes = {
  children: PropTypes.object.isRequired
}
