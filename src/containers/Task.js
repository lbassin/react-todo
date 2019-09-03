import React from 'react';
import Icon from "@material-ui/core/Icon";
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions/todo";

const TaskStyle = {
    border: '1px solid #000',
    width: '100%',
    margin: '12px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: '32px',
    wordBreak: 'break-all'
};

const CompletedStyle = {
    color: 'red',
    textDecoration: 'line-through'
};

class Task extends React.Component {
    constructor(props) {
        super(props);

        this.state = { ...this.props.task }
    }

    toggleStatus = () => {
        const task = { ...this.state, completed: !this.state.completed };
        this.setState({ ...task });

        this.props.update(task);
    }

    handleDelete = () => {
        this.props.delete(this.state.id)
    }

    render() {
        const { text, completed } = this.state;

        return (
            <div style={TaskStyle}>
                <input type="checkbox" onChange={this.toggleStatus} checked={completed}/>
                <span style={completed ? CompletedStyle : null}>{text}</span>
                <Icon onClick={this.handleDelete}>delete_outline</Icon>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    update: (task) => dispatch(updateTask(task)),
    delete: (id) => dispatch(deleteTask(id))
})

export default connect(null, mapDispatchToProps)(Task);
