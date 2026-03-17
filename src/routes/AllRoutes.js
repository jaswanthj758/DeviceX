import {Routes, Route} from 'react-router-dom'
import {HomePage, ProductsList, ProductDetail, Login,Register, CartPage, DashboardPage, PageNotFound} from "../pages"
import { Header, Footer } from '../components'
import { ProtectedRoute } from './ProtectedRoute'
import { OrderPage } from "../pages/Order/OrderPage"

 
export const AllRoutes = () => {
  return (
    < div className="bg-white dark:bg-gray-900 static">
    <Header/>
    <Routes >
        <Route path="/" element={<HomePage/>}></Route>
        <Route path="/products" element={<ProductsList/>}></Route> 
        <Route path="/products/:id" element={<ProductDetail/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route> 
        <Route path="/cart" element={<ProtectedRoute> <CartPage/></ProtectedRoute>}></Route> 
        <Route path="/order-summary" element={<ProtectedRoute> <OrderPage/></ProtectedRoute>}></Route> 
        <Route path="/order-summary" element={<ProtectedRoute> <OrderPage/></ProtectedRoute>}></Route> 
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage/></ProtectedRoute>}></Route> 

        <Route path="*" element={<PageNotFound/>}/>
        <Route></Route>

    </Routes>
    <Footer />
    
    </div>
  )
}


