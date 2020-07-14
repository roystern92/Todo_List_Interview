import * as actionTypes from '../actions/actionTypes';
import {updateObject} from '../../shared/Utils/Utils';


const initialState = {
    todos: [],
    newTodo: '',
    loading: null,
    error: null,
    message: null
}


const startAction = (state, action) => {
    return updateObject(state, {error: null, loading: true})
};

const finishAction = (state, action) => {
    return updateObject(state, {error: null, loading: false});
};

const addNewTodo = (state, action) => {
    let updatedTodos = [...state.todos];
    updatedTodos.push(action.todo);
    return updateObject(state, {todos: updatedTodos});
};

const newTodoChanged = (state, action) => {
    return updateObject(state, {newTodo: action.todo});
}

const changeTodoStatus = (state, action) => {
    let updatedTodos = [...state.todos];

    let updatedTodo = updatedTodos.find(todo => todo._id === action.todoId);
    updatedTodo.checked = !updatedTodo.checked;
    return updateObject(state, {todos: updatedTodos});
}

const deleteTodo = (state, action) => {
    let updatedTodos = [...state.todos].filter(todo => todo._id !== action.todoId);
    return updateObject(state, {todos: updatedTodos});
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.START_ACTION:
            return startAction(state, action);
        case actionTypes.FINISH_ACTION:
            return finishAction(state, action);
        case actionTypes.ADD_NEW_TODO:
            return addNewTodo(state, action);
        case actionTypes.NEW_TODO_CHANGE:
            return newTodoChanged(state, action);
        case actionTypes.CHANGE_TODO_STATUS:
            return changeTodoStatus(state, action);
        case actionTypes.DELETE_TODO:
            return deleteTodo(state, action);
        default:
            return state;
    }
}

export default reducer;
