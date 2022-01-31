import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { useSelector, useDispatch } from "react-redux";
import Typography from "@mui/material/Typography";

import {
	Button,
	CardActionArea,
	CardActions,
	Card,
	CardContent,
	CardMedia,
	Paper,
	Badge,
	Skeleton,
	Box,
} from "@mui/material";
import AnimeCard from "../AnimeCard/AnimeCard";

import axios from "axios";
import { getNew } from "../../redux/reducer";

const Profile = () => {
	const state = useSelector((state) => state.anilist.aninew);
	const anilikes = useSelector((state) => state.anilist.anilikes);
	const user = useSelector((state) => state.anilist.user);

	const dispatch = useDispatch();

	const [url, seturl] = useState(
		"https://shikimori.one/api/animes?limit=20&order=popularity"
	);

	useEffect(() => {
		const source = axios.CancelToken.source();
		axios
			.get(url, {
				cancelToken: source.token,
			})
			.then((response) => {
				dispatch(getNew(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
		return source.cancel;
	}, [url]);

	const aninew =
		state.length > 1 ? (
			state.map((item) => {
				return (
					<Badge
						color="secondary"
						badgeContent="NEW"
						key={item.id}
						className="bage"
					>
						<Card
							sx={{ maxWidth: 200, minWidth: 200 }}
							className="ani-card"
						>
							<CardActionArea>
								<CardMedia
									component="img"
									height="140"
									image={
										"https://shikimori.one/" +
										item.image.preview.split("?")[0]
									}
									alt="green iguana"
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="div"
									>
										{item.name}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										Score: {item.score}
									</Typography>
								</CardContent>
							</CardActionArea>
						</Card>
					</Badge>
				);
			})
		) : (
			<div>Kraiviks</div>
		);

	const sceleton = (
		<Box
			sx={{
				bgcolor: "#121212",
				p: 8,
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Skeleton
				sx={{ bgcolor: "grey.900" }}
				variant="rectangular"
				width={210}
				height={118}
			/>
		</Box>
	);

	const animeLikes =
		anilikes.length < 1
			? sceleton
			: anilikes.map((item) => <AnimeCard item={item} />);

	return (
		<section className="profile">
			<Card sx={{ maxWidth: 345 }} className="user">
				<CardActionArea style={{display: 'flex', flexDirection:"column", justifyContent:'space-around', height: "100%"}}>
					<CardMedia
						component="img"
						height="140"
						image={"img/ava.jpg"}
						alt="green iguana"
					/>
					<CardContent>
						<h2 className="user-name">{user.displayName}</h2>
						<div className="user-age">25</div>
						<div className="user-country">Country: Ukraine</div>
						<div className="user-about">
							Lorem ipsum dolor sit amet consectetur, adipisicing
							elit. Molestiae enim ea eveniet inventore ipsum
							dolorem deleniti nihil modi temporibus debitis. In
							aut eum, voluptatibus libero quia quae asperiores
							quas. Iure!
						</div>
					</CardContent>
				</CardActionArea>
			</Card>
			<Paper elevation={3} className="user-box">
				<Paper elevation={3} style={{ overflow: "hidden" }}>
					<h2>ТОП 20</h2>
					<Paper elevation={2} className="new-anime">
						{aninew}
					</Paper>
				</Paper>
			</Paper>
			<Paper elevation={24} className="tags">
				<div className="title user__likes-anime">
					Likes anime: {anilikes.length}
				</div>
				<div className="likes">{animeLikes}</div>
			</Paper>
		</section>
	);
};

export default Profile;
