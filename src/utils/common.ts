export function cleanTrailingWhitespace(
	input: string,
	options?: {
		perLine?: boolean;
		normalizeNewlines?: boolean;
		trailingNewline?: "one" | "none" | "preserve";
	},
): string {
	const {
		perLine = true,
		normalizeNewlines = true,
		trailingNewline = "none",
	} = options ?? {};

	let s = String(input);

	if (normalizeNewlines) {
		// normalize CRLF -> LF first so regexes work consistently
		s = s.replace(/\r\n/g, "\n");
	}

	if (perLine) {
		// remove spaces and tabs at end of each line, keep blank lines
		s = s.replace(/[ \t]+$/gm, "");
	}

	// handle trailing newlines
	if (trailingNewline === "one") {
		// collapse any number of trailing newlines to a single '\n'
		s = s.replace(/\n+$/g, "\n");
	} else if (trailingNewline === "none") {
		// remove all trailing newlines
		s = s.replace(/\n+$/g, "");
	} // 'preserve' -> do nothing

	return s.trim();
}
