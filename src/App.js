import React from 'react';
import Header from "./components/header";
import NewTodo from "./containers/NewTodo";
import ListTodo from "./containers/ListTodo";

const AppStyle = {
    width: '80%',
    maxWidth: '680px',
    margin: 'auto'
}

function App() {
    return (
        <div style={AppStyle}>
            <Header/>
            <NewTodo/>
            <ListTodo/>
        </div>
    );
}

export default App;
