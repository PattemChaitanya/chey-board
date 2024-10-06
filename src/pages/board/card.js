import React from "react";
import { Typography } from "@mui/material";
import { DropIndicator } from "../../components/Board";
import { motion } from "framer-motion";

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        style={{
          cursor: "grab",
          borderRadius: "10px",
          background: "#393939",
          marginBottom: "10px",
          padding: "12px 20px",
        }}
      >
        <Typography variant="body1" className="text-sm text-neutral-100">
          {title}
        </Typography>
        <Typography variant="caption">0 of 3 SubTasks</Typography>
      </motion.div>
    </>
  );
};

export default Card;
