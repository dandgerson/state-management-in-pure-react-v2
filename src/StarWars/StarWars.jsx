import { useState } from 'react';
import dummyData from './dummyData';
import CharacterList from './CharacterList';
import { useEffect } from 'react';
import endpoint from './endpoint';

const StarWars = () => {
  const [characters, setCharacters] = useState(dummyData);

  useEffect(() => {
    getCharactes();

    async function getCharactes() {
      const res = await fetch(endpoint + '/characters');
      const json = await res.json();

      setCharacters(json.characters);
    }
  }, []);

  return (
    <div className="star-wars">
      <header>
        <h1>Star Wars Characters</h1>
      </header>

      <main>
        <section className="sidebar">
          <CharacterList characters={characters} />
        </section>
      </main>
    </div>
  );
};

export default StarWars;
