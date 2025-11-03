import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ogImage from "./opengraph-image.jpg";
import twImage from "./twitter-image.jpg";

const inter = Inter({ subsets: ["latin"] });

const title = "The Wedding of Imron & Anggra";
const description =
	"Invitation for Imron & Anggra's wedding! Powered by ourjoy.id";

export const metadata: Metadata = {
	metadataBase: new URL("https://imrondananggra.ourjoy.id"),
	title: title,
	description,
	openGraph: {
		title: title,
		description,
		type: "website",
		images: [
			{
				url: ogImage.src,
				width: ogImage.width,
				height: ogImage.height,
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		description,
		site: "ourjoy.id",
		creator: "ourjoy.id",
		images: [
			{
				url: ogImage.src,
				width: ogImage.width,
				height: ogImage.height,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<link rel="shortcut icon" href="/images/favicon.ico" />
			<link
				rel="apple-touch-icon"
				sizes="180x180"
				href="/images/apple-touch-icon.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="32x32"
				href="/images/favicon-32x32.png"
			/>
			<link
				rel="icon"
				type="image/png"
				sizes="16x16"
				href="/images/favicon-16x16.png"
			/>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
