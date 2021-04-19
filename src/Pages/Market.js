import React from "react";
import RAppBar from "../Components/RAppBar";
import BottomNav from "../Components/BottomNav";

function Market() {
  return (
    <div>
      <RAppBar title="Market" />
    <BottomNav
        market = "true"
      />
    </div>
  );
}

export default Market;
