const defaultState = []

const ADD = "TODOS@ADD"
const REMOVE = "TODOS@REMOVE"
const EDIT = "TODOS@EDIT"

export function addTodo(id, title, completed) {
    return {
        type: ADD,
        payload: {id, title, completed}
    }
}
export function removeTodo(id) {
    return {
        type: REMOVE,
        payload: id
    }
}
export function editTodo(id, title, completed) {
    return {
        type: EDIT,
        payload: {id, title, completed}
    }
}


export function todosReducer(state = defaultState, action){
    switch(action.type){
        case ADD: {
            return [...state, action.payload]
        }
        case REMOVE: {
            return state.filter(todo => todo.id !== action.payload)
        }        
        case EDIT: {
            return state.map(todo =>{
                if(todo.id === action.payload.id) {
                    return {...todo, ...action.payload}
                }
                return todo
            })
        }
        default : {
            return state
        }
    }
}