import { memo } from 'react';

const Grudge = memo(({ grudge, toggleForgineness }) => {
  const onForgive = () => {
    toggleForgineness(grudge.id);
  };

  console.log('Render Grudge');

  return (
    <div className="grudge" key={grudge.id}>
      <h2>{grudge.person}</h2>
      <p>{grudge.reason}</p>
      <label>
        <input
          type="checkbox"
          checked={grudge.isForgiven}
          name="forgiven"
          id={grudge.id}
          onChange={onForgive}
        />{' '}
        Forgiven
      </label>
    </div>
  );
});

export default Grudge;
