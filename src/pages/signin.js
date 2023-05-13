import React from "react";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authHandle, storeHandle } from "../utils/firebase";
import { signInWithEmailAndPassword, signOut, sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/router';
import { Box, Typography, Button, Select, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { doc, getDoc } from "firebase/firestore";


const LoginForm = () => {
    
    const router = useRouter();

    const formik = useFormik( {
        initialValues: {
            email: "",
            password: "",
            type: "faculty",
        },
        validationSchema: Yup.object( {
            email: Yup.string()
                .email( "Invalid email address" )
                .required( "Email address is required" ),
            password: Yup.string()
                .min( 6, "Password must be at least 6 characters" )
                .required( "Password is required" ),
            type: Yup.string().required(),
        } ),
        onSubmit: async ( values, { setSubmitting, setFieldError } ) => {
            const { email, password, type } = values;
            
            console.log( type );

            try {
                await signInWithEmailAndPassword( authHandle, email, password );

                const user = authHandle.currentUser;

                const docRef = doc(storeHandle, "usertype", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log( "Document data:", docSnap.data() );
                    if ( docSnap.data().type === type ) {
                        if ( type === "faculty" ) {
                            router.push( '/faculty' );
                        }
                        if ( type === "admin" ) {
                            router.push( '/admin' );
                        }
                    }
                    else {
                        signOut( authHandle );
                        alert( "You are not authorized to access this page" );
                    }
                } else {
                // docSnap.data() will be undefined in this case
                    console.log("No such document!");
                }

                // router.push('/');
            } catch ( error ) {
                console.error( error );
                setFieldError( "email", error.message );
            }

            setSubmitting( false );
        },
    } );

    return (
        <Box>

            <Typography variant="h3">Login</Typography>
            <form onSubmit={ formik.handleSubmit } style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
                <TextField
                    id="email"
                    name="email"
                    label="Email address"
                    variant="outlined"
                    style={ { marginBottom: "16px" } }
                    value={ formik.values.email }
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    error={ formik.touched.email && Boolean( formik.errors.email ) }
                    helperText={ formik.touched.email && formik.errors.email }
                />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    variant="outlined"
                    style={ { marginBottom: "16px" } }
                    value={ formik.values.password }
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    error={ formik.touched.password && Boolean( formik.errors.password ) }
                    helperText={ formik.touched.password && formik.errors.password }
                />
                <Select    
                    id="type"
                    name="type"
                    value={ formik.values.type }
                    onChange={ formik.handleChange }
                >
                        <MenuItem value="faculty">Faculty</MenuItem>
                        <MenuItem value="admin">Admin</MenuItem>
                </Select>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={ formik.isSubmitting }
                >
                    Sign In
                </Button>
                <Button
                    type="button"
                    variant="outlined"
                    color="primary"
                    onClick={ () => {
                        router.push( '/forgotpassword' );
                    } }
                >
                    Forgot password?
                </Button>
            </form>
        </Box>
    );
};

export default LoginForm;