import React from 'react'
import BList from "./BList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function BLists() {
    return (
        <div>
            <Grid item xs={12} md={6}>
        <Typography variant="h6">
          Recent Activity
        </Typography>
        <BList />
        <BList />
            <BList />
            
      </Grid>
      </div>
    );
}

export default BLists
