import React from 'react';
import { connect } from "react-redux";
import { deleteCompleted } from "../redux/actions/todo";

import { Paper, Button, Typography } from '@material-ui/core';

const style = {
    Paper: {
        padding: '12px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}


class Footer extends React.PureComponent {
    clearCompleted = () => {
        this.props.clearCompleted();
    }

    render() {
        const { count } = this.props;

        return (
            <Paper style={style.Paper}>
                <Typography>{count} {count > 1 ? 'tasks' : 'task'} left</Typography>
                <Button onClick={this.clearCompleted}>Clear completed</Button>
            </Paper>
        );
    }
}

const mapStateToProps = state => {

    const { tasks } = state.todoReducer;

    return { count: tasks.filter(task => !task.completed).length };
}

const mapDispatchToProps = dispatch => ({
    clearCompleted: () => dispatch(deleteCompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
