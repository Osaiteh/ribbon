import { HashRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Activity from "./Pages/Activity";
import Wallet from "./Pages/Wallet";
import Market from "./Pages/Market";
import Earn from "./Pages/Earn";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/market" component={Market} />
          <Route exact path="/earn" component={Earn} />
        </Switch>
      </Router>
  );
}

export default App;
