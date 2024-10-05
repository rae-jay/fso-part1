import { useState } from "react";

const RateButton = (props) => {
	return (
		<button onClick={props.action}>{props.text}</button>
		//
	);
};

const StatLine = (props) => {
	return (
		<tr>
			<td>{props.label}:</td>
			<td>{props.value}</td>
		</tr>
	);
};

// table, tr, td

const Statistics = (props) => {
	const { bad, neutral, good } = props.counts;

	const count = good + neutral + bad;

	if (count > 0) {
		const average = (good - bad) / count;
		const positive = (good / count) * 100;

		return (
			<div>
				<h2>Statistics:</h2>
				<table>
					<tbody>
						<StatLine label="Bad" value={bad} />
						<StatLine label="Neutral" value={neutral} />
						<StatLine label="Good" value={good} />
						<tr>
							<td>-----</td>
						</tr>
						<StatLine label="Count" value={count} />
						<StatLine label="Average" value={average} />
						<StatLine label="Positive" value={positive + "%"} />
					</tbody>
				</table>
			</div>
		);
	} else {
		return <p>No data</p>;
	}
};

const App = () => {
	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const counts = {
		bad: bad,
		neutral: neutral,
		good: good,
	};

	const handleSetBad = () => {
		setBad(bad + 1);
	};
	const handleSetNeutral = () => {
		setNeutral(neutral + 1);
	};
	const handleSetGood = () => {
		setGood(good + 1);
	};

	return (
		<>
			<h2>Rate:</h2>
			<RateButton text="Bad" action={handleSetBad} />
			<RateButton text="Neutral" action={handleSetNeutral} />
			<RateButton text="Good" action={handleSetGood} />

			<Statistics counts={counts} />
		</>
	);
};

export default App;
