"use client";

import { useEffect, useState } from "react";
import { RsvpType, WishType } from "@/utils/airtable";
import Loading from "@/components/Loading/Loading";
import styles from "./view-data.module.scss";
import { useFetchFunction } from "@/utils/hooks";

const ViewData = () => {
	const [wishes, setWishes] = useState<WishType[]>([]);
	const [rsvp, setRsvp] = useState<RsvpType[]>([]);
	const { fetchFunction: fetchWishFunction, loading: fetchWishesLoading } =
		useFetchFunction<WishType>();

	const { fetchFunction: fetchRsvpFunction, loading: fetchRsvpLoading } =
		useFetchFunction<RsvpType>();

	useEffect(() => {
		fetchWishFunction(
			() => fetch("/airtable?data=wishes"),
			(data) => {
				setWishes(
					data.records.map((record) => {
						return record.fields;
					}),
				);
			},
		);
		fetchRsvpFunction(
			() => fetch("/airtable?data=rsvp"),
			(data) => {
				setRsvp(data.records.map((record) => record.fields));
			},
		);
	}, []);

	return (
		<div className={styles.container}>
			{fetchWishesLoading || fetchRsvpLoading ? (
				<div className={styles.loadingContainer}>
					<Loading color="black" />
				</div>
			) : (
				<div>
					<h1>RSVP</h1>
					<div className={styles.rsvpContainer}>
						{rsvp.map((singleRsvp) => (
							<div key={singleRsvp.id} className={styles.singleRsvp}>
								<div>
									<div className={styles.title}>Name</div>
									<div>{singleRsvp.name}</div>
								</div>
								<div>
									<div className={styles.title}>Attendance Count</div>
									<div>{singleRsvp.attendanceCount}</div>
								</div>
								<div>
									<div className={styles.title}>Will Attend ?</div>
									<div>{singleRsvp.willAttend ? "Yes" : "No"}</div>
								</div>
							</div>
						))}
					</div>
					<br />
					<h1>Wishes</h1>
					<div className={styles.rsvpContainer}>
						{wishes.map((singleWishes) => {
							const date = new Date(singleWishes.createdAt || "");
							const durationFromToday = Date.now() - date.getTime();
							const daysAgo = Math.floor(durationFromToday / 86400000);
							const shownDate =
								daysAgo === 0
									? "Less than a day ago"
									: daysAgo > 0
									? `${daysAgo} day(s) ago`
									: `${daysAgo * -1} day(s) later`;
							return (
								<div key={singleWishes.id} className={styles.singleWishes}>
									<div className={styles.title}>{singleWishes.name}</div>
									<div>{singleWishes.wishes}</div>
									<div className={styles.title}>{shownDate}</div>
								</div>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export default ViewData;
