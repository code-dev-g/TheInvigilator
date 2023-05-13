import { Box, Button } from "@mui/material";
import Link from "next/link";
import Log from "./Log";
import { authHandle, storeHandle } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

function Menu () {
	const user = authHandle.currentUser;
	
	if ( user == null ) { 
		return <Log />;
	}


	try { 
		const docSnap = null;
		(async () => {
			const docRef = doc(storeHandle, "usertype", user.uid);
			docSnap = await getDoc(docRef);
		})();
		
		if ( docSnap.exists() ) {
			console.log( "Document data:", docSnap.data() );
			if ( docSnap.data().type === "admin" ) {
				return (
					<Box
						sx={ {
							display: "flex",
							alignItems: "center",
							width: 450,
							justifyContent: "space-between",
						} }
					>
						<Button variant="text">
							<Link href="/sample" >
								<a style={ { textDecoration: "none", color: "white" } }>Admin</a>
							</Link>
						</Button>
			
						<Log />
					</Box>
				);
			}
			else {
				return (
					<Box
						sx={ {
							display: "flex",
							alignItems: "center",
							width: 450,
							justifyContent: "space-between",
						} }
					>
						<Button variant="text">
							<Link href="/sample" >
								<a style={ { textDecoration: "none", color: "white" } }>Faculty</a>
							</Link>
						</Button>
			
						<Log />
					</Box>
				);
			}
		}
	} catch ( error ) { }
	

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