import MainPage from "./js/MainPage";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <MainPage />
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
