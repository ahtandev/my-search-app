import React from "react";
import clsx from "clsx";

interface Props
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	label: string;
	isActive?: boolean;
}

const PaginationButton = ({
	label,
	isActive,
	disabled,
	onClick,
	...rest
}: Props) => {
	return (
		<button
			{...rest}
			className={clsx("pagination-list-item", {
				"pagination-list-item-disabled": disabled,
				"bg-blue-500": isActive,
			})}
			onClick={onClick}
			disabled={disabled}
		>
			{label}
		</button>
	);
};

export default PaginationButton;
