"use client";

import css from "./Countdown.module.scss";
import { useState, useEffect } from "react";

const useCountdown = (date: Date) => {
	const [timeLeft, setTimeLeft] = useState<number>(
		Math.abs(date.getTime() - Date.now()),
	);

	useEffect(() => {
		const interval = setInterval(() => {
			setTimeLeft((prevTimeLeft) => {
				const newTimeLeft = prevTimeLeft - 1000;
				if (newTimeLeft <= 0) {
					clearInterval(interval);
				}
				return newTimeLeft;
			});
		}, 1000);
		return () => clearInterval(interval);
	}, []);
	return timeLeft > 0 ? timeLeft : 0;
};

/**
 * Converts milliseconds to an object with days, hours,
 * minutes and seconds as properties.
 *
 * @param {number} ms Milliseconds to be converted
 * @returns {{day: number, hour: number, minute: number, second: number}}
 *    Object with days, hours, minutes and seconds as properties
 */
const msToTimeObj = (ms: number) => {
	// One day has 86400000 milliseconds
	const day = Math.floor(ms / 86400000);
	// One hour has 3600000 milliseconds
	const hour = Math.floor((ms % 86400000) / 3600000);
	// One minute has 60000 milliseconds
	const minute = Math.floor((ms % 3600000) / 60000);
	// One second has 1000 milliseconds
	const second = Math.floor((ms % 60000) / 1000);
	return { day, hour, minute, second };
};

const toDoubleDigit = (num: number) => {
	return num < 10 ? `0${num}` : num.toString();
};

const Countdown = () => {
	const [rendered, setRendered] = useState(false);

	useEffect(() => {
		setRendered(true);
	}, []);

	// const weddingDate = new Date("March 26, 2024 11:45:15");
	const weddingDate = new Date("2024-04-20");
	const timeLeftInMs = useCountdown(weddingDate);
	const timeLeft = msToTimeObj(timeLeftInMs);

	if (!rendered) {
		return null;
	}

	return (
		<div className={css.container}>
			<div>
				<div>{toDoubleDigit(timeLeft.day)}</div>
				<div>Days</div>
			</div>
			<div>
				<div>{toDoubleDigit(timeLeft.hour)}</div>
				<div>Hours</div>
			</div>
			<div>
				<div>{toDoubleDigit(timeLeft.minute)}</div>
				<div>Minutes</div>
			</div>
			<div>
				<div>{toDoubleDigit(timeLeft.second)}</div>
				<div>Seconds</div>
			</div>
		</div>
	);
};

export default Countdown;
