import ReactDOM from "react-dom"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import './index.css'
import { store } from "./state/Store"
import { decrementCounter, incrementCounter, reset } from "./state/CounterReducer"


const root = document.querySelector('#root')
ReactDOM.render(
        < > 
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </>
, root)

store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(incrementCounter(5))
store.dispatch(decrementCounter(2))
store.dispatch(reset())