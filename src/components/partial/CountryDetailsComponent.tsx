import { CountryDetails } from "@/helpers/types";
import { Text } from "../xui/atomic/Typography";

import { BorderingCountries } from "./BorderingCountries";
import { HistoricPopulations } from "./HistoricPopulations";

export const CountryDetailsComponent = ({
	country,
}: {
	country: CountryDetails | null;
}) => {
	const borders = country?.borders || [];
	const historicPopulations = country?.historicPopulation || [];

	if (country) {
		return (
			<div className="w-full fc gap-[50px]">
				<BorderingCountries borders={borders} />
				<HistoricPopulations historicPopulations={historicPopulations} />
			</div>
		);
	} else {
		return (
			<div>
				<Text color={"text-white"}>No country selected</Text>
			</div>
		);
	}
};
