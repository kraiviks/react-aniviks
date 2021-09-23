import React, { useState } from "react";
import "./AuthDialog.scss";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TextField, Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { setLogin, setReg } from "../../redux/reducer";
import { useSelector } from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function AuthDialog() {
	const state = useSelector((state) => state.anilist.loginDialog);
	const dispatch = useDispatch();

	const handleClose = () => dispatch(setLogin(false));

	const handleReg = () => {
		dispatch(setLogin(false));
		dispatch(setReg(true));
	};

	//firebase
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const login = (e) => {
		e.preventDefault();
		const auth = getAuth();
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
	};

	return (
		<Dialog onClose={handleClose} open={state} className="dialog">
			<div className="dialog-wrapper">
				<DialogTitle>Auth</DialogTitle>
				<form onSubmit={login}>
					<TextField
						required
						id="outlined-required"
						label="Login"
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
					<div className="button-box">
						<Button variant="outlined" type="submit">
							Login
						</Button>
						<Button variant="contained" onClick={handleReg}>
							Registration
						</Button>
					</div>
				</form>
			</div>
		</Dialog>
	);
}

export default AuthDialog;
