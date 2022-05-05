import React from "react";
import {  NavLink } from "react-router-dom";

const Sidebar = () => {
	return (
		<>
			<nav className="sidebar">
				<div>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/designs">Designs</NavLink>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/setouts">Setouts</NavLink>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;