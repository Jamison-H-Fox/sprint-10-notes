/*

// INDEX:
    nothing special here

// APP:
// Imported useContext from react and UserContext from my contexts folder
// Wrapped everything in the return statement in UserContext.Provider
import React, { useReducer, useState, useEffect, useContext } from "react";
import User from "./components/User";
import { UserContext } from "./contexts/UserContext";

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		setUser({ firstName: "John", lastName: "Dough" });
	}, []);

	return (
    <UserContext.Provider value={user}>
      <div className="App">
        <User />
      </div>
    </UserContext.Provider>
	);
}

export default App;

// COMPONENTS:
// Imported useContext and UserContext from respective directories
// Created a const to consume the data passed in through the context
import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function User() {
    const user = useContext(UserContext);

	return (
		<div className="profile">
			<p>{user.lastName}, {user.firstName}</p>
		</div>
	);
}

export default User;

*/