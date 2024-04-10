"use client";
import Image from "next/image";
import css from "./second.module.scss";
import style from "../invitation.module.scss";
import images from "../../assets/images/Edit 4.jpg";

const SecondPage = () => {
	return (
		<section id="page-2" className={style.container}>
			<div className={css.imageContainer}>
				<Image layout="fill" src={images} alt="imronanggra" />
			</div>
			<div className={style.contentContainer}>
				<div className={style.arabic}>
					<h2>فَجَعَلَ مِنْهُ الزَّوْجَيْنِ الذَّكَرَ وَالْاُنْثٰى</h2>
					<p>Faja&apos;ala minhu al-zawjayni al-dhakar wa al-untha</p>
				</div>
				<div>
					<p>
						Then Allah made from its mate, and He produced from it the two
						sexes, the male and the female.
					</p>
					<p className="font-12">(Quran, Surah Al-Qiyamah: 39)</p>
				</div>
			</div>
		</section>
	);
};

export default SecondPage;
