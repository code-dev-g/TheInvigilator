import { authHandle } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../components/Loading";
import { Typography, Box, Button, Link } from "@mui/material";

export default function Home() {
	const [user, loading, error] = useAuthState(authHandle);
	if (loading) {
		return <Loading />;
	}
	if (error) {
		return <div>{error}</div>;
	}
	return (
		<>
			<Box sx={{ display: "flex", flexDirection: "column", m: "4rem" }}>
				<Typography variant="h5" sx={{ textAlign: "center" }}>
          Hello there! Welcome to TheInvigilator
        </Typography>
			</Box>
		</>
	);
}