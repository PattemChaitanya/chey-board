import React from "react";
import { Typography } from "@mui/material";
import Appbar from "../../components/Appbar/appbar";
import MuiButton from "../../components/Button";
import { openModal } from "../../app/slices/modalSlice";
import { useDispatch } from "react-redux";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <Appbar
      styles={{ width: `calc(100%-17%)`, justifyContent: "space-between" }}
    >
      <Typography variant="h6" component="div">
        Kanban Board
      </Typography>
      <MuiButton buttonName="Add task" onClick={() => dispatch(openModal())} />
    </Appbar>
  );
};

export default Navbar;
