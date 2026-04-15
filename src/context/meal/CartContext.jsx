import {createContext} from 'react'

export const CartContext = createContext({
    items: [],
    totalAmount: 0,
    quantity:0,
     addItem: (item, quantity) => {},
     removeItem: (id) => {}
});