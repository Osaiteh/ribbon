import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function BButtons(prop) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button
        style={{
          margin: "30px 26px",
          backgroundColor: "#03a9f3",
          width: "40vw",
          color: "white",
          padding: "10px",
        }}
        className={classes.btn}
        variant="contained"
      >
        {prop.text}
      </Button>
      <Button
        style={{
          margin: "30px 26px",
          float: "right",
          backgroundColor: "#03a9f3",
          width: "40vw",
          color: "white",
          padding: "10px",
        }}
        className={classes.btn}
        variant="contained"
      >
        {prop.txt}
      </Button>
    </div>
  );
}
export default BButtons;