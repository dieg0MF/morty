import React ,{useState, useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import {HttpFetch} from '../../Helpers/HttpFetch.js';
import Cards from '../shared/Cards.js';


export default function Main() {
	const {episode, setEpisode} = useContext(AppContext);
    const { search, setSearch } = useContext(AppContext);

	// useEffect(()=>{
	// 	const getAll = () =>{
	// 	HttpFetch().then(json=>{
	// 		setEpisodes(json.results)
	// 		return json})	
	// 	}
	// 	getAll()
	// },[])

    return (
		<div>
			{
				episode !== undefined ? 
                <Cards 
					episodeName={episode.name}
					image={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
					date={episode.air_date}
					key={episode.id}></Cards>: 
				<span>No se encontro</span>
            }
			

			
		</div>
	)

}
