import './App.css'
import Layout from './components/Layout/Layout'
import Home from './pages/Home'
import CartProvider from './context/meal/CartProvider'
import ShoesProvider from './context/shoes/ShoesProvider'
import Shoes from './pages/Shoes'

function App() {
  

  return (
    <ShoesProvider>
    
        <Shoes />
    
    </ShoesProvider>
    
  )
}

export default App
