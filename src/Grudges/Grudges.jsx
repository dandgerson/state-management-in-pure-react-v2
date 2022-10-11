import { useCallback } from 'react';
import { useReducer } from 'react';
import GrudgesList from './GrudgesList';
import { grudges as initialState } from './initialState';
import NewGrudge from './NewGrudge';

const t = {
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

const Grudges = () => {
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
    <div className="grudges">
      <NewGrudge onSubmit={addGrudge} />

      <GrudgesList grudges={grudges} toggleForgineness={toggleForgineness} />
    </div>
  );
};

export default Grudges;
