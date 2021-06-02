import React from 'react';
import './Card.css'


export default function Cards({episodeName,image,date, key}) {

	return (
		<div className='CardContainer' key={key}>
			<img src={image} alt=""/>
			<div className="">
				<h4>{episodeName}</h4>
				<p><b>Created:</b>{date}</p>
			</div>
						
		</div>
	)
}