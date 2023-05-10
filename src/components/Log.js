import { authHandle, store, storeHandle } from "../utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import {
	collection,
	query,
	getDocs,
	setDoc,
	doc,
	where,
	addDoc,
} from "firebase/firestore";

function Log() {
	const [user] = useAuthState(authHandle);
	if (user) {
		// console.log(user);
		(async function () {
			await setDoc(
				doc(storeHandle, "users", user.uid),
				{
					name: user.displayName,
					email: user.email,
					photoURL: user.photoURL,
					lastLogin: Date.now(),
				},
				{ merge: true }
			);
		})();
		return <LogoutButton />;
	}
	return <LoginButton />;
}

export default Log;