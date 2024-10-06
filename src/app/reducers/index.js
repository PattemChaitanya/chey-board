import { combineReducers } from "@reduxjs/toolkit";
import {
  columnReducer,
  defaultBoardReducer,
  modalReducer,
  taskreducer,
} from "../slices";

const rootReducer = combineReducers({
  defaultBoard: defaultBoardReducer,
  modals: modalReducer,
  columns: columnReducer,
  tasks: taskreducer,
});

export default rootReducer;
