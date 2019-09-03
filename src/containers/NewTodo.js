import React from 'react';
import { connect } from "react-redux";
import { createTask } from "../redux/actions/todo";

const InputStyle = {
    width: '60%',
    padding: '8px 12px',
    display: 'block',
    margin: 'auto'
};

class NewTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { text: '' }
    }

    handleEdit = (event) => {
        this.setState({
            text: event.target.value
        });
    }

    handleSubmit = (event) => {
        if (event.keyCode !== 13) {
            return;
        }

        const task = {
            text: this.state.text,
            completed: false
        }

        this.props.createTask(task);
    }

    render() {
        return (
            <React.Fragment>
                <input style={InputStyle} type="text" placeholder="What needs to be done ?"
                       onKeyUp={this.handleEdit}
                       onKeyDown={this.handleSubmit}/>
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTask: (task) => dispatch(createTask(task))
});

export default connect(null, mapDispatchToProps)(NewTodo);
