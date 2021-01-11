import { useEffect, useState } from "react";

export default function MeteoDisplay({ ville, code }) {
    console.log(ville);
    let [villeData, setVilleData] = useState({});
    const api_code = code;

    useEffect(() => {
        let lastCalled = true;
        const fetchData = async () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ville}&lang=fr&APPID=${api_code}`)
                .then((response) => response.json())
                .then((data) => lastCalled && setVilleData(data))
                .catch((e) => console.error(e));
        };

        //setTimeout(fetchData, 10000 * Math.random());
        fetchData();
        return () => {
            lastCalled = false;
        };
    }, [ville]);

    if (!villeData.id) {
        return <></>;
    }
    console.log(villeData.weather[0].description);
    return (
        <ul>
            <div>id: {villeData.id}</div>
            <div>name: {villeData.name}</div>
            <div>Meteo : {villeData.weather[0].description}</div>
        </ul>
    );
}