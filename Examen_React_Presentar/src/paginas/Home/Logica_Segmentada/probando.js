import React, { useEffect, useState } from 'react';
import trailersData from './trailers.json'; // Asegúrate de que la ruta al archivo es correcta

const TrailersCienciaFiccion = () => {
    const [trailers, setTrailers] = useState([]);
    const [selectedTrailer, setSelectedTrailer] = useState(null);

    useEffect(() => {
        // Filtra los trailers de "ciencia ficción"
        const cienciaFiccionTrailers = trailersData.filter(trailer => trailer.genero === 'ciencia ficción');
        
        // Selecciona al azar 5 trailers
        const shuffled = cienciaFiccionTrailers.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);
        
        setTrailers(selected);
    }, []);

    const handleTrailerClick = (trailer) => {
        setSelectedTrailer(trailer);
    };

    return (
        <div>
            <h1>Trailers de Ciencia Ficción</h1>
            <ul>
                {trailers.map((trailer, index) => (
                    <li key={index}>
                        {trailer.titulo}
                        <button onClick={() => handleTrailerClick(trailer)}>Ver Trailer</button>
                    </li>
                ))}
            </ul>
            {selectedTrailer && (
                <div>
                    <h2>{selectedTrailer.titulo}</h2>
                    <div>
                        <iframe 
                            width="560" 
                            height="315" 
                            src={`https://www.youtube.com/embed/${selectedTrailer.trailer}`} 
                            title={selectedTrailer.titulo} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
            )}
        </div>
    );
}

export default TrailersCienciaFiccion;



import React, { useEffect, useState } from 'react';
import trailersData from './trailers.json'; // Asegúrate de que la ruta al archivo es correcta

const TrailersCienciaFiccion = () => {
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        // Filtra los trailers de "ciencia ficción"
        const cienciaFiccionTrailers = trailersData.filter(trailer => trailer.genero === 'ciencia ficción');
        
        // Selecciona al azar 5 trailers
        const shuffled = cienciaFiccionTrailers.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 5);
        
        setTrailers(selected);
    }, []);

    const handleTrailerClick = (trailerUrl) => {
        window.open(`https://www.youtube.com/watch?v=${trailerUrl}`, '_blank');
    };

    return (
        <div>
            <h1>Trailers de Ciencia Ficción</h1>
            <ul>
                {trailers.map((trailer, index) => (
                    <li key={index}>
                        {trailer.titulo}
                        <button onClick={() => handleTrailerClick(trailer.trailer)}>Ver Trailer</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TrailersCienciaFiccion;

