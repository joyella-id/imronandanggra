"use client";

import { useSearchParams } from 'next/navigation'
import css from "./fist.module.scss";
import Button from "@/components/Button/Button";
import roseImage from "../../assets/images/Rose -8.png";
import Image from "next/image";


const FirstPage = () => {
	const searchParams = useSearchParams()
	const guestname = searchParams.get('guestname')
	return (
		<section className={css.container} id="page-1">
			<div className={css.imageContainer}>
				<Image src={roseImage} layout="fill" alt="rose" />
			</div>
			<div className={css.contentContainer}>
				<p>Dear,</p>
				<h1 className={css.name}>{guestname}</h1>
				<p>Please celebrate with us in our intimate wedding party</p>
				<div className={css.buttonContainer}>
					<Button
						onClick={() => {
							const htmlElement = document.getElementsByTagName("html")[0];
							if (htmlElement) {
								htmlElement.style.overflow = "auto";
							}
							const secondPageElement = document.getElementById("page-2");
							if (secondPageElement) {
								secondPageElement.scrollIntoView({ behavior: "smooth" });
							}
						}}
					>
						Open Invitation!
					</Button>
				</div>
			</div>
		</section>
	);
};

export default FirstPage;
