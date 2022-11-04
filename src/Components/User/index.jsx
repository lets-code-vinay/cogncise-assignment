import React from "react";
import { makeStyles, Box, Typography, Modal } from "@material-ui/core";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: "16%",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

    display: "flex",
    flexDirection: "column",
    height: "30%",
    border: "2px solid #363740",
    borderRadius: "25px",
  },

  modal_avatar: {
    width: "70%",
    margin: "auto",
    borderRadius: "50%",
    border: "1px solid #363740",
  },
}));

export default function User({
  isOpen = false,
  handleClose = () => {},
  userData = {},
}) {
  const {
    avatar = "",
    first_name = "",
    last_name = "",
    email = "",
  } = userData || {};

  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Box style={modalStyle} className={classes.paper}>
          <img
            src={avatar}
            alt={first_name}
            className={`${classes.modal_avatar} modal_avatar`}
          />
          <Box>
            <Typography variant="h6" id="simple-modal-title">
              Name: {first_name} {last_name}
            </Typography>
            <Typography id="simple-modal-description">
              Email: {email}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </>
  );
}
