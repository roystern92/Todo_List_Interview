import React, {Component} from 'react';
import classes from './AddTodo.module.css';
import {connect} from "react-redux";
import * as actions from '../../store/actions/index';
class AddTodo extends Component {

    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            this.props.addNewTodo(this.props.newTodo);
            this.props.newTodoChangeHandler("");

        }
    }

    render() {

        const addTask  = <div className={classes.AddTask}>
            <input type="text" onKeyDown={this._handleKeyDown}
                   value={this.props.newTodo} placeholder="Add New Todo" onChange={(event) => {
                this.props.newTodoChangeHandler(event.target.value);
            }}/>
        </div>;

        return addTask;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        newTodoChangeHandler: (todo) => dispatch(actions.newTodoInputChanged(todo)),
        addNewTodo: (todo) => dispatch(actions.addNewTodo(todo)),
    }
};

const mapStateToProps = (state) => {
    return {
        newTodo: state.newTodo
    }
};



export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);