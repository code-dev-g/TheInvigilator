import {
	Drawer,
	IconButton,
	Box,
	Divider,
	List,
	ListItem,
	ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import Log from "./Log";
import Link from "next/link";

function SideBar() {
	const [toggleState, setToggleState] = useState(false);

	const toggleDrawer = (open) => (event) => {
		if (
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setToggleState(open);
	};

	const list = () => (
		<Box
			role="presentation"
			onClick={toggleDrawer(false)}
			onKeyDown={toggleDrawer(false)}
			sx={{
				width: 250,
				display: "flex",
				alignItems: "center",
			}}
		>
			<List
				sx={{
					width: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}
			>
				<ListItem>
					<ListItemButton
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
						}}
					>
						<Link href="/sample" legacyBehavior>
							<a style={{ textDecoration: "none", color: "black" }}>Sample</a>
						</Link>
					</ListItemButton>
				</ListItem>
				<ListItem sx={{ display: "flex", justifyContent: "center" }}>
					<Log />
				</ListItem>
			</List>
		</Box>
	);

	return (
		<div>
			<IconButton onClick={toggleDrawer(true)}>
				<MenuIcon style={{ color: "#fff" }} />
			</IconButton>
			<div>
				<Drawer anchor="right" open={toggleState} onClose={toggleDrawer(false)}>
					{list("right")}
				</Drawer>
			</div>
		</div>
	);
}

export default SideBar;