import Grudge from './Grudge';
import { useGrudgeContext } from './GrudgeContext';

const GrudgesList = () => {
  const [
    {
      state: { present },
    },
  ] = useGrudgeContext();

  console.log({ present });

  return (
    <div className="list">
      <h1>Grudges ({present.length})</h1>
      {present.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} />
      ))}
    </div>
  );
};

export default GrudgesList;
