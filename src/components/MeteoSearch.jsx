import { useState } from "react";

export default function MeteoSearch({ setVille }) {

    let [ville, setVilles] = useState("");

    const handleSubmit = (e) => {
        setVille(e.target.value);
    };

    return (
        <form onSubmit={handleSubmit}>
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
