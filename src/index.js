import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./components/App/App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { initializeApp } from "firebase/app";

initializeApp({
	apiKey: "AIzaSyBH1WNLZd6iXoY0J0Nbb-CsGnWmMe9Zeks",
	authDomain: "react-aniviks.firebaseapp.com",
	projectId: "react-aniviks",
	storageBucket: "react-aniviks.appspot.com",
	messagingSenderId: "404152030864",
	appId: "1:404152030864:web:f506fd4de2928332bd2a15",
});

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
