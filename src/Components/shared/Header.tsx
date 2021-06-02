import React ,{useContext} from 'react';
import { Link, useHistory } from 'react-router-dom';

import { AppContext } from "../../AppProviderTSX";
import "./Header.css";
import { HttpFetchSearch } from '../../Helpers/HttpFetch';



import home from '../../assets/images/homeIcon.jpg'
import user from '../../assets/images/user.jpeg'


 const Header=()=> {
	const {  setEpisode } = useContext(AppContext);
	
	const { search, setSearch } = useContext(AppContext);

	const history= useHistory();

	const haddleChange = (e: React.FormEvent<HTMLInputElement>)=>{
		setSearch(e.currentTarget.value);	
	}
	
	const haddleSubmit =(e: React.FormEvent<HTMLInputElement>)=>{
		e.preventDefault();
		console.log(search)
		HttpFetchSearch(search)
		.then(json=>{
			setEpisode(json)
			console.log('search',json.error)
			return json
			
		
		})
		.then(() =>{
			history.push('/search')
			setSearch('')
		})
		
				
			// .then(() =>{
			// 	props.history.push("/search");
			// })
	}

	return (
		<div className="container">
			<div className='containerHeader'>
			<Link to='/'><img src={home} alt="home"/></Link>
			<h1>Rick and Morty</h1>
			<Link to='/account'><img src={user} alt="home"/></Link>	
			</div>

			<form onSubmit={haddleSubmit}>
				<input type="text" value={search} onChange={haddleChange} placeholder='Search'/>
			</form>
		
		
		</div>
	)
}
export default Header