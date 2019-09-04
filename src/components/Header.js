import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const HeaderStyle = {
    textAlign: 'center'
}

const Header = () => (
    <AppBar position={"static"}>
        <Toolbar>
            <Typography color={"inherit"}>
                Todo
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header;
