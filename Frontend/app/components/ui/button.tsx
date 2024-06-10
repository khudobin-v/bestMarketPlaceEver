"use client";

// TODO: адаптировать кнопку под разные экраны

import Link from "next/link";

interface IButton {
	variant?: "default" | "icon" | "link";
	icon?: React.ReactNode;
	color?: "light" | "dark" | "gray" | "";
	href?: string;
	size?: "default" | "small";
	onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
	children?: React.ReactNode;
}

export const Button = ({
	variant = "default",
	icon,
	color = icon ? "" : "light",
	href,
	size = "default",
	onClick,
	children,
}: IButton) => {
	return (
		<>
			{/* текстовая кнопка */}
			{variant === "default" && (
				<button
					onClick={onClick}
					className={`w-full rounded-lg ${
						size === "small" ? "px-1.5 py-3 text-sm" : "p-3"
					} text-white font-semibold flex items-center border border-transparent active:border active:border-red-400   active:bg-accent/30 transition-colors justify-center ${
						color === "light"
							? "bg-button-accent hover:bg-button-accent/85"
							: color === "gray"
								? "bg-button-gray-accent hover:bg-button-gray-accent/85"
								: "bg-button-dark-accent hover:bg-button-dark-accent/85"
					} transition-colors`}
				>
					{children}
				</button>
			)}
			{/* кнопка-иконка */}
			{variant === "icon" && icon && (
				<button
					onClick={onClick}
					className={`w-max rounded-lg p-2.5 text-icon    transition-colors flex items-center justify-center ${color === "dark" && "bg-button-dark-accent hover:bg-button-dark-accent/85 text-white"} ${color === "light" && "bg-button-accent hover:bg-button-accent/85 text-white "} ${!color && "bg-transparent hover:bg-transparent/5 hover:text-icon/90"}`}
				>
					{icon}
				</button>
			)}
			{/* кнопка-ссылка */}
			{variant === "link" && (
				<Link
					className="text-link underline underline-offset-2 font-medium hover:text-link/80 hover:underline-offset-4 transition-all"
					href={href!}
					onClick={onClick}
				>
					{children}
				</Link>
			)}
		</>
	);
};
