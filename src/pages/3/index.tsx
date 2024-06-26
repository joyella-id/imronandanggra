import PersonalDetail from "./PersonalDetail/PersonalDetail";
import css from "./third.module.scss";
import Image from "next/image";
import style from "../invitation.module.scss";
import images from "../../assets/images/Edit 3.jpg";

const ThirdPage = () => {
	return (
		<section className={style.container} id="page-3">
			<br/>
			<div className={style.contentContainer}>
				<div className={style.arabic}>
					<h2>بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ</h2>
					<div>Bismillahirrahmanirrahim</div>
				</div>

				<p>TOGETHER WITH OUR FAMILIES</p>
				
				<div>
					<PersonalDetail
						name="Imron Adi"
						subtitle="The eldest son of Mr. Suyamta and Mrs. Guslinawati"
						instagram="https://instagram.com/imronadil"
					/>
					<br />
					<h1 className="responsive">&</h1>
					<br />
					<PersonalDetail
						name="Okta Anggra"
						subtitle="The youngest daughter of Mr. Muhammad Mujib and Mrs. Wiwik Khayati"
						instagram="https://instagram.com/okta.anggra"
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
					src={images}
					alt="imronanggra"
				/>
			</div>
		</section>
	);
};

export default ThirdPage;
