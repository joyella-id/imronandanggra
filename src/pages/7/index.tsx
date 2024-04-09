"use client";

import { FormEvent, useState } from "react";
import Input from "@/components/Input/Input";
import css from "./seventh.module.scss";
import Radio from "@/components/Radio/Radio";
import Button from "@/components/Button/Button";
import { toast } from "react-toastify";
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
			toast.error("Ada yang belum diisi");
		} else {
			fetchFunction(
				() =>
					createRsvp({
						name,
						attendanceCount: Number(count),
						willAttend: attendance === AttendanceStringKey.Attendance,
					}),
				() => {
					toast.success("Terima kasih atas konfirmasinya");
					setName("");
					setAttendance("");
					setCount("");
				},
			);
		}
	};

	return (
		<section className={css.container} id="page-7">
			<div>
				<div className={css.attireTitle}>Attire</div>
				<p>
					We kindly encourage our guests to wear these colors for our special
					day
				</p>
				<div className={css.colorsContainer}>
					<div className={`${css.black1} ${css.tile}`}></div>
					<div className={`${css.black2} ${css.tile}`}></div>
					<div className={`${css.black3} ${css.tile}`}></div>
					<div className={`${css.black4} ${css.tile}`}></div>
					<div className={`${css.black5} ${css.tile}`}></div>
				</div>
				<p>
					Black and White <span className="font-Bold">dresscode</span>
				</p>
			</div>
			<div className={css.line}></div>
			<div className={css.rsvp}>
				<div className={css.rsvpTitle}>RSVP</div>
				<Input
					disabled={loading}
					key="nameInput"
					value={name}
					onChange={(e: FormEvent<HTMLInputElement>) => {
						e.persist();
						setName(e?.currentTarget?.value);
					}}
					placeholder="Your Name :"
				/>
				<Radio
					disabled={loading}
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
					disabled={loading}
					key="countInput"
					value={count}
					onChange={(e: FormEvent<HTMLInputElement>) => {
						e.persist();
						setCount(e?.currentTarget?.value);
					}}
					type="number"
					placeholder="Attendance Count :"
				/>
				<div >
					<Button loading={loading} onClick={onSubmit}>
						Submit!
					</Button>
				</div>
			</div>
		</section>
	);
};

export default SeventhPage;
