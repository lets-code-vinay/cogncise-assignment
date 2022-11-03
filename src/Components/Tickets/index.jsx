import React from "react";
import axios from "axios";
import {
  makeStyles,
  Paper,
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Chip,
} from "@material-ui/core";
import {
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";
import { APIs } from "../../Configs/Apis";
import Spinner from "../Spinner";
import Header from "../Header";

export default function Tickets() {
  const classes = useStyle();

  const [tickets, setTicket] = React.useState([]);
  const [showLoader, setLoader] = React.useState(false);
  const [chipColor, setChipColor] = React.useState("");

  const getChipColor = () => {
    // setChipColor(Math.random() * 100);
  };
  console.log(
    getChipColor(),
    "chipColor",
    chipColor,
    (Math.random() * 10).toFixed(0)
  );

  const fetchTickets = () => {
    try {
      setLoader(true);

      new Promise((resolve, reject) => {
        axios
          .get(APIs.GET_TICKETS)
          .then(({ data: { data = [] } = {} }) => {
            setTicket(data);
            resolve(data);
            setLoader(false);
          })
          .catch((error) => {
            reject(error);
            console.error(error);
            setLoader(false);
          });
      });
    } catch (error) {
      console.error(error);
    }
  };
  console.log(tickets);

  React.useEffect(() => {
    fetchTickets();
  }, []);

  return (
    <>
      {showLoader && <Spinner />}
      <Paper
        elevation={3}
        className={`${classes.ticket_container} ticket_container`}
      >
        <Header title={"Tickets"} />

        <TableContainer
          component={Paper}
          className={`${classes.table_container} table_container`}
        >
          <Box className={`${classes.header_container} header_container`}>
            <Typography variant="h6" className={`${classes.title} title`}>
              All tickets
            </Typography>

            <Box className={`${classes.icons_container} icons_container`}>
              <FilterListIcon
                fontSize="small"
                className={`${classes.icon} icon`}
              />
              <Typography className={`${classes.filters_text} filters_text`}>
                Sort
              </Typography>
            </Box>
            <Box className={`${classes.icons_container} icons_container`}>
              <FilterListIcon
                fontSize="small"
                className={`${classes.icon} icon`}
              />
              <Typography className={`${classes.filters_text} filters_text`}>
                Filter
              </Typography>
            </Box>
          </Box>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className={`${classes.table_heading} table_heading`}>
                  Ticket Details
                </TableCell>
                <TableCell
                  className={`${classes.table_heading} table_heading`}
                  align="left"
                >
                  Customer Name
                </TableCell>
                <TableCell
                  className={`${classes.table_heading} table_heading`}
                  align="left"
                >
                  Date
                </TableCell>
                <TableCell
                  className={`${classes.table_heading} table_heading`}
                  align="left"
                >
                  Priority
                </TableCell>
                <TableCell
                  className={`${classes.table_heading} table_heading`}
                  align="left"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tickets.map(
                ({
                  avatar = "",
                  email = "",
                  first_name = "",
                  last_name = "",
                }) => (
                  <TableRow key={"row.name"}>
                    <TableCell component="th" scope="row">
                      <Box
                        className={`${classes.ticket_detail_container} ticket_detail_container`}
                      >
                        <img
                          src={avatar}
                          alt={first_name}
                          className={`${classes.ticket_avatar} ticket_avatar`}
                        />

                        <Box
                          className={`${classes.ticket_matter} ticket_matter`}
                        >
                          <Typography
                            className={`${classes.ticket_primary} ticket_primary`}
                          >
                            {email}
                          </Typography>

                          <Typography
                            className={`${classes.ticket_secondary} ticket_secondary`}
                          >
                            {"updated 1 day ago"}
                          </Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Box className={`${classes.ticket_matter} ticket_matter`}>
                        <Typography
                          className={`${classes.ticket_primary} ticket_primary`}
                        >
                          {first_name} {last_name}
                        </Typography>

                        <Typography
                          className={`${classes.ticket_secondary} ticket_secondary`}
                        >
                          {"on 24/10/2022"}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Box className={`${classes.ticket_matter} ticket_matter`}>
                        <Typography>{"date"}</Typography>

                        <Typography>{"on 24/10/2022"}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Chip color="secondary" label="chip"></Chip>
                    </TableCell>

                    <TableCell align="left">
                      <MoreVertIcon />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}

const useStyle = makeStyles(() => ({
  ticket_container: {
    width: "100%",
    padding: "1% 2%",
  },
  table_container: {
    marginTop: "4%",
  },
  header_container: {
    display: "flex",
    padding: "1rem",
    alignItems: "center",
  },
  title: {
    flexGrow: "2",
  },
  icons_container: {
    marginLeft: "5px",
    width: "5%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
  },
  icon: {
    width: "1.5rem",
    height: "1.5rem",
    margin: "-3px 1px",
    color: "#4B506D",
  },
  table_heading: {
    color: "#9FA2B4",
  },
  filters_text: {
    fontSize: "1rem",
    fontWeight: "600",
    color: "#4B506D",
  },

  ticket_detail_container: {
    display: "flex",
  },
  ticket_matter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  ticket_avatar: {
    width: "8%",
    borderRadius: "50%",
    marginRight: "4%",
  },

  ticket_primary: {
    fontWeight: "500",
  },
  ticket_secondary: {
    color: "#C5C7CD",
    fontSize: "0.8rem",
  },
}));
