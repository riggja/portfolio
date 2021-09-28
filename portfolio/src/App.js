import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from "./nav-bar/NavBar.js";
import Homepage from "./pages/Homepage.js";
import resume from "./pages/Resume.js";
import projects from './pages/Projects';
import Settings from "./pages/Settings.js";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Switch>
          <Route path="/homepage" component={Homepage} exact/>
          <Route path="/resume" component={resume} />
          <Route path="/projects" component={projects} />
          <Route path="/settings" component={Settings} />
          <Route component={Error}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
