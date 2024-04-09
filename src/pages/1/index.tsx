"use client";

import { useSearchParams } from 'next/navigation'
import css from "./fist.module.scss";
import style from "../invitation.module.scss";
import Button from "@/components/Button/Button";
import roseImage from "../../assets/images/Rose -8.png";
import Image from "next/image";
import { useEffect, useState } from 'react';


const FirstPage = () => {
	const searchParams = useSearchParams()
	const [name, setName] = useState<String|null|undefined>('Guest')

	useEffect(() => {
		const guestName = searchParams?.get('guestname')
		if(guestName){
			setName(guestName)
		}
	}, [])

	return (
		<section className={css.container} id="page-1">
			<div className={css.imageContainer}>
				<Image src={roseImage} layout="fill" alt="rose" />
			</div>
			<div className={css.contentContainer}>
				<p>Dear,</p>
				<h1>{name}</h1>
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
