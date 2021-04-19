import React from 'react';
import RAppBar from "../Components/RAppBar";
import BottomNav from "../Components/BottomNav";

function Earn() {
    return (
      <div>
        <RAppBar title="Earn" />
        <BottomNav earn="true" />
      </div>
    );
}

export default Earn;
