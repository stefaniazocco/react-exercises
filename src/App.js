import React from "react"
import { Login } from "./Login"
import { Container } from "./Container"
import { TodoList } from "./TodoList"
import { LanguageComponent} from "./LanguageContext"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Sum } from "./Sum"
import { ClickCounter } from "./ClickCounter"
import { Counter } from "./Counter"
import { GithubUser } from "./GithubUser"



export class App extends React.Component{

    render() {
        return  <div>
                    <InteractiveWelcome />
                    <Login />
                    <Container title="this is my title">
                        <TodoList render = { (items, removeItem) => {
                            return (
                                items.map((todo, index) => (
                                    <div key={index}>
                                        {todo}
                                        <button key= {index} onClick={() => {removeItem(todo)}}>remove</button>
                                    </div>
                                ))
                            )
                            }
                        } />
                    </Container>
                    <LanguageComponent />
                    <ClickCounter onCounterChange = {(counter)=> {
                        return console.log("The counter is now" + counter)
                    }}/>
                    <Sum />
                    <Counter initialValue={0} />
                    <GithubUser username="stefaniazocco" />
                    
                </div>
    }
}


