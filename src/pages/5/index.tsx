import css from "./fifth.module.scss";
import Image from "next/image";
import designImage from "../../assets/images/placeholder-3d-model.jpg";
import style from "../invitation.module.scss";
import images from "../../assets/images/Edit 5.jpg";

const FifthPage = () => {
	return (
		<section className={style.container} id="page-5">
			<div className={`${style.contentContainer} ${css.title}`}>
				This is not just a Love Store, this is{" "}
				<span className="font-Bold">Our Story.</span>
			</div>
			<div className={css.imageContainer}>
				<Image
					layout="fill"
					src={images}
					alt="imronanggra"/>
			</div>
			<div className={`${style.contentContainer} ${css.story}`}>
			<h2>
				Imron Adi & Okta Anggra at the Same School
			</h2>
			<div className={`font-16 responsive`}>
				Not many people know that Imron Adi and Okta Anggra have known each
				other since 2012. They attended the same school, Sekolah Menengah
				Kejuruan Negeri Dua Buduran, Sidoarjo, Indonesia. Okta Anggra was a
				student in the multimedia 3 program, while Imron Adi was in the
				multimedia 1 program. Their meeting was quite unique, when Anggra was
				being punished for arriving late to school, that was the first time
				Anggra saw Imron. In Anggra&apos;s eyes back then, Imron seemed like a
				strange bookworm who always walked hurriedly. No one would have thought
				that Imron would become what he is now.
			</div>
			<h2 >
				The 3D Modeling process by Imron Adi during his school days (2015)
			</h2>
			<div className={``}>
				<div className={`${css.lastParagraph} font-16 responsive`}>
					<div>
						According to Okta Anggra, this is very romantic, where Imron
						Adi&apos;s assignment is stil inspired by Her. The model (yellow) is
						Imron Adi, and the model (red) is Okta Anggra, created for the
						school&apos;s final project.
					</div>
					<Image
						alt="3d design image"
						src={designImage}/>
				</div>
			</div>
			</div>
		</section>
	);
};

export default FifthPage;
