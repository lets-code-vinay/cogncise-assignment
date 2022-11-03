import React from "react";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Box,
} from "@material-ui/core";

import { listItems } from "../../Configs/SidebarItems";

const useStyle = makeStyles(() => ({
  sidebar_container: {
    backgroundColor: "red",
    width: "18%",
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
        <List>
          {listItems.map((listItem = "", index = 0) => (
            <ListItem
              className={classes.listItem}
              button
              key={index}
              onClick={handleClick(index)}
            >
              <ListItemIcon className={classes.listItem}>
                {listItem.listIcon}
              </ListItemIcon>
              <ListItemText primary={listItem.listText} />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}
