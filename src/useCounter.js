import { useState } from "react"
function useCounter(){
    const [counter, setCounter] = useState(0)

    function handleIncrement(){
        setCounter((c) => c + 1)
    }

    function handleDecrement(){
        setCounter((c) => c - 1)
    }

    return {
        counter: counter,
        onIncrement: handleIncrement,
        onDecrement: handleDecrement,
    }
}

export function CustomCounter(){

    const {counter, onIncrement, onDecrement} = useCounter()

    return (
        <div style={{display: "flex", alignItems: "center"}}>
            <button onClick={onDecrement} style={{border: "2px solid black", height:"41px", width: "35px", fontSize: "30px"}} >-</button>
            <h1 style={{border: "2px solid black", width: "41px", textAlign: "center"}}>{counter}</h1>
            <button onClick={onIncrement} style={{border: "2px solid black", height:"41px", width: "35px", fontSize: "30px"}}>+</button>
        </div>
    )
}