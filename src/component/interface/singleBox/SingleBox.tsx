import Box from "@mui/material/Box/Box";
import React, { FC } from "react";

const SingleBox: FC<any> = (props) => {
  return (
    <Box
      sx={{
        width: 1 / 4,
        flexWrap: "wrap",
        height: "73vh",
        p: 1,
        bgcolor: (theme) =>
          theme.palette.mode === "dark" ? "#101010" : "grey.100",
        color: (theme) =>
          theme.palette.mode === "dark" ? "grey.300" : "grey.800",
        border: "1px solid",
        borderColor: (theme) =>
          theme.palette.mode === "dark" ? "grey.800" : "grey.300",
        borderRadius: 2,
        fontSize: "0.875rem",
        fontWeight: "700",
        textAlign: "center",
      }}
    >
      {props.children}
    </Box>
  );
};

export default SingleBox;
