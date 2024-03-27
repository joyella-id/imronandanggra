"use client";

import Input from "@/components/Input/Input";
import css from "./eight.module.scss";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";
import {
	getRsvp,
	getWishes,
	AirtableResponseType,
	WishType,
	useFetchFunction,
	createWish,
} from "@/utils/airtable";
import Loading from "@/components/Loading/Loading";
import { useState, useEffect } from "react";

const EightPage = () => {
	const [wishes, setWishes] = useState<WishType[]>([]);
	const [name, setName] = useState("");
	const [wish, setWish] = useState("");

	const { fetchFunction: createWishFunction, loading: createWishLoading } =
		useFetchFunction<WishType>();

	const { fetchFunction: fetchWishFunction, loading: fetchWishesLoading } =
		useFetchFunction<WishType>();

	const onSubmit = () => {
		if (!name || !wish) {
			alert("Fill all the input fields");
		} else {
			createWishFunction(
				() =>
					createWish({
						name,
						wishes: wish,
					}),
				(data) => {
					alert("Terima kasih atas ucapannya!");
					setWishes((prev) => [data.records[0].fields, ...prev]);
					setName("");
					setWish("");
				},
			);
		}
	};

	useEffect(() => {
		const wishesContainerElement = document.getElementById("wishesContainer");
		if (wishesContainerElement) {
			wishesContainerElement.scrollTo({ top: 0, behavior: "smooth" });
		}
	}, [wishes]);

	useEffect(() => {
		fetchWishFunction(getWishes, (data) => {
			setWishes(
				data.records.map((record) => {
					return record.fields;
				}),
			);
		});
	}, []);

	return (
		<div className={css.container} id="page-8">
			<div>
				<div className={css.title}>
					Hi dear, give your best wishes for our{" "}
					<span className="font-Bold">wedding gift!</span>
				</div>
				<Input
					value={name}
					onChange={(e) => {
						setName(e?.currentTarget?.value);
					}}
					className="margin--medium-b"
					placeholder="Your Name"
				/>
				<TextArea
					value={wish}
					onChange={(e) => {
						setWish(e.currentTarget.value);
					}}
					className="margin--xsmall-b"
					placeholder="Your Best Wishes"
				/>
				<div className={css.buttonContainer}>
					<Button loading={createWishLoading} onClick={onSubmit}>
						Send!
					</Button>
				</div>
			</div>
			<div className={css.wishesContainer} id="wishesContainer">
				{fetchWishesLoading ? (
					<div className={css.loadingContainer}>
						<Loading color="red" />
					</div>
				) : (
					wishes.map((wish, index) => {
						const date = new Date(wish.createdAt || "");
						const durationFromToday = Date.now() - date.getTime();
						const daysAgo = Math.floor(durationFromToday / 86400000);
						const shownDate =
							daysAgo === 0
								? "Today"
								: daysAgo > 0
								? `${daysAgo} day(s) ago`
								: `${daysAgo * -1} day(s) later`;
						return (
							<div
								key={wish.id}
								className={`${css.wish} ${index === 0 ? css.firstWish : ""}`}
							>
								<div>{wish.name}</div>
								<div>{wish.wishes}</div>
								<div>{shownDate}</div>
							</div>
						);
					})
				)}
			</div>
		</div>
	);
};

export default EightPage;
