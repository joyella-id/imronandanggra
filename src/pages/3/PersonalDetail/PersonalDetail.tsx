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
		<div className={css.nameContainer}>
			<div>
				<h2 className="responsive">{name}</h2>
				<div className="font-12 responsive">{subtitle}</div>
			</div>
			<a target="_blank" href={instagram}>
					<InstagramIcon size={20} />
			</a>
		</div>
	);
};

export default PersonalDetail;
