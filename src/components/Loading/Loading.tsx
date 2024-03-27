import React from "react";
import styles from "./Loading.module.scss";

type LoadingPropTypes = {
	color?: "white" | "black" | "red";
};
const Loading: React.FC<LoadingPropTypes> = ({ color = "white" }) => {
	return (
		<div className={`${styles[color]} ${styles.loading}`}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};

export default Loading;
