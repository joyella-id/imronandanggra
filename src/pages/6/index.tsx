import css from "./sixth.module.scss";
import Image from "next/image";

const SixthPage = () => {
	return (
		<section className={css.container} id="page-6">
			<div className={css.imageContainer}>
				<Image
					layout="fill"
					src={"https://source.unsplash.com/random"}
					alt="imronanggra"
				/>
			</div>
			<div className={css.textContainer}>
				<div>الأمل هو ضوء صغير في الظلام</div>
				<div>Al-amal hu daw&apos; saghir fi alzalam</div>
				<div>Hope is a small light in the darkness.</div>
			</div>
		</section>
	);
};

export default SixthPage;
