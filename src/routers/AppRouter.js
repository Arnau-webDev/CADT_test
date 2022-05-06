import React from "react";

import {
	BrowserRouter,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";

import Sidebar from "../components/Sidebar";
import DesignsTable from "../components/DesignsTable";
import SetoutsTable from "../components/SetoutsTable";

const AppRouter = () => {
	return (
		<BrowserRouter>
			<Sidebar />

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