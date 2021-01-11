import { useState } from 'react';
import './App.css';
import MeteoDisplay from './components/MeteoDisplay';
import MeteoSearch from './components/MeteoSearch';

function App_meteo() {

    let [selectedVille, setSelectedVille] = useState("");
    console.log(selectedVille);

    return (
        <div className="App">
            <header className="App-header">
                <MeteoSearch setVille={setSelectedVille} />
                <MeteoDisplay ville={selectedVille} code='aeeef8efa9378c81b2cee0eeda106994' />
            </header>
        </div>
    );
}

export default App_meteo;