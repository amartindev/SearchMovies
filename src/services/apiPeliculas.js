
const urlBase = 'https://api.themoviedb.org/3/search/movie'
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;


const fetchPeliculas = async (busqueda) => {
    try {
        const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
        const data = await response.json()
        if (data.results) {
            return data.results;
        } else {
            return []
        }
    } catch (error) {
        console.error(error)
        return []
    }
}

export { fetchPeliculas };