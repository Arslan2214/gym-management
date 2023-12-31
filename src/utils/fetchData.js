export const exerciseOptions = {
    method: 'GET',
    params: { limit: '10' },
    headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const fetchData = async (url, option) =>{
    const response = await fetch(url, option);
    const data = await response.json();

    return data;
}