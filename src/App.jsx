import { useEffect, useState } from "react";
import Counter from "./components/Counter"
import './index.css'
import CharacterList from "./components/CharacterList";
import FavouriteCharacter from "./components/FavouriteCharacter";

function App() {
  const [alert, setAlert] = useState('');
  const [characters, setCharacters] = useState([]);
  const [favCharacter, setFavCharacter] = useState(null);

  useEffect(() => {
    const getCharacters = async () => {
      const res = await fetch('https://akabab.github.io/starwars-api/api/all.json');
      const data = await res.json();
      setCharacters(data);
    }
    getCharacters();
    console.log('got to first useEffect')
  },[])

  useEffect(() => {
    console.log('got to second favourite')
  }, [favCharacter])
  return (
    <div id='root'>
      <Counter alert={alert} setAlert={setAlert}/>
      <h1>Star Wars Characters</h1>
      {
        favCharacter ? <FavouriteCharacter favCharacter={favCharacter} setFavCharacter={setFavCharacter} /> : <CharacterList characters={characters} setCharacters={setCharacters} favCharacter={favCharacter} setFavCharacter={setFavCharacter} />
      }
    </div>
  )
}

export default App
