import { Title } from "./atomic/Typography";

export const TitleSection = ({
	title,
	children,
	childrenOn,
	className,
}: {
	title: string;
	children?: JSX.Element;
	childrenOn?: "sm" | "md" | "lg";
	className?: string;
}) => {
	return (
		<div className={`fr justify-between items-center my-[20px] ${className}`}>
			<Title spacing="md" color="text-primary">{title}</Title>
			<div className={`${childrenOn && childrenOn + ":hidden"} flex`}>
				{children}
			</div>
		</div>
	);
};
