interface ISearchUserListData {
	id: number;
	name: string;
	email: string;
	email_verified_at: string;
	created_at: string;
	updated_at: string;
}

interface ISearchUserListLinks {
	url: string | null;
	label: string;
	active: boolean;
}

export interface ISearchUserListResponse {
	current_page: number;
	data: ISearchUserListData[];
	first_page_url: string;
	from: number;
	last_page: number;
	last_page_url: string | null;
	links: ISearchUserListLinks[];
	next_page_url: string | null;
	path: string | null;
	per_page: number;
	prev_page_url: string | null;
	to: number;
	total: number;
}

export interface ISearchUserListParams {
	query: string;
	page: number;
}
