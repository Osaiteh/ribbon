import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import AccountCircle from "@material-ui/icons/AccountCircle";
import NotificationsIcon from "@material-ui/icons/Notifications";
import logo from "../Assets/logo.svg";


const useStyles = makeStyles((theme) => ({
  grow: {
    backgroundColor: "white",
    flexGrow: 1,
  },
  bar: {
    backgroundColor: "white",
    color: "#e2267b",
  },
}));

function RAppBar(props) {
  const classes = useStyles();
  return (
    <div className={classes.grow}>
      <AppBar className={classes.bar} position="static">
        <Toolbar>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "20px", margin: "15px" }}
          />
          <Typography className={classes.title} variant="h4" noWrap>
            {props.title}
          </Typography>
          <div className={classes.grow} />
          <IconButton>
            <AccountCircle />
          </IconButton>
          <IconButton color="inherit">
            <Badge color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default RAppBar;
