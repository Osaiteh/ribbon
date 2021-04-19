import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import ReceiptIcon from "@material-ui/icons/Receipt";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import StoreIcon from "@material-ui/icons/Store";
import RedeemIcon from "@material-ui/icons/Redeem";
import styled from "styled-components";


  var isActive;
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  labelIcon: {
    '& $wrapper > *:first-child': {
      marginBottom: 0,
      marginRight: 16,
      fontSize: 20,
    },
  },
});
const BNA = styled(BottomNavigationAction)`
  color: ${(props) => (props.isActive ? "#f9314b" : "#fba9b5")};
  flex: 1;
  padding: "6px 16px";
`;


function BottomNav(prop) {
  const classes = useStyles();
  return (
    <BottomNavigation
      className={classes.root}
    >
      <Link className="Linked" to="./">
        <BNA
          className="item"
          isActive={prop.home}
          label="Home"
          icon={<HomeIcon />}
        />
      </Link>
      <Link className="Linked" to="./activity">
        <BNA label="Activity" isActive={prop.activity} icon={<ReceiptIcon />} />
      </Link>
      <Link className="Linked" to="./wallet">
        <BNA
          label="Wallet"
          isActive={prop.wallet}
          icon={<AccountBalanceWalletIcon />}
        />
      </Link>
      <Link className="Linked" to="./market">
        <BNA label="Market" isActive={prop.market} icon={<StoreIcon />} />
      </Link>
      <Link className="Linked" to="./earn">
        <BNA label="Earn" isActive={prop.earn} icon={<RedeemIcon />} />
      </Link>
    </BottomNavigation>
  );
}

export default BottomNav;
