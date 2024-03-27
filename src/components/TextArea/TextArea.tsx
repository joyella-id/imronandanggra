import { HTMLProps } from "react";
import css from "./TextArea.module.scss";

interface TextAreaPropTypes extends HTMLProps<HTMLTextAreaElement> {
	className?: string;
}

const TextArea: React.FC<TextAreaPropTypes> = ({
	placeholder,
	className,
	onChange,
	value,
}) => {
	return (
		<textarea
			onChange={onChange}
			value={value}
			style={{ width: "100%" }}
			maxLength={255}
			rows={3}
			className={`${className} ${css.textarea}`}
			placeholder={placeholder}
		/>
	);
};

export default TextArea;
