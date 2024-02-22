import "./App.css";
import { useState,useMemo } from "react";

function App() {
  const [inputVal, setInputVal] = useState("");
  const [showReverse, setShowReverse] = useState("");


   const reversedVal=useMemo(()=>{
    let reversed = "";
    for (let i = inputVal.length - 1; i >= 0; i--) {
      reversed = reversed + inputVal[i];
    }
    return reversed;
   },[inputVal])

   // use below code if the data is number, data comes from input is string
//  [ let reversed=0;
//        let rem;
//        let input=inputVal;
//        for(let i=(inputVal.length-1) ; i>=0 ; i--){
//             rem=input%10;
//             input=input/10;
//           reversed = (reversed*10) + rem;
//        }
// ]

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(typeof inputVal);
    setShowReverse('')
    if (!inputVal || inputVal.length <= 1) {
      alert("enter value length more than 1");
      return;
    }
   
    setShowReverse(reversedVal);
  };


  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter value to reverse"
          value={inputVal}
          onChange={(e) => {
            setShowReverse('')
            setInputVal(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <h3>{`reversed data of ${inputVal} is : ${showReverse}`}</h3>
    </div>
  );
}

export default App;
