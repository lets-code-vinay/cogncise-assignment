import React from "react";
import { useNavigate } from "react-router";
import { Popover, Typography, makeStyles } from "@material-ui/core";

import Spinner from "../Spinner";
import "./styles.css";

function Logout({ onClose, id, open, anchorEl }) {
  const classes = useStyle();
  const navigate = useNavigate();

  const [showLoader, setLoader] = React.useState(false);

  /**
   * @description Logging out
   */
  const handleLogout = () => {
    if (showLoader) return;

    try {
      setLoader(true);

      localStorage.clear();
      navigate("/login");

      setLoader(false);
    } catch (error) {
      console.error(error);

      setLoader(false);
    }
  };

  return (
    <>
      {showLoader && <Spinner />}

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography} onClick={handleLogout}>
          Logout
        </Typography>
      </Popover>
    </>
  );
}

export default Logout;

const useStyle = makeStyles(() => ({
  typography: {
    padding: "5px",
    cursor: "pointer",
  },
}));
