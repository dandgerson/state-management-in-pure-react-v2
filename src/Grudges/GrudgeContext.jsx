import { useContext, useCallback } from 'react';
import { createContext, useReducer } from 'react';
import initialState from './initialState';

export const t = {
  GRUDGE_ADD: 'GRUDGE_ADD',
  GRUDGE_FORGIVE: 'GRUDGE_FORGIVE',
  UNDO: 'UNDO',
  REDO: 'REDO',
};

const useUndoReducer = (reducer, initialState) => {
  const undoState = {
    past: [],
    present: initialState,
    future: [],
  };

  const undoReducer = (state, action) => {
    const newPresent = reducer(state, action);

    if (action.type === t.UNDO) {
      console.log('UNDO');
      const [newPresent, ...newPast] = state.past;

      return {
        past: newPast,
        present: newPresent,
        future: [state.present, ...state.future],
      };
    }

    if (action.type === t.REDO) {
      console.log('REDO');

      const [newPresent, ...newFuture] = state.future;

      return {
        past: [state.present, ...state.past],
        present: newPresent,
        future: newFuture,
      };
    }

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: state.future,
    };
  };

  return useReducer(reducer, initialState);
};

const reducer = (state = defaultState, action) => {
  if (action.type === t.GRUDGE_ADD) {
    const newPresent = [action.payload, ...state.present];

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: state.future,
    };
  }

  if (action.type === t.GRUDGE_FORGIVE) {
    const newPresent = state.present.map((grudge) => {
      if (action.payload.id === grudge.id)
        return {
          ...grudge,
          isForgiven: !grudge.isForgiven,
        };

      return grudge;
    });

    return {
      past: [state.present, ...state.past],
      present: newPresent,
      future: state.future,
    };
  }

  return state;
};
const Context = createContext(['', () => {}]);

const defaultState = {
  past: [],
  present: initialState,
  future: [],
};

const GrudgeContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  const hasPast = !!state.past.length;
  const hasFuture = !!state.future.length;

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

  const undo = useCallback(() => dispatch({ type: t.UNDO }), [dispatch]);
  const redo = useCallback(() => dispatch({ type: t.REDO }), [dispatch]);

  return (
    <Context.Provider
      value={[
        { state, toggleForgineness, addGrudge, undo, redo, hasPast, hasFuture },
        dispatch,
      ]}
    >
      {children}
    </Context.Provider>
  );
};

export const useGrudgeContext = () => useContext(Context);

export default GrudgeContext;
