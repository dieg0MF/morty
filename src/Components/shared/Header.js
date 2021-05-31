import React ,{useState,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import "./Header.css";

import home from '../../assets/images/home.jpeg'
import user from '../../assets/images/user.jpeg'

export default function Header() {


	const { search, setSearch } = useContext(AppContext);

	const haddleChange = (e)=>{
		setSearch(e.target.value);	
	}
	
	const haddleSubmit =(e)=>{
		e.preventDefault();
		console.log(search)
	}

	return (
		<div className="container">
			<div className='containerHeader'>
			<img src={home} alt="home"/>
			<h1>Rick and Morty</h1>
			<img src={user} alt="home"/>
			</div>

			<form onSubmit={haddleSubmit}>
				<input type="text" value={search} onChange={haddleChange}/>
			</form>
		</div>
	)
}