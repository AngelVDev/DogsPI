import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Detail from "./components/Detail";
import Creator from "./components/Creator";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/dogs/:id" component={Detail} />
          <Route exact path="/create" component={Creator} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
