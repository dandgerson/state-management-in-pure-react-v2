import GrudgesList from './GrudgesList';
import NewGrudge from './NewGrudge';

const Grudges = () => {
  return (
    <div className="grudges">
      <NewGrudge />
      <GrudgesList />
    </div>
  );
};

export default Grudges;
