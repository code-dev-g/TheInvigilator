import Head from "next/head";
import {Box, Button} from "@mui/material";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../utils/firebase";

export default function Home() {
  const auth = getAuth(app);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Button variant="contained">The Invigilator</Button>
    </Box>
	);
}
