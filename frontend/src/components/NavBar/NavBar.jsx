import React from "react";
import "./NavBar.css";

const NavBar = () => {
	return (
		<div className="nav-container">
			<div className="search-container">
				<input
					className="search-class"
					type="text"
					placeholder="Search"
				/>
			</div>
		</div>
	);
};

export default NavBar;
