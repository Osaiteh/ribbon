import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
  img: {
    height: "30px",
  },
  bgc: {
    backgroundColor: "white",
  }
}));

function BList(prop) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
        
         
          <div className={classes.demo}>
            <List>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.bgc}>
                      <img className={classes.img} src={prop.img} alt=""/>
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={prop.text}
                  />
                  <ListItemSecondaryAction style={{float:"right"}}>
                    {prop.price}
                  </ListItemSecondaryAction>
                </ListItem>,
            </List>
          </div>
    </div>
  );
}
export default BList;