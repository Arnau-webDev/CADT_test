import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import fetchInfo from "../helpers/fetchInfo";

export const useFetchInfo = ( table, limit ) => {

	const { updated } = useSelector( state => state.modal );

	const [state, setState] = useState({
		data: [],
		loading: true
	});

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

	}, [ table, updated ]);

	return state;
};
