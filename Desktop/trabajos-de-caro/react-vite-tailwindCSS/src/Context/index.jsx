import { CreateContext } from 'react'
import PropTypes from "prop-types"


const BerryContext = CreateContext();

export const BerryProvider = ({children}) => {
  return (
    <BerryContext.Provider>
    {children}
    </BerryContext.Provider>
  )
}

BerryProvider.propTypes = {
  children: PropTypes.object.isRequired
}
