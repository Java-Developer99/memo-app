import React from 'react'
import Display from './Display';
import { useState } from 'react';

function Counter() {
  let [counter,setCounter]=useState(0)
   return (
     <div>
       <button onClick={()=>{setCounter(counter+1)}}>{counter}</button>
       <Display/>
       </div>
   );
}

export default Counter
