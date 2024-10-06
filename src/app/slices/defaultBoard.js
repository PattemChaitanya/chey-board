import { createSlice } from "@reduxjs/toolkit";

const defaultBoardSlice = createSlice({
  name: "defaultBoard",
  initialState: {
    cards: [
      // BACKLOG
      {
        title: "Look into render bug in dashboard",
        id: "1",
        column: "backlog",
      },
      { title: "SOX compliance checklist", id: "2", column: "backlog" },
      { title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },
      { title: "Document Notifications service", id: "4", column: "backlog" },
      // TODO
      {
        title: "Research DB options for new microservice",
        id: "5",
        column: "todo",
      },
      { title: "Postmortem for outage", id: "6", column: "todo" },
      { title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

      // DOING
      {
        title: "Refactor context providers to use Zustand",
        id: "8",
        column: "doing",
      },
      { title: "Add logging to daily CRON", id: "9", column: "doing" },
      // DONE
      {
        title: "Set up DD dashboards for Lambda listener",
        id: "10",
        column: "done",
      },
    ],
  },
  reducers: {
    setCards: (state, action) => {
      const allCards = state.cards.length;
      state.cards.push({ ...action.payload, id: allCards + 1 });
    },
    setAllCardsByDrag: (state, action) => {
      state.cards = action.payload;
    },
  },
});

export const { setCards, setAllCardsByDrag } = defaultBoardSlice.actions;
export default defaultBoardSlice.reducer;
