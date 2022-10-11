import Grudge from './Grudge';

const GrudgesList = ({ grudges = [], toggleForgineness }) => {
  return (
    <div className="list">
      <h1>Grudges ({grudges.length})</h1>
      {grudges.map((grudge) => (
        <Grudge
          key={grudge.id}
          grudge={grudge}
          toggleForgineness={toggleForgineness}
        />
      ))}
    </div>
  );
};

export default GrudgesList;
