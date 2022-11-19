import IconButton from "@mui/material/IconButton/IconButton";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import TextField from "@mui/material/TextField/TextField";
import SingleBox from "./SingleBox";
import { FixedSizeList } from "react-window";
import Box from "@mui/material/Box/Box";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import Button from "@mui/material/Button/Button";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { useDispatch } from "react-redux";
import { FC } from "react";
import { addTodo, clearTodo } from "../../../store";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ClearButton from "../ClearButton";

const LeftBox = () => {
  const dispatch = useDispatch();
  const onAddTodo = (title: string) => {
    dispatch(addTodo(title));
  };
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
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={`Item ${index + 1}`} secondary="Jan 9, 2014" />
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
        itemSize={66}
        itemCount={10}
        overscanCount={5}
        itemData={addItem}
      >
        {renderRow}
      </FixedSizeList>
      <ClearButton />
    </Box>
  );
};

export default LeftBox;
