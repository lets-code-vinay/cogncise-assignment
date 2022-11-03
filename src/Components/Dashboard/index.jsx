import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Header from "../Header";

const useStyle = makeStyles(() => ({
  dashboard_container: {
    background: "#F7F8FC",
    width: "100%",
    padding: "1% 2%",
  },
}));

export default function Dashboard() {
  const classes = useStyle();

  return (
    <>
      <Box className={`${classes.dashboard_container} dashboard_container`}>
        <Header title={"Overview"} />
        {/* Dashboard */}
      </Box>
    </>
  );
}
