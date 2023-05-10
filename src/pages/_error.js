import ErrorLottie from "../components/ErrorLottie";
import { Container, Typography } from "@mui/material";

function Error() {
	return (
		<Container
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				height: "auto",
			}}
		>
			<ErrorLottie />
			<Typography variant="h6" sx={{ width: "auto", display: "flex" }}>
				Oops! Something went wrong
			</Typography>
		</Container>
	);
}

export default Error;