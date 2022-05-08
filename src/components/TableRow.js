import React from "react";

import moment from "moment";
import { useViewport } from "../hooks/useViewport";

const TableRow = ({tableInfo, typeOfTable}) => {

	const { width } = useViewport();
	const breakpoint = 1150;

	return (
		<>
			{typeOfTable === "designs" ? (
				<tr>
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
				<tr>
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