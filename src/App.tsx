import React, { useCallback, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store, { selectTodos, addTodo, removeTodo } from "./store";

import { useTodos } from "./useTodos";
import "./App.css";
import Button from "@mui/material/Button/Button";
import BoxWrapper from "./component/interface/BoxWrapper";
import Header from "./component/interface/Header";

const AppWrapper = () => (
  <Provider store={store}>
    <Header />
    <BoxWrapper />
  </Provider>
);

export default AppWrapper;
