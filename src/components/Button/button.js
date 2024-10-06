import Button from "@mui/material/Button";
import React from "react";

const MuiButton = (props) => {
  return (
    <Button sx={props.style} onClick={props.onClick}>
      {props.buttonName}
    </Button>
  );
};

export default MuiButton;
