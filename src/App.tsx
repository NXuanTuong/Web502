import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import type { Product } from './types/product'
import ShowInfo from './components/ShowInfo'

function App() {
  const [count, setCount] = useState(0)
  const [info, setInfo] = useState<Product>({
    name: "Product A",
    price: 2000,
    status: true
  })
  return (
    <div className="App">
      <ShowInfo person={info} />
    </div>
  )
}

export default App
