import React, { useState } from "react"


export function Login(){

    const [data, setData] = useState({
        username: "",
        password: "",
        remember: false,
        disabled: true
    })

    const handleInputChange = (event) => {
        const {name, type, value, checked} = event.target

        setData((data) => {
            return {
                ...data,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    const onLogin = (event) => {
        console.log(data.username, data.password, data.remember)
        setData((data) => {
            return {
                ...data,
                username: "",
                password: "",
                remember: false
            }
        })
    }

    const onReset = () => {
        setData((data) => {
            return{
                ...data,
                username: "",
                password: "",
                remember: false
            }

        })
    }

    
        const MyStyle = {
            color: "black",
            backgroundColor: data.password.length >= 8 ? "green" : "red"
        }
        return  <div>
                    <input name="username" value={data.username} onChange={handleInputChange} />
                    <input name="password" type="password" value={data.password} onChange={handleInputChange} />
                    <input name="remember" type="checkbox" checked={data.remember} onChange={handleInputChange} />
                    <button style={MyStyle} disabled={!data.username || !data.password} onClick={onLogin}>Login</button>
                    <button onClick={onReset}>Reset</button>
                </div>
    
}