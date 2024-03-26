import { HTMLProps } from "react";
import css from "./TextArea.module.scss";

interface TextAreaPropTypes extends HTMLProps<HTMLTextAreaElement> {
	className?: string;
}

const TextArea: React.FC<TextAreaPropTypes> = ({ placeholder, className }) => {
	return (
		<textarea
			style={{ width: "100%" }}
			maxLength={255}
			rows={3}
			className={`${className} ${css.textarea}`}
			placeholder={placeholder}
		/>
	);
};

export default TextArea;
