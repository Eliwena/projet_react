import { useEffect, useState } from "react";

export default function PokemonTypeList({ setType }) {
    let [types, setTypes] = useState([]);
    let [selectedValue, setSelectedValue] = useState("");

    useEffect(() => {
        const fetchTypes = () => {
            fetch("https://pokeapi.co/api/v2/type")
                .then((response) => response.json())
                .then((data) => setTypes(data["results"]));
        }
        setTimeout(fetchTypes, 10000 * Math.random());
    }, []);

    const handleSelection = (event) => {
        setType(event.target.value);
        setSelectedValue(event.target.value);
    }

    return (
        <select value={selectedValue} onChange={handleSelection}>
            {types.map(({name}) => <option key={`pokemon-type-${name}`} value={name}>{name}</option>)}
        </select>
    )
}