"use client";
import Image from "next/image";
import css from "./second.module.scss";

const SecondPage = () => {
	return (
		<section id="page-2" className={css.container}>
			<div className={css.imageContainer}>
				<Image
					layout="fill"
					src={"https://source.unsplash.com/random"}
					alt="imronanggra"
				/>
			</div>
			<div className={css.contentContainer}>
				<div>
					<div className={css.arabic}>
						<div>فَجَعَلَ مِنْهُ الزَّوْجَيْنِ الذَّكَرَ وَالْاُنْثٰى</div>
						<div>Faja&apos;ala minhu al-zawjayni al-dhakar wa al-untha</div>
					</div>
					<div className={css.indonesia}>
						<div>
							Then Allah made from its mate, and He produced from it the two
							sexes, the male and the female.
						</div>
						<div>(Quran, Surah Al-Qiyamah: 39)</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SecondPage;
