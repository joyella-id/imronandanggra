import Button from "@/components/Button/Button";
import Countdown from "./Countdown/Countdown";
import roseImage from "../../assets/images/Rose -8.png";
import css from "./fourth.module.scss";
import Image from "next/image";

const FourthPage = () => {
	return (
		<div className={css.container} id="page-4">
			<div className={css.imageContainer}>
				<Image src={roseImage} layout="fill" alt="rose" />
			</div>
			<div>
				<div>
					on <span className="font-Bold">Saturday, April 20ᵗʰ 2024</span>
				</div>
				<Countdown />
				<div>
					from <span className="font-Bold">08.00 am</span> to{" "}
					<span className="font-Bold">12.00 am</span>
				</div>
				<div className="margin--xsmall-b margin--large-t">
					at <span className="font-Bold">Caramel Home Kitchen</span>
				</div>
				<div className="font-14 responsive">
					Jl. Pondok Jati Blok AK No. 15, Pondokjati, Pagerwojo, Buduran,
					Kabupaten Sidoarjo, Jawa Timur, 61252
				</div>
				<div className={css.buttonContainer}>
					<a target="_blank" href="https://maps.app.goo.gl/5TZDghYjo84NoDyVA">
						<Button>Google Maps</Button>
					</a>
				</div>
			</div>
			<h1 className="responsive">
				It&apos;s not about finding someone you can live with, but finding
				someone <span className="font-Bold">you can&apos;t live without.</span>
			</h1>
		</div>
	);
};

export default FourthPage;
