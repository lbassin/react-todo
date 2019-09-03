import React from 'react';
import Header from "./components/Header";
import NewTodo from "./containers/NewTodo";
import ListTodo from "./containers/ListTodo";
import Footer from "./components/Footer";
import Clock from "./components/Clock";

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

            <hr/>

            <Clock/>
        </div>
    );
}

export default App;
