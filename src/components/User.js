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