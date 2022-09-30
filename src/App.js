import React from "react"
import { Hello } from "./hello"
import { Welcome } from "./Welcome"

export class App extends React.Component{
    render() {
        return <div><Hello /><Welcome age= {79}/></div>
    }
}

Welcome.defaultProps = {
    name: <strong>Stefania</strong>,
}