import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [value,setValue]=useState<number>(0)
    useEffect(()=>{
        //debugger
        let valueLocalStorage=localStorage.getItem('countervalue')
        if(valueLocalStorage){
            let newvalue=JSON.parse(valueLocalStorage)
            setValue(newvalue)
        }
    },[])

    useEffect(()=>{
        let value2=localStorage.getItem('countervalue')
        console.log(value2)
        localStorage.setItem('countervalue',JSON.stringify(value))
    },[value])

  const setClickHandler=()=>{
        setValue(value+1)
  }
    return (
    <div className="App">
        <div>{value}</div>
   <button onClick={setClickHandler}>Send</button>
    </div>
  );
}

export default App;
