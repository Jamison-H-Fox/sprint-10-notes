/*
// Index:
// THIS HAS THE <Provider> ELEMENT WRAPPING THE <App /> COMPONENT
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

function reducer() {
  return {
    user: {
      name: 'Dustin'
    },
    movies: [
      'Star Wars',
      'Lord of the Rings',
      'Harry Potter'
    ],
    todoList: [
      { task: 'Learn Redux', id: 0, completed: false }
    ],
    moviesToWatch: 13
  }
}

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// App COMPONENT:

import React, { useReducer } from "react";
import MovieList from "./components/MovieList";

function App() {
  

  return (
      <div className="App">
        <h1>Redux Movies</h1>
        <MovieList />
      </div>
  );
}

export default App;

// OTHER COMPONENTS:
import { connect } from "react-redux";
import React from "react";
import Movie from "./Movie";

const mapStateToProps = state => {
    return {
        movies: state.movies,
        moviesToWatch: state.moviesToWatch,
        user: state.user
    }
}

function MovieList(props) {

    return(
        <div>
            <h2>User: {props.user.name}</h2>
            <p>Moveies to Watch: {props.moviesToWatch}</p>
            {props.movies.map((movie, idx) => <Movie key={idx} movie={movie} />)}
        </div>
    );
};

export default connect(mapStateToProps, {})(MovieList)

import React from "react";

function Movie(props) {


    return (
        <h2>{props.movie}</h2>
    )
}

export default Movie
*/