import { useState } from 'react';
import { grudges as initialState } from './initialState';

const Grudges = () => {
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');
  const [grudges, setGrudges] = useState(initialState);

  return (
    <div className="grudges">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!person || !reason) return;

          setGrudges([
            {
              id: grudges.length,
              isForgiven: false,
              person: person,
              reason: reason,
            },
            ...grudges,
          ]);
          setPerson('');
          setReason('');
        }}
      >
        <input
          type="text"
          value={person}
          placeholder="Person"
          onChange={(e) => {
            setPerson(e.target.value);
          }}
        />
        <input
          type="text"
          value={reason}
          placeholder="Reason"
          onChange={(e) => {
            setReason(e.target.value);
          }}
        />
        <button disabled={!person || !reason}>Submit</button>
      </form>

      <div className="list">
        <h1>Grudges ({grudges.length})</h1>
        {grudges.map((grudge, i) => (
          <div className="grudge" key={grudge.id}>
            <h2>{grudge.person}</h2>
            <p>{grudge.reason}</p>
            <label htmlFor="forgiven">
              <input
                type="checkbox"
                checked={grudge.isForgiven}
                name="forgiven"
                id={grudge.id}
                onChange={(e) => {
                  console.log({ target: e.target });
                  setGrudges((grudges) =>
                    grudges.map((grudge) => ({
                      ...grudge,
                      isForgiven:
                        Number(e.target.id) === grudge.id
                          ? !grudge.isForgiven
                          : grudge.isForgiven,
                    }))
                  );
                }}
              />
              Forgiven
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grudges;
