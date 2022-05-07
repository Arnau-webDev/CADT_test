import React from "react";
import { render, screen } from "@testing-library/react";
import DesignsTable from "../../components/DesignsTable";

test("renders designs table with information after getting fetch data", async () => { 
	render(<DesignsTable />);
	const tableElement = await screen.findByRole("table");
	const tableRowElements = await screen.findAllByRole("row");

	expect(tableElement).toBeInTheDocument();

	expect(tableRowElements.length).toBeGreaterThanOrEqual(6);
});