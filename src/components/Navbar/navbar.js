import React from "react";
import "./navbar.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const navbar = () => {
  return (
    <div className="navCon">
      <div className="logo">STUDENT-LIB</div>
      <Stack spacing={2} direction="row">
        <Button className="student" variant="contained">
          Students
        </Button>
        <Button className="book" variant="outlined">
          Books
        </Button>
      </Stack>
    </div>
  );
};

export default navbar;
