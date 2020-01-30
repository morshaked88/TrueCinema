import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import { MovieProvider } from './Store/movieProvider';

import Navbar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import WrongPage from './components/404/WrongPage';
import MyMoviesPage from './components/MyMovies/MyMovies';
import MovieData from './components/MyMovies/MovieDetails/MovieDetails';

const App = () => (
  <Router>
    <AppBox className="App">
      <MovieProvider>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/My-Movies' component={MyMoviesPage} />
          <Route path='/movie' component={MovieData} />
          <Route component={WrongPage} />
        </Switch>
      </MovieProvider>
    </AppBox>
  </Router>
)


export default App;

const AppBox = styled.div`
width: 100%;
height: 100%;
overflow: hidden;
`;