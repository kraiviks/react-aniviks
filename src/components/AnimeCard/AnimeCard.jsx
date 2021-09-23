import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const AnimeCard = ({ item }) => {
	return (
		<Card
			sx={{ maxWidth: 150, minWidth: 150 }}
			key={item.id}
			onClick={() => window.open("https://shikimori.one" + item.url)}
			title="Go to shikimori"
		>
			<CardActionArea>
				<CardMedia
					component="img"
					height="140"
					// image={"./img/ava.jpg"}
					image={
						"https://shikimori.one/" +
						item.image.preview.split("?")[0]
					}
					alt="green iguana"
				/>
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{item.name}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{item.description}
					</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default AnimeCard;
