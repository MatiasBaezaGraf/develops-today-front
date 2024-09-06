import { ReactNode } from "react";

import classNames from "classnames";

export const Grid = ({
	children,
	gap,
	xs,
	sm,
	md,
	lg,
	xl,
}: {
	children: ReactNode;
	gap: "sm" | "md" | "lg";
	xs?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	sm?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	md?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	lg?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
	xl?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8";
}) => {
	return (
		<div
			className={classNames(" grid w-full h-full", {
				"lg:gap-[10px] gap-[6px]": gap === "sm",
				"lg:gap-[20px] gap-[15px]": gap === "md",
				"lg:gap-[30px] gap-[24px]": gap === "lg",
				"xs:grid-cols-1": xs === "1",
				"xs:grid-cols-2": xs === "2",
				"xs:grid-cols-3": xs === "3",
				"xs:grid-cols-4": xs === "4",
				"xs:grid-cols-5": xs === "5",
				"xs:grid-cols-6": xs === "6",
				"xs:grid-cols-7": xs === "7",
				"xs:grid-cols-8": xs === "8",
				"sm:grid-cols-1": sm === "1",
				"sm:grid-cols-2": sm === "2",
				"sm:grid-cols-3": sm === "3",
				"sm:grid-cols-4": sm === "4",
				"sm:grid-cols-5": sm === "5",
				"sm:grid-cols-6": sm === "6",
				"sm:grid-cols-7": sm === "7",
				"sm:grid-cols-8": sm === "8",
				"md:grid-cols-1": md === "1",
				"md:grid-cols-2": md === "2",
				"md:grid-cols-3": md === "3",
				"md:grid-cols-4": md === "4",
				"md:grid-cols-5": md === "5",
				"md:grid-cols-6": md === "6",
				"md:grid-cols-7": md === "7",
				"md:grid-cols-8": md === "8",
				"lg:grid-cols-1": lg === "1",
				"lg:grid-cols-2": lg === "2",
				"lg:grid-cols-3": lg === "3",
				"lg:grid-cols-4": lg === "4",
				"lg:grid-cols-5": lg === "5",
				"lg:grid-cols-6": lg === "6",
				"lg:grid-cols-7": lg === "7",
				"lg:grid-cols-8": lg === "8",
				"xl:grid-cols-1": xl === "1",
				"xl:grid-cols-2": xl === "2",
				"xl:grid-cols-3": xl === "3",
				"xl:grid-cols-4": xl === "4",
				"xl:grid-cols-5": xl === "5",
				"xl:grid-cols-6": xl === "6",
				"xl:grid-cols-7": xl === "7",
				"xl:grid-cols-8": xl === "8",
			})}
		>
			{children}
		</div>
	);
};
