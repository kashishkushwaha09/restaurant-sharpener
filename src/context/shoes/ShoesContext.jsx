import {createContext} from 'react'

export const ShoesContext = createContext({
    items: [],
    totalAmount: 0,
    totalQuantity:0,
     addItem: (item, quantity) => {},
     removeItem: (id) => {}
});