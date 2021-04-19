import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
    color: "white",
  },
  paper: {
    backgroundColor: "#e2267b",
    color: "white",
    display: "flex",
    justifyContent: "space-around",
  },
  til: {
    backgroundColor: "white",
    color: "#e2267b",
    marginBottom: "5px",
    padding: "5px",
    fontWeight:"600",
  },
  cont: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    alignContent: "spaceAround",
    margin: "0px",
  },
});
// e2267b
function BalanceCard(prop) {
  const classes = useStyles();

    return (
      <Card
        style={{
          borderRadius: "25px",
          boxShadow:
            "0 0px 8px 0 rgba(0, 0, 0, 0.2), 10px 6px 10px 10px rgba(0, 0, 0, 0.5)",
        }}
        className={classes.root}
      >
        <Paper className={classes.paper}>
          <CardContent className={classes.cont}>
            <Avatar className={classes.til}>
              <Typography
                className={classes.til}
                variant="body2"
                component="h3"
              >
                {prop.name}
              </Typography>
            </Avatar>
            <Typography variant="h5" component="h2">
              {prop.number}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {prop.type}
            </Typography>
          </CardContent>
          <Divider style={{ color: "white" }} orientation="vertical" flexItem />
          <CardContent className={classes.cont}>
            <Avatar className={classes.til}>
              <Typography
                className={classes.til} style={{ color: "blue" }}
                variant="body2"
                component="h3"
              >
                {prop.nom}
              </Typography>
            </Avatar>
            <Typography variant="h5" component="h2">
              {prop.num}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {prop.typ}
            </Typography>
          </CardContent>
        </Paper>
      </Card>
    );
}
export default BalanceCard;