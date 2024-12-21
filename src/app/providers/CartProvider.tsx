import { createContext, PropsWithChildren, useContext } from 'react'

const CartContext = createContext({})

const CartProvider = ({children}: PropsWithChildren) => {
  return(
    <CartContext.Provider value={{item: [], onAddItem: ()=>{}}}>
    {children}
    </CartContext.Provider>
  )
}

export default CartProvider;


