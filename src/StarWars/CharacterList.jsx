import { NavLink } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <NavLink
      className="character"
      key={character.id}
      to={`characters/${character.id}`}
    >
      {character.name}
    </NavLink>
  ));
};

export default CharacterList;
