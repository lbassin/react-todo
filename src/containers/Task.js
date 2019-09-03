import React from 'react';
import Icon from "@material-ui/core/Icon";

const TaskStyle = {
    border: '1px solid #000',
    width: '60%',
    margin: '12px auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    lineHeight: '32px'
};

const CompletedStyle = {
  color: 'red',
  textDecoration: 'line-through'
};

class Task extends React.Component {

    constructor(props) {
        super(props);

        this.state = {...this.props.task}
    }

    toggleStatus = () => {
        this.setState({
            completed: !this.state.completed
        })
    }

    render() {
        const { text, completed } = this.state;

        return (
            <div style={TaskStyle}>
                <input type="checkbox" onClick={this.toggleStatus}/>
                <span style={completed ? CompletedStyle : null}>{text}</span>
                <Icon>delete_outline</Icon>
            </div>
        );
    }
}

export default Task;
