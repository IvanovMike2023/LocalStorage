import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {getCountThunk, setCountAC, setCountThunk} from "./bll/count-reducer";

function App() {
    const [value,setValue]=useState<number>(0)
    const count=useSelector<AppStateType,number>(state => state.tasks.count)
    const dispatch=useDispatch()
    const setClickHandler=()=>{
        dispatch(setCountThunk())
    }
    useEffect(()=>{
        dispatch(getCountThunk())

    },[])

    // useEffect(()=>{
    //     let value2=localStorage.getItem('countervalue')
    //     localStorage.setItem('countervalue',JSON.stringify(value))
    // },[value])


    return (
    <div className="App">
        <div>{count}</div>
   <button onClick={setClickHandler}>Send</button>
    </div>
  );
}

export default App;
