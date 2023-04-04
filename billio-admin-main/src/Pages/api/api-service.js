const axios = require("axios");
export function GetApi(path) {
	let token = localStorage.getItem("admin_token");
	let headers = { Authorization: token, "Content-Type": "application/json" };
	const GetApiData = axios
		.get(path, { headers: headers })
		.then((response) => {
			return response;
		})
		.catch((err) => {
			return err.response;
		});
	return GetApiData;
}

export function PostApi(path, body) {
	let tokenData;
	if (localStorage.getItem("user_token")) {
		tokenData = "Bearer " + localStorage.getItem("admin_token");
	} else {
		tokenData = "";
	}

	let headers = { "device-type": "1", "Content-Type": "application/json", Authorization: tokenData };
	const PostApiData = axios
		.post(path, body, { headers: headers })
		.then((response) => {
			return response;
		})
		.catch((error) => {
			return error.response;
		});

	return PostApiData;
}
