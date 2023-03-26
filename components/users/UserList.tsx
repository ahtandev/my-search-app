import { ISearchUserListResponse } from "@/api/users/types";
import React from "react";
import UserListPagination from "./UserListPagination";

interface Props {
	result: ISearchUserListResponse;
	handlePagination: (page: number) => void;
}

const UserList = ({ result, handlePagination }: Props) => {
	const renderResultList = () => {
		return result.data.map((item) => {
			return (
				<div
					key={item.id}
					className="rounded-lg px-3 py-3 bg-gray-500 text-gray-200"
				>
					<div className="font-semibold">{item.name}</div>
					<div className="text-sm">{item.email}</div>
				</div>
			);
		});
	};

	if (result.data.length == 0) {
		return (
			<div className="flex justify-center items-center">
				<div className="text-gray-200">No data found</div>
			</div>
		);
	}

	return (
		<div className="mx-auto px-3 md:px-10 md:w-[900px] lg:w-[1200px]">
			<div className="grid grid-cols-auto-fill gap-5">
				{renderResultList()}
			</div>

			<UserListPagination
				result={result}
				handlePagination={handlePagination}
			/>
		</div>
	);
};

export default UserList;
