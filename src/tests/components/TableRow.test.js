import React from "react";
import { render, screen } from "@testing-library/react";
import TableRow from "../../components/TableRow";

// Need to create table structure when rendering the TableRow component or else we get an error saying a <td></td> cannot be a direct child of a <div></div> (render() method always wraps rendered components inside a <div></div> element)
const MockTableStructureSetout = ({mockSetout}) => {
	return (
		<table>
			<tbody>
				<TableRow tableInfo={mockSetout} typeOfTable="setouts" key={mockSetout.id}/>
			</tbody>
		</table>
	);
};


// Need to create table structure when rendering the TableRow component or else we get an error saying a <td></td> cannot be a direct child of a <div></div> (render() method always wraps rendered components inside a <div></div> element)
const MockTableStructureDesign = ({mockDesign}) => {
	return (
		<table>
			<tbody>
				<TableRow tableInfo={mockDesign} typeOfTable="designs" key={mockDesign.id}/>
			</tbody>
		</table>
	);
};

test("renders setouts table row with correct information", async () => { 

	const mockSetout =  {
		"id": 1,
		"updated": "2021-03-24 08:44:31.810221",
		"name": "1st Setout",
		"machine_name": "RSJ_4_1",
		"machine_width": 130,
		"courses": 200
	};

	// render(<TableRow tableInfo={mockSetout} typeOfTable="setouts" key={mockSetout.id}/>);
	render(<MockTableStructureSetout mockSetout={mockSetout} />);

	const setoutCellElementName = await screen.findByText("1st Setout");
	const designCellElementName = screen.queryByText(/Design/i);

	expect(setoutCellElementName).toBeInTheDocument();
	expect(designCellElementName).toBe(null);
});

test("renders designs table row with correct information", async () => { 

	const mockDesign =  {
		"courses": 111,
		"id": 20,
		"name": "20th Design",
		"status": "in-progress",
		"updated": "2021-04-12 08:25:41.567611",
		"user_id_last_update": 1,
		"wales": 333
	};

	// render(<TableRow tableInfo={mockDesign} typeOfTable="designs" key={mockDesign.id}/>);
	render(<MockTableStructureDesign mockDesign={mockDesign} />);


	const designCellElementName = await screen.findByText("20th Design");
	const setoutCellElementName = screen.queryByText(/Setout/i);

	expect(designCellElementName).toBeInTheDocument();
	expect(setoutCellElementName).toBe(null);
});