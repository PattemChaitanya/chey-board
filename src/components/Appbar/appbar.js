import React from "react";
import { Grid } from "@mui/material";

const Appbar = (props) => {
  return (
    <Grid container sx={props.styles} component={"nav"}>
      {props.children}
    </Grid>
  );
};

export default Appbar;
