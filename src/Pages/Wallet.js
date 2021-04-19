import React from "react";
import RAppBar from "../Components/RAppBar";
import BottomNav from "../Components/BottomNav";

function Wallet() {
  return (
    <div>
      <RAppBar title="Wallet" />
    <BottomNav
        wallet = "true"
      />
    </div>
  );
}

export default Wallet;
