"use client";

import Image from "next/image";
import { CountryDetailsComponent } from "@/components/partial/CountryDetailsComponent";
import { Title } from "@/components/xui/atomic/Typography";
import { getCountryData } from "@/helpers/api/countryApi";
import { CountryDetails } from "@/helpers/types";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Row } from "@/components/xui/atomic/Row";

export default function CountryPage() {
	const countryCode = useSearchParams().get("code");

	const [country, setCountry] = useState<CountryDetails | null>(null);

	useEffect(() => {
		if (countryCode) {
			getCountryData(countryCode)
				.then((data) => setCountry(data))
				.catch(console.error);
		}
	}, [countryCode]);

	if (!country) {
		return (
			<main className="fc center gap-8 row-start-2 p-[20px] sm:p-[50px] bg-black min-h-screen">
				<Title size="lg" color="text-white" bold>
					Loading...
				</Title>
			</main>
		);
	}

	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-[20px] sm:p-[50px] bg-black min-h-screen">
			<Row alignment="center" justification="between">
				<Row gap="md">
					{country.flag && (
						<Image
							src={country?.flag || ""}
							alt={"name"}
							width={50}
							height={50}
						/>
					)}
					<Title size="lg" color="text-white" bold>
						{country?.name}
					</Title>
				</Row>
				<Row justification="end">
					<a
						href="/"
						className="transform duration-[200ms] fr center sm:items-start sm:justify-start hover:-translate-y-1 text-white"
					>
						◀ Back
					</a>
				</Row>
			</Row>
			<CountryDetailsComponent country={country} />
		</main>
	);
}
