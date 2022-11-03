import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Header from "../Header";

const useStyle = makeStyles(() => ({
  dashboard_container: {
    backgroundColor: "red",
    width: "18%",
    padding: "1% 2%",
  },
}));

export default function Dashboard() {
  const classes = useStyle();

  return (
    <>
      <Box className={`${classes.dashboard_container} dashboard_container`}>
        <Header />
        Dashboard
      </Box>
    </>
  );
}
