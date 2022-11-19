import Chip from "@mui/material/Chip/Chip";
import Stack from "@mui/material/Stack/Stack";
import TextField from "@mui/material/TextField/TextField";
import React from "react";
import SingleBox from "./SingleBox";

const RightBox = () => {
  return (
    <SingleBox>
      Tap to delete
      <Stack
        sx={{
          mt: 3,
        }}
        direction="row"
        spacing={1}
      >

        <Chip
          sx={{
            "&:hover": {
              boxShadow: 8,
            },
            cursor: "pointer",
          }}
          color="primary"
          label="Soft"
        />

      </Stack>
    </SingleBox>
  );
};

export default RightBox;
