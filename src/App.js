import React from "react"
import { Login } from "./Login"
import { Container } from "./Container"


export class App extends React.Component{
    render() {
        return  <div>
                    <Login />
                    <Container title="this is my title">
            
                    </Container>
                </div>
    }
}

