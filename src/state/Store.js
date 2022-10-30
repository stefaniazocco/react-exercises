import { combineReducers, createStore } from "redux";
import { counterReducer } from "./CounterReducer";
import { todosReducer } from "./TodosReducer";

const rootReducer = combineReducers({
    counter: counterReducer,
    todos: todosReducer
})

export const store = createStore(rootReducer)





