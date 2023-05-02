import Head from "next/head";
import {Box, Button} from "@mui/material";

export default function Home() {
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
