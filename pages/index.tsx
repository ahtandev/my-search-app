import TextInput from "@/components/form/TextInput";
import LoadingSpinner from "@/components/loading/LoadingSpinner";
import UserList from "@/components/users/UserList";
import useSearchUserListForm from "@/services/users/hooks/useSearchUserListForm";
import { Formik } from "formik";

export default function Home() {
	const {
		initialValues,
		handleOnSubmit,
		handeValueChange,
		loading,
		data,
		isError,
		handlePagination,
	} = useSearchUserListForm();

	const renderUserList = () => {
		if (loading) {
			return <LoadingSpinner />;
		}

		if (isError) {
			return (
				<div className="flex justify-center items-center">
					<div className="text-gray-200">
						Sorry there is an error occur...
					</div>
				</div>
			);
		}

		if (!loading && data) {
			return (
				<UserList result={data} handlePagination={handlePagination} />
			);
		}

		return null;
	};

	return (
		<div className="bg-gray-900 min-h-full">
			<div className="pb-5">
				<div className="py-[30px] md:px-5 mx-auto w-[350px] md:w-[500px]">
					<Formik
						initialValues={initialValues}
						onSubmit={handleOnSubmit}
					>
						{({ handleSubmit }) => {
							return (
								<form onSubmit={handleSubmit}>
									<div className="flex gap-3">
										<TextInput
											name="query"
											className="w-full rounded-md focus:ring-gray-300 focus:ring-1"
											placeholder="Search name or email"
											handeValueChange={handeValueChange}
										/>

										<button
											type="submit"
											className="rounded-md bg-blue-500 px-5 hover:bg-blue-400 text-white font-bold text-sm"
										>
											Search
										</button>
									</div>
								</form>
							);
						}}
					</Formik>
				</div>

				{renderUserList()}
			</div>
		</div>
	);
}
