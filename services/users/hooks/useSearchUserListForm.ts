import { ISearchUserListParams } from "@/api/users/types";
import { debounce } from "lodash";
import { useState, useMemo } from "react";
import { searchUserListInit } from "../helpers";
import useSearchUserListQuery from "./useSearchUserListQuery";

const useSearchUserListForm = () => {
	const [params, setParams] =
		useState<ISearchUserListParams>(searchUserListInit);

	const { loading, data, isError, refetch } = useSearchUserListQuery({
		params,
	});

	const handeValueChange = useMemo(
		() =>
			debounce((text: string) => {
				setParams({
					page: 1,
					query: text,
				});
			}, 500),
		[]
	);

	const handlePagination = (page: number) => {
		setParams({
			...params,
			page,
		});
	};

	const handleOnSubmit = (values: ISearchUserListParams) => {
		if (values.query !== params.query || values.page !== params.page) {
			setParams({
				page: 1,
				query: values.query,
			});
		} else {
			refetch();
		}
	};

	return {
		initialValues: searchUserListInit,
		handleOnSubmit,
		handeValueChange,
		loading,
		data,
		isError,
		handlePagination,
	};
};

export default useSearchUserListForm;
