"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/Input/Input";
import css from "./seventh.module.scss";
import Radio from "@/components/Radio/Radio";
import Button from "@/components/Button/Button";
import { RsvpType, createRsvp } from "@/utils/airtable";
import { useFetchFunction } from "@/utils/hooks";

const AttendanceStringKey = {
	Attendance: "Attendance",
	Absence: "Absence",
};

const SeventhPage = () => {
	const [name, setName] = useState("");
	const [attendance, setAttendance] = useState("");
	const [count, setCount] = useState("");

	const { fetchFunction, loading, data, error } = useFetchFunction<RsvpType>();
	const onSubmit = () => {
		if (
			!name ||
			!attendance ||
			(attendance === AttendanceStringKey.Attendance && !count)
		) {
			alert("Fill all the input fields");
		} else {
			fetchFunction(
				() =>
					createRsvp({
						name,
						attendanceCount: Number(count),
						willAttend: attendance === AttendanceStringKey.Attendance,
					}),
				() => {
					alert("Terima kasih atas konfirmasinya");
					setName("");
					setAttendance("");
					setCount("");
				},
			);
		}
	};

	return (
		<div className={css.container} id="page-7">
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
				<Input
					key="nameInput"
					value={name}
					onChange={(e: FormEvent<HTMLInputElement>) => {
						e.persist();
						setName(e?.currentTarget?.value);
					}}
					placeholder="Your Name :"
				/>
				<Radio
					value={attendance}
					name="attendance"
					onChange={(value) => {
						if (value === AttendanceStringKey.Absence) {
							setCount("");
						}
						setAttendance(value);
					}}
					choices={[
						{
							label: AttendanceStringKey.Attendance,
							value: AttendanceStringKey.Attendance,
						},
						{
							label: AttendanceStringKey.Absence,
							value: AttendanceStringKey.Absence,
						},
					]}
				/>
				<Input
					key="countInput"
					value={count}
					onChange={(e: FormEvent<HTMLInputElement>) => {
						e.persist();
						setCount(e?.currentTarget?.value);
					}}
					type="number"
					placeholder="Attendance Count :"
				/>
				<div className={css.buttonContainer}>
					<Button loading={loading} onClick={onSubmit}>
						Submit!
					</Button>
				</div>
			</div>
		</div>
	);
};

export default SeventhPage;
