import React from 'react'
import BList from "./BList";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hiv from "../Assets/001-red-ribbon.svg";
import Lungs from "../Assets/003-lungs.svg";
import Arm from "../Assets/005-arm.svg";
import Divider from "@material-ui/core/Divider";

function BLists() {
    return (
      <div>
        <Grid item xs={12} md={6}>
          <Typography variant="h6">Recent Activity</Typography>
          <BList img={Hiv} text="Hiv Blood Draw Test" price="A100" />
          <Divider />
          <BList img={Lungs} text="TB Radiology XRay" price="A30" />
          <Divider />
          <BList img={Arm} text="Blood Pressure Check" price="A10" />
        </Grid>
      </div>
    );
}

export default BLists
