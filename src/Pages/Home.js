import RAppBar from "../Components/RAppBar";
import BalanceCards from "../Components/BalanceCards";
import BalanceSelect from "../Components/BalanceSelect";
import BLists from "../Components/BLists";
import BottomNav from "../Components/BottomNav";
import "../Components/BottomNav.css"
import GreyArea from "../Components/GreyArea"

function Home() {
  
  return (
    <div>
      <RAppBar title="ribbon" />
      <BalanceCards />
      <GreyArea text="Select Currency:" />
      <BalanceSelect />
      <GreyArea text="Recent Activity" />
      <BLists />
      <GreyArea />
      <BottomNav home="true" />
    </div>
  );
}

export default Home;
