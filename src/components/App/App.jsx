// kraiviks@gmail.com
import React, { useState, useEffect } from "react";
import {
	Switch,
	Route,
	Redirect,
	NavLink as RouterNavLink,
} from "react-router-dom";
import AniList from "../AniList/AniList";
import Profile from "../Profile/Profile";
import Logo from "../Logo/Logo";
import "./App.scss";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AuthDialog from "../AuthDialog/AuthDialog";
import RegDialog from "../RegDialog/RegDialog";
import AnimeDescDialog from "../AnimeDescDialog/AnimeDescDialog";
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { setUser, setLogin } from "../../redux/reducer.js";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
	({ theme, open }) => ({
		flexGrow: 1,
		padding: theme.spacing(3),
		transition: theme.transitions.create("margin", {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		marginLeft: `-${drawerWidth}px`,
		...(open && {
			transition: theme.transitions.create("margin", {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
			}),
			marginLeft: 0,
		}),
	})
);

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	transition: theme.transitions.create(["margin", "width"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: `${drawerWidth}px`,
		transition: theme.transitions.create(["margin", "width"], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: "flex-end",
}));

const App = () => {
	const dispatch = useDispatch();
	const user = useSelector((state) => state.anilist.user);
	const [darkState, setDarkState] = useState(true);
	const palletType = darkState ? "dark" : "light";
	const darkTheme = createTheme({
		palette: {
			mode: palletType,
		},
	});
	const handleThemeChange = () => {
		setDarkState(!darkState);
	};

	//firebase

	const authListener = async () => {
		const auth = getAuth();
		await onAuthStateChanged(auth, (user) => {
			if (user) {
				dispatch(setUser(user));
			} else {
				return null;
			}
		});
	};

	useEffect(() => {
		authListener();
	}, []);

	const theme = useTheme();
	const [open, setOpen] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const isuser = useSelector((state) => state.anilist.user);

	const logout = () => {
		const auth = getAuth();
		signOut(auth)
			.then(() => {
				dispatch(setUser(""));
			})
			.catch((error) => {
				// An error happened.
			});
	};

	return (
		<ThemeProvider theme={darkTheme}>
			<div className="app">
				{/* <Header handleThemeChange={handleThemeChange} /> */}

				<Box sx={{ display: "flex" }}>
					<CssBaseline />
					<AppBar position="fixed" open={open}>
						<Toolbar
							style={{
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={handleDrawerOpen}
								edge="start"
								sx={{ mr: 2, ...(open && { display: "none" }) }}
							>
								<MenuIcon />
								<Typography
									variant="h6"
									component="div"
									sx={{ flexGrow: 1 }}
								>
									AniViks
								</Typography>
							</IconButton>
							{isuser ? "Вы вошли" : null}
						</Toolbar>
					</AppBar>
					<Drawer
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							"& .MuiDrawer-paper": {
								width: drawerWidth,
								boxSizing: "border-box",
							},
						}}
						variant="persistent"
						anchor="left"
						open={open}
					>
						<DrawerHeader>
							<IconButton onClick={handleDrawerClose}>
								{theme.direction === "ltr" ? (
									<ChevronLeftIcon />
								) : (
									<ChevronRightIcon />
								)}
							</IconButton>
							<Typography
								variant="h6"
								component="div"
								sx={{ flexGrow: 1 }}
							>
								<Logo />
							</Typography>
						</DrawerHeader>
						<Divider />
						<List>
							<ListItem button>
								<Link
									component={RouterNavLink}
									underline="none"
									to="/react-aniviks/"
									style={{
										width: 100 + "%",
										padding: 20,
										textAlign: "center",
									}}
									onClick={handleDrawerClose}
								>
									Профіль
								</Link>
							</ListItem>
							<ListItem button>
								<Link
									component={RouterNavLink}
									underline="none"
									to="/react-aniviks/anilist"
									style={{
										width: 100 + "%",
										padding: 20,
										textAlign: "center",
									}}
									onClick={handleDrawerClose}
								>
									Список
								</Link>
							</ListItem>
						</List>
						<Divider />
						<List>
							<ListItem button>
								{isuser ? (
									<Button
										onClick={logout}
										style={{ width: 100 + "%" }}
									>
										Logout
									</Button>
								) : (
									<Button
										style={{ width: 100 + "%" }}
										color="inherit"
										onClick={() => dispatch(setLogin(true))}
									>
										Login
									</Button>
								)}
							</ListItem>
							<ListItem>
								<Button
									style={{ marginLeft: 30 + "px" }}
									variant="outlined"
									color="error"
									onClick={handleThemeChange}
								>
									Change theme
								</Button>
							</ListItem>
						</List>
					</Drawer>
					<Main open={open} onClick={handleDrawerClose}>
						<DrawerHeader />
						{user ? (
							<Switch>
								<Route exact path="/react-aniviks/">
									<Profile />
								</Route>
								<Route exact path="/react-aniviks/anilist">
									<AniList />
								</Route>
								<Redirect to="/react-aniviks/" />
							</Switch>
						) : (
							<h2>Войдите или зарегистрируйтесь</h2>
						)}
					</Main>
					{/* <Paper elevation={20} className="main"></Paper> */}
				</Box>
				<AuthDialog />
				<RegDialog />
				<AnimeDescDialog />
			</div>
		</ThemeProvider>
	);
};

export default App;
