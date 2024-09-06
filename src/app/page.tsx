import { Title } from "@/components/xui/atomic/Typography";
import { CountriesList } from "@/components/partial/CountriesList";

export default function Home() {
	return (
		<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start p-[20px] sm:p-[50px] bg-black min-h-screen">
			<Title size="lg" color="text-white" bold>
				Countries App
			</Title>
			<CountriesList />
		</main>
	);
}
