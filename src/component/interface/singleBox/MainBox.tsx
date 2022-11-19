import { TextField } from "@mui/material";
import React from "react";
import SingleBox from "./SingleBox";

const MainBox = () => {
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
    </SingleBox>
  );
};

export default MainBox;
