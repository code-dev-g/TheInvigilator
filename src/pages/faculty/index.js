import React from "react";
import {Box} from "@mui/material";
import { useAuthState } from "react-firebase-hooks/auth";
import { authHandle } from "../../utils/firebase";

const Dashboard = () => { 
    const [ user ] = useAuthState( authHandle );
    if ( user == null ) { 
        return (
            <Box>
                <h1>Please login first</h1>
            </Box>
        );
    }
    console.log( user.uid );
    return (
        <Box>
            <h1>Faculty Dashboard</h1>
        </Box>
    );
};

export default Dashboard;
