import { useState } from 'react';
import './App.css';
import MeteoForPokemon from "./components/MeteoForPokemon";
import MeteoSearch from './components/MeteoSearch';
import MeteoForPokemonList from "./components/MeteoForPokemonList";


function App_fusion() {
    let [selectedVille, setSelectedVille] = useState("");
    let [selectedType, setSelectedType] = useState("");
    let [selectedPokemonUrl, setSelectedPokemonUrl] = useState(null);

    console.log(selectedVille);
    return (
        <div className="App">
            <header className="App-header">
                <MeteoSearch setVille={setSelectedVille} />
                <MeteoForPokemon setType={setSelectedType} ville={selectedVille} code='aeeef8efa9378c81b2cee0eeda106994' />
                <MeteoForPokemonList type={selectedType}/>

            </header>
        </div>
    )
}

export default App_fusion;