import React ,{useState, useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import {HttpFetch} from '../../Helpers/HttpFetch.js';
import Cards from '../shared/Cards.js';


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
		<div>
			{
				episodes !== undefined  && episodes.length >1 ? (episodes.map((element,index)=><Cards 
					episodeName={element.name}
					image={`https://rickandmortyapi.com/api/character/avatar/${index}.jpeg`}
					date={element.air_date}
					key={element.id}></Cards>)): 
				<span>No se encontro</span>
			}

			
		</div>
	)
}