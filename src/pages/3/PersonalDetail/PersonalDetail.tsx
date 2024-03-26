"use client";

import { ReactNode } from "react";
import css from "./PersonalDetail.module.scss";
import InstagramIcon from "@/assets/icons/instagram";

type PersonalDetailPropTypes = {
	name: string;
	subtitle: ReactNode;
	instagram: string;
};

const PersonalDetail: React.FC<PersonalDetailPropTypes> = ({
	name,
	subtitle,
	instagram,
}) => {
	return (
		<div>
			<div className={css.nameContainer}>
				<h1 className="responsive">{name}</h1>
				<a target="_blank" href={instagram}>
					<InstagramIcon size={20} />
				</a>
			</div>
			<div className="font-14 responsive">{subtitle}</div>
		</div>
	);
};

export default PersonalDetail;
