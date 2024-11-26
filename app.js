const submitBtn = document.getElementById('submit-button');

submitBtn.addEventListener("click", async () => {
    const pokemonName = document.getElementById("pokemon-name").value.toLowerCase();
    fetchPokemonData(pokemonName);
});

async function fetchPokemonData(pokemonName) {
    {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
            
            if (!response.ok) {
                throw new Error("Couldn't fetch resource");
            }
    
            const data = await response.json();
            
            const fetchedPokemonName = data.name;
            const pokemonSprite = data.sprites.front_default;
            const pokemonTitle = document.getElementById("fetched-pokemon-name");
            const pokemonImage = document.getElementById("pokemon-sprite");
            
            pokemonTitle.textContent = capitaliseFirst(fetchedPokemonName);
            pokemonImage.src = pokemonSprite;

            pokemonImage.style = "display: block";
        }
        catch(error) {
            console.error(error);
        }
    }
}

function capitaliseFirst(textData) {
    const textArr = textData.split('');
    textArr[0] = textArr[0].toUpperCase();
    return textArr.join('');
};