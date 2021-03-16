import HomePage from '../src/pages/HomePage';
import PopularsPage from '../src/pages/PopularsPage';
import SingleMovie from '../src/pages/SingleMovie';
import MoviePage from '../src/pages/MoviesPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import '../src/assets/styles/main.scss';

import Header from '../src/container/Header';
import './assets/styles/main.scss';


function App() {

  return (
    <div className="App">
        <Router>

          <Header/>

          <Switch className="navbar">
            <Route exact path="/" component={HomePage} className="navbar_item"/>
            <Route exact path="/populars" component={PopularsPage} className="navbar_item"/>
            <Route exact path="/movies" component={MoviePage} className="navbar_item"/>
            <Route exact path="/movie/:id" component={SingleMovie} className="navbar_item"/>
          </Switch>
        </Router>
    </div>
  );
}
                                
export default App;
