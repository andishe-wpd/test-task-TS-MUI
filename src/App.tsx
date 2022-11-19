import React, { useCallback, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";

import store, { selectTodos, addTodo, removeTodo } from "./store";

import { useTodos } from "./useTodos";
import "./App.css";
import Button from "@mui/material/Button/Button";
import BoxWrapper from "./component/interface/BoxWrapper";
import Header from "./component/interface/Header";

const Heading = ({ title }: { title: string }) => <h2>{title}</h2>;

const Box: React.FunctionComponent = ({ children }) => (
  <div
    style={{
      padding: "1rem",
      fontWeight: "bold",
    }}
  >
    {children}
  </div>
);

function UL<T>({
  items,
  render,
  itemClick,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
> & {
  items: T[];
  render: (item: T) => React.ReactNode;
  itemClick: (item: T) => void;
}) {
  return (
    <ul>
      {items.map((item, index) => (
        <li onClick={() => itemClick(item)} key={index}>
          {render(item)}
        </li>
      ))}
    </ul>
  );
}

function App() {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);

  const onAddTodo = useCallback(() => {
    if (newTodoRef.current) {
      dispatch(addTodo(newTodoRef.current.value));
      newTodoRef.current.value = "";
    }
  }, [dispatch]);

  return (
    <div>
      <Heading title="Introduction" />
      <Box>Hello there</Box>

      <Heading title="Todos" />
      <UL
        items={todos}
        itemClick={(item) => alert(item.id)}
        render={(todo) => (
          <>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>
              Remove
            </button>
          </>
        )}
      />
      <div>
        <input type="text" ref={newTodoRef} />
        <Button onClick={onAddTodo}>Add Todo</Button>
      </div>
    </div>
  );
}

const JustTheTodos = () => {
  const todos = useSelector(selectTodos);
  return (
    <UL
      items={todos}
      itemClick={() => {}}
      render={(todo) => <>{todo.text}</>}
    />
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <Header />
    {/* <div
      style={{
        display: "grid",
        gridTemplateColumns: "50% 50%",
      }}
    >
      <App />
      <JustTheTodos />
      <Button variant="outlined">Outlined</Button>{" "}
    </div> */}
    <BoxWrapper />
  </Provider>
);

export default AppWrapper;
