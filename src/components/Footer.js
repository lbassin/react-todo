import React from 'react';
import { connect } from "react-redux";

const FooterStyle = {
    borderTop: '1px solid #000',
    height: '32px'
}

class Footer extends React.PureComponent {
    render() {
        const { count } = this.props;

        return (
            <div style={FooterStyle}>
                {count} tasks
            </div>
        );
    }
}

const mapStateToProps = state => {

    const { tasks } = state.todoReducer;

    return { count: tasks.filter(task => !task.completed).length };
}

export default connect(mapStateToProps, null)(Footer);
