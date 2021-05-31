import React ,{useState} from 'react';

export default function Header() {

	const [search, setSearch] = useState('');

	const haddleChange = (e)=>{
		setSearch(e.target.value);	
	}
	
	const haddleSubmit =(e)=>{
		e.preventDefault();
		console.log(search)
	}

	return (
		<div className="container">
			<img src="./assets/home.png" alt="home"/>
			<h1>Rick and Morty</h1>
			<img src="./assets/account.png" alt="home"/>
			<form onSubmit={haddleSubmit}>
				<input type="text" value={search} onChange={haddleChange}/>
			</form>
		</div>
	)
}