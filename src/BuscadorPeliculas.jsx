import { useState } from "react";

export const BuscadorPeliculas = () => {
    
    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])
    const urlBase = 'https://api.themoviedb.org/3/search/movie'
    const API_KEY = '78a88ecba5628cf470a11e407204cd68'

    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetchPeliculas()
    }

    const fetchPeliculas = async () => {
        try {
            const response = await fetch(`${urlBase}?query=${busqueda}&api_key=${API_KEY}`)
            const data = await response.json()
            if (data.results) {
                setPeliculas(data.results);
            } else {
                setPeliculas([]);
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="container">
            <h1 className="tittle">Buscador de Peliculas</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Escribe una pelicula" value={busqueda} onChange={handleInputChange}/>
                <button type="submit" className="search-button">
                    Buscar
                </button>
            </form>
            <div className="movie-list">
                {peliculas.map((pelicula) => (
                    <div className="movie-card" key={pelicula.id}>
                        <img src={`https://image.tmdb.org/t/p/w500${pelicula.poster_path}`} alt={pelicula.title} />
                        <h2>{pelicula.title}</h2>
                        <p>{pelicula.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
