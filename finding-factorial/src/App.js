import { useState } from 'react';
import './App.css';

function App() {
const[inputVal,setInputVal]=useState('');
const[showFactorial,setShowFactorial]=useState(false);
const[fact,showFact]=useState('')

const findFactorial=()=>{
  let factorial=1;
  for(let i=1; i<=inputVal ; i++){
    factorial=factorial*i;
  }
  return factorial;
}

const handleForm=(e)=>{
e.preventDefault();
const regex= /[^0-9]/g;
if(!inputVal || regex.test(inputVal)){
  alert("Enter valid number");
  return;
}
  setShowFactorial(true);
  const factorial=findFactorial();
  console.log(factorial);
  showFact(factorial)
}


  return (
    <div className="App">
      <form onSubmit={handleForm}>
      <input
      type='text'
       placeholder='Enter number'
       value={ inputVal}
       onChange={(e)=>{
        setShowFactorial(false)
        setInputVal(e.target.value)
      }}
      />
      <button type='submit'>Submit</button>
      </form>
     {showFactorial ? <div className='factDisplay'> {`Factorial of  number ${inputVal} is : ${fact}`} </div> : " "} 
    </div>
  );
}

export default App;
