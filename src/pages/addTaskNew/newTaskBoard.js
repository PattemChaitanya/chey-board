import React, { useState } from "react";
import { Modal, TextField, Button, Typography, Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../app/slices/modalSlice";
import { setCards } from "../../app/slices/defaultBoard";

const NewTaskModal = () => {
  const dispatch = useDispatch();
  const { isOpen: open } = useSelector((state) => state.modals);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subtasks, setSubtasks] = useState([]);
  const [newSubtask, setNewSubtask] = useState("");
  const [status, setStatus] = useState("");

  const handleClose = () => dispatch(closeModal());

  const handleAddSubtask = () => {
    if (newSubtask) {
      setSubtasks([...subtasks, newSubtask]);
      setNewSubtask("");
    }
  };

  const handleCreateTask = () => {
    dispatch(setCards({ title, description, subtasks, column: status }));
    setTitle("");
    setDescription("");
    setSubtasks([]);
    setStatus("");
    handleClose();
  };

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2">
            Add New Task
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="title"
            autoComplete="title"
            autoFocus
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="description"
            autoComplete="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="newSubtask"
            label="Add Subtask"
            name="newSubtask"
            autoComplete="newSubtask"
            value={newSubtask}
            onChange={(e) => setNewSubtask(e.target.value)}
          />
          <Button onClick={handleAddSubtask}>Add Subtask</Button>
          <Box sx={{ my: 2 }}>
            {subtasks.map((subtask, index) => (
              <Typography key={index}>{subtask}</Typography>
            ))}
          </Box>
          <TextField
            margin="normal"
            required
            fullWidth
            id="status"
            label="Status"
            name="status"
            autoComplete="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleCreateTask}
          >
            Create Task
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default NewTaskModal;
