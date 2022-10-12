import { useState } from 'react';
import CharacterList from './CharacterList';
import { useEffect } from 'react';
import endpoint from './endpoint';
import { useReducer } from 'react';

const initialState = {
  response: null,
  isLoading: true,
  error: null,
};

const t = {
  LOADING: 'LOADING',
  REQUEST_COMPLETE: 'REQUEST_COMPLETE',
  ERROR: 'ERROR',
};

const fetchReducer = (state, action) => {
  if (action.type === t.LOADING) {
    return {
      response: null,
      isLoading: true,
      error: null,
    };
  }

  if (action.type === t.REQUEST_COMPLETE) {
    return {
      response: action.payload.response,
      isLoading: false,
      error: null,
    };
  }

  if (action.type === t.ERROR) {
    return {
      response: null,
      isLoading: false,
      error: action.payload.error,
    };
  }

  return state;
};

const useFetch = (url) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    dispatch({ type: t.LOADING });

    makeRequest();

    async function makeRequest() {
      try {
        const res = await fetch(url);
        const data = await res.json();

        dispatch({
          type: t.REQUEST_COMPLETE,
          payload: {
            response: data,
          },
        });
      } catch (err) {
        dispatch({
          type: t.ERROR,
          payload: {
            error: err,
          },
        });
      }
    }
  }, [url]);

  return [state.response, state.isLoading, state.error];
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
