import { Box, Button } from "@mui/material";
import Link from "next/link";
import Log from "./Log";

function Menu() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				width: 450,
				justifyContent: "space-between",
			}}
		>
			<Button variant="text">
				<Link href="/sample" >
					<a style={{ textDecoration: "none", color: "white" }}>Sample</a>
				</Link>
			</Button>

			<Log />
		</Box>
	);
}

export default Menu;