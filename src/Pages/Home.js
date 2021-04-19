import RAppBar from "../Components/RAppBar";
import BalanceCards from "../Components/BalanceCards";
import BalanceSelect from "../Components/BalanceSelect";
import BLists from "../Components/BLists";
import BottomNav from "../Components/BottomNav";
import "../Components/BottomNav.css"

function Home() {
  
  return (
    <div>
      <RAppBar title="ribbon" />
      <BalanceCards />
      <h1>Select Currency:</h1>
      <BalanceSelect />
      <BLists />
      <BottomNav
        home = "true"
      />
    </div>
  );
}

export default Home;
