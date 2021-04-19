import React from "react";
import RAppBar from "../Components/RAppBar";
import BottomNav from "../Components/BottomNav"

function Activity() {
  return (
    <div>
      <RAppBar title="Activity" />
      <BottomNav activity="true" />
    </div>
  );
}

export default Activity;
