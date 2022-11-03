import React from "react";
import { makeStyles, Box } from "@material-ui/core";

const useStyle = makeStyles(() => ({
  dashboard_container: {
    backgroundColor: "red",
    width: "18%",
  },
}));

export default function Dashboard() {
  const classes = useStyle();

  return (
    <>
      <Box className={`${classes.dashboard_container} dashboard_container`}>
        Dashboard
      </Box>
    </>
  );
}
