import React from "react";
import {
  makeStyles,
  Box,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
} from "@material-ui/core";
import Header from "../Header";
import {
  analytics_status,
  overviewStatus,
  unsolved_ticket_status,
} from "../../Configs/DashboardAnalytics/overviewStatus";
import { Images } from "../../Configs/ImageContainer";

export default function Dashboard() {
  const classes = useStyle();

  return (
    <>
      <Box className={`${classes.dashboard_container} dashboard_container`}>
        <Header title={"Overview"} />

        <Box className={`${classes.ticket_status} ticket_status`}>
          {Object.values(overviewStatus).map(
            ({ counting = "", label = "" }, index) => {
              return (
                <Card
                  className={`${classes.ticket_card} ticket_card`}
                  key={`${label}-${index}`}
                >
                  <CardContent>
                    <Typography
                      className={`${classes.ticket_title} ticket_title`}
                      color="textSecondary"
                      gutterBottom
                    >
                      {label}
                    </Typography>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={`${classes.ticket_counting} ticket_counting`}
                    >
                      {counting}
                    </Typography>
                  </CardContent>
                </Card>
              );
            }
          )}
        </Box>

        <Box className={`${classes.analytics_1} analytics_1`}>
          <Card className={`${classes.analytics_1_card} analytics_1_card`}>
            <img
              src={Images.Analytics1}
              alt="analytics 1"
              className={`${classes.analytics_1_image} analytics_1_image`}
            />
            <Box className={`${classes.analytics_1_cards} analytics_1_cards`}>
              {Object.values(analytics_status).map(
                ({ counting = "", label = "" }, index) => {
                  return (
                    <Card
                      className={`${classes.analytics_card} analytics_card`}
                      key={`${label}-${index}`}
                    >
                      <Box>
                        <Typography
                          className={`${classes.analytics_title} analytics_title`}
                          color="textSecondary"
                          gutterBottom
                        >
                          {label}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h2"
                          className={`${classes.analytics_counting} analytics_counting`}
                        >
                          {counting}
                        </Typography>
                      </Box>
                    </Card>
                  );
                }
              )}
            </Box>
          </Card>
        </Box>

        <Box className={`${classes.analytics_2_card} analytics_2_card`}>
          <Card className={`${classes.left_card} left_card`}>
            <Box className={`${classes.left_card_header} left_card_header`}>
              <Box
                className={`${classes.left_card_title_box} left_card_title_box`}
              >
                <Typography>Unresolved tickets</Typography>
                <Typography>
                  <span className={`${classes.left_card_text} left_card_text`}>
                    Group:
                  </span>{" "}
                  Support
                </Typography>
              </Box>
              <a
                href="/"
                className={`${classes.left_card_link} left_card_link`}
              >
                <Typography>View Details</Typography>
              </a>
            </Box>

            <List className={`${classes.left_list_group} left_list_group`}>
              {Object.values(unsolved_ticket_status).map(
                ({ label, status }, index) => {
                  return (
                    <>
                      <ListItem
                        key={label + index}
                        role={undefined}
                        dense
                        button
                        className={`${classes.left_list} left_list`}
                      >
                        <ListItemText
                          primary={label}
                          className={`${classes.list_primary} list_primary`}
                        />
                        <ListItemSecondaryAction
                          className={`${classes.list_secondary} list_secondary`}
                        >
                          {status}
                        </ListItemSecondaryAction>
                      </ListItem>

                      {Object.values(unsolved_ticket_status).length - 1 !==
                        index && <Divider />}
                    </>
                  );
                }
              )}
            </List>
          </Card>

          {/* <Card className={`${classes.right_card} right_card`}>
            <Box className={`${classes.right_card_1} right_card_1`}>
              <Box
                className={`${classes.right_card_title_box} right_card_title_box`}
              >
                <Typography>Unresolved tickets</Typography>
                <Typography>
                  <span
                    className={`${classes.right_card_group} right_card_group`}
                  >
                    Group:
                  </span>{" "}
                  Support
                </Typography>
              </Box>
              <Typography>View Details</Typography>
            </Box>
          </Card> */}
        </Box>
      </Box>
    </>
  );
}

const useStyle = makeStyles(() => ({
  dashboard_container: {
    background: "#F7F8FC",
    width: "100%",
    padding: "1% 2%",
  },
  ticket_status: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "4%",
  },

  ticket_card: {
    width: "22%",
    padding: "1%",
  },
  ticket_title: {
    width: "fit-content",
    margin: "auto",
    color: "#9FA2B4",
    fontWeight: "500",
    fontSize: "1rem",
  },
  ticket_counting: {
    width: "fit-content",
    margin: "auto",
    fontWeight: "700",
    fontSize: "2.5rem ",
  },

  analytics_1: {
    marginTop: "4%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  analytics_1_card: {
    display: "flex",
    width: "100%",
  },

  analytics_1_image: {
    width: "70%",
  },

  analytics_1_cards: {
    width: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },

  analytics_card: {
    borderRadius: "0px ",
    height: "20%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  analytics_title: {
    width: "fit-content",
    margin: "auto",
    color: "#9FA2B4",
    fontSize: "1rem",
  },
  analytics_counting: {
    width: "fit-content",
    margin: "auto",
    fontWeight: "600",
    fontSize: "1.5rem ",
  },

  analytics_2_card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "4%",
  },
  left_card: {
    width: "48%",
  },

  left_card_header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start",
    padding: "4% 5%",
  },

  left_list_group: {
    // padding: "10% 0%",
  },
  left_list: {
    padding: "2% 5%",
  },

  left_card_link: {
    textDecoration: "none",
  },

  left_card_text: {
    color: "#9FA2B4",
  },

  list_primary: {
    fontWeight: "500",
  },
  list_secondary: {
    color: "#C5C7CD",
    fontSize: "0.8rem",
  },
}));
