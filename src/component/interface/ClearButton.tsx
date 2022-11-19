import Button from "@mui/material/Button/Button";
import { useDispatch } from "react-redux";
import { clearTodo } from "../../store";

const ClearButton = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Button
        sx={{
          width: "100%",
          mt: 2,
        }}
        variant="contained"
        onClick={() => {
          dispatch(clearTodo());
        }}
      >
        CLEAR LIST
      </Button>
    </>
  );
};

export default ClearButton;
