import React from "react";
import { makeStyles, Paper, Box, Typography } from "@material-ui/core";
import {
  Search as SearchIcon,
  Notifications as NotificationsIcon,
} from "@material-ui/icons";
import { Images } from "../../Configs/ImageContainer";

export default function Header({ title = "title", name = "" }) {
  const classes = useStyle();
  return (
    <>
      <Box className={`${classes.main_header_container} main_header_container`}>
        <Typography variant="h4">{title}</Typography>
        <Box className={`${classes.icon_container} icon_container`}>
          <SearchIcon />
          <NotificationsIcon />|<Typography variant="h6">{name}</Typography>
          <img src={Images.Avatar} alt={"avatar"} />
        </Box>
      </Box>
    </>
  );
}

const useStyle = makeStyles(() => ({
  main_header_container: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon_container: {
    display: "flex",
  },
}));
