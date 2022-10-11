import { useState } from 'react';
import GrudgesList from './GrudgesList';
import { grudges as initialState } from './initialState';
import NewGrudge from './NewGrudge';

const Grudges = () => {
  const [grudges, setGrudges] = useState(initialState);

  const addGrudge = ({ person, reason }) => {
    setGrudges([
      {
        id: grudges.length,
        isForgiven: false,
        person: person,
        reason: reason,
      },
      ...grudges,
    ]);
  };

  const toggleForgineness = (id) => {
    setGrudges((grudges) =>
      grudges.map((grudge) => {
        if (id === grudge.id)
          return {
            ...grudge,
            isForgiven: !grudge.isForgiven,
          };
        return grudge;
      })
    );
  };

  return (
    <div className="grudges">
      <NewGrudge onSubmit={addGrudge} />

      <GrudgesList grudges={grudges} toggleForgineness={toggleForgineness} />
    </div>
  );
};

export default Grudges;
