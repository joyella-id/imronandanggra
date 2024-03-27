import { useState } from "react";

export type WishType = {
	id?: number;
	name: string;
	wishes: string;
	createdAt?: string;
};

export type RsvpType = {
	id?: number;
	name: string;
	willAttend?: boolean;
	attendanceCount?: number;
};

export type AirtableResponseType<T> = {
	records: {
		createdTime: string;
		id: string;
		fields: T;
	}[];
};

const headers = new Headers();
headers.append(
	"Authorization",
	`Bearer patMxaIVxv8xNaiMD.30ec64dec023c0ec1b5069b00b6b0cee1020f6164e5a6ad9a067350bd89a1e7c`,
);
headers.append("Content-Type", "application/json");

const rsvpUrl = "https://api.airtable.com/v0/appKb4x0ZlMfyGlDp/rsvp";
const wishesUrl =
	"https://api.airtable.com/v0/appKb4x0ZlMfyGlDp/wishes?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=desc";

export const getRsvp = () => {
	return fetch(rsvpUrl, {
		method: "GET",
		headers,
	});
};

export const getWishes = () => {
	return fetch(wishesUrl, {
		method: "GET",
		headers,
	});
};

export const createRsvp = (data: RsvpType) => {
	return fetch(rsvpUrl, {
		method: "POST",
		headers,
		body: JSON.stringify({ records: [{ fields: data }] }),
	});
};

export const createWish = (data: WishType) => {
	return fetch(wishesUrl, {
		method: "POST",
		headers,
		body: JSON.stringify({ records: [{ fields: data }] }),
	});
};

type FetchStateType<T> = {
	data: AirtableResponseType<T> | null;
	error: Error | null;
	loading: boolean;
};

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
			customFetch()
				.then((res) => {
					res
						.json()
						.then((data) => {
							onSuccess && onSuccess(data);
							setFetchState((prev) => ({ ...prev, data, loading: false }));
						})
						.catch((e) => {
							throw e;
						});
				})
				.catch((e) => {
					throw e;
				});
		} catch (e: any) {
			onError && onError(e);
			setFetchState((prev) => ({ ...prev, error: e, loading: false }));
		}
	};

	return { fetchFunction, ...fetchState };
};
