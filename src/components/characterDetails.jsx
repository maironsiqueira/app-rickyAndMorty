import { useState, useEffect } from 'react';
import { details } from '../services/globalApi';
import { useParams } from 'react-router-dom';

const CharacterDetails = () => {
  let { id } = useParams();
  const [detail, setDetails] = useState([]);
  const [episodeDetails, setEpisodeDetails] = useState([]);

  useEffect(() => {
    searchDetail();
  }, [id]);

  const searchDetail = async () => {
    try {
      const response = await fetch(`${details}/${id}`);
      const data = await response.json();

      setDetails(data);

      const episodePromises = data.episode.map(async (episodeUrl) => {
        const episodeResponse = await fetch(episodeUrl);
        const episodeData = await episodeResponse.json();
        return episodeData;
      });

      const episodeDetails = await Promise.all(episodePromises);

      setEpisodeDetails(episodeDetails);
    } catch (error) {
      console.log('Erro ao buscar detalhes da API:', error);
    }
  };


  return (
    <div>
      {detail ? (
        <div>
          <img src={detail.image} alt="character photo" />
          <h2>{detail.name}</h2>
          <p>Status: {detail.status}</p>
          <p>Espécie: {detail.species}</p>
        </div>
      ) : (
        <p>Carregando...</p>
      )}

      {episodeDetails.length > 0 ? (
        <div>
          <h3>Episódios:</h3>
          <ul>
            {episodeDetails.map((episode, i) => (
              <li key={i}>
                Número: {episode.episode} Título: {episode.name}  
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Carregando episódios...</p>
      )}
    </div>
  );
};

export default CharacterDetails;
