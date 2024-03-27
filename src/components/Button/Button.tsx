import Loading from "../Loading/Loading";
import css from "./Button.module.scss";
import { MouseEventHandler } from "react";

type ButtonPropTypes = {
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	loading?: boolean;
};

const Button: React.FC<ButtonPropTypes> = ({ loading, children, onClick }) => {
	return (
		<button onClick={onClick} className={css.button}>
			{loading ? <Loading /> : children}
		</button>
	);
};

export default Button;
