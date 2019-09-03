import React from 'react';
import { connect } from "react-redux";
import { fetchTasks } from "../redux/actions/todo";
import Task from "./Task";

class ListTodo extends React.Component {
    constructor(props) {
        super(props);

        this.props.fetchTasks();
    }


    render() {
        return (
            <div>
                { this.props.tasks.map((task, index) => (
                    <Task task={task} key={index} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    const { tasks } = state.todoReducer;

    return { tasks };
}

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasks())
})

export default connect(mapStateToProps, mapDispatchToProps)(ListTodo);
