import React from 'react';
import Header from "./components/Header";
import NewTodo from "./containers/NewTodo";
import ListTodo from "./containers/ListTodo";
import Footer from "./components/Footer";
import Clock from "./components/Clock";

import { Grid, Paper } from "@material-ui/core";

const style = {
    Container: {
        width: '80%',
        margin: '12px auto',
        maxWidth: '600px'
    },
    Paper: {
        padding: '12px'
    }
}

function App() {
    return (
        <React.Fragment>
            <Header/>
            <Grid container style={style.Container}>
                <Grid item sm={12}>
                    <Paper style={style.Paper}>
                        <NewTodo/>
                    </Paper>
                </Grid>

                <Grid item sm={12}>
                    <ListTodo/>
                </Grid>

                <Grid item sm={12}>
                    <Footer/>
                </Grid>
            </Grid>



            <hr/>

            <Clock/>
        </React.Fragment>
    );
}

export default App;
