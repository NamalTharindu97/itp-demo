import React from "react";
import "./UserAdminPanal.css";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";

const UserAdminPanal = () => {
	return (
		<div className="page-container">
			<div className="left-container">
				<SideBar />
			</div>
			<div className="right-container">
				<NavBar />
			</div>
		</div>
	);
};

export default UserAdminPanal;
