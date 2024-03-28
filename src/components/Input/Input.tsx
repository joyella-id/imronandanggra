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
	disabled,
	value,
	pattern,
	inputMode,
}) => {
	return (
		<input
			inputMode={inputMode}
			pattern={pattern}
			disabled={disabled}
			value={value}
			className={`${className} ${css.input}`}
			type={type}
			onChange={onChange}
			placeholder={placeholder}
		/>
	);
};

export default Input;

