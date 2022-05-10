
const patchInfo = async ( tableInfo, body, id ) => {
	const url = `http://localhost:5000/${tableInfo}/${id}`; 

	const reqParams = {
		method: "PATCH",
		body: JSON.stringify(body),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		}
	};

	const res = await fetch(url, reqParams);

	let data = "";

	if(res.ok) data = await res.json();

	return data;
};

export default patchInfo;