import { AppBar, Typography, Button } from '@material-ui/core'
import React from 'react'

const NavBar = () => {
    return (
        <AppBar position="static">
            <Typography variant="h6" >
                Contact App
            </Typography>
            <Button color="secondary" variant="contained" >Logout</Button>
        </AppBar>
    )
}

export default NavBar
