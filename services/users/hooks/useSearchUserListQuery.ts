import { apiSearchUserList } from "@/api/users";
import {
	ISearchUserListParams,
	ISearchUserListResponse,
} from "@/api/users/types";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface Props {
	params: ISearchUserListParams;
}

const useSearchUserListQuery = ({ params }: Props) => {
	const query = useQuery<ISearchUserListResponse>({
		queryKey: ["user", "list", params],
		queryFn: async () => {
			const response = await apiSearchUserList(params);
			return response.data;
		},
	});

	const loading = Boolean(query.isInitialLoading || query.isFetching);

	return { loading, ...query };
};

export default useSearchUserListQuery;
