import React from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";
import { useViewport } from "../hooks/useViewport";
import LoadingSpinner from "./LoadingSpinner";
import Modal from "./Modal";
import TableRow from "./TableRow";

import { useSelector } from "react-redux";

const SetoutsTable = () => {

	const {data: setouts, loading} = useFetchInfo("setouts", 20);

	const { width } = useViewport();
	const breakpoint = 1150;

	const {modalIsOpen} = useSelector( state => state.modal );

	if(loading) return <div className="tableContainer"><LoadingSpinner /></div>;

	if(modalIsOpen && width > breakpoint) return (
		<div className="tableContainer center">
			<Modal typeOfTable={"setouts"}/>
		</div>
	);

	return (
		<div className="tableContainer">
			<table className="table animate__animated animate__fadeIn">
				{
					width > breakpoint && (
						<thead>
							<tr>
								<th>Name</th>
								<th>Machine Name</th>
								<th>Machine Width</th>
								<th>Courses</th>
								<th>Last Updated</th>
							</tr>
						</thead>
					)
				}

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
