import React ,{useState, useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import {HttpFetch} from '../../Helpers/HttpFetch.js';
import Cards from '../shared/Cards.js';
import './Main.css'


export default function Main() {
	const {episodes, setEpisodes} = useContext(AppContext);
	

	useEffect(()=>{
		const getAll = () =>{
		HttpFetch().then(json=>{
			setEpisodes(json.results)
			return json})	
		}
		getAll()
	},[])

	


	return (
		<div className='CardsContainer'>
			{
				episodes !== undefined   ? (episodes.map((element,index)=><Cards 
					episodeName={element.name}
					image={`https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`}
					date={element.air_date}
					key={element.id}></Cards>)): 
				<span>No se encontro</span>
			}

			
		</div>
	)
}