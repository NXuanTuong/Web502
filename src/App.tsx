import { useEffect, useState } from 'react'
import { list } from "./api/product"
import './App.css'
import { NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import AboutPage from './pages/AboutPage'
import WebsiteLayout from './pages/layouts/WebsiteLayout'

function App() {
  const [products, setProduct] = useState<{_id: Number, name: String}[]>([])

  useEffect(() => {
    const getProducts = async () => {
      const {data} = await list();
      console.log(data);
      setProduct(data)
    }
    getProducts();
  }, [])
  return (
    <div className="App">
      <header>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/product">Product Page</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Page</NavLink>
          </li>
        </ul>
      </header>

      <main>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element={<HomePage />}></Route> //index mặc định page sẽ nhảy vào
            <Route path='product' element={<ProductPage />}></Route> path truy cập vào 
          </Route>
          <Route path='/product' element={<ProductPage />}></Route>
          <Route path='/about' element={<AboutPage />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
