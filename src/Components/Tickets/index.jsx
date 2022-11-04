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
  TablePagination,
  Chip,
} from "@material-ui/core";
import {
  FilterList as FilterListIcon,
  MoreVert as MoreVertIcon,
} from "@material-ui/icons";

import { APIs } from "../../Configs/Apis";
import Spinner from "../Spinner";
import Header from "../Header";
import User from "../User";

export default function Tickets() {
  const classes = useStyle();

  const [tickets, setTicket] = React.useState([]);
  const [showLoader, setLoader] = React.useState(false);
  const [isUserModalOpen, setUserModal] = React.useState(false);
  const [userData, setUserData] = React.useState({});

  /**
   * To get Date and Time
   * @returns
   */
  function toDateTime() {
    var time = new Date(1970, 0, 1);
    time.setSeconds(Date.now() * Math.random());
    return time;
  }

  /**
   * Fetch ticket from Fake API
   */
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
      setLoader(false);
    }
  };

  /**
   * Hook
   */
  React.useEffect(() => {
    fetchTickets();
  }, []);

  /**
   * @description Opening user modal
   *
   * @param {Object} data
   */
  const handleUserModel = (data) => {
    setUserModal(true);
    setUserData(data);
  };

  /**
   * @description Closing user modal
   */
  const handleUserModelClose = () => {
    setUserModal(false);
  };

  return (
    <>
      {showLoader && <Spinner />}

      {isUserModalOpen && (
        <User
          userData={userData}
          isOpen={isUserModalOpen}
          handleClose={handleUserModelClose}
        />
      )}
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
                (
                  { avatar = "", email = "", first_name = "", last_name = "" },
                  index
                ) => (
                  <TableRow
                    key={`${first_name}-${index}`}
                    onClick={() => handleUserModel(tickets[index])}
                    className={`${classes.ticket_user} ticket_user`}
                  >
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
                            {`updated ${(Math.random() * 10).toFixed(
                              0
                            )} day ago`}
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
                          on{" "}
                          {toDateTime().toLocaleString("default", {
                            month: "short",
                          }) +
                            " " +
                            toDateTime().getMonth() +
                            ", " +
                            2022}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Box className={`${classes.ticket_matter} ticket_matter`}>
                        <Typography
                          className={`${classes.ticket_primary} ticket_primary`}
                        >
                          {toDateTime().toLocaleString("default", {
                            month: "short",
                          }) +
                            " " +
                            toDateTime().getMonth() +
                            ", " +
                            2022}
                        </Typography>

                        <Typography
                          className={`${classes.ticket_secondary} ticket_secondary`}
                        >
                          on {toDateTime().toLocaleTimeString()}
                        </Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="left">
                      <Chip color="secondary" label={"Low"}></Chip>
                    </TableCell>

                    <TableCell align="left">
                      <MoreVertIcon />
                    </TableCell>
                  </TableRow>
                )
              )}
            </TableBody>
          </Table>
          <TablePagination
            rowsPerPageOptions={[
              Math.round(tickets.length / 5),
              Math.round(tickets.length / 2),
              tickets.length,
            ]}
            component="div"
            count={tickets.length}
            // rowsPerPage={rowsPerPage}
            rowsPerPage={tickets.length}
            page={1}
            // onPageChange={handleChangePage}
            // onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </Paper>
    </>
  );
}

const useStyle = makeStyles(() => ({
  ticket_container: {
    width: "100%",
    padding: "1% 2%",
    height: "100vh",
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
    color: "#9FA2B4 !important",
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
  ticket_user: {
    cursor: "pointer",
  },
}));
