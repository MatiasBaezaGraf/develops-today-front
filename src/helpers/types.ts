export interface Country {
	countryCode: string;
	name: string;
}

export interface CountryDetails {
	name: string;
	flag: string;
	borders: Borders[];
	historicPopulation: HistoricPopulation[];
}

export interface Borders {
	commonName: string;
	officialName: string;
	countryCode: string;
	region: string;
	borders: string;
}

export interface HistoricPopulation {
	year: number;
	value: number;
}
