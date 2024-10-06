import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { DropIndicator } from "../../components/Board";
import Card from "./card";
import { setAllCardsByDrag } from "../../app/slices/defaultBoard";
import { useDispatch, useSelector } from "react-redux";

const Column = ({ title, headingColor, column }) => {
  const dispatch = useDispatch();
  const { cards } = useSelector((state) => state.defaultBoard);
  const filteredCards = cards.filter((c) => c.column === column);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    let copy = [...cards];
    let cardToTransfer = copy.find((c) => Number(c.id) === Number(cardId));
    if (!cardToTransfer) return;
    let copyCardToTransfer = { ...cardToTransfer, column };
    let filteredCopy = copy.filter((c) => Number(c.id) !== Number(cardId));
    filteredCopy.push(copyCardToTransfer);
    dispatch(setAllCardsByDrag(filteredCopy));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <Grid item sx={{ width: "56%", flexShrink: 0 }}>
      <Grid container alignItems="center" pt={2} pb={3}>
        <Box
          sx={{
            height: "20px",
            width: "20px",
            borderRadius: "50%",
            background: `${headingColor}`,
            mx: "15px",
          }}
        />
        <Typography variant="subtitle2" sx={{ textTransform: "uppercase" }}>
          {title} ({filteredCards.length})
        </Typography>
      </Grid>
      <Box
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        sx={{ height: `calc(100vh-150px)`, width: "100%" }}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
      </Box>
    </Grid>
  );
};

export default Column;
