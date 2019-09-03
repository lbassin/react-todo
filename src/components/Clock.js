import React from 'react';
import { connect } from "react-redux";
import { fetchDate } from "../redux/actions/date";

const dateStyle = {
    textAlign: 'center'
}

class Clock extends React.Component {
    componentDidMount() {
        setInterval(() => this.props.getDate(), 5000);
    }

    formatDate = (date) => {
        return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    }

    render() {
        return (
            <div style={dateStyle}>
                Test date | {this.formatDate(this.props.date)}
            </div>
        );
    }
}

const mapStateToProps = state => {

    const { date } = state.dateReducer;

    return { date: new Date(date) };
}

const mapDispatchToProps = dispatch => ({
    getDate: () => dispatch(fetchDate(dispatch))
})

export default connect(mapStateToProps, mapDispatchToProps)(Clock);
