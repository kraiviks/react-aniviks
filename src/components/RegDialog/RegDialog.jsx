import React, { useState, useEffect } from "react";
import "./RegDialog.scss";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TextField, Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setReg } from "../../redux/reducer";
import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile
} from "firebase/auth";

function RegDialog() {
	const state = useSelector((state) => state.anilist.regDialog);
	const dispatch = useDispatch();

	const handleClose = () => dispatch(setReg(false));

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setdisplayName] = useState("");

	//firebase
	const register = (e) => {
		e.preventDefault();
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				updateProfile(userCredential.user, {
					displayName: displayName
				  }).then(() => {
					// Profile updated!
					// ...
				  }).catch((error) => {
					// An error occurred
					// ...
				  });
				handleClose();
				console.log("Ви зареєструвались");
				// ...
				signInWithEmailAndPassword(auth, email, password)
					.then((userCredential) => {
						// Signed in
						const user = userCredential.user;
						if (user) {
							handleClose();
							console.log("Ви увiйшли");
						}
						// ...
					})
					.catch((error) => {
						const errorCode = error.code;
						const errorMessage = error.message;
					});
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				// ..
			});
	};
	return (
		<Dialog onClose={handleClose} open={state} className="dialog">
			<div className="dialog-wrapper">
				<DialogTitle>Registration</DialogTitle>
				<form onSubmit={register}>
					<TextField
						required
						id="outlined-required"
						label="Login"
						onChange={(e) => setdisplayName(e.target.value)}
					/>
					<TextField
						required
						id="outlined-required"
						label="Email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<TextField
						id="outlined-password-input"
						required
						label="Password"
						type="password"
						autoComplete="current-password"
						onChange={(e) => setPassword(e.target.value)}
					/>
					<TextField
						id="outlined-password-input"
						required
						label="Password"
						type="password"
						autoComplete="current-password"
					/>
					<div className="button-box">
						<Button variant="contained" type="submit">
							Registration
						</Button>
					</div>
				</form>
			</div>
		</Dialog>
	);
}

export default RegDialog;
