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
const roletaCirculo = document.getElementById('roleta-circulo'); // Agora a roleta visual
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao');

let currentRotation = 0; // Para rastrear a rotação anterior e garantir giro contínuo


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

// Função para atualizar o display da roleta (antes de girar)
function atualizarDisplayGeracao() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];
    
    const nomeGeracao = getNomeGeracao(geracaoSelecionada);

    // Remove qualquer nome temporário do giro anterior
    const tempName = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (tempName) {
        tempName.remove();
    }
    
    // Adiciona o texto da Geração no centro da roleta
    const infoText = document.createElement('p');
    infoText.className = 'roleta-nome-temporario';
    infoText.innerHTML = `${nomeGeracao}<br>(${listaAtual.length} Pokémon)`;
    roletaCirculo.appendChild(infoText);

    // Limpa o resultado anterior
    pokemonNomeH2.textContent = ''; 
    pokemonImg.classList.add('hidden'); 

    // Reseta a rotação da roleta visual (Para o estado inicial)
    roletaCirculo.style.transition = 'none'; // Desativa a transição
    roletaCirculo.style.transform = `rotate(0deg)`;
    setTimeout(() => {
        roletaCirculo.style.transition = 'transform 5s ease-out'; // Reativa a transição
    }, 50);
    currentRotation = 0;
}

// Função principal para girar a roleta visual e sortear
function girarRoleta() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];

    if (!listaAtual || listaAtual.length === 0) {
        // Exibe erro no centro da roleta
        roletaCirculo.innerHTML = '<p class="roleta-nome-temporario">Erro: Lista Vazia!</p>';
        return;
    }

    // Desabilita o botão
    btnGirar.disabled = true;

    // Remove o texto inicial da Geração
    const tempName = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (tempName) {
        tempName.remove();
    }

    const tempoGiroTotal = 5000; // 5 segundos para o giro completo e parada
    const numVoltas = 5; // Número mínimo de voltas (1800 graus)
    
    // Sorteia o Pokémon final
    const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
    const pokemonSorteado = listaAtual[indiceSorteado];

    // --- CÁLCULO DA ROTAÇÃO ---
    // A roleta no CSS tem 8 setores (45 graus cada). Usamos isso para garantir a parada em um setor visual.
    const numSetoresVisuais = 8; 
    const anguloPorSetor = 360 / numSetoresVisuais;
    
    // Mapeamos o Pokémon sorteado para um "setor visual" arbitrário
    const setorAlvo = indiceSorteado % numSetoresVisuais; 
    
    // Define o ângulo de parada dentro do setor (com aleatoriedade)
    let anguloParada = (setorAlvo * anguloPorSetor) + (Math.random() * anguloPorSetor);
    anguloParada += (anguloPorSetor / 2); // Aponta para o meio do setor

    // Subtraímos a rotação anterior para garantir que o giro comece do estado atual
    // E adicionamos as voltas completas
    const giroFinal = (numVoltas * 360) + anguloParada; 
    currentRotation += giroFinal; // Atualiza a rotação acumulada

    // Define a rotação e a transição
    roletaCirculo.style.transform = `rotate(${currentRotation}deg)`;
    roletaCirculo.style.transition = `transform ${tempoGiroTotal / 1000}s ease-out`;

    // --- LÓGICA DO NOME TEMPORÁRIO DURANTE O GIRO ---
    let scrollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * listaAtual.length);
        const randomPokemonName = listaAtual[randomIndex];
        
        // Exibe o nome aleatório no centro
        roletaCirculo.innerHTML = `<p class="roleta-nome-temporario">${randomPokemonName}</p>`;
    }, 50);

    setTimeout(() => {
        // 1. Para o intervalo de scroll
        clearInterval(scrollInterval);
        
        // 2. Exibe o nome final do Pokémon sorteado no centro da roleta
        roletaCirculo.innerHTML = `<p class="roleta-nome-temporario">${pokemonSorteado}</p>`;
        
        // 3. Exibe o resultado final completo (imagem e nome abaixo da roleta)
        exibirResultado(pokemonSorteado);

        // 4. Reabilita o botão
        btnGirar.disabled = false;

    }, tempoGiroTotal);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    pokemonNomeH2.textContent = nome;

    try {
        const listaCompleta = pokemonPorGeracao['todas'];
        const idPokemon = listaCompleta.indexOf(nome) + 1;

        if (idPokemon === 0) {
             throw new Error("ID do Pokémon não encontrado.");
        }

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
