import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

const Character = ({ statusFilter, nameFilter }) => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let url = 'https://rickandmortyapi.com/api/character/?page=' + page;
        
        if (nameFilter) {
          url += `&name=${nameFilter}`;
        }

        if (statusFilter) {
          url += `&status=${statusFilter}`;
        }

        const response = await fetch(url);
        const data = await response.json();

        if (data.results) {
          setCharacters(data.results);
        }
      } catch (error) {
        console.error('Erro ao buscar personagens da API:', error);
      }
    };

    fetchData();
  }, [page, statusFilter, nameFilter]);

  const nextPage = () => {
    setPage(page + 1);
  };
  const previousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div>
      <Button variant="outline-success" onClick={previousPage}>
        Previous Page
      </Button>
      <Button variant="outline-success" onClick={nextPage}>
        Next Page
      </Button>
      {
        characters.map((character) => (
          <div key={character.id}>
            <Link to={`/details/${character.id}`}>
              <img src={character.image} alt="character photo" />
            </Link>
            <h2>{character.name}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default Character;
