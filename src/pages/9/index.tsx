import css from "./ninth.module.scss";
import rose from "../../assets/images/Rose -8.png";
import Image from "next/image";

const NinthPage = () => {
	return (
		<section className={css.container} id="page-9">
			<div className={css.imageContainer}>
				<Image src={rose} alt="rose" layout="fill" />
			</div>
			<div className={css.textContainer}>
				<div>Warm Regards~</div>
				<div>
					<div>Imron Adi &</div>
					<div>Okta Anggra</div>
				</div>
				<div>See you on venue dear!</div>
			</div>
		</section>
	);
};

export default NinthPage;
