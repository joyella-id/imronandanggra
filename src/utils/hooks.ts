import { useState } from "react";
import { FetchStateType, AirtableResponseType } from "./airtable";

export const useFetchFunction = <T>() => {
	const [fetchState, setFetchState] = useState<FetchStateType<T>>({
		data: null,
		error: null,
		loading: false,
	});

	const fetchFunction = (
		customFetch: () => Promise<Response>,
		onSuccess?: (data: AirtableResponseType<T>) => void,
		onError?: (error: Error) => void,
	) => {
		setFetchState((prev) => ({ ...prev, loading: true }));
		try {
			console.log("try oi");
			customFetch()
				.then((res) => {
					res
						.json()
						.then((data) => {
							onSuccess && onSuccess(data);
							setFetchState((prev) => ({ ...prev, data, loading: false }));
						})
						.catch((e) => {
							onError && onError(e);
							setFetchState((prev) => ({ ...prev, error: e, loading: false }));
						});
				})
				.catch((e) => {
					onError && onError(e);
					setFetchState((prev) => ({ ...prev, error: e, loading: false }));
				});
		} catch (e: any) {
			onError && onError(e);
			setFetchState((prev) => ({ ...prev, error: e, loading: false }));
		}
	};

	return { fetchFunction, ...fetchState };
};
