import {
	ChangeEvent,
	DetailedHTMLProps,
	InputHTMLAttributes,
	useEffect,
} from "react";
import { useField, useFormikContext } from "formik";

interface Props
	extends DetailedHTMLProps<
		InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	name: string;
	handeValueChange: (text: string) => void;
}

const TextInput = ({
	name,
	placeholder,
	className,
	handeValueChange,
	...rest
}: Props) => {
	const [field, meta] = useField(name);
	const { handleChange } = useFormikContext();

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		handleChange(e);
		handeValueChange(e.target.value);
	};

	return (
		<input
			{...rest}
			name={name}
			type="text"
			placeholder={placeholder}
			className={className}
			onChange={handleInputChange}
			onBlur={field.onBlur}
			value={field.value}
		/>
	);
};

export default TextInput;
