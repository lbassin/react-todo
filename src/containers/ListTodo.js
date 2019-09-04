import React from 'react';
import { connect } from "react-redux";
import { fetchTasks } from "../redux/actions/todo";
import Task from "./Task";
import { List } from "@material-ui/core";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchTasks();
    }


    render() {
        return (
            <List>
                {this.props.tasks.map(task => (
                    <Task task={task} key={task.id}/>
                ))}
            </List>
        );
    }
}

const mapStateToProps = state => {
    const { tasks } = state.todoReducer;

    console.log(tasks);

    return { tasks };
}

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
