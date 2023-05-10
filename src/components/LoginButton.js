import { Box, Button, Link } from "@mui/material";
import { signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
import { authHandle } from "../utils/firebase";
import LoginIcon from "@mui/icons-material/Login";

function LoginButton() {
	return (
        <Box>
            <Link href="/signin">
                <Button
                    // onClick={() => signInWithRedirect(authHandle, new GoogleAuthProvider())}
                    variant="contained"
                    startIcon={<LoginIcon />}
                >            
                    Sign In
                </Button>
            </Link>
            <Box>
            </Box>
        </Box>
	);
}

export default LoginButton;