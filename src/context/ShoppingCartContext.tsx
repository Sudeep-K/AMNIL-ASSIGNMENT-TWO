import React, { createContext, useReducer } from 'react';
import { ShoppingCartReducer } from '../reducer/ShoppingCartReducer';
import ShoppingCart from '../components/ShoppingCart';

type cartItem = {
  id: number,
  quantity: number
}

const AppContext = createContext<{
  state: cartItem[];
  dispatch: React.Dispatch<any>;
  openCart: () => void;
  closeCart: () => void;
  }>({
  state: [],
  dispatch: () => null,
  openCart: () => null,
  closeCart: () => null,
  });

const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(ShoppingCartReducer, []);
  const [isOpen, setIsOpen] = React.useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <AppContext.Provider value={{state, dispatch, openCart, closeCart }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider };