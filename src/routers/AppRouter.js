import React from "react";

import { BrowserRouter,	Routes,	Route, Navigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DesignsTable from "../components/DesignsTable";
import SetoutsTable from "../components/SetoutsTable";

import {useSelector} from "react-redux";
import { useViewport } from "../hooks/useViewport";

const AppRouter = () => {

	const {modalIsOpen} = useSelector( state => state.modal );

	const { width } = useViewport();
	const breakpoint = 1150;

	return (
		<BrowserRouter>
			<Sidebar />

			<div className={modalIsOpen && width > breakpoint ? "overlay" : "hideOverlay"}></div>
			<Routes>
				<Route path="/designs" element={<DesignsTable />}/>
				<Route path="/setouts" element={<SetoutsTable />} />

				<Route
					path="*"
					element={<Navigate to="/designs" replace />}
				/>
			</Routes>

		</BrowserRouter>
	);
};

export default AppRouter;