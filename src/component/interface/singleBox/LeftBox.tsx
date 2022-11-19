import IconButton from "@mui/material/IconButton/IconButton";
import List from "@mui/material/List/List";
import ListItem from "@mui/material/ListItem/ListItem";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import TextField from "@mui/material/TextField/TextField";
import SingleBox from "./SingleBox";
import CommentIcon from "@mui/icons-material/Comment";

const LeftBox = () => {
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

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          maxHeight: "100px",
        }}
      >
        {[1, 2, 3, 4].map((value) => (
          <ListItem
            key={value}
            disableGutters
            secondaryAction={
              <IconButton aria-label="comment">
                <CommentIcon />
              </IconButton>
            }
            sx={{ borderBottom: 1, borderColor: "#f5f5f5" }}
          >
            <ListItemText primary={`Line item ${value}`} />
          </ListItem>
        ))}
      </List>
    </SingleBox>
  );
};

export default LeftBox;
