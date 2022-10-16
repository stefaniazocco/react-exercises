import React, { useState } from "react";

export function ClickCounter(props, {initial = 0}) {
    let [counter, setCounter] = useState(initial)

    const countEvents= () => {
        setCounter(counter += 1)
    }
    
    props.onCounterChange(counter)
    
    
    return (<>    
        <h1>You clicked {counter} times</h1>
        <button onClick={countEvents}>Click to count</button>
    </>)
}