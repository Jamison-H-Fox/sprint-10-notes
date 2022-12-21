* To get started with Redux, you need to import the following into your index.js file:
    import { legacy_createStore as createStore } from "redux";
    import { Provider } from "react-redux";

* Once you have those imports, you need to create the redux store like so:
    const store = createStore(reducer);

* You need to have created a reducer function that you can call in the createStore function.

* Finally, you wrap your App component in the Provider element, passing in the store prop:
    <Provider store={store}>
      <App />
    </Provider>

