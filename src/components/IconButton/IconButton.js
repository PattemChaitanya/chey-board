import IconButton from "@mui/material/IconButton";
import React from "react";

const Iconbutton = (props) => {
  return <IconButton sx={props.style}>{props.children}</IconButton>;
};

export default Iconbutton;
