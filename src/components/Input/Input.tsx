import { HTMLProps } from "react";
import css from "./Input.module.scss";

interface InputPropTypes extends HTMLProps<HTMLInputElement> {
	className?: string;
}

const Input: React.FC<InputPropTypes> = ({
	onChange,
	placeholder,
	type,
	className,
}) => {
	return (
		<input
			className={`${className} ${css.input}`}
			type={type}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;
