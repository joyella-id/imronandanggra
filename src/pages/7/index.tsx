"use client";

import Input from "@/components/Input/Input";
import css from "./seventh.module.scss";
import Radio from "@/components/Radio/Radio";
import Button from "@/components/Button/Button";

const SeventhPage = () => {
	return (
		<div className={css.container} id='page-7'>
			<div>
				<div className={css.attireTitle}>Attire</div>
				<div>
					We kindly encourage our guests to wear these colors for our special
					day
				</div>
				<div className={css.colorsContainer}>
					<div className={`${css.black1} ${css.tile}`}></div>
					<div className={`${css.black2} ${css.tile}`}></div>
					<div className={`${css.black3} ${css.tile}`}></div>
					<div className={`${css.black4} ${css.tile}`}></div>
					<div className={`${css.black5} ${css.tile}`}></div>
				</div>
				<div>
					Black and White <span className="font-Bold">dresscode</span>
				</div>
			</div>
			<div className={css.line}></div>
			<div className={css.rsvp}>
				<div className={css.rsvpTitle}>RSVP</div>
				<Input placeholder="Your Name :" />
				<Radio
					name="attendance"
					onChange={(e) => {
						console.log(e);
					}}
					choices={[
						{ label: "Attendance", value: "Attendance" },
						{ label: "Absence", value: "Absence" },
					]}
				/>
				<Input type="number" placeholder="Attendance Count :" />
				<div className={css.buttonContainer}>
					<Button>Submit!</Button>
				</div>
			</div>
		</div>
	);
};

export default SeventhPage;
