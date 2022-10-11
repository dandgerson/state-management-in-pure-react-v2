import { useContext, useCallback } from 'react';
import { createContext, useReducer } from 'react';
import initialState from './initialState';

export const t = {
  GRUDGE_ADD: 'GRUDGE_ADD',
  GRUDGE_FORGIVE: 'GRUDGE_FORGIVE',
};

const reducer = (state, action) => {
  if (action.type === t.GRUDGE_ADD) {
    return [action.payload, ...state];
  }

  if (action.type === t.GRUDGE_FORGIVE) {
    return state.map((grudge) => {
      if (action.payload.id === grudge.id)
        return {
          ...grudge,
          isForgiven: !grudge.isForgiven,
        };

      return grudge;
    });
  }

  return state;
};
const Context = createContext(['', () => {}]);

const GrudgeContext = ({ children }) => {
  const [grudges, dispatch] = useReducer(reducer, initialState);

  const addGrudge = useCallback(
    ({ person, reason }) => {
      dispatch({
        type: t.GRUDGE_ADD,
        payload: {
          person,
          reason,
          id: Math.random(),
          isForgiven: false,
        },
      });
    },
    [dispatch]
  );

  const toggleForgineness = useCallback(
    (id) => {
      dispatch({
        type: t.GRUDGE_FORGIVE,
        payload: {
          id,
        },
      });
    },
    [dispatch]
  );

  return (
    <Context.Provider
      value={[{ grudges, toggleForgineness, addGrudge }, dispatch]}
    >
      {children}
    </Context.Provider>
  );
};

export const useGrudgeContext = () => useContext(Context);

export default GrudgeContext;
