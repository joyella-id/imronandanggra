import PersonalDetail from "./PersonalDetail/PersonalDetail";
import css from "./third.module.scss";
import Image from "next/image";

const ThirdPage = () => {
	return (
		<div className={css.container} id='page-3'>
			<div className={css.contentContainer}>
				<div>
					<div className={`${css.bismillahArabic} font-Semibold`}>
						بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
					</div>
					<div className="font-Semibold font-14">Bismillahirrahmanirrahim</div>
				</div>
				<div>TOGETHER WITH OUR FAMILIES</div>
				<PersonalDetail
					name="Imron Adi"
					subtitle="The eldest son of Mr. Suyamta Yamto and Mrs. Lina Romis"
					instagram="https://instagram.com/"
				/>
				<h1 className="responsive">&</h1>
				<PersonalDetail
					name="Okta Anggra"
					subtitle="The youngest daughter of Mr. Muhammad Mujib and Mrs. Wiwik Khayati"
					instagram="https://instagram.com/"
				/>
				<div>
					REQUEST YOUR PRESENCE<br></br>at the ceremony and celebration of our
					marriage
				</div>
			</div>
			<div className={css.imageContainer}>
				<Image
					layout="fill"
					src={"https://source.unsplash.com/random"}
					alt="imronanggra"
				/>
			</div>
		</div>
	);
};

export default ThirdPage;
