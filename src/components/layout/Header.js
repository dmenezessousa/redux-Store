import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import "./layout.css"
const Header = () => {

  const user = useSelector(state => state.user);
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar sx={{backgroundColor: "black"}}>
            <Box sx={{ flexGrow: 1 }}>
              <Link to="/">
                <Typography variant="h6" component="div" 
                sx={{
                  color: "white" 
                  }}>
                  Twitter
                </Typography>
              </Link>
            </Box>
            { 
              user
                ? `Hi, ${user.firstName}`
                : (
                  <Link to="/sign-in">
                    <Button color="inherit">Login</Button>
                  </Link > 
                )
            }
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
