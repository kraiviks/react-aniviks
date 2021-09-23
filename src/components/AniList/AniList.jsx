import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AniList.scss";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Alert from "@mui/material/Alert";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

import axios from "axios";

import {
	getShikiApi,
	setAnime,
	setAnimeDialog,
	setAnimeToList,
} from "../../redux/reducer";

const AniList = () => {
	const anilist = useSelector((state) => state.anilist);
	const anilikes = useSelector((state) => state.anilist.anilikes);
	const dispatch = useDispatch();
	const [page, setPage] = useState(1);
	const url = `https://shikimori.one/api/animes?page=${page}&limit=12&order=popularity`;

	useEffect(() => {
		const source = axios.CancelToken.source();
		axios
			.get(url, {
				cancelToken: source.token,
			})
			.then((response) => {
				dispatch(getShikiApi(response.data));
			})
			.catch((error) => {
				console.log(error);
			});
		return source.cancel;
	}, [url]);

	//Request Anime ID

	const getAnimeById = (id) => {
		const source = axios.CancelToken.source();

		const urlId = `https://shikimori.one/api/animes/${id}`;
		axios
			.get(urlId, {
				cancelToken: source.token,
			})
			.then((response) => {
				dispatch(setAnime(response.data));
			})
			.catch((error) => {
				console.log(error);
			});

		dispatch(setAnimeDialog(true));
	};
	//Request Anime ID

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

	const [alert, setalert] = useState(false);

	const anime =
		anilist.anilist.length < 1
			? sceleton
			: anilist.anilist.map((item) => {
					return (
						<Card
							sx={{ maxWidth: 200 }}
							key={item.id}
							className="ani-card"
						>
							<CardMedia
								component="img"
								height="140"
								// image="/img/ava.jpg"
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
							<CardActions>
								<Button
									size="small"
									onClick={() => {
										dispatch(setAnimeToList(item));
										setalert(true);
										setTimeout(() => {
											setalert(false);
										}, 3000);
									}}
								>
									{anilikes.find(
										(iteml) => iteml.id === item.id
									) ? (
										<FavoriteIcon />
									) : (
										<FavoriteBorderIcon />
									)}
								</Button>
								<Button
									size="small"
									onClick={() => {
										getAnimeById(item.id);
									}}
								>
									Learn More
								</Button>
							</CardActions>
						</Card>
					);
			  });

	return (
		<section className="anilist">
			{anime}{" "}
			<Card
				sx={{ maxWidth: 150}}
				className="ani-card add"
				onClick={() => setPage(page > 0 ? page - 1 : 1)}
			>
				<CardContent className="add-item"> Prev page</CardContent>
			</Card>
			<Card
				sx={{ maxWidth: 150 }}
				className="ani-card add"
				onClick={() => setPage(page + 1)}
			>
				<CardContent className="add-item"> Next page</CardContent>
			</Card>
			{alert ? (
				<Alert
					onClose={() => {
						setalert(false);
					}}
					in={false}
					style={{ position: "fixed", top: 850 }}
				>
					Anime added to favorites list
				</Alert>
			) : (
				<></>
			)}
		</section>
	);
};

export default AniList;
