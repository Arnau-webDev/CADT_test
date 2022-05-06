import { useState, useEffect } from "react";
import fetchInfo from "../helpers/fetchInfo";

export const useFetchInfo = ( table ) => {

	const [state, setState] = useState({
		data: [],
		loading: true
	});

	useEffect(() => {
		fetchInfo(table)
			.then((items) => {
				setTimeout(() => {
					setState({
						data: items,
						loading: false
					});
				}, 300);
			});
	}, [ table ]);

	return state;
};
