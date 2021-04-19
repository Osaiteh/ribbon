import RAppBar from "../Components/RAppBar";
import BalanceCards from "../Components/BalanceCards";
import BalanceSelect from "../Components/BalanceSelect";
import BLists from "../Components/BLists";
import BottomNav from "../Components/BottomNav";
import "../Components/BottomNav.css"
import GreyArea from "../Components/GreyArea"
import BButton from "../Components/BButtons"
function Home() {
  
  return (
    <div>
      <RAppBar title="ribbon" />
      <BalanceCards />
      <GreyArea text="Select Currency:" />
      <BalanceSelect />
      <BButton text="send" txt="receive"/>
      <GreyArea text="Recent Activity" />
      <BLists />
      <GreyArea style={{ height: "10px" }} />
      <BottomNav home="true" />
    </div>
  );
}

export default Home;
