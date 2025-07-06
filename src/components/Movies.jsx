import React, { useEffect, useState } from "react";
import axios from "axios";

function Movies() {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        //Connect to backend
        axios.get('http://localhost:5000/api/movies')
            .then(res => {
                setMovies(res.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("API Error: ", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <div>Loading...</div>

    return (
        <div>
            <h1>Now Showing</h1>
            <div className="movie-grid">
                {movies.map(movie => {
                    <div key={movie._id} className="movie-card">
                        <img src={movie.posterUrl} alt={movie.title} />
                        <h3>{movie.title}</h3>
                        <button onClick={() => window.location.href=`/booking/${movie._id}` }>
                            Book Now
                        </button>
                    </div>
                })}
            </div>
        </div>
    );
}

export default Movies;