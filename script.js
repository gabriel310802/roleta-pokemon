// --- LISTAS DE POKÉMONS (ORGANIZADAS POR GERAÇÃO) ---

const kantoPokemon = [
    // 151 Pokémons da Geração 1
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

const johtoPokemon = [
    // 100 Pokémons da Geração 2
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

const pokemonPorGeracao = {
    kanto: kantoPokemon,
    johto: johtoPokemon,
    todas: kantoPokemon.concat(johtoPokemon) // Lista combinada
};

// --- REFERÊNCIAS DO DOM ---
const btnGirar = document.getElementById('btnGirar');
const resultadoDiv = document.getElementById('resultado');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao');


// Função para obter o nome da geração formatado
function getNomeGeracao(chave) {
    switch (chave) {
        case 'kanto':
            return 'Geração 1 (Kanto)';
        case 'johto':
            return 'Geração 2 (Johto)';
        case 'todas':
            return 'Gerações 1 e 2 (Todas)';
        default:
            return 'Selecione uma Geração';
    }
}

// Função para atualizar o display com a geração atual
function atualizarDisplayGeracao() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];
    
    const nomeGeracao = getNomeGeracao(geracaoSelecionada);

    // Atualiza o display da roleta com a geração e a contagem
    resultadoDiv.innerHTML = `<p>${nomeGeracao}</p><p>(${listaAtual.length} Pokémon)</p>`;
    
    // Limpa o resultado anterior
    pokemonNomeH2.textContent = ''; 
    pokemonImg.classList.add('hidden'); 
}

// Função principal para girar a roleta COM SCROLL DE NOMES
function girarRoleta() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];

    if (!listaAtual || listaAtual.length === 0) {
        resultadoDiv.innerHTML = '<p>Erro: Lista de Pokémon Vazia!</p>';
        return;
    }

    // Inicia a animação e desabilita o botão
    btnGirar.disabled = true;
    resultadoDiv.classList.add('girando');
    pokemonNomeH2.textContent = '';
    pokemonImg.classList.add('hidden');

    const tempoGiro = 3000; // 3.0 segundos para o giro total
    const intervaloScroll = 50; // Atualiza o nome a cada 50 milissegundos (o que cria o efeito de roleta)

    // --- LÓGICA DO SCROLL DE NOMES ---
    let scrollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * listaAtual.length);
        const randomPokemonName = listaAtual[randomIndex];
        
        // Exibe o nome aleatório na área da roleta
        // O <p> é necessário para garantir o estilo correto dentro da Pokebola
        resultadoDiv.innerHTML = `<p>${randomPokemonName}</p>`;
    }, intervaloScroll);
    // --- FIM LÓGICA DO SCROLL ---

    setTimeout(() => {
        // 1. Para o intervalo de scroll e a animação
        clearInterval(scrollInterval);
        resultadoDiv.classList.remove('girando');
        
        // 2. Seleciona o Pokémon final
        const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
        const pokemonSorteado = listaAtual[indiceSorteado];
        
        // 3. Exibe o resultado final
        exibirResultado(pokemonSorteado);

        // 4. Reabilita o botão
        btnGirar.disabled = false;

    }, tempoGiro);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    // Exibe o nome do Pokémon na área da Pokebola
    // Usamos uma classe para garantir que o nome se destaque, caso o CSS original use.
    resultadoDiv.innerHTML = `<p class="nome-final">${nome}</p>`;
    pokemonNomeH2.textContent = nome;

    try {
        // A lista combinada (todas) é usada para encontrar o ID correto (1 a 251)
        const listaCompleta = pokemonPorGeracao['todas'];
        
        // O ID é o índice na lista completa + 1
        const idPokemon = listaCompleta.indexOf(nome) + 1;

        if (idPokemon === 0) {
             throw new Error("ID do Pokémon não encontrado.");
        }

        // URL da imagem usando o ID na PokéAPI
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

// --- LISTENERS DE EVENTOS ---
btnGirar.addEventListener('click', girarRoleta);
seletorGeracao.addEventListener('change', atualizarDisplayGeracao);

// Chama a função ao carregar a página para mostrar a seleção padrão (Kanto)
atualizarDisplayGeracao();
