import CharacterList from './CharacterList';
import endpoint from './endpoint';
import { useReducer } from 'react';
import { useEffect } from 'react';

const initialState = {
  response: null,
  isLoading: null,
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
      response: { characters: action.payload.characters },
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

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = (actionEntity) => {
    console.log({ actionEntity });

    if (typeof actionEntity === 'function') {
      actionEntity(dispatch);
    } else {
      dispatch(actionEntity);
    }
  };

  return [state, enhancedDispatch];
};

const fetchCharacters = (dispatch) => {
  dispatch({ type: t.LOADING });

  fetch(endpoint + '/characters')
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: t.REQUEST_COMPLETE,
        payload: { characters: data.characters },
      });
    })
    .catch((error) => {
      dispatch({ type: t.ERROR, payload: { error } });
    });
};

const StarWars = () => {
  const [state, enhanceDispatch] = useThunkReducer(fetchReducer, initialState);
  const { response, isLoading, error } = state;

  useEffect(() => enhanceDispatch((dispatch) => {}), []);

  return (
    <div className="star-wars">
      <header>
        <h1>Star Wars Characters</h1>
      </header>

      <main>
        <section className="sidebar">
          <button onClick={() => enhanceDispatch(fetchCharacters)}>
            Fetch Characters
          </button>
          {isLoading ? (
            <p>Loading...</p>
          ) : isLoading !== null ? (
            <CharacterList characters={response.characters || []} />
          ) : null}

          {error ? <p>{error.message}</p> : null}
        </section>
      </main>
    </div>
  );
};

export default StarWars;
