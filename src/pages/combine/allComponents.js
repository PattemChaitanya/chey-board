import React from "react";
import KanbanBoard from "../board/kanbanBoard";
import Navbar from "../navbar";
import Sidebar from "../sideNavbar";
import { Grid } from "@mui/material";
import NewTaskModal from "../addTaskNew";

const AllComponents = () => {
  return (
    <Grid container spacing={2}>
      <Grid item sx={{ display: { xs: "none", md: "block" } }} md={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={12} md={10}>
        <Navbar />
        <KanbanBoard />
      </Grid>
      <NewTaskModal />
    </Grid>
  );
};

export default AllComponents;
