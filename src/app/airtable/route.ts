import { NextResponse, NextRequest } from "next/server";

const rsvpUrl = "https://api.airtable.com/v0/appKb4x0ZlMfyGlDp/rsvp";
const wishesUrl =
	"https://api.airtable.com/v0/appKb4x0ZlMfyGlDp/wishes?sort%5B0%5D%5Bfield%5D=id&sort%5B0%5D%5Bdirection%5D=desc";
const headers = new Headers();
headers.append("Authorization", `Bearer ${process.env.AirtableKey}`);
headers.append("Content-Type", "application/json");

const getRsvp = () => {
	return fetch(rsvpUrl, {
		method: "GET",
		headers,
	});
};

const getWishes = () => {
	return fetch(wishesUrl, {
		method: "GET",
		headers,
	});
};

export async function GET(request: NextRequest) {
	const requestedData = request.nextUrl.searchParams.get("data");
	const res = requestedData === "wishes" ? await getWishes() : await getRsvp();
	const data = await res.json();
	if (data.error) {
		return NextResponse.json(data, { status: 400 });
	}
	return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
	const requestedData = request.nextUrl.searchParams.get("data");
	const body = await request.json();
	const response = await fetch(
		requestedData === "wishes" ? wishesUrl : rsvpUrl,
		{
			method: "POST",
			headers,
			body: JSON.stringify(body),
		},
	);
	const data = await response.json();
	if (data.error) {
		return NextResponse.json(data, { status: 400 });
	}
	return NextResponse.json(data, { status: 200 });
}
