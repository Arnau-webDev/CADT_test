import React from "react";

import moment from "moment";

const TableRow = ({tableInfo, typeOfTable}) => {

	return (
		<>
			{typeOfTable === "designs" ? (
				<tr>
					<td>{tableInfo.name}</td>
					<td>{tableInfo.courses}</td>
					<td>{tableInfo.wales}</td>
					<td>{moment(tableInfo.updated).format("L")}</td>
					<td className="centerUser">{tableInfo.user_id_last_update === 1 ? <span className="user">{"WD"}</span> : <span className="user">{"JD"}</span>}</td>
					<td className="filler"></td>
				</tr>
			) : (
				<tr>
					<td>{tableInfo.name}</td>
					<td>{tableInfo.machine_name}</td>
					<td>{tableInfo.machine_width}</td>
					<td>{tableInfo.courses}</td>
					<td>{moment(tableInfo.updated).format("L")}</td>
				</tr>
			)}
		</>
	);
};

export default TableRow;