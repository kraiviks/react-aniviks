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
		"https://shikimori.one/api/animes?limit=20&order=aired_on"
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
					<Badge color="secondary" badgeContent="NEW" key={item.id}>
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
				<CardActionArea>
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
							Lizards are a widespread group of squamate reptiles,
							with over 6,000 species, ranging across all
							continents except Antarctica
						</div>
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button size="small" color="primary">
						Share
					</Button>
				</CardActions>
			</Card>
			<Paper elevation={3} className="user-box">
				<Paper elevation={2} className="user__counter">
					<div className="title user__likes-anime">
						Likes anime: {anilikes.length}
					</div>
				</Paper>
				<Paper elevation={3} style={{ overflow: "hidden" }}>
					<h2>20 Новинок</h2>
					<Paper elevation={2} className="new-anime">
						{aninew}
					</Paper>
				</Paper>
			</Paper>
			<Paper elevation={24} className="tags">
				{animeLikes}
			</Paper>
		</section>
	);
};

export default Profile;
