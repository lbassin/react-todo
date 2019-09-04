import React from 'react';
import { connect } from "react-redux";
import { createTask } from "../redux/actions/todo";

import { TextField } from "@material-ui/core";

class NewTodo extends React.Component {

    constructor(props) {
        super(props);

        this.state = { text: '', fieldStatus: { text: false }, formValid: false }
    }

    validateField = (name, value) => {
        let isTextValid = false;

        switch (name) {
            case 'text':
                isTextValid = value.length > 4;
                break;
        }

        const formValid = isTextValid;

        this.setState({ fieldStatus: { text: isTextValid }, formValid })
    }

    handleEdit = (event) => {
        this.setState({
            text: event.target.value
        }, () => this.validateField('text', this.state.text));
    }

    handleSubmit = (event) => {
        if (event.keyCode !== 13) {
            return;
        }

        if (!this.state.formValid) {
            return;
        }

        const task = {
            text: this.state.text,
            completed: false
        }

        this.props.createTask(task);
        event.target.value = '';
    }

    render() {
        return (
            <React.Fragment>
                <TextField label="What needs to be done ?" fullWidth
                           onKeyUp={this.handleEdit}
                           onKeyDown={this.handleSubmit}
                           error={this.state.text !== '' && !this.state.fieldStatus.text}
                />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    createTask: (task) => dispatch(createTask(task))
});

export default connect(null, mapDispatchToProps)(NewTodo);
