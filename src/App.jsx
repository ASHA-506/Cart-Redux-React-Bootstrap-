import { Route, Routes } from "react-router-dom"
import Footer from "./coponents/Footer"
import Header from "./coponents/Header"
import Products from "./pages/Products"
import Pnf from "./pages/Pnf"
import Wishlist from "./pages/Wishlist"
import Cart from "./pages/Cart"
import View from "./pages/View"

function App() {

  return (
    <>
    <Header/>
    <Routes>
<Route path="/" element={<Products/>}/>
<Route path="/wishlist" element={<Wishlist/>}/>
<Route path="/cart" element={<Cart/>}/>
<Route path="/products/:id" element={<View/>}/>
<Route path="*" element={<Pnf/>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
