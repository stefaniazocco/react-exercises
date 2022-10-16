import React, { useEffect, useState } from "react";
import { CounterDisplay } from "./CounterDisplay";

export function Counter({initialValue = 0}){
    const [count, setCount] = useState(initialValue)

useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1)
    }, 1000)

    return () => clearInterval(interval)
    
}, [count])
    
    return (<CounterDisplay displayCount= {count}/>)
}