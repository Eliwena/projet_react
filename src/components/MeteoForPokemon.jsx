import { useEffect , useState } from "react";
import MeteoForPokemonList from "./MeteoForPokemonList";

export default function MeteoForPokemon({  setType , ville , code }) {

    let [villeData, setVilleData] = useState({});
    const api_code = code;
    console.log(villeData);
    let type = "";

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&APPID=${api_code}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setVilleData(data))
                .catch((e) => console.error(e));
        };


        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [ville]);


    if (!villeData.id) {
        return <></>;
    }
    console.log(villeData.weather[0].description);
    if(villeData.weather[0].description === "couvert"){
        return (
            <ul>
                <MeteoForPokemonList type="ground"/>
            </ul>
        );
    }else if(villeData.weather[0].description === "ciel dégagé"){
        return(
            <ul>
                <MeteoForPokemonList type="ghost"/>
            </ul>
        )
    }else if(villeData.weather[0].description === "nuageux"){
        return(
            <ul>
                <MeteoForPokemonList type="flying"/>
            </ul>
        )
    }else{
        return(
            <div>Pas de Pokemon</div>
        )
    }





}