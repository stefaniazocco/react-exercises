import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser"

export function GithubUserList() {

    const [input, setInput] = useState('')
    const [array, setArray] = useState([])

    function handleInputChange(event) {
        const value = event.target.value
        setInput(value)
    }

    function handleButton() {
        setArray([...array, input])
    }
    useEffect(() => {
        console.log(array)
    }, [array])
  

    return (
        <>
            <label>
                Add a github user:
                <input name="input" value={input} onChange={handleInputChange} />
            </label>
            <button onClick={handleButton}>search</button>
            <div>
            {array.map((user, index) => (
                    <GithubUser key={index} username={user}/>
                ))}
            </div>

        </>
    )
}