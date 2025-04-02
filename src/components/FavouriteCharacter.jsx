function FavouriteCharacter ({ favCharacter, setFavCharacter }){
    return (
        <>
        <img src={favCharacter.image} style={{
            height: '400px',
            width: 'auto',
        }} />
        <p>{favCharacter.name}</p>
        <p>{favCharacter.homeworld}</p>
        <p>{favCharacter.species}</p>
        <button
        onClick={() => setFavCharacter(null)}
        >
            Remove Favourite
        </button>
        </>
    )
}

export default FavouriteCharacter