import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import ogImage from "./opengraph-image.jpg";
import twImage from "./twitter-image.jpg";

const inter = Inter({ subsets: ["latin"] });

const title = "The Wedding of Imron & Anggra";
const description =
	"We will be getting married on April 20th 2024. Join us in celebrating the happiest day of our life! Powered by Ourjoy.id";

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
		site: "https://imrondananggra.ourjoy.id",
		creator: "https://imrondananggra.ourjoy.id",
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
