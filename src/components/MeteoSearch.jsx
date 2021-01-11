import { useState } from "react";

export default function MeteoSearch({ setVille }) {

    let [ville, setVilles] = useState("");
    let values = ville;
    const handleSubmit = (event) => {
    };

    return (
        <form onSubmit={ setVille(values)}>
            <h1>Choix de la ville</h1>
            <label>Ville:  </label>
            <input
                name="ville"
                type="text"
                value={ville}
                onChange={event => setVilles(event.target.value)}
                required /><br>
            </br>
            <button>Submit</button>
        </form>
    );
}
