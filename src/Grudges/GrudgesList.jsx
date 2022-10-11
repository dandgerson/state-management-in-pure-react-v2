import Grudge from './Grudge';
import { useGrudgeContext } from './GrudgeContext';

const GrudgesList = () => {
  const [{ grudges }] = useGrudgeContext();

  return (
    <div className="list">
      <h1>Grudges ({grudges.length})</h1>
      {grudges.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} />
      ))}
    </div>
  );
};

export default GrudgesList;
