import { useState } from 'react';
import './App.css';

function Index() {

    return (
        <div className="App">
            <header className="App-header">
                <h1>Projet React</h1>
                    <nav className="navgation">
                        <a className="lien" href="pokemon_app">Pokemon</a>
                        <a className="lien" href="meteo_app">Méteo</a>
                        <a className="lien" href="fusion_app"> Pokémon en fonction de la météo </a>
                    </nav>
            </header>
        </div>
    )

}

export default Index;