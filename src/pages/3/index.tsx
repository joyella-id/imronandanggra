import PersonalDetail from "./PersonalDetail/PersonalDetail";
import css from "./third.module.scss";
import Image from "next/image";
import style from "../invitation.module.scss";

const ThirdPage = () => {
	return (
		<section className={style.container} id="page-3">
			<div className={style.contentContainer}>
				
				<div className={style.arabic}>
					<h2>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
					<div>Bismillahirrahmanirrahim</div>
				</div>

				<p>TOGETHER WITH OUR FAMILIES</p>
				
				<div>
					<PersonalDetail
						name="Imron Adi"
						subtitle="The eldest son of Mr. Suyamta Yamto and Mrs. Lina Romis"
						instagram="https://instagram.com/"
					/>
					<br />
					<h1 className="responsive">&</h1>
					<br />
					<PersonalDetail
						name="Okta Anggra"
						subtitle="The youngest daughter of Mr. Muhammad Mujib and Mrs. Wiwik Khayati"
						instagram="https://instagram.com/"
					/>
				</div>
				<p>
					REQUEST YOUR PRESENCE<br></br>at the ceremony and celebration of our
					marriage
				</p>
			</div>
			<div className={css.imageContainer}>
				<Image
					layout="fill"
					src={"https://source.unsplash.com/random"}
					alt="imronanggra"
				/>
			</div>
		</section>
	);
};

export default ThirdPage;
