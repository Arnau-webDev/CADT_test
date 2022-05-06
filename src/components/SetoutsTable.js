import React from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";
import LoadingSpinner from "./LoadingSpinner";
import TableRow from "./TableRow";

const SetoutsTable = () => {

	const {data: setouts, loading} = useFetchInfo("setouts");

	if(loading) return <div className="tableContainer"><LoadingSpinner /></div>;

	return (
		<div className="tableContainer">
			<table className="table animate__animated animate__fadeIn">
				<thead>
					<tr>
						<th>Name</th>
						<th>Machine Name</th>
						<th>Machine Width</th>
						<th>Courses</th>
						<th>Last Updated</th>
					</tr>
				</thead>

				<tbody>
					{setouts.map(setout => {
						return (
							<TableRow tableInfo={setout} typeOfTable="setouts" key={setout.id}/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default SetoutsTable;
