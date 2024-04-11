import Button from "@/components/Button/Button";
import Countdown from "./Countdown/Countdown";
import roseImage from "../../assets/images/Rose petals 2.png";
import css from "./fourth.module.scss";
import Image from "next/image";
import style from "../invitation.module.scss";

const FourthPage = () => {
	return (
		<section className={style.container} id="page-4">
			<div className={css.imageContainer}>
				{/* <Image src={roseImage} layout="fill" alt="rose" /> */}
			</div>
			
			<div className={style.contentContainer}>
				<div className={css.gap}>
					on <span className="font-Bold">Saturday, April 20ᵗʰ 2024</span>
				</div>
				<Countdown />
				<div>
					from <span className="font-Bold">11.00 am</span> to{" "}
					<span className="font-Bold">14.00 am</span>
				</div>
				<div className="margin--xsmall-b margin--large-t">
					at <span className="font-Bold">Caramel Home Kitchen</span>
				</div>
				<div className="font-16 responsive">
					Jl. Pondok Jati Blok AK No. 15, Pondok Jati, Pagerwojo, Buduran,
					Kabupaten Sidoarjo, Jawa Timur, 61252
				</div>
				<div className={css.buttonContainer}>
					<a target="_blank" href="https://maps.app.goo.gl/5TZDghYjo84NoDyVA">
						<Button>Google Maps</Button>
					</a>
				</div>
				<br /><br />
				<h1 className="responsive">
				It&apos;s not about finding someone you can live with, but finding
				someone <span className="font-Bold">you can&apos;t live without.</span>
				</h1>
			</div>
		</section>
	);
};

export default FourthPage;
