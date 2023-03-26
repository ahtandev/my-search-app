import apiRequest from "../apiRequest";
import { ISearchUserListParams } from "./types";

export const apiSearchUserList = async (
	params: ISearchUserListParams | null
) => {
	const response = await apiRequest.get("/users", { params });
	return response;
};
