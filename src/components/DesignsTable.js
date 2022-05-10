import React from "react";
import { useSelector } from "react-redux";

import LoadingSpinner from "./LoadingSpinner";
import TableRow from "./TableRow";
import Modal from "./Modal";

import { useFetchInfo } from "../hooks/useFetchInfo";
import { useViewport } from "../hooks/useViewport";

const DesignsTable = () => {
	
	const {data: designs, loading} = useFetchInfo("designs", 20);

	const { width } = useViewport();
	const breakpoint = 1150;

	const {modalIsOpen} = useSelector( state => state.modal );

	if(loading) return <div className="tableContainer"><LoadingSpinner /></div>;

	if(modalIsOpen && width > breakpoint) return (
		<div className="tableContainer modal_center">
			<Modal typeOfTable={"designs"}/>
		</div>
	);

	return (
		<>
			<div className="tableContainer">
				<table className="table animate__animated animate__fadeIn">
					{
						width > breakpoint && (
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
						)
					}

					<tbody>
						{designs.map((design) => {
							return (
								<TableRow tableInfo={design} typeOfTable="designs" key={design.id} />
							);
						})}
						{/* <tr className="observer" ref={myRef}>a</tr> */}
					</tbody>
				</table>
			</div>
		</>
	);
};

export default DesignsTable;
