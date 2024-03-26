import css from "./Button.module.scss";
import { MouseEventHandler } from "react";

type ButtonPropTypes = {
	children: React.ReactNode;
	onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<ButtonPropTypes> = ({ children, onClick }) => {
	return (
		<button onClick={onClick} className={css.button}>
			{children}
		</button>
	);
};

export default Button;
