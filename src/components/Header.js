import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SideBar from "./SideBar";
import Image from "next/image";
import Menu from "../components/Menu";
import Logo from "../../public/Logo.png";
import Link from "next/link";

function Header() {
	return (
		<AppBar position="static" sx={{ backgroundColor: "#f12151" }}>
			<Toolbar
				variant="dense"
				sx={{ display: "flex", justifyContent: "space-between", width: "auto" }}
			>
				<Box sx={{ display: "flex" }}>
					<Image src={Logo} alt="openAns" width="30" height="30" />
					<Typography variant="h6" color="inherit" component="div">
						<Link href="/" legacyBehavior>
							<a style={{ textDecoration: "none", color: "white" }}>TheInvigilator</a>
						</Link>
					</Typography>
				</Box>
				<Box sx={{ display: { xs: "block", md: "none" }, m: 1 }}>
					<SideBar />
				</Box>
				<Box sx={{ display: { xs: "none", md: "block" }, m: 1 }}>
					<Menu />
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Header;