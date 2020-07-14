import React, {Component} from 'react';
import { faCircle, faCheckCircle, faTrashAlt} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from './Todo.module.css';
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';

class Todo extends Component {

    render() {
        const {assignment, checked, _id} = {...this.props.todo};

        const deleteIcon = <div className={classes.DeleteIcon} onClick={() => this.props.deleteTodo(_id)}>
            <FontAwesomeIcon icon={faTrashAlt} />
        </div>;
        const completedIcon = !checked ? <FontAwesomeIcon icon={faCircle} /> : <FontAwesomeIcon icon={faCheckCircle} />;
        const completed =  <div className={classes.Completed} onClick={() => {
            this.props.changeTodoStatus(_id);
        }} > {completedIcon}</div>;

        const checkedAssignment = checked ? <h1 className={classes.Checked}>{assignment}</h1> : <h1>{assignment}</h1>;



        const todo = <div className={classes.Container}>
            {completed}
            {deleteIcon}
            {checkedAssignment}
        </div>

        return todo;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        changeTodoStatus: (todoId) => dispatch(actions.changeTodoStatus(todoId)),
        deleteTodo: (todoId) => dispatch(actions.deleteTodo(todoId))
    }
};

export default connect(null, mapDispatchToProps)(Todo);