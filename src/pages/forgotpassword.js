import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { authHandle } from "../utils/firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useFormik } from "formik";
import { Box, Typography, Button, Select, MenuItem, TextField } from "@mui/material";

const ForgotPasswordForm = () => { 
    const formik = useFormik({
        initialValues: {
            email: "",
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email("Invalid email address")
                .required("Email address is required"),
        }),
        onSubmit: async (values, { setSubmitting, setFieldError }) => {
            const { email } = values;
            try {
                await sendPasswordResetEmail( authHandle, email ); //TODO: check mailing system
                console.log("Password reset email sent");
                alert("Password reset email sent");
            } catch (error) {
                setFieldError("email", error.message);
            }
            setSubmitting(false);
        }
    });
    
    return (
        <Box>
            <Typography variant="h4" align="center" gutterBottom>
                Forgot Password
            </Typography>
            <form onSubmit={ formik.handleSubmit } style={ { display: "flex", flexDirection: "column", alignItems: "center" } }>
                
                    <Box>
                        <TextField
                            name="email"
                            type="email"
                            label="Email"
                            as={ TextField }
                            error={ formik.touched.email && Boolean( formik.errors.email ) }
                            helperText={ formik.touched.email && formik.errors.email }
                            variant="outlined"
                            fullWidth
                            margin="normal"
                        />
                    </Box>
                    <Box>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={ formik.isSubmitting }
                        >
                            Submit
                        </Button>
                    </Box>
            </form>
        </Box>
    )
};

export default ForgotPasswordForm;
