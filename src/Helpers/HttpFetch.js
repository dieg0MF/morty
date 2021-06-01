export const HttpFetch = (search)=>{
	
	const url = `https://rickandmortyapi.com/api/episode/`;

	try {
		return fetch(url).then(res=> res.ok? res.json() : Promise.reject({
			status : res.status || 'Not Found',
			statusText : res.statusText || 'Error 000'
		}))		
	} catch(e) {
		console.log(e);
	}
}
export const HttpFetchSearch = (search)=>{
	
	const url = `https://rickandmortyapi.com/api/episode/${search}`;

	try {
		return fetch(url).then(res=> res.ok? res.json() : Promise.reject({
			status : res.status || 'Not Found',
			statusText : res.statusText || 'Error 000'
		}))		
	} catch(e) {
		console.log(e);
	}
}