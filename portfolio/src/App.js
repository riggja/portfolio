import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./nav-bar/NavBar.js";
import Homepage from "./pages/Homepage.js";
import Files from "./pages/Files.js";
import newFile from './pages/newFile';
import Settings from "./pages/Settings.js";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/homepage" component={Homepage} exact/>
          <Route path="/files" component={Files} />
          <Route path="/newFile" component={newFile} />
          <Route path="/settings" component={Settings} />
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
