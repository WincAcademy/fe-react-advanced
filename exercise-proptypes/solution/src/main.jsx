import React from 'react';
import ReactDOM from 'react-dom/client';
import { Person } from './Person';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<>
			<Person
				address={{
					street: 'Zuckerberg Avenue',
					houseNumber: 1,
					city: 'San Francisco',
				}}
				age={27}
				hobbies={['play piano', 'cook', 'play basketball']}
				name="Johnny"
				pronoun="He"
			/>
			<br />
			<Person name="Hector" address="Hey" />
		</>
	</React.StrictMode>,
);
