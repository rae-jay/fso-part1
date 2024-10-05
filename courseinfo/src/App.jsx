const Part = (props) => {
	return (
		<p>
			{props.name} {props.exercises}
		</p>
	);
};

const Header = (props) => {
	return <h1>{props.course}</h1>;
};

const Content = (props) => {
	const partsList = props.parts;
	return (
		<div>
			<Part name={partsList[0].name} exercises={partsList[0].exercises} />
			<Part name={partsList[1].name} exercises={partsList[1].exercises} />
			<Part name={partsList[2].name} exercises={partsList[2].exercises} />
		</div>
	);
};

const Total = (props) => {
	const total =
		props.parts[0].exercises +
		props.parts[1].exercises +
		props.parts[2].exercises;
	return <p>Number of exercises {total}</p>;
};

//
const App = () => {
	const course = {
		name: "Half Stack application development",
		parts: [
			{
				name: "Fundamentals of React",
				exercises: 10,
			},
			{
				name: "Using props to pass data",
				exercises: 7,
			},
			{
				name: "State of a component",
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<Header course={course.name} />
			<Content parts={course.parts} />
			<Total parts={course.parts} />
		</div>
	);
};

export default App;
