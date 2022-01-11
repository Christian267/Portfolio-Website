import './App.scss';
import { HomePage } from './pages/HomePage';
import { Resume } from './pages/Resume.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
