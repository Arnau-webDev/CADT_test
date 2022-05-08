import React from "react";
import { useFetchInfo } from "../hooks/useFetchInfo";
import { useViewport } from "../hooks/useViewport";
import LoadingSpinner from "./LoadingSpinner";
import TableRow from "./TableRow";


const DesignsTable = () => {
	
	const {data: designs, loading} = useFetchInfo("designs", 20);

	const { width } = useViewport();
	const breakpoint = 1150;

	if(loading) return <div className="tableContainer"><LoadingSpinner /></div>;

	return (
		<div className="tableContainer">
			<table className="table animate__animated animate__fadeIn">
				{
					width > breakpoint && (
						<thead>
							<tr>
								<th>Name</th>
								<th>Courses</th>
								<th>Wales</th>
								<th>Last Updated</th>
								<th>By</th>
								<th className="filler"></th>
							</tr>
						</thead>
					)
				}

				<tbody>
					{designs.map((design) => {
						return (
							<TableRow tableInfo={design} typeOfTable="designs" key={design.id} />
						);
					})}
					{/* <tr className="observer" ref={myRef}>a</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default DesignsTable;






// const myRef = useRef();
// const [myElementIsIntersecting, setMyElementIsIntersecting] = useState();
		




// useEffect(() => {
// 	const observer = new IntersectionObserver((entries) => {
// 		const entry = entries[0];
// 		setMyElementIsIntersecting(entry.isIntersecting);
// 	});
			
// 	if(myRef.current) observer.observe(myRef.current);

// 	return () => {
// 		if(myRef.current && myElementIsIntersecting) observer.unobserve(myRef.current);
// 	};
			
// }, [loading]);
