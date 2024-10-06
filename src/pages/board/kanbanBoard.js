import { Grid } from "@mui/material";
import Column from "./column";

const KanbanBoard = () => {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: "#333333",
        color: "#ffffff",
      }}
    >
      <Grid
        container
        sx={{
          display: "flex",
          overflow: "auto",
          gap: 3,
          p: "12px",
          flexWrap: "nowrap",
        }}
      >
        <Column title="Backlog" column="backlog" headingColor="#A0AEC0" />
        <Column title="TODO" column="todo" headingColor="yellow" />
        <Column title="In progress" column="doing" headingColor="blue" />
        <Column title="Complete" column="done" headingColor="emerald" />
      </Grid>
    </Grid>
  );
};

export default KanbanBoard;
