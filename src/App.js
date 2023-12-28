import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Header from './Components/Header';
import Buttons from './Components/Buttons';
import Card from './Components/Card';
import axios from 'axios';
import SearchBar from './Components/SearchBar';


const url = 'https://api.nobelprize.org/v1/prize.json';


function App() {
	const [data, setData] = useState([]);
	const [filteredData, setFiteredData] = useState([]);
	const [query, setQuery] = useState('');
	const [year, setYear] = useState('');
	const [category, setCategory] = useState('');

	const getByYear = (y) => {
		let newData = [];
		if (y === 'All') {
			newData = data;
		} else {
			newData = data.filter((prize) => prize['year'] == y);
		}
		console.log(newData);
		setFiteredData(newData);
	}

	const getByCategory = (c) => {
		let newData = [];
		if (c === 'All Categories') {
			newData = data;
		} else {
			newData = data.filter((prize) => prize['category'] == c.toLowerCase());
		}
		console.log(newData);
		setFiteredData(newData);
	}

	const getByName = (name) => {
		let newData = [];
		if (name === '') {
			console.log(data);
			setFiteredData(data);
		} else {
			for (var prize in data) {
				var newPrize = data[prize];
				for (let person in newPrize['laureates']) {
					var newPerson = newPrize['laureates'][person];
					var fullName = newPerson['firstname'] + " " + newPerson['surname'];
					if (fullName.includes(name)) {
						newData.push(newPrize);
					}
				}
			}
			console.log(newData);
			setFiteredData(newData);
		}
	}

	async function getData() {
		let data = await axios.get(url);
		data = data['data']['prizes'];
		for (var prize in data) {
			var name = '';
			var motive = '';
			var newPrize = data[prize];
			for (var lau in newPrize['laureates']) {
				var newLau = newPrize['laureates'][lau];
				name += newLau['firstname'] + " " + newLau['surname'] + ", ";
				motive = newLau['motivation'];
			}
			data[prize]['name'] = name + "\b\b";
			data[prize]['motive'] = motive;
		}
		setData(data);
		setFiteredData(data);
		console.log(data);
	}

	useEffect(() => {
		getData();
	}, []);

	const handleYear = (y) => {
		setYear(y);
		getByYear(y);
	}

	const handleCategory = (c) => {
		setCategory(c);
		getByCategory(c);
	}

	const handleQuery = (q) => {
		setQuery(q);
		getByName(q);
	}

	return (
		<div className="App">
			<h2 className="heading">"Nobel Laureates in Focus"</h2>
			<Header/>
			<SearchBar changeQuery = { handleQuery } />
			<Buttons changeCategory = { handleCategory } changeYear = { handleYear } />
			<h1 className='heading' >Nobel Prize Winners</h1>

			{
				filteredData.map((prize) => 
					<Card year = { prize.year } 
						category = { prize.category } 
						names = { prize.name }
						motive = { prize.motive }
					/>
				)
			}
		</div>
	);
}

export default App;
