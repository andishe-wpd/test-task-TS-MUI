import IconButton from "@mui/material/IconButton/IconButton";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import TextField from "@mui/material/TextField/TextField";
import SingleBox from "./SingleBox";
import CommentIcon from "@mui/icons-material/Comment";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import Box from "@mui/material/Box/Box";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Button from "@mui/material/Button/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch, useSelector } from "react-redux";
import { FC, useCallback, useRef } from "react";
import { addTodo, selectTodos } from "../../../store";

const LeftBox = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  const newTodoRef = useRef<HTMLInputElement>(null);
  const onAddTodo = (title: string) => {
    dispatch(addTodo(title));
  };
console.log(todos)
  return (
    <SingleBox>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{
          width: "98%",
        }}
      />
      <VirtualizedList addItem={onAddTodo} />{" "}
    </SingleBox>
  );
};

function renderRow(props: any) {
  const { index, style } = props;
  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      onClick={() => props.data(`Item ${index + 1}`)}
    >
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />{" "}
        <AddBoxIcon sx={{ fontSize: 30 }}></AddBoxIcon>
      </ListItemButton>
    </ListItem>
  );
}

export const VirtualizedList: FC<{ addItem: any }> = ({ addItem }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        bgcolor: "background.paper",
        mt: 2,
      }}
    >
      <FixedSizeList
        height={450}
        width="100%"
        itemSize={46}
        itemCount={200}
        overscanCount={5}
        itemData={addItem}
      >
        {renderRow}
      </FixedSizeList>
      <Button
        sx={{
          width: "100%",
          mt: 2,
        }}
        variant="contained"
      >
        CLEAR LIST
      </Button>
    </Box>
  );
};

export default LeftBox;
