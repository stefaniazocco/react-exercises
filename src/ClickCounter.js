import React, { useState } from "react";

export function ClickCounter({initial = 0}) {
    let [counter, setCounter] = useState(initial)

    const countEvents= () => {
        setCounter(counter += 1)
    }
    
    return (<>    
        <h1>You clicked {counter} times</h1>
        <button onClick={countEvents}>Click to count</button>
    </>)
}