const URL = 'https://itunes.apple.com/us/rss/topmovies/limit=100/json';
export const fetchData = fetch(URL, {
    method: 'GET'
}).then(res => res.json()).catch(error => console.log(error));