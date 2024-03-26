"use client";

import Input from "@/components/Input/Input";
import css from "./eight.module.scss";
import TextArea from "@/components/TextArea/TextArea";
import Button from "@/components/Button/Button";

const EightPage = () => {
	return (
		<div className={css.container} id='page-8'>
			<div>
				<div className={css.title}>
					Hi dear, give your best wishes for our{" "}
					<span className="font-Bold">wedding gift!</span>
				</div>
				<Input className="margin--medium-b" placeholder="Your Name" />
				<TextArea className="margin--xsmall-b" placeholder="Your Best Wishes" />
				<div className={css.buttonContainer}>
					<Button>Send!</Button>
				</div>
			</div>
			<div className={css.wishesContainer}>
				{Array.from({ length: 10 }).map((_, index) => (
					<div
						key={index}
						className={`${css.wish} ${index === 0 ? css.firstWish : ""}`}
					>
						<div>John</div>
						<div>
							Consequat eiusmod minim consequat Lorem reprehenderit ipsum sit
							tempor minim culpa officia aliqua magna. Aute irure sint ea id est
							id nulla esse aliqua laborum.
						</div>
						<div>2 days ago</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default EightPage;
