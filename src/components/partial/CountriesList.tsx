"use client";

import { getAllCountries } from "@/helpers/api/countryApi";
import { Country } from "@/helpers/types";
import { useEffect, useState } from "react";
import { Grid } from "../xui/atomic/Grid";

export const CountriesList = () => {
	const [countries, setCountries] = useState<Country[]>([]);

	useEffect(() => {
		getAllCountries()
			.then((data) => setCountries(data))
			.catch(console.error);
	}, []);

	return (
		<Grid gap="sm" md="6" xs="2">
			{countries.map((country) => (
				<a
					href={`/countries?code=${country.countryCode}`}
					className="transform duration-[200ms] fr center sm:items-start sm:justify-start hover:-translate-y-1 text-white"
					key={country.countryCode}
				>
					{country.name}
				</a>
			))}
		</Grid>
	);
};
