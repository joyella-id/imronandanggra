export type WishType = {
	id?: number;
	name: string;
	wishes: string;
	created_at?: string;
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
export type FetchStateType<T> = {
	data: AirtableResponseType<T> | null;
	error: Error | null;
	loading: boolean;
};

export const createRsvp = (data: RsvpType) => {
	return fetch("/supabase/attendance", {
		method: "POST",
		body: JSON.stringify(data),
	});
};

export const createWish = (data: WishType) => {
	return fetch("/supabase/wishes", {
		method: "POST",
		body: JSON.stringify(data),
	});
};
