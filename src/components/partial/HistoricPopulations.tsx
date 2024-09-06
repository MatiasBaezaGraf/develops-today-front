import { HistoricPopulation } from "@/helpers/types";
import { Col } from "../xui/atomic/Col";
import { Text } from "../xui/atomic/Typography";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const HistoricPopulations = ({
	historicPopulations,
}: {
	historicPopulations: HistoricPopulation[];
}) => {
	return (
		<Col gap="sm" alignment="stretch">
			<Text color={"text-white"} bold>
				Historic Population
			</Text>
			{historicPopulations.length > 0 ? (
				<Line
					data={{
						labels: historicPopulations.map((item) => item.year),
						datasets: [
							{
								label: "Population",
								data: historicPopulations.map((item) => item.value),
								fill: false,
								borderColor: "rgba(75, 192, 192, 1)",
								tension: 1,
							},
						],
					}}
				/>
			) : (
				<Text color={"text-white"}>No population data available</Text>
			)}
		</Col>
	);
};
