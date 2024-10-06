// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import "./KanbanBoard.css";

// const initialColumns = {
//   todo: {
//     name: "To Do",
//     items: [
//       { id: "1", content: "Task 1" },
//       { id: "2", content: "Task 2" },
//     ],
//   },
//   inProgress: {
//     name: "In Progress",
//     items: [{ id: "3", content: "Task 3" }],
//   },
//   done: {
//     name: "Done",
//     items: [{ id: "4", content: "Task 4" }],
//   },
// };

// const KanbanBoard = () => {
//   const [columns, setColumns] = useState(initialColumns);
//   // console.log(columns, "cloumns");

//   const onDragEnd = (event, info) => {
//     const { source, destination } = info;
//     console.log(info);
//     if (!destination) return;

//     const sourceColumn = columns[source.droppableId];
//     const destinationColumn = columns[destination.droppableId];
//     const sourceItems = [...sourceColumn.items];
//     const destinationItems = [...destinationColumn.items];
//     const [removed] = sourceItems.splice(source.index, 1);
//     destinationItems.splice(destination.index, 0, removed);

//     setColumns((prevColumns) => ({
//       ...prevColumns,
//       [source.droppableId]: {
//         ...sourceColumn,
//         items: sourceItems,
//       },
//       [destination.droppableId]: {
//         ...destinationColumn,
//         items: destinationItems,
//       },
//     }));
//   };

//   return (
//     <div className="kanban-board">
//       {Object.entries(columns).map(([columnId, column]) => (
//         <div key={columnId} className="kanban-column">
//           <h2>{column.name}</h2>
//           <div className="kanban-column-content">
//             {column.items.map((item, index) => (
//               <motion.div
//                 key={item.id}
//                 drag
//                 onDragEnd={onDragEnd}
//                 className="kanban-item"
//               >
//                 {item.content}
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default KanbanBoard;

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Grid,
  Typography,
  Button,
  TextareaAutosize,
  Paper,
} from "@mui/material";

export const KanbanBoard = () => {
  return (
    <Grid container className="h-screen w-full bg-neutral-900 text-neutral-50">
      <Board />
    </Grid>
  );
};

const Board = () => {
  const [cards, setCards] = useState(DEFAULT_CARDS);

  return (
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
      <Column
        title="Backlog"
        column="backlog"
        headingColor="text-neutral-500"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="TODO"
        column="todo"
        headingColor="text-yellow-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="In progress"
        column="doing"
        headingColor="text-blue-200"
        cards={cards}
        setCards={setCards}
      />
      <Column
        title="Complete"
        column="done"
        headingColor="text-emerald-200"
        cards={cards}
        setCards={setCards}
      />
    </Grid>
  );
};

const Column = ({ title, headingColor, cards, column, setCards }) => {
  const [active, setActive] = useState(false);

  const handleDragStart = (e, card) => {
    e.dataTransfer.setData("cardId", card.id);
  };

  const handleDragEnd = (e) => {
    const cardId = e.dataTransfer.getData("cardId");
    console.log(e);

    setActive(false);
    clearHighlights();

    const indicators = getIndicators();
    const { element } = getNearestIndicator(e, indicators);

    const before = element.dataset.before || "-1";
    console.log(element, element.dataset);

    if (before !== cardId) {
      let copy = [...cards];

      let cardToTransfer = copy.find((c) => c.id === cardId);
      if (!cardToTransfer) return;
      cardToTransfer = { ...cardToTransfer, column };

      copy = copy.filter((c) => c.id !== cardId);

      const moveToBack = before === "-1";

      if (moveToBack) {
        copy.push(cardToTransfer);
      } else {
        const insertAtIndex = copy.findIndex((el) => el.id === before);
        if (insertAtIndex === undefined) return;

        copy.splice(insertAtIndex, 0, cardToTransfer);
      }

      setCards(copy);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    highlightIndicator(e);

    setActive(true);
  };

  const clearHighlights = (els) => {
    const indicators = els || getIndicators();

    indicators.forEach((i) => {
      i.style.opacity = "0";
    });
  };

  const highlightIndicator = (e) => {
    const indicators = getIndicators();

    clearHighlights(indicators);

    const el = getNearestIndicator(e, indicators);

    el.element.style.opacity = "1";
  };

  const getNearestIndicator = (e, indicators) => {
    const DISTANCE_OFFSET = 50;

    const el = indicators.reduce(
      (closest, child) => {
        const box = child.getBoundingClientRect();

        const offset = e.clientY - (box.top + DISTANCE_OFFSET);

        if (offset < 0 && offset > closest.offset) {
          return { offset: offset, element: child };
        } else {
          return closest;
        }
      },
      {
        offset: Number.NEGATIVE_INFINITY,
        element: indicators[indicators.length - 1],
      }
    );
    return el;
  };

  const getIndicators = () => {
    return Array.from(document.querySelectorAll(`[data-column="${column}"]`));
  };

  const handleDragLeave = () => {
    clearHighlights();
    setActive(false);
  };

  const filteredCards = cards.filter((c) => c.column === column);

  return (
    <Grid item className="w-56 shrink-0">
      <Grid container direction="column" className="mb-3">
        <Typography variant="h3" className={`font-medium ${headingColor}`}>
          {title}
        </Typography>
        <Typography
          variant="body1"
          className="rounded text-sm text-neutral-400"
        >
          {filteredCards.length}
        </Typography>
      </Grid>
      <Paper
        onDrop={handleDragEnd}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`h-full w-full transition-colors ${
          active ? "bg-neutral-800/50" : "bg-neutral-800/0"
        }`}
      >
        {filteredCards.map((c) => {
          return <Card key={c.id} {...c} handleDragStart={handleDragStart} />;
        })}
        <DropIndicator beforeId={null} column={column} />
        <AddCard column={column} setCards={setCards} />
      </Paper>
    </Grid>
  );
};

const Card = ({ title, id, column, handleDragStart }) => {
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable="true"
        onDragStart={(e) => handleDragStart(e, { title, id, column })}
        className="cursor-grab rounded border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing"
      >
        <Typography variant="body1" className="text-sm text-neutral-100">
          {title}
        </Typography>
      </motion.div>
    </>
  );
};

const DropIndicator = ({ beforeId, column }) => {
  return (
    <div
      data-before={beforeId || "-1"}
      data-column={column}
      className="my-0.5 h-0.5 w-full bg-violet-400 opacity-0"
    />
  );
};

const AddCard = ({ column, setCards }) => {
  const [text, setText] = useState("");
  const [adding, setAdding] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim().length) return;

    const newCard = {
      column,
      title: text.trim(),
      id: Math.random().toString(),
    };

    setCards((pv) => [...pv, newCard]);

    setAdding(false);
  };

  return (
    <>
      {adding ? (
        <motion.form layout onSubmit={handleSubmit}>
          <TextareaAutosize
            onChange={(e) => setText(e.target.value)}
            autoFocus
            placeholder="Add new task..."
            className="w-full rounded border border-violet-400 bg-violet-400/20 p-3 text-sm text-neutral-50 placeholder-violet-300 focus:outline-0"
          />
          <Grid container direction="row" className="mt-1.5">
            <Button
              onClick={() => setAdding(false)}
              className="px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
            >
              Close
            </Button>
            <Button
              type="submit"
              className="flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-950 transition-colors hover:bg-neutral-300"
            >
              <span>Add</span>
            </Button>
          </Grid>
        </motion.form>
      ) : (
        <motion.button
          layout
          onClick={() => setAdding(true)}
          className="flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400 transition-colors hover:text-neutral-50"
        >
          <span>Add card</span>
        </motion.button>
      )}
    </>
  );
};

const DEFAULT_CARDS = [
  // BACKLOG
  { title: "Look into render bug in dashboard", id: "1", column: "backlog" },
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
];
