import React from "react";
import RightBox from "./singleBox/RightBox";
import ListBox from "./singleBox/ListBox";
import Box from "@mui/material/Box/Box";
import { leftData } from "../../data/left";
import { centerData } from "../../data/center";
const BoxWrapper = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <ListBox enteredData={leftData} />
        <ListBox enteredData={centerData} />
        <RightBox />
      </Box>
    </div>
  );
};

export default BoxWrapper;
