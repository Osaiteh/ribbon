import logo from './logo.svg';
import './App.css';
import NavBar from "./Components/NavBar";
import BalanceCard from "./Components/BalanceCard";
import BalanceSelect from "./Components/BalanceSelect";
import BLists from "./Components/BLists";
import BottomNav from "./Components/BottomNav";
function App() {
  return (
    <div className="App">
      <NavBar />
      <BalanceCard />
      <BalanceCard />
      <h1>
        Select Currency:
      </h1>
      <BalanceSelect />
      <BLists />
      <BottomNav />
    </div>
  );
}

export default App;
