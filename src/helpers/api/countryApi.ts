import axios from "axios";

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export const getAllCountries = async () => {
	const res = await axios.get(`${baseUrl}/countries`);

	if (res.status !== 200) {
		throw new Error("Failed to fetch countries");
	}

	return res.data;
};

export const getCountryData = async (countryCode: string) => {
	const res = await axios.get(`${baseUrl}/countries/${countryCode}`);

	if (res.status !== 200) {
		throw new Error("Failed to fetch country data");
	}

	return res.data;
};
