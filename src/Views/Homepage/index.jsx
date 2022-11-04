import React from "react";
import { makeStyles, Box } from "@material-ui/core";
import Sidebar from "../../Components/Sidebar";
import Tickets from "../../Components/Tickets";
import Dashboard from "../../Components/Dashboard";

const Homepage = () => {
  const classes = useStyle();

  const [panel, setPanel] = React.useState(0);

  const getRightPanel = (index) => {
    setPanel(index);
  };

  return (
    <>
      <Box className={`${classes.main_container} main_container`}>
        <Sidebar getRightPanel={getRightPanel} />

        {panel !== 1 && <Dashboard />}
        {panel === 1 && <Tickets />}
      </Box>
    </>
  );
};

export default Homepage;

const useStyle = makeStyles(() => ({
  main_container: {
    display: "flex",
  },
}));
