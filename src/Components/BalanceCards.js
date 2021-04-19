import React from "react";
import BalanceCard from "./BalanceCard";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    display: "flex",
    flexDirection: "column",
  },
  wid: {
    display: "flex",
    flexDirection: "column"
  },
  nuu: {
    textAlign: "center",
    display: "flex",
    alignContent: "center",
    justifyItems: "center",
  },
}));

function BalanceCards() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.wid}>
        <Paper className={classes.paper}>
          <p>
            <BalanceCard
              className={classes.nuu}
              name="AFYA"
              number="143.00"
              type="Balance"
              nom="ZAR"
              num="R21.00"
              typ="Equivalent"
            />
            {/*  */}
            {/* <BalanceCard className={classes.nuu} name="ZAR" number="R21.00" type="Equivalent" /> */}
          </p>{" "}
        </Paper>
      </div>
    </div>
  );
}

export default BalanceCards;
