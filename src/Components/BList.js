import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';

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
                  <ListItemSecondaryAction>
                    {prop.price}
                  </ListItemSecondaryAction>
                </ListItem>,
            </List>
          </div>
    </div>
  );
}
export default BList;