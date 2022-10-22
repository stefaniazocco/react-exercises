import ReactDOM from "react-dom"
import { App } from "./App"
import { BrowserRouter } from "react-router-dom"
import './index.css'


const root = document.querySelector('#root')
ReactDOM.render(
        < > 
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </>
, root)