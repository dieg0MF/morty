import React from 'react';


export default function Cards({episodeName,image,date, key}) {

	return (
		<div key={key}>
			<img src={image} alt=""/>
			<div className="">
				<span>{episodeName}</span>
				<span><b>Created:</b>{date}</span>
			</div>
						
		</div>
	)
}