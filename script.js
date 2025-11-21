// Lista dos 151 Pokémons da Geração 1 (Kanto)
const kantoPokemon = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard",
    "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree",
    "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot",
    "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok",
    "Pikachu", "Raichu", "Sandshrew", "Sandslash", "Nidoran♀", "Nidorina",
    "Nidoqueen", "Nidoran♂", "Nidorino", "Nidoking", "Clefairy", "Clefable",
    "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat",
    "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat",
    "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck",
    "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag",
    "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop",
    "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool",
    "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash",
    "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo",
    "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder",
    "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee",
    "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute",
    "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung",
    "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela",
    "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu",
    "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar",
    "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto",
    "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte",
    "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno",
    "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew"
];

const btnGirar = document.getElementById('btnGirar');
const resultadoDiv = document.getElementById('resultado');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');

// Função principal para girar a roleta
function girarRoleta() {
    // 1. Desabilita o botão e inicia a animação
    btnGirar.disabled = true;
    resultadoDiv.textContent = 'GIRANDO...';
    resultadoDiv.classList.add('girando');
    pokemonNomeH2.textContent = '';
    pokemonImg.classList.add('hidden');

    // 2. Define um tempo de "giro" (simulado)
    const tempoGiro = 2500; // 2.5 segundos

    setTimeout(() => {
        // 3. Para o giro e seleciona o Pokémon
        resultadoDiv.classList.remove('girando');
        
        const indiceSorteado = Math.floor(Math.random() * kantoPokemon.length);
        const pokemonSorteado = kantoPokemon[indiceSorteado];
        
        // 4. Exibe o resultado e busca a imagem
        exibirResultado(pokemonSorteado);

        // 5. Reabilita o botão
        btnGirar.disabled = false;

    }, tempoGiro);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    resultadoDiv.innerHTML = `<p>${nome}</p>`;
    pokemonNomeH2.textContent = nome;

    try {
        // O nome precisa estar em minúsculas para a PokéAPI
        const nomeApi = nome.toLowerCase();

        // Busca o ID do Pokémon, que é o índice na lista + 1
        const idPokemon = kantoPokemon.indexOf(nome) + 1;

        // URL da imagem de uma fonte pública (PokéAPI)
        // Usamos o ID para garantir a imagem correta (melhor que o nome)
        const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idPokemon}.png`;
        
        pokemonImg.src = imageUrl;
        pokemonImg.alt = `Imagem do Pokémon ${nome}`;
        pokemonImg.classList.remove('hidden');

    } catch (error) {
        console.error('Erro ao buscar imagem do Pokémon:', error);
        pokemonImg.classList.add('hidden');
        pokemonNomeH2.textContent = `${nome} (Erro ao carregar imagem)`;
    }
}

// Adiciona o evento de clique ao botão
btnGirar.addEventListener('click', girarRoleta);
