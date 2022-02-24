import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signInActionCreator } from '../../reduxStore/userData';
import Layout from '../layout/Layout';
import { useNavigate } from "react-router-dom";
import { Box, Button, TextField } from '@mui/material';

const SignInPage = () => {
  let navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const handleUserLogIn = () => {
    dispatch(signInActionCreator())
  }
  
  if(user){
    return (
      <Layout>
        {navigate("/")}
      </Layout>
    )
  }

  return (
    <Layout>
      <h1>Sign In page</h1>
      <Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="email"
          variant="standard"
        />
      </Box>
      <Box mb={4}>
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          type="password"
        />
      </Box>
      <Box>
        <Button onClick={handleUserLogIn}>log in</Button>
      </Box>
    </Box>
    </Layout>
  )
};

export default SignInPage;