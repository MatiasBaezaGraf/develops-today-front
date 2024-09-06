import { Borders } from "@/helpers/types";
import { Col } from "../xui/atomic/Col";
import { Row } from "../xui/atomic/Row";
import { Text } from "../xui/atomic/Typography";

export const BorderingCountries = ({ borders }: { borders: Borders[] }) => {
	return (
		<Col gap="sm">
			<Text color={"text-white"} bold>
				Bordering On
			</Text>
			<Row gap="sm">
				{borders.map((border) => (
					<a
						href={`/countries?code=${border.countryCode}`}
						className="transform duration-[200ms] fr center sm:items-start sm:justify-start hover:-translate-y-1 text-white"
						key={border.countryCode}
					>
						{border.commonName}
					</a>
				))}
			</Row>
		</Col>
	);
};
