import { useEffect , useState } from "react";


export default function MeteoForPokemonList({ type , setPokemonUrl }) {
    let [pokemons, setPokemons] = useState([]);

    console.log(type);
    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`https://pokeapi.co/api/v2/type/${type}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setPokemons(data["pokemon"]))
                .catch((e) => console.error(e));
        };

        fetchData();

        return () => {
            lastCalled = false;
        };
    }, [type]);

    /*Je voulais mettres les images mais je n'ai pas reussie */
    return (
        <ul>
            {pokemons?.map(({ pokemon }) => (
            <>
                <div>name: {pokemon.name}</div>

            </>
            ))}
        </ul>
    );
}