// import React from "react";
// import {Box, Button, Link} from "@mui/material";

// const SignIn = () => {
//     return (

//         // <Box m={{display: "flex", flexDirection: "column", m: "4rem"}}>
//         //     <h1>Sign In</h1>
//         //     <Button variant="contained" color="primary">Sign In</Button>
//         //     <Box>Not a user? <Link href="/signup">Sign Up</Link></Box>
//         // </Box>
//     );
// };

// export default SignIn;

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { authHandle } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from 'next/router';

const LoginForm = () => {
    const router = useRouter();

    const initialValues = {
        email: "",
        password: "",
    };

    const validationSchema = Yup.object( {
        email: Yup.string()
            .email( "Invalid email address" )
            .required( "Email address is required" ),
        password: Yup.string()
            .min( 6, "Password must be at least 6 characters" )
            .required( "Password is required" ),
    } );

    const handleLogin = async ( values, { setSubmitting, setFieldError } ) => {
        const { email, password } = values;

        try {
            await signInWithEmailAndPassword( authHandle, email, password );
            router.push('/');
        } catch ( error ) {
            console.error( error );
            setFieldError( "email", "Invalid email or password" );
        }

        setSubmitting( false );
    };

    return (
        <div>
            <h1>Login</h1>
            <Formik
                initialValues={ initialValues }
                validationSchema={ validationSchema }
                onSubmit={ handleLogin }
            >
                { ( { isSubmitting } ) => (
                    <Form>
                        <div>
                            <label htmlFor="email">Email address</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" />
                        </div>
                        <button type="submit" disabled={ isSubmitting }>
                            Login
                        </button>
                    </Form>
                ) }
            </Formik>
        </div>
    );
};

export default LoginForm;
