import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';

const HeaderStyle = {
    textAlign: 'center'
}

const Header = ({ text = 'Todo' }) => (
    <AppBar position={"static"}>
        <Toolbar>
            <Typography color={"inherit"}>
                {text}
            </Typography>
        </Toolbar>
    </AppBar>
)

export default Header;
