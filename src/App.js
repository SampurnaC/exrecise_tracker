import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import Create from './components/Create';
import Edit from './components/edit';
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/exercises/:id/edit">
            <Edit />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
