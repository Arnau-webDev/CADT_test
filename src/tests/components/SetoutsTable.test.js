import React from "react";
import { render, screen } from "@testing-library/react";
import SetoutsTable from "../../components/SetoutsTable";

test("renders setouts table with information after getting fetch data", async () => { 
	render(<SetoutsTable />);
	const tableElement = await screen.findByRole("table");
	const tableRowElements = await screen.findAllByRole("row");

	expect(tableElement).toBeInTheDocument();

	expect(tableRowElements.length).toBeGreaterThanOrEqual(6);
});