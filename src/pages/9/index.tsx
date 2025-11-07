/* eslint-disable @next/next/no-img-element */
import css from "./ninth.module.scss";
import rose from "../../assets/images/Rose -8.png";
import Image from "next/image";
import { Whatsapp } from "@/assets/icons/whatsapp";

const NinthPage = () => {
	const whatsappNumber = "+6287815917683";
	const message =
		"Halo OurJoy by Joyella, apa bisa tanya tanya untuk pesan undangan online ?";
	const whatsappUrl = new URL(`https://wa.me/${whatsappNumber}`);
	whatsappUrl.searchParams.append("text", message);

	return (
		<>
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
			<div className={css.footer}>
				<div className={css.logoContainer}>
					<div>
						<img
							src="https://utfs.io/f/cda88ce7-1f16-41a8-a158-98f3c012e72c-5t0hc.svg"
							alt="ourjoy"
						/>
					</div>
					<img
						src="https://utfs.io/f/4cc98e52-3e08-42df-ae9f-c689b7f9ae8c-zb0pnc.svg"
						alt="joyella"
					/>
				</div>
				<div className={css.divider}></div>
				<div>
					<a
						href={whatsappUrl.toString()}
						target="_blank"
						className={css.circleIcon}
					>
						<Whatsapp size={20} />
					</a>
				</div>
			</div>
		</>
	);
};

export default NinthPage;
