import React ,{useState, useEffect,useContext} from 'react';
import { AppContext } from "../../AppProvider";
import {HttpFetch} from '../../Helpers/HttpFetch.js';
import Cards from '../shared/Cards.js';
import './Search.css'

import notFound from '../../assets/images/NotFoundImage.png'


export default function Search() {
	const {episode, setEpisode} = useContext(AppContext);
    const { search, setSearch } = useContext(AppContext);

console.log('episode',episode)

    return (
		<div className='ContainerSearch'>
			{
				episode.id !== undefined  ? 
                <Cards 
					episodeName={episode.name}
					image={`https://rickandmortyapi.com/api/character/avatar/1.jpeg`}
					date={episode.air_date}
					key={episode.id}></Cards>: 

                    <div className='notFoundContainer'>
                        <img src={notFound} alt='notFound'></img>
				<span>Not Found</span>
                </div>
            }
			

			
		</div>
	)

}
