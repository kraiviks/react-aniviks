import React, { useState } from "react";
import "./RegDialog.scss";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { TextField, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { setReg } from "../../redux/reducer";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";

function RegDialog() {
	const state = useSelector((state) => state.anilist.regDialog);
	const dispatch = useDispatch();

	const handleClose = () => dispatch(setReg(false));

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [displayName, setdisplayName] = useState("");
	const [errorRegister, setErrorRegister] = useState("");

	//firebase
	const register = (e) => {
		e.preventDefault();
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				updateProfile(auth.currentUser, {
					displayName: displayName,
				})
					.then(() => {
						console.log("Ви зарегестрировались");
						handleClose();
					})
					.catch((error) => {
						console.log(error);
					});
			})
			.catch((error) => {
				switch (error.code) {
					case "auth/email-already-in-use":
						setErrorRegister("Такой email уже зарегестрирован");
						break;
					case "auth/invalid-email":
						setErrorRegister("Неправильный формат email");
						break;
					case "auth/weak-password":
						setErrorRegister("Слишком слабый пароль");
						break;
					default:
						setErrorRegister(error.code);
				}
			});
	};
	return (
		<Dialog onClose={handleClose} open={state} className="dialog">
			<div className="dialog-wrapper">
				<DialogTitle>Registration</DialogTitle>
				<Typography component="h1" variant="h5" color="red">
					{errorRegister}
				</Typography>
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
