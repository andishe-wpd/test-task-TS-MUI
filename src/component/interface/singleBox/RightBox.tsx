import Chip from "@mui/material/Chip/Chip";
import Stack from "@mui/material/Stack/Stack";

import { useDispatch, useSelector } from "react-redux";
import { removeTodo, selectTodos } from "../../../store";
import SingleBox from "./SingleBox";

const RightBox = () => {
  const todos = useSelector(selectTodos);
  const dispatch = useDispatch();

  return (
    <SingleBox>
      Tap to delete
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "40px",
        }}
      >
        {todos.map((itm: any, idx: any) => {
          return (
            <Stack
              key={itm.id}
              sx={{
                mt: 1,
                mx: 1,
              }}
              direction="row"
              spacing={3}
              onClick={() => {
                dispatch(removeTodo(itm.id));
              }}
            >
              <Chip
                sx={{
                  "&:hover": {
                    boxShadow: 8,
                  },
                  cursor: "pointer",
                }}
                color="primary"
                label={itm.text}
              />
            </Stack>
          );
        })}
      </div>
    </SingleBox>
  );
};

export default RightBox;
