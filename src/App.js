import React from 'react';
import {MovieProvider} from "./context/MovieContext";
import MovieList from "./components/MovieList";
import Movie from "./components/Movie";
import Nav from "./components/Nav";
import AddMovie from "./components/AddMovie";
import './App.css';

function App() {
  return (
  <MovieProvider>
    <div className="App">
      <Nav />
      <MovieList />
      <AddMovie />
    </div>
  </MovieProvider>
  );
}

export default App;

