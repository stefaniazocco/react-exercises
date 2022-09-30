import React from "react"
import { Hello } from "./Hello"
import { Welcome } from "./Welcome"

export class App extends React.Component{
    render() {
        return <div><Hello /><Welcome age={29}/></div>
    }
}

Welcome.defaultProps = {
    name: "Stefania",
}