import MainPage from "./js/MainPage";
import { Route, HashRouter } from "react-router-dom";
import Result from "./js/Result";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/result" component={Result} />
      </HashRouter>
    </div>
  );
}

export default App;
