import React from 'react';
import { connect } from "react-redux";
import { deleteCompleted } from "../redux/actions/todo";

const FooterStyle = {
    borderTop: '1px solid #000',
    height: '32px',
    display: 'flex',
    justifyContent: 'space-between'
}

const ActionStyle = {
    display: 'inline-block'
}

const ClearStyle = {
    cursor: 'pointer'
}

class Footer extends React.PureComponent {
    clearCompleted = () => {
        this.props.clearCompleted();
    }

    render() {
        const { count } = this.props;

        return (
            <div style={FooterStyle}>
                <p style={ActionStyle}>{count} {count > 1 ? 'tasks' : 'task'} left</p>
                <p style={{ ...ActionStyle, ...ClearStyle }} onClick={this.clearCompleted}>Clear completed</p>
            </div>
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
