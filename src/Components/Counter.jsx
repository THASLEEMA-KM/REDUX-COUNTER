import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount,decrementByAmount } from '../redux/counterSlice'

const Counter = () => {
  const [amount,setAmount] = useState(0)
  const {count} = useSelector(state=>state.counterReducer)
  const dispatch = useDispatch()
  const handleIncrementamount = ()=>
    {
      if(amount)
        {
          dispatch(incrementByAmount(Number(amount)))
        }
        else
        {
          alert("Please enter any amount to proceed!!!")
        }
      
    }
    const handleDecrementamount = ()=>
      {
        if(amount)
          {
            dispatch(decrementByAmount(Number(amount)))
          }
          else
          {
            alert("Please enter any amount to proceed!!!")
          }
        
      }
  return (
    <>
        <div style={{width:'800px'}} className='border border-1 rounded-3'>
          <h3 className='text-center my-4 pt-3'>COUNTER</h3>
          <h1 className='text-center my-3 py-5 text-info fs-1'>{count}</h1>
          <div className='d-flex justify-content-around w-100 align-items-center mt-3'>
              <button onClick={()=>dispatch(decrement())}  className='btn btn-danger fs-5'>DECREMENT</button>
              <button onClick={()=>dispatch(reset())} className='btn btn-warning fs-5'>RESET</button>
              <button onClick={()=>dispatch(increment())} className='btn btn-success fs-5'>INCREMENT</button>
          </div>
          <div className='d-flex justify-content-around m-4'>
          <button onClick={()=>handleDecrementamount()} className='btn btn-primary me-2 fs-5'>DECREMENT WITH NUMBER</button>
            <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='Incremented Counter Amount'/>
            <button onClick={()=>handleIncrementamount()} className='btn btn-primary ms-2 fs-5'>INCREMENT WITH NUMBER</button>
          </div>
        </div>
    </>
  )
}

export default Counter
