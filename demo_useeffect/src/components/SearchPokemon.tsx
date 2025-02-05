import { useState, useEffect } from "react"

// Exempel med ett beroende (pokemon) i dependancy array - om den ändrar så fetchas på nytt.

// Dock har denna kod ett fel! Den reagerar på varje change-event, ändra till en submit?? 

function SearchPokemon() {

    type Pokemon = {
        sprites: {front_default: string};
        name: string;
        base_experience: string;
    }

    const [pokemon, setPokemon] = useState('pikachu');

    const [data, setData] = useState<Pokemon>({
        sprites: { front_default: ''},
        name: '',
        base_experience: ""
    })

    // useEffect för API-hämtning
    useEffect(() => {

        const fetchData = async () => {
      
            try {
                // Hämta data från API med fetch och sökord i template string
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
             
                const data = await response.json();
                setData(data);
                console.log("Pokemon", pokemon)
                console.log("Data", data);
            } catch (err) {
                console.error('Error fetching data:', err);
            } 
        };

        fetchData();

    } , [pokemon]);


    return (
        <>
              <input
                type="text"
                value={pokemon}
                onChange={(e) => setPokemon(e.target.value)}
                placeholder="Skriv en pokemon..."
               />
               {pokemon && (
                <div>
                    <img src={data.sprites.front_default}/>
                    <p>Name: {data.name}</p>
                    <p>Base experience {data.base_experience}</p>
                </div>
               )}
        </>
    )

}

export default SearchPokemon