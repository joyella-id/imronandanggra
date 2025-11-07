"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import FirstPage from "@/pages/1";
import SecondPage from "@/pages/2";
import ThirdPage from "@/pages/3";
import FourthPage from "@/pages/4";
import FifthPage from "@/pages/5";
import SixthPage from "@/pages/6";
import SeventhPage from "@/pages/7";
import EightPage from "@/pages/8";
import NinthPage from "@/pages/9";

function shouldSnapTo(elm: HTMLElement) {
	var rect = elm.getBoundingClientRect();
	var viewHeight = Math.max(
		document.documentElement.clientHeight,
		window.innerHeight,
	);
	const top = rect.top;
	const bottom = rect.bottom;
	const treshhold = viewHeight / 2;

	if (top > viewHeight || bottom < 0) {
		return { shouldSnap: false, position: 0 };
	}
	if (top > 0) {
		const amountVisible = viewHeight - top;
		if (amountVisible >= treshhold) {
			return { shouldSnap: true, position: top };
		}
		return { shouldSnap: false, position: 0 };
	}

	if (bottom > viewHeight) {
		return { shouldSnap: true, position: top };
	}

	if (bottom >= treshhold) {
		return { shouldSnap: true, position: top };
	}

	return { shouldSnap: false, position: 0 };
}

const Pages = () => {
	useEffect(() => {
		const firstPageElement = document.getElementById("page-1");
		if (firstPageElement) {
			firstPageElement.scrollIntoView({ behavior: "smooth" });
		}
		const scrollContainerElement = document.getElementById("scrollContainer");
		if (scrollContainerElement) {
			scrollContainerElement.style.overflow = "hidden";
		}
	}, []);

	return (
		<div
			id="scrollContainer"
			style={{
				height: "100svh",
			}}
		>
			<FirstPage />
			<SecondPage />
			<ThirdPage />
			<FourthPage />
			<FifthPage />
			<SixthPage />
			<SeventhPage />
			<EightPage />
			<NinthPage />
		</div>
	);
};

const ComponentRenderWrapper: React.FC = () => {
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	if (!rendered) {
		return null;
	}
	return <Pages />;
};

export default ComponentRenderWrapper;
