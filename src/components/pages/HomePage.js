import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../layout/Layout';
import { Box, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import {addItem} from "../../reduxStore/twitterStore";



const HomePage = () => {
    const [inputValue, setInputValue] = useState("");
    const user = useSelector(state => state.user);
    const list = useSelector(state => state.list);
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const listKeys = Object.keys(list);

    return (
        <Layout>
            {user ? 
            <Box >
                <Box
                    sx={{
                        margin: "auto",
                        marginTop: 5,
                        width: 500,
                        maxWidth: '100%',
                    }}
                    >
                    <TextField 
                    fullWidth label="What's on your mind" 
                    id="fullWidth" 
                    value={inputValue}
                    onChange={e => {setInputValue(e.target.value)}}
                    />
                    <Button onClick={() => {
                        if(!inputValue) return;
                        dispatch(addItem(inputValue));
                        setInputValue("");
                    }}>Submit Tweet</Button>
            </Box>
            <Typography 
                sx={{
                    display: "flex", 
                    marginTop: 10,
                    fontSize: 30,
                    fontWeight: "bold",
                    }}>Tweets
                </Typography>
                <Box>
                   { listKeys.map(key => (
                        <Card sx={{ margin: "auto" ,maxWidth: 500, marginTop: 10 }}>
                            <CardContent sx={{display: "flex"}}>
                                <Typography variant="body2" color="text.secondary">
                                          {list[key]} - by {user.firstName}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
        </Box> : navigate("/sign-in")}
        </Layout>
    )
}

export default HomePage;
