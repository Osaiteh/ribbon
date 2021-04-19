import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
  },
  til: {
    backgroundColor: "white",
    color: "#e2267b",
    marginBottom: "5px",
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
      <Card className={classes.root}>
          <Paper className={classes.paper}>
            <CardContent className={classes.cont}>
              <Avatar
                  className={classes.til}>
                <Typography
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
          </Paper>
      </Card>
    );
}
export default BalanceCard;