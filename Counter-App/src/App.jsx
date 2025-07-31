import { useState } from 'react'


import './App.css'

function App() {
  const [counter, setCounter] = useState(0)

  const Increase = ()=>{
    setCounter(counter=>counter+1)
  }
  const Decrease = ()=>{
    setCounter(counter=>counter-1)
  }
let reload = () => {
  window.location.reload()
}

  return (
    <>
      <div className='container'>
      <div className='box'>
        <h1> {counter} </h1>
      </div>
      <div className='btn'>
        <button onClick={Increase}>+</button>
        <button onClick={Decrease}>-</button>
        <button onClick={reload}>Reload</button>

      </div>
      </div>
    </>
  )
}

export default App
