import { useState } from "react";
import { fetchPeliculas } from "./services/apiPeliculas"

export const BuscadorPeliculas = () => {
    
    const [busqueda, setBusqueda] = useState('')
    const [peliculas, setPeliculas] = useState([])


    const handleInputChange = (e) => {
        setBusqueda(e.target.value)
    }

    const handleSubmit = async (e) => { 
        e.preventDefault()
        const peliculas = await fetchPeliculas(busqueda)
        setPeliculas(peliculas)
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
