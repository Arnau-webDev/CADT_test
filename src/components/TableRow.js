import React from "react";
import { useDispatch } from "react-redux";

import moment from "moment/min/moment-with-locales";

import { useViewport } from "../hooks/useViewport";
import { resetHasUpdated, setModalActiveRow, setModalState } from "../actions/modal";

const TableRow = ({tableInfo, typeOfTable}) => {

	const dispatch = useDispatch();

	const { width } = useViewport();
	const breakpoint = 1150;

	const handleOpenModal = () => {
		if( width > breakpoint) {
			dispatch(setModalState());
			dispatch(setModalActiveRow(tableInfo));
			dispatch(resetHasUpdated());
		}
	};

	moment.locale("es");

	return (
		<>
			{typeOfTable === "designs" ? (
				<tr onClick={handleOpenModal}>
					<td data-label="Name">{tableInfo.name}</td>
					<td data-label="Courses">{tableInfo.courses}</td>
					<td data-label="Wales">{tableInfo.wales}</td>
					<td data-label="Last Updated">{moment(tableInfo.updated).format("L")}</td>

					{ width > breakpoint ? (
						<td data-label="By" className="centerUser">{tableInfo.user_id_last_update === 1 ? <span className="user">{"WD"}</span> : <span className="user">{"JD"}</span>}</td>
					) : (
						<td data-label="By" className="centerUser">{tableInfo.user_id_last_update === 1 ? <span className="user">{"Walter Doe"}</span> : <span className="user">{"John Doe"}</span>}</td>
					)}

					{ width > breakpoint && (<td className="filler"></td>)}
				</tr>
			) : (
				<tr onClick={handleOpenModal}>
					<td data-label="Name">{tableInfo.name}</td>
					<td data-label="Machine Name">{tableInfo.machine_name}</td>
					<td data-label="Machine Width">{tableInfo.machine_width}</td>
					<td data-label="Courses">{tableInfo.courses}</td>
					<td data-label="Last Updated">{moment(tableInfo.updated).format("L")}</td>
				</tr>
			)}
		</>
	);
};

export default TableRow;