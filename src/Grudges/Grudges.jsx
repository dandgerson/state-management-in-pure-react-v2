import { useGrudgeContext } from './GrudgeContext';
import GrudgesList from './GrudgesList';
import NewGrudge from './NewGrudge';

const Grudges = () => {
  const [{ undo, hasPast, hasFuture, redo }] = useGrudgeContext();
  console.log({ undo, hasPast });

  return (
    <div className="grudges">
      <NewGrudge />
      <div>
        <button disabled={!hasPast} onClick={undo}>
          {'< Undo'}
        </button>
        <button disabled={!hasFuture} onClick={redo}>
          {'Redo >'}
        </button>
      </div>
      <GrudgesList />
    </div>
  );
};

export default Grudges;
