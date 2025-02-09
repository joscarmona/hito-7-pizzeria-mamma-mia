import Navbar from './components/Navbar'
import Footer from './components/Footer'

/* PAGES */
import Home from './pages/Home'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import Cart from './pages/Cart'
import Pizza from './pages/Pizza'
import ProfilePage from './pages/ProfilePage'
import NotFound from './pages/NotFound'

/* COMPONENTES Routes & Route */
import { Navigate, Route, Routes } from 'react-router-dom'
import CartProvider from './context/CartContext'

function App() {
  return (
    <section className="layout">
      {/* SIEMPRE SE MOSTRARAN LOS COMPONENTES NAVBAR & FOOTER */}
      <CartProvider>
        {/* *** Navbar *** */}
        <Navbar />
        {/* RUTAS */}
        <Routes>
          {/* *** Home *** */}
          <Route path='/' element={<Home />} />
          {/* *** RegisterPage *** */}
          <Route path='/register' element={<RegisterPage />} />
          {/* *** LoginPage *** */}
          <Route path='/login' element={<LoginPage />} />
          {/* *** Cart *** */}
          <Route path='/cart' element={<Cart />} />
          {/* *** Pizza *** */}
          <Route path='/pizza/p001' element={<Pizza />} />
          {/* *** ProfilePage *** */}
          <Route path='/profile' element={<ProfilePage /> } />
          {/* *** NotFound *** */}
          <Route path='/404' element={<NotFound />} />
          {/* El componente Navigate permite redireccionar una ruta */}
          <Route path='*' element={<Navigate to="/404" />} />
        </Routes>
      </CartProvider>
      {/* *** Footer *** */}
      <Footer />      
    </section>
  )
}

export default App
