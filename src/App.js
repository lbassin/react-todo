import React from 'react';
import Header from "./components/header";
import NewTodo from "./containers/NewTodo";
import ListTodo from "./containers/ListTodo";
import Footer from "./components/Footer";

const AppStyle = {
    width: '80%',
    maxWidth: '480px',
    margin: 'auto'
}

function App() {
    return (
        <div style={AppStyle}>
            <Header/>
            <NewTodo/>
            <ListTodo/>
            <Footer/>
        </div>
    );
}

export default App;
