import { memo, useState } from 'react';
import { useGrudgeContext } from './GrudgeContext';

const NewGrudge = memo(() => {
  const [person, setPerson] = useState('');
  const [reason, setReason] = useState('');

  const [{ addGrudge }] = useGrudgeContext();

  console.log('Render NewGrudge');

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!person || !reason) return;

        addGrudge({ person, reason });
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
  );
});

export default NewGrudge;
