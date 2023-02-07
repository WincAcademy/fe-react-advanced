import { useState } from 'react';

const createInitialState = () => {
	const age = new Date().getFullYear() - 1992;
	return age;
};

const App = () => {
	const [version, setVersion] = useState(0);

	const handleReset = () => setVersion(version + 1);
	return (
		<div className="App">
			<Person key={version} reset={handleReset} />
		</div>
	);
};

const Person = ({ reset }) => {
	const [name, setName] = useState('Mark');
	const [age, setAge] = useState(createInitialState);

	const handleClick = () => {
		setName((name) => name + 'o');
		setName((name) => name + 'o');
		console.log(name);
	};

	const handleBirthdayClick = () => {
		setAge(age + 1);
	};
	return (
		<>
			<h2>{name}</h2>
			<h3>{age}</h3>
			<button onClick={handleClick}> Italianize </button>
			<button onClick={handleBirthdayClick}> Birthday </button>
			<button onClick={reset}> Reset </button>
		</>
	);
};

export default App;
