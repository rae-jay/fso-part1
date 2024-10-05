import { useState } from "react";

const TopVotes = (props) => {
	return (
		<div>
			<h2>Highest rated advice: </h2>
			<p>{props.advice}</p>
			<p>Has {props.votes} votes</p>
		</div>
	);
};

const App = () => {
	// i refuse your thematically relevant yet somewhat boring topic and raise you: bad advice
	// source of mediocre bad advice: https://www.boredpanda.com/funny-bad-advice/
	const badAdvice = [
		'Carry a fork with you. If someone tries to rob you, pull it out of your pocket and say, "thank you Lord for this meal I\'m about to have" and charge at them with the fork.',
		"The elites don't want you to know this but the duck at the parks are free you can take them home. I have 458 ducks.",
		"Spice up you panic attacks with tiny harmonicas.",
		"If you are at an atm at night and there is a person in front of you, give them a kiss on the cheek to let them know you are not a threat.",
		"Key your car so that people think you’re cool enough to have enemies.",
		"If you’re caught speeding go faster. The police can’t arrest you if they can’t catch you.",
		"Put your cell phone in the microwave to charge it.",
		"Always get through red lights as quickly as possible. Stopping increases your chance of being carjacked.",
		"Need to be somewhere on time and don't want to deal with traffic? Inflate your car's tires with helium and gradually float to your destination.",
		"Before going through resumes, throw the top half in the trash. You don't want to hire unlucky people.",
	];
	const pickRandom = () => {
		const max = badAdvice.length;
		return Math.floor(Math.random() * max);
	};
	const createVoteObject = () => {
		return {
			votes: Array(badAdvice.length).fill(0),
			top: 0,
		};
	};

	const [selected, setSelected] = useState(pickRandom());
	const [voteInfo, setVoteInfo] = useState(createVoteObject());

	// 's' for state, not thrilled with that but also want some clarification that
	// it's specifically a variable pointing to a part of that collective object, so
	const sTop = voteInfo.top;
	const sVotes = voteInfo.votes;

	const addVote = () => {
		const newArray = [...sVotes];
		newArray[selected] += 1;

		const newVoteInfo = {
			votes: newArray,
		};

		if (newArray[selected] > newArray[sTop]) {
			newVoteInfo.top = selected;
		} else {
			newVoteInfo.top = sTop;
		}

		setVoteInfo(newVoteInfo);
	};

	return (
		<>
			<p>{badAdvice[selected]}</p>
			<p>Likes: {sVotes[selected]}</p>
			<button onClick={addVote}>Like</button>
			<button onClick={() => setSelected(pickRandom())}>Next</button>
			<TopVotes advice={badAdvice[sTop]} votes={sVotes[sTop]} />
		</>
	);
};

export default App;
