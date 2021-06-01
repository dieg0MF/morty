import React ,{useState,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import "./Header.css";

import home from '../../assets/images/home.jpeg'
import user from '../../assets/images/user.jpeg'
import { HttpFetchSearch } from '../../Helpers/HttpFetch';
import { Link } from 'react-router-dom';

export default function Header(props) {
	const { episode, setEpisode } = useContext(AppContext);
	const { episodes, setEpisodes } = useContext(AppContext);
	const { search, setSearch } = useContext(AppContext);

	const haddleChange = (e)=>{
		setSearch(e.target.value);	
	}
	
	const haddleSubmit =(e)=>{
		e.preventDefault();
		console.log(search)
		HttpFetchSearch(search)
		.then(json=>{
			setEpisode(json)
			console.log('search',json)
			return json
			
		
		})
				
			// .then(() =>{
			// 	props.history.push("/search");
			// })
	}

	return (
		<div className="container">
			<div className='containerHeader'>
			<img src={home} alt="home"/>
			<h1>Rick and Morty</h1>
			<Link to='/search'><img src={user} alt="home"/>	</Link>
			</div>

			<form onSubmit={haddleSubmit}>
				<input type="text" value={search} onChange={haddleChange}/>
			</form>
		
		
		</div>
	)
}