import { FC, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { FixedSizeList } from "react-window";
import { addTodo } from "../../../store";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import TextField from "@mui/material/TextField/TextField";
import SingleBox from "./SingleBox";
import Box from "@mui/material/Box/Box";
import ListItemButton from "@mui/material/ListItemButton/ListItemButton";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ListItemAvatar from "@mui/material/ListItemAvatar/ListItemAvatar";
import Avatar from "@mui/material/Avatar/Avatar";
import ImageIcon from "@mui/icons-material/Image";
import ClearButton from "../ClearButton";
import CircularProgress from "@mui/material/CircularProgress/CircularProgress";
const ListBox: FC<{
  enteredData: any[];
}> = ({ enteredData }) => {
  const dispatch = useDispatch();
  const onAddTodo = (title: string) => {
    dispatch(addTodo(title));
  };
  const [dataSet, setDataSet] = useState<any[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [inputValue, setinputValue] = useState<string>("");
  // mock api behave
  useEffect(() => {
    setTimeout(() => {
      setDataSet(enteredData);
      setLoading(false);
    }, 2000);
  }, []);
  useEffect(() => {
    let strArray = [...enteredData];

    setDataSet(
      strArray.filter((word: any) =>
        word.first_name.toLowerCase().includes(inputValue.toLowerCase())
      )
    );
  }, [inputValue]);

  return (
    <SingleBox>
      <TextField
        id="outlined-basic"
        label="Outlined"
        variant="outlined"
        sx={{
          width: "98%",
        }}
        value={inputValue}
        onChange={(e) => setinputValue(e.target.value)}
      />
      <VirtualizedList
        addItem={onAddTodo}
        dataSet={dataSet}
        loading={loading}
      />
    </SingleBox>
  );
};

function renderRow(props: any) {
  const { index, style } = props;
  const primary = props.data.dataSet[index]?.first_name;
  const secindery = props.data.dataSet[index]?.last_name;
  const fullName = `${primary} ${secindery ? secindery : "Doe"}`;

  const email = props.data.dataSet[index]?.email;
  if (!primary) {
    return null;
  }
  return (
    <ListItem
      style={style}
      key={index}
      component="div"
      disablePadding
      onClick={() => props.data.addItem(secindery ? primary : email)}
    >
      <ListItemButton>
        <ListItemAvatar>
          <Avatar>
            <ImageIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={fullName} secondary={email} />
        <AddBoxIcon sx={{ fontSize: 30 }}></AddBoxIcon>
      </ListItemButton>
    </ListItem>
  );
}

export const VirtualizedList: FC<{
  addItem: any;
  dataSet: any;
  loading: any;
}> = ({ addItem, dataSet, loading }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 450,
        bgcolor: "background.paper",
        mt: 2,
      }}
    >
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "450px",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <FixedSizeList
          height={450}
          width="100%"
          itemSize={66}
          itemCount={100}
          overscanCount={5}
          itemData={{ addItem, dataSet }}
        >
          {renderRow}
        </FixedSizeList>
      )}
      <ClearButton />
    </Box>
  );
};

export default ListBox;
