export const ApiBaseUrl = Number(process.env.REACT_APP_LIVE) === 1 ? process.env.REACT_APP_LIVE_BASE_URL : process.env.REACT_APP_LOCAL_BASE_URL;

export const API_Path = {
	login: ApiBaseUrl + "admin/login",
	forgotPassword: ApiBaseUrl + "user/forgotpassword",
	changepassword: ApiBaseUrl + "user/changepassword",

	verification: ApiBaseUrl + "user/forgotpassword",

	mostActiveShare: ApiBaseUrl + "markettrends/most-active",

	getProtfoliosData: ApiBaseUrl + "admin/portfolio/allportfolios",
	addProtfoliosData: ApiBaseUrl + "admin/portfolio/createp",

	getWishListData: ApiBaseUrl + "wishlist/getlist",

	addTickersData: ApiBaseUrl + "admin/portfolio/addtickers",
	userProfile: ApiBaseUrl + "",
	getAdmins: ApiBaseUrl + "",
	
};
