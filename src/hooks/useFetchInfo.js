import { useState, useEffect } from "react";
import fetchInfo from "../helpers/fetchInfo";

export const useFetchInfo = ( table, limit ) => {

	const [state, setState] = useState({
		data: [],
		loading: true
	});
		
	// console.log(dynamicLimit);

	useEffect(() => {
		fetchInfo(table, limit)
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
