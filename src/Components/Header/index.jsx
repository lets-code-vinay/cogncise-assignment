import React from "react";
import { makeStyles, Box, Typography } from "@material-ui/core";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";
import { Images } from "../../Configs/ImageContainer";
import Logout from "../LogoutComponent";

export default function Header({ title = "title", name = "" }) {
  const classes = useStyle();

  const [anchorEl, setAnchorEl] = React.useState(null);

  /**
   * @description: On click profile picture
   *
   * @param {Object} event
   */
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  /**
   * @description: On click outside of profile picture
   */
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box className={`${classes.main_header_container} main_header_container`}>
        <Typography variant="h4">{title}</Typography>
        <Box className={`${classes.icon_container} icon_container`}>
          <SearchIcon className={`${classes.icons} icons`} />
          <NotificationsIcon className={`${classes.icons} icons`} />

          <Box className={`${classes.user_details} user_details`}>
            <Typography variant="h6">{"Jones Ferdinand"}</Typography>
            <img
              src={Images.Avatar}
              alt={"avatar"}
              className={`${classes.avatar} avatar`}
              aria-describedby={id}
              onClick={handleClick}
            />

            <Logout
              onClose={handleClose}
              id={id}
              open={open}
              anchorEl={anchorEl}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
}

const useStyle = makeStyles(() => ({
  main_header_container: {
    display: "flex",
    justifyContent: "space-between",
    margin: "1% 0",
  },
  icon_container: {
    display: "flex",
    justifyContent: "space-between",
    width: "22%",
    alignItems: "center",
  },
  user_details: {
    borderLeft: "1px solid #DFE0EB",
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  avatar: {
    borderRadius: "50%",
    outline: "2px",
  },

  icons: {
    color: "#C5C7CD",
  },
}));
