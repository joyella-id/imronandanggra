import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { cleanTrailingWhitespace } from "@/utils/common";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export async function GET() {
	const supabase = createClient(supabaseUrl || "", supabaseKey || "");

	let { data, error } = await supabase.from("rsvpAndWishes").select("*");

	return NextResponse.json(data, { status: 200 });
}
