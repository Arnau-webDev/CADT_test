import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders Sidebar component on load", () => { 
	render(<App />);
	const navBarElement = screen.getByRole("navigation");

	const designsLink = screen.getByText(/Designs/i);
	const setoutsLink = screen.getByText(/Setouts/i);

	expect(designsLink).toBeInTheDocument();
	expect(setoutsLink).toBeInTheDocument();
	expect(navBarElement).toBeInTheDocument();
});

test("doesn't display any table data on screen before fetch is complete", () => { 
	render(<App />);
	const tableElement = screen.queryByRole("table");
	const tableRowElements = screen.queryAllByRole("row");

	expect(tableElement).not.toBeInTheDocument();
	expect(tableRowElements.length).toBe(0);
});

