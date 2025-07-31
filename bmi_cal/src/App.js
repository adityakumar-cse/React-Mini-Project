
import { useState } from 'react';
import './App.css';



function App() {


  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

// Logic 1



let calcBmi = (e)=> {

  e.preventDefault();
  if(weight===0 || height===0){
    alert('plesae enter valid value ')
  }
  else{
     const bmi = (parseFloat(weight) / (parseFloat(height) * parseFloat(height)));
    setBmi(bmi.toFixed(1));

// Logic 2

    if(bmi<18.5){
      setMessage('you are underweight')
    }
    else if (bmi>=18.5 && bmi< 24.9){
      setMessage('you are health weigth person')
    }
    else if(bmi>=25 && bmi< 29.9){
      setMessage('you are overweight')
    }
    else if(bmi>=30 && bmi< 34.9){
      setMessage('you are Obesity Class I')
    }
    else if(bmi>=35 && bmi< 39.9){
      setMessage('you are Obesity Class II')
    }
    else{
      setMessage('you are Obesity Class III')
    }
  }
}

// Logic 3
let reload = () => {
  window.location.reload()
}





  return (
    <div className="app">
      <div className='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight(kilogram)</label>
            <input type='text' placeholder='Enter Weight Value' value={weight} 
            onChange={(e)=>setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height(meter)</label>
            <input type='text' placeholder='Enter Height Value' value={height}
             onChange={(e)=>setHeight(e.target.value)}
             />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3> Your BMI is : {bmi}</h3>
            <p> {message}</p>
          </div>
        </form>
      </div>

    </div>
  );
}

export default App;
