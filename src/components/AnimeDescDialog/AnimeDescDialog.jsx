import React from "react";
import "./AnimeDescDialog.scss";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useSelector, useDispatch } from "react-redux";
import { setAnimeDialog } from "../../redux/reducer";

function AnimeDescDialog() {
	const anime = useSelector((state) => state.anilist.anime);
	const animeDialog = useSelector((state) => state.anilist.animeDialog);
	const dispatch = useDispatch();
	const handleClose = () => dispatch(setAnimeDialog(false));

	return (
		<Dialog
			onClose={handleClose}
			open={animeDialog}
			className="dialog"
		>
			<div className="dialog-wrapper">
				<DialogTitle>
					{anime.name}
					<br />
					{anime.russian}
				</DialogTitle>
				<p>{anime.description}</p>
			</div>
		</Dialog>
	);
}

export default AnimeDescDialog;
