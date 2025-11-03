import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl || "", supabaseKey || "");

export async function GET() {
	let { data } = await supabase
		.from("rsvpAndWishes")
		.select("*")
		.is("wishes", null);

	return NextResponse.json(data, { status: 200 });
}

export async function POST(request: NextRequest) {
	const body = await request.json();

	const { data, error } = await supabase
		.from("rsvpAndWishes")
		.insert({ ...body, coupleId: process.env.COUPLE_ID })
		.select();

	if (error) {
		return NextResponse.json({ error: error.message }, { status: 400 });
	}

	return NextResponse.json(data, { status: 200 });
}
