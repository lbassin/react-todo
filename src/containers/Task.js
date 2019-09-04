import React from 'react';
import { connect } from "react-redux";
import { deleteTask, updateTask } from "../redux/actions/todo";

import { ListItem, ListItemIcon, ListItemText, Checkbox, ListItemSecondaryAction, IconButton } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/DeleteOutlined';

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
            <ListItem>
                <ListItemIcon>
                    <Checkbox onChange={this.toggleStatus} checked={completed} edge={"start"}/>
                </ListItemIcon>
                <ListItemText style={completed ? CompletedStyle : null}>
                    {text}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton onClick={this.handleDelete}>
                        <DeleteIcon/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    update: (task) => dispatch(updateTask(task)),
    delete: (id) => dispatch(deleteTask(id))
})

export default connect(null, mapDispatchToProps)(Task);
