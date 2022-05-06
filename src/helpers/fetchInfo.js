
const fetchInfo = async ( tableInfo ) => {
	const url = `http://localhost:5000/${tableInfo}?_page=1&_limit=5`;  //Change limit on scroll event to create the ilusion of loading on scroll
	const res = await fetch(url);

	let data = "";

	if(res.ok) data = await res.json();

	return data;
};

export default fetchInfo;