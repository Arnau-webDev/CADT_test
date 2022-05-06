import React from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";
import LoadingSpinner from "./LoadingSpinner";
import TableRow from "./TableRow";


const DesignsTable = () => {

	const {data: designs, loading} = useFetchInfo("designs");

	if(loading) return <div className="tableContainer"><LoadingSpinner /></div>;

	return (
		<div className="tableContainer">
			<table className="table animate__animated animate__fadeIn">
				<thead>
					<tr>
						<th>Name</th>
						<th>Courses</th>
						<th>Wales</th>
						<th>Last Updated</th>
						<th>By</th>
						<th className="filler"></th>
					</tr>
				</thead>

				<tbody>
					{designs.map(design => {
						return (
							<TableRow tableInfo={design} typeOfTable="designs" key={design.id}/>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default DesignsTable;
