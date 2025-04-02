function CharacterList({ characters, setCharacters, favCharacter, setFavCharacter }){
    return (
        <>
        {
            characters.map((character) =>
                <div key={character.id}>
                    <img src={character.image} style={{
                    height: '400px',
                    width: 'auto',
                    }}
                    />
                    <h2>
                        {character.name}
                    </h2>
                    <button
                        onClick={() => setFavCharacter(character)}
                    >
                        Favourite
                    </button>
                </div>
            )
        }
        </>
    )
}

export default CharacterList