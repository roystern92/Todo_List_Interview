import classes from "./TodoList.module.css";
import React, {Component} from "react";

import nextId from "react-id-generator";

import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
//
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus} from "@fortawesome/free-solid-svg-icons";

import AddTodo from '../AddTodo/AddTodo';

import Todo from '../Todo/Todo';

class TodoList extends Component {


    render() {


        const addIcon = <div className={classes.AddIcon} onClick={() => {
            this.props.addNewTodo(this.props.newTodo);
            this.props.newTodoChangeHandler("");
        }}>
            <FontAwesomeIcon icon={faPlus} />
        </div>;
        const title = <div className={classes.Top}>
            <h1 className={classes.Title}>TO-DO LIST</h1>
            {addIcon}
        </div>;


        const todos = <div className={classes.Todos}>
            {this.props.todos.map(
                (todo) => {
                    return<Todo key={ nextId()} todo={todo}/>
                }
            )}
        </div>


        let todoList = (
            <div className={classes.TodoList}>
                <div className={classes.List}>
                    {title}
                    <AddTodo/>
                    {todos}
                </div>
            </div>
        );


        return todoList;
    }
}


const mapDispatchToProps = (dispatch) => {
    return {

        addNewTodo: (todo) => dispatch(actions.addNewTodo(todo)),
        newTodoChangeHandler: (todo) => dispatch(actions.newTodoInputChanged(todo))
    }
};

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        newTodo: state.newTodo
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(TodoList);