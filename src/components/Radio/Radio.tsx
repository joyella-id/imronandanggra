import css from "./Radio.module.scss";

interface RadioProps {
	choices: Array<{ label: string; value: string; checked?: boolean }>;
	onChange: (value: string) => void;
	name: string;
	value: string;
}

const Radio: React.FC<RadioProps> = ({ choices, onChange, name, value }) => {
	return (
		<div className={css.radioContainer}>
			{choices.map((choice) => {
				return (
					<label key={choice.value} className={css.container}>
						{choice.label}
						<input
							checked={value === choice.value}
							onChange={() => {
								onChange(choice.value);
							}}
							name={name}
							type="radio"
						/>
						<span className={css.checkmark}></span>
					</label>
				);
			})}
		</div>
	);
};

export default Radio;
