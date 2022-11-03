import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Box,
  Typography,
} from "@material-ui/core";

import { listItems } from "../../Configs/SidebarItems";
import { Icons } from "../../Configs/ImageContainer";

const useStyle = makeStyles(() => ({
  sidebar_container: {
    backgroundColor: "#363740",
    width: "18%",
  },

  sidebar_title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "15% 0",
  },
  logo_icon: {
    width: "30px",
    marginRight: "5%",
  },

  listText: {
    color: "#A4A6B3",
  },

  listIcon: {
    color: "#A4A6B3 !important",
  },
}));

export default function Sidebar({ getRightPanel }) {
  const classes = useStyle();

  const handleClick = (index) => () => {
    getRightPanel(index);
  };

  return (
    <>
      <Box className={`${classes.sidebar_container} sidebar_container`}>
        <Box className={`${classes.sidebar_title} sidebar_title`}>
          <img
            src={Icons.Logo}
            alt={"Sidebar Logo"}
            className={`${classes.logo_icon} logo_icon`}
          />
          <Typography style={{ color: "#A4A6B3" }}>Dashboard Kit</Typography>
        </Box>

        <List>
          {listItems.map((listItem = "", index = 0) => (
            <ListItem
              className={classes.listItem}
              button
              key={index}
              onClick={handleClick(index)}
            >
              <ListItemIcon className={`${classes.listIcon} listIcon`}>
                {listItem.listIcon}
              </ListItemIcon>

              <ListItemText
                primary={listItem.listText}
                className={`${classes.listText} listText`}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
