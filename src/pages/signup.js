import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button, TextField } from "@mui/material";
import { authHandle } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

const SignupForm = () => {
    const router = useRouter();

    const formik = useFormik( {
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object( {
            email: Yup.string()
                .email( "Invalid email address" )
                .required( "Email address is required" ),
            password: Yup.string()
                .min( 6, "Password must be at least 6 characters" )
                .required( "Password is required" ),
            confirmPassword: Yup.string()
                .oneOf( [ Yup.ref( "password" ), null ], "Passwords must match" )
                .required( "Confirm password is required" ),
        } ),
        onSubmit: async ( values, { setSubmitting, setFieldError } ) => {
            const { email, password } = values;

            try {
                await createUserWithEmailAndPassword( authHandle, email, password );
                router.push('/');
            } catch ( error ) {
                console.error( error );
                setFieldError( "email", error.message );
            }

            setSubmitting( false );
        },
    } );

    return (
        <div>
            <h1>Signup</h1>
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
                <TextField
                    id="confirmPassword"
                    name="confirmPassword"
                    label="Confirm password"
                    type="password"
                    variant="outlined"
                    style={ { marginBottom: "16px" } }
                    value={ formik.values.confirmPassword }
                    onChange={ formik.handleChange }
                    onBlur={ formik.handleBlur }
                    error={
                        formik.touched.confirmPassword &&
                        Boolean( formik.errors.confirmPassword )
                    }
                    helperText={
                        formik.touched.confirmPassword && formik.errors.confirmPassword
                    }
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    disabled={ formik.isSubmitting }
                >
                    Signup
                </Button>
            </form>
        </div>
    );
};

export default SignupForm;
