const CharacterList = ({ characters }) => {
  return characters.map((character) => (
    <div className="character" key={character.id}>
      {character.name}
    </div>
  ));
};

export default CharacterList;
