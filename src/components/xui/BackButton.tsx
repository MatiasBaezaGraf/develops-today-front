import { usePathname, useRouter } from "next/navigation";

import { XButton } from "./XButton";
import Icon from "./Icon";

export const BackButton = ({
	route,
	goBack,
}: {
	route?: string;
	goBack?: boolean;
}) => {
	const router = useRouter();

	const pathname = usePathname();

	const handleRedirect = () => {
		if (goBack) {
			router.back();
		} else if (route) {
			router.push(route);
		} else {
			const lastPath = pathname.split("/").slice(-2)[0];

			router.push(`/${lastPath}`);
		}
	};

	return (
		<XButton
			className="shadow-button bg-border text-white"
			onClick={handleRedirect}
		>
			<Icon
				name="arrow-down"
				className="w-[20px] h-[20px] transform rotate-90 fill-white"
			/>
			<p className=" font-bold mt-1">Back</p>
		</XButton>
	);
};
