'use client'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {increment,decrement} from '../../redux_toolkit/slice/page'

const counter = () => {
    const counterValue = useSelector((state) =>state.counter.value);
    const dispatch = useDispatch();

  return (
    <div>
        <div className='center'>
            <button className='btn' onClick={()=>dispatch(increment())}>Increment</button>
            Count : {counterValue}
            <button className='btn' onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    </div>
  )
}

export default counter