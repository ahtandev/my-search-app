import { ISearchUserListResponse } from "@/api/users/types";
import React from "react";
import PaginationButton from "./PaginationButton";

interface Props {
	result: ISearchUserListResponse;
	handlePagination: (page: number) => void;
}

const UserListPagination = ({ result, handlePagination }: Props) => {
	const renderPaginationPageNumber = () => {
		return result.links.map((item, index) => {
			if (index === 0) {
				const isDisabled = result.current_page === 1;

				return (
					<li key={`pagination-previous`}>
						<PaginationButton
							label="<<"
							onClick={() =>
								handlePagination(result.current_page - 1)
							}
							disabled={isDisabled}
						/>
					</li>
				);
			}

			if (index === result.links.length - 1) {
				const isDisabled = !item.url;

				return (
					<li key={`pagination-next`}>
						<PaginationButton
							label=">>"
							onClick={() =>
								handlePagination(result.current_page + 1)
							}
							disabled={isDisabled}
						/>
					</li>
				);
			}

			return (
				<li key={`pagination-${index}`}>
					<PaginationButton
						label={item.label}
						isActive={item.active}
						onClick={() => handlePagination(index)}
					/>
				</li>
			);
		});
	};

	return (
		<div className="flex flex-wrap justify-center mt-5">
			<ul className="list-style-none flex items-center">
				{renderPaginationPageNumber()}
			</ul>
		</div>
	);
};

export default UserListPagination;
