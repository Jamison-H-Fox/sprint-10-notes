/*
// INDEX:
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

import reducer from './reducers';

import Title from './components/Title';
import './styles.css';

const store = createStore(reducer, applyMiddleware(logger));

function App() {
  return (
    <div className="App">
      <Title />
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

// STYLES
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
  background-image: linear-gradient(#e383b9, #9470d5, #5f65e9);
}

.App {
  font-family: sans-serif;
  text-align: center;
  padding: 36px;
}

h1 {
  margin: 0;
  color: white;
}

input {
  margin-top: 16px;
  margin-right: 8px;
}

// REDUCERS (INDEX)
import { UPDATE_TITLE } from '../actions';

const initialState = {
  title: 'Title from Redux store'
};

function reducer(state = initialState, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      };
    default:
      return state;
  }
}

export default reducer;

// ACTIONS (INDEX)
export const UPDATE_TITLE = 'UPDATE_TITLE';

export function updateTitle(newTitle) {
  console.log(newTitle);
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
}

// COMPONENTS
import React from 'react';
import { connect } from 'react-redux';

import { updateTitle } from '../actions';

class Title extends React.Component {
  state = {
    newTitleText: ''
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  updateTitle = e => {
    e.preventDefault();
    this.props.updateTitle(this.state.newTitleText);
  };

  render() {
    return (
      <div>
        <h1>{this.props.titleOnProps}</h1>
        <input
          type="text"
          name="newTitleText"
          value={this.state.newTitleText}
          onChange={this.handleChanges}
        />
        <button onClick={this.updateTitle}>Update title</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    titleOnProps: state.title
  };
};

export default connect(
  mapStateToProps,
  { updateTitle } // same as { updateTitle: updateTitle }
)(Title);


*/