import React from "react";
import RightBox from "./singleBox/RightBox";
import LeftBox from "./singleBox/LeftBox";
import MainBox from "./singleBox/MainBox";
import Box from "@mui/material/Box/Box";
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
        <LeftBox />
        <MainBox />
        <RightBox />
      </Box>
    </div>
  );
};

export default BoxWrapper;
