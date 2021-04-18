import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import StoreIcon from "@material-ui/icons/Store";
import RedeemIcon from "@material-ui/icons/Redeem";

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Activity" icon={<ReceiptIcon />} />
      <BottomNavigationAction
        label="Wallet"
        icon={<AccountBalanceWalletIcon />}
      />
      <BottomNavigationAction label="Market" icon={<StoreIcon />} />
      <BottomNavigationAction label="Earn" icon={<RedeemIcon />} />
    </BottomNavigation>
  );
}
export default BottomNav;