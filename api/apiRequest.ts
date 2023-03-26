import axios from "axios";

const apiRequest = axios.create({
	baseURL: "https://fetest.mashx.click/api",
});

export default apiRequest;
