import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { authHandle } from "../utils/firebase";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/router";

function LogoutButton () {
	const router = useRouter();
	return (
		<div>
			<Button
				onClick={ () => {
					signOut( authHandle );
					router.push( "/" );
				} }
				variant="contained"
				startIcon={<LogoutIcon />}
			>
				Sign Out
			</Button>
		</div>
	);
}

export default LogoutButton;