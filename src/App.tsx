import React, {useEffect, useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {setCountAC} from "./bll/count-reducer";

function App() {
    const [value,setValue]=useState<number>(0)
    const count=useSelector<AppStateType,number>(state => state.value.count)
    const dispatch=useDispatch()
    const setClickHandler=()=>{
        dispatch(setCountAC())
    }
    useEffect(()=>{
       // dispatch(getCountThunk())

    },[])



    return (
    <div className="App">
        <div>{count}</div>
   <button onClick={setClickHandler}>Send</button>
    </div>
  );
}

export default App;
