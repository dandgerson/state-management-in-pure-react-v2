import { useState } from 'react';
import CharacterList from './CharacterList';
import { useEffect } from 'react';
import endpoint from './endpoint';

const useFetch = (url) => {
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    makeRequest();

    async function makeRequest() {
      try {
        const res = await fetch(url);
        const parsedJson = await res.json();

        setResponse(parsedJson);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    }
  }, [url]);

  return [response, isLoading, error];
};

const StarWars = () => {
  const [response, isLoading, error] = useFetch(endpoint + '/characters');
  const characters = response?.characters ?? [];

  return (
    <div className="star-wars">
      <header>
        <h1>Star Wars Characters</h1>
      </header>

      <main>
        <section className="sidebar">
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <CharacterList characters={characters} />
          )}

          {error ? <p>{error.message}</p> : null}
        </section>
      </main>
    </div>
  );
};

export default StarWars;
