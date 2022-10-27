import { createStore } from "redux";
import { counterReducer } from "./CounterReducer";
import { todosReducer } from "./TodosReducer";



export const store = createStore(todosReducer)





