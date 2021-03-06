
const fetchInfo = async ( tableInfo, limit ) => {
	const url = `http://localhost:5000/${tableInfo}?_page=1&_limit=${limit}`; 
	const res = await fetch(url);

	let data = "";

	if(res.ok) data = await res.json();

	return data;
};

export default fetchInfo;