import * as actionsTypes from "./actionTypes";
import nextId from "react-id-generator";

export const startAction = () => {
    return {
        type: actionsTypes.START_ACTION,
    };
};

export const finishAction = () => {
    return {
        type: actionsTypes.FINISH_ACTION,
    };
};

export const addNewTodo = (todo) => {
    return {
        todo: {assignment: todo, checked: false, _id: nextId()},
        type: actionsTypes.ADD_NEW_TODO
    };
};


export const newTodoInputChanged = (todo) => {
    return {
        todo: todo,
        type: actionsTypes.NEW_TODO_CHANGE
    };
};

export const changeTodoStatus = (todoId) => {
    return {
        todoId: todoId,
        type: actionsTypes.CHANGE_TODO_STATUS
    };
};

export const deleteTodo = (todoId) => {
    return {
        todoId: todoId,
        type: actionsTypes.DELETE_TODO
    };
};





