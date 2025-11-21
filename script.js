// --- LISTAS DE POKÉMONS (ORGANIZADAS POR GERAÇÃO) ---

const kantoPokemon = [
    // 151 Pokémons da Geração 1 (Seu código original)
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

// NOVOS 100 POKÉMONS da Geração 2 (Johto)
const johtoPokemon = [
    "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", 
    "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", 
    "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", 
    "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", 
    "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", 
    "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", 
    "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", 
    "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", 
    "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", 
    "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", 
    "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", 
    "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", 
    "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", 
    "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", 
    "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", 
    "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi"
];

// Objeto para facilitar o acesso às listas
const pokemonPorGeracao = {
    kanto: kantoPokemon,
    johto: johtoPokemon,
    todas: kantoPokemon.concat(johtoPokemon) // Combina as duas listas
};

// --- REFERÊNCIAS DO DOM ---
const btnGirar = document.getElementById('btnGirar');
const resultadoDiv = document.getElementById('resultado');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao'); // NOVA REFERÊNCIA


// Função principal para girar a roleta
function girarRoleta() {
    // 1. Obtém a lista de Pokémon com base na seleção
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];

    if (!listaAtual || listaAtual.length === 0) {
        resultadoDiv.textContent = 'Nenhuma Geração Selecionada ou Lista Vazia!';
        return;
    }

    // 2. Desabilita o botão e inicia a animação
    btnGirar.disabled = true;
    resultadoDiv.textContent = 'GIRANDO...';
    resultadoDiv.classList.add('girando');
    pokemonNomeH2.textContent = '';
    pokemonImg.classList.add('hidden');

    // 3. Define um tempo de "giro" (simulado)
    const tempoGiro = 2500; // 2.5 segundos

    setTimeout(() => {
        // 4. Para o giro e seleciona o Pokémon
        resultadoDiv.classList.remove('girando');
        
        const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
        const pokemonSorteado = listaAtual[indiceSorteado];
        
        // 5. Exibe o resultado e busca a imagem
        exibirResultado(pokemonSorteado);

        // 6. Reabilita o botão
        btnGirar.disabled = false;

    }, tempoGiro);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    resultadoDiv.innerHTML = `<p>${nome}</p>`;
    pokemonNomeH2.textContent = nome;

    try {
        // Busca a lista completa para encontrar o ID corretamente
        const listaCompleta = pokemonPorGeracao['todas'];
        
        // O ID é o índice na lista completa (Gen 1 + Gen 2) + 1
        const idPokemon = listaCompleta.indexOf(nome) + 1;

        // Se por algum motivo o Pokémon não for encontrado, tratamos (ex: id = 0 se index = -1)
        if (idPokemon === 0) {
             throw new Error("Pokémon não encontrado na lista combinada.");
        }

        // URL da imagem de uma fonte pública (PokéAPI)
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
