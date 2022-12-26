/*

// INDEX:
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// APP:
import React, { useReducer } from "react";
import PokemonList from './components/PokemonList';


function App() {


  return (
    <div className="App">
      <PokemonList />
    </div>
  );
}

export default App;

// COMPONENTS:
import React from 'react';
import { connect } from 'react-redux';

import { getPokemon } from '../actions';

const PokemonList = (props) => {
    const fetchPokemon = (evt) => {
        evt.preventDefault();
        props.getPokemon();
    };

return (
    <>
    <h2>Welcome to Pokémon World!</h2>
    <div>
        {props.pokemon.map(pokemon => (
        <h4 key={pokemon.url}>{pokemon.name}</h4>
        ))}
    </div>
    {props.error && <p className="error">{props.error}</p>}
    <button onClick={fetchPokemon}>Fetch Pokemon!</button>
    </>
);
};

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    error: state.error
});

export default connect(
    mapStateToProps,
    { getPokemon }
)(PokemonList);

// REDUCERS:
import { 
    FETCH_POKEMON_START, 
    FETCH_POKEMON_FAIL, 
    FETCH_POKEMON_SUCCESS 
} from '../actions';

const initialState = {
  pokemon: [],
  error: '',
  isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch (action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isFetching: false,
                error: ''
            };
        case FETCH_POKEMON_FAIL:
            return{
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}

export default reducer;

// ACTIONS:
import axios from "axios";

export const FETCH_POKEMON_START = 'FETCH_POKEMON_START';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAIL = 'FETCH_POKEMON_FAIL';

export const getPokemon = () => dispatch => {
  dispatch({ type: FETCH_POKEMON_START });
  axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then(res => {
      console.log(res.data);
      dispatch({ type: FETCH_POKEMON_SUCCESS, payload: res.data.results })
    })
    .catch(err => {
      dispatch({ type: FETCH_POKEMON_FAIL, payload: `Ruh-oh, ${err.response.status} ${err.response.data}` })
    });
};

*/