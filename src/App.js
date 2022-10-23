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
import { GithubUserList } from "./GithubUserList"
import { CustomCounter } from "./useCounter"
import { CustomLogin } from "./useForm"
import { CarDetails } from "./CarDetails"
import { FilteredList } from "./FilteredList"
import {Routes, Route, Link} from "react-router-dom"
import { Welcome } from "./Welcome"
import { ShowGithubUser } from "./ShowGithubUser"


export class App extends React.Component{
   

    render() {
        return  <div>
                    <nav style={{display: "flex", gap: 30, fontSize: 26}}>
                        <Link to="/" style={{textDecoration: 'none'}}><h2 style={{color: "teal", fontFamily: "fantasy"}}>HOME</h2></Link>
                        <Link to="/counter" style={{textDecoration: 'none'}}><h2 style={{color: "petrol", fontFamily: "fantasy"}}>COUNTER</h2></Link>
                        <Link to="/users" style={{textDecoration: 'none'}}><h2 style={{color: "#D90368", fontFamily: "fantasy"}}>USERS</h2></Link>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Welcome name="Stefania" />} />
                        <Route path="/counter" element={<Counter />} />
                        {/* <Route path="/users/:username" element={<ShowGithubUser />} />  */}
                        <Route path="*" element={<div><h1>Not found</h1></div>} />
                        <Route path="/users" element={<GithubUserList />}>
                                <Route path=":username" element={<ShowGithubUser />} />
                        </Route>
                        
                    </Routes>
                    {/* <InteractiveWelcome />
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
                    <GithubUserList />
                    <CustomCounter />
                    <CustomLogin />
                    <CarDetails initialData={{model: "jeep", year: "2020", color: "black"}}/>
                    <FilteredList /> */}

                    
                </div>
    }
}


