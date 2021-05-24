import { Route } from "react-router-dom";
import "./App.css";
import Detail from "./components/detail";
import List from "./components/list";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path="/" component={List}/>
        <Route path="/detail/:id" component={Detail}></Route>
      </header>
    </div>
  );
}

export default App;
