import React, { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import Box from './components/Box'

const App = () => {
  const [count,setCount] = useState(0); // 1
  const [products, setProducts] = useState([]); // 1
  useEffect(() => { // 3
    // call api
    async function getProducts(){
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
    }
    getProducts();
    // document.title = `Count : ${count}`
  }, [])
  return <div>{count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      {products.map(item => item.name)}
     </div>
}

export default App
