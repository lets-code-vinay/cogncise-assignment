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
              <Typography variant="body">Sort</Typography>
            </Box>
            <Box className={`${classes.icons_container} icons_container`}>
              <FilterListIcon
                fontSize="small"
                className={`${classes.icon} icon`}
              />
              <Typography variant="body">Filter</Typography>
            </Box>
          </Box>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Ticket Details</TableCell>
                <TableCell align="right">Customer Name</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Priority</TableCell>
                <TableCell align="right"></TableCell>
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
                          <Typography>{email}</Typography>

                          <Typography>{"updated 1 day ago"}</Typography>
                        </Box>
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Box className={`${classes.ticket_matter} ticket_matter`}>
                        <Typography>
                          {" "}
                          {first_name} {last_name}
                        </Typography>

                        <Typography>{"on 24/10/2022"}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Box className={`${classes.ticket_matter} ticket_matter`}>
                        <Typography>{"date"}</Typography>

                        <Typography>{"on 24/10/2022"}</Typography>
                      </Box>
                    </TableCell>

                    <TableCell align="right">
                      <Chip color="secondary" label="chip"></Chip>
                    </TableCell>

                    <TableCell align="right">
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
  },
  icon: {
    width: "15px",
    height: "15px",
    margin: "-3px 1px",
  },

  ticket_detail_container: {
    display: "flex",
  },
  ticket_matter: {
    display: "flex",
    flexDirection: "column",
  },

  ticket_avatar: {
    width: "10%",
    borderRadius: "50%",
  },
}));
