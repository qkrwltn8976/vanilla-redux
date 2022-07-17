import {
  configureStore,
  //   createAction,
  //   createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// createSlice
const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() }); // can mutate state, no use to return new state
    },
    remove: (state, action) =>
      state.filter((toDo) => toDo.id !== action.payload), // should return state
  },
});

const store = configureStore({ reducer: toDos.reducer }); // work with middleware (add defaults to the store)

export const { add, remove } = toDos.actions;

export default store;

// // REACT TOOLKIT
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// const reducer = createReducer([], {
//   // 1. return new state -> should return 2. mutate state -> immer & redux-toolkit do for you
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() }); // can mutate state, no use to return new state
//   },
//   [deleteToDo]: (state, action) =>
//     state.filter((toDo) => toDo.id !== action.payload), // should return state
// });

// REACT REDUX
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     case addToDo.type:
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };
