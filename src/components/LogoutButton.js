import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { authHandle } from "../utils/firebase";
import LogoutIcon from "@mui/icons-material/Logout";

function LogoutButton() {
	return (
		<div>
			<Button
				onClick={() => signOut(authHandle)}
				variant="contained"
				startIcon={<LogoutIcon />}
			>
				Sign Out
			</Button>
		</div>
	);
}

export default LogoutButton;