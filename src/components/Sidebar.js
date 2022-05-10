import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { useViewport } from "../hooks/useViewport";


const Sidebar = () => {

	const {modalIsOpen} = useSelector( state => state.modal );
	const { width } = useViewport();
	const breakpoint = 1150;

	return (
		<>
			<nav className="sidebar" style={modalIsOpen && width > breakpoint ? {minHeight: "100vh"} : {}}>
				<div>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/designs">Designs</NavLink>
					<NavLink className={(navData) => (navData.isActive ? "active" : "")} to="/setouts">Setouts</NavLink>
				</div>
			</nav>
		</>
	);
};

export default Sidebar;