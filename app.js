// --- LISTAS DE POKÉMONS E FILTROS ---

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

const hoennPokemon = [
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", 
    "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", 
    "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", 
    "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", 
    "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", 
    "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", 
    "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", 
    "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", 
    "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", 
    "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", 
    "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", 
    "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", 
    "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", 
    "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", 
    "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", 
    "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", 
    "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", 
    "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", 
    "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", 
    "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", 
    "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", 
    "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", 
    "Rayquaza", "Jirachi", "Deoxys"
];

const sinnohPokemon = [
    "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", 
    "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", 
    "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", 
    "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", 
    "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", 
    "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", 
    "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", 
    "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", 
    "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", 
    "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", 
    "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", 
    "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", 
    "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", 
    "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", 
    "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", 
    "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", 
    "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", 
    "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus"
];

const unovaPokemon = [
    "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", 
    "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", 
    "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", 
    "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", 
    "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", 
    "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", 
    "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", 
    "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", 
    "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", 
    "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", 
    "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", 
    "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", 
    "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", 
    "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", 
    "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", 
    "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", 
    "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", 
    "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", 
    "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", 
    "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", 
    "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", 
    "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", 
    "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", 
    "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", 
    "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", 
    "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect"
];


// Lista de Pokémons a Serem Excluídos (Iniciais, Lendários, Míticos)
const POKEMON_PARA_EXCLUIR = [
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew",
    "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh", "Celebi",
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys",
    "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus",
    "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Victini", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect"
];

function filtrarPokemon(lista) {
    const listaNormalizada = lista.map(name => name.toLowerCase().replace(/[^a-z0-9]/g, '-'));
    return listaNormalizada.filter(nome => !POKEMON_PARA_EXCLUIR.includes(nome));
}

// Aplica o filtro
const kantoFiltrada = filtrarPokemon(kantoPokemon);
const johtoFiltrada = filtrarPokemon(johtoPokemon);
const hoennFiltrada = filtrarPokemon(hoennPokemon);
const sinnohFiltrada = filtrarPokemon(sinnohPokemon);
const unovaFiltrada = filtrarPokemon(unovaPokemon);

// Objeto principal com as listas JÁ FILTRADAS
const pokemonPorGeracao = {
    kanto: kantoFiltrada,
    johto: johtoFiltrada,
    hoenn: hoennFiltrada,
    sinnoh: sinnohFiltrada,
    unova: unovaFiltrada,
    todas: kantoFiltrada.concat(johtoFiltrada, hoennFiltrada, sinnohFiltrada, unovaFiltrada)
};


// --- REFERÊNCIAS DO DOM ---
const btnGirar = document.getElementById('btnGirar');
const btnResetar = document.getElementById('btnResetar');
const roletaCirculo = document.getElementById('roleta-circulo');
const resultadosContainer = document.getElementById('resultados-detalhados');
const quantidadeSelect = document.getElementById('quantidade');
const seletorGeracao = document.getElementById('geracao');
const themeToggle = document.getElementById('darkModeToggle');
const somRoleta = document.getElementById('somRoleta'); 

let currentRotation = 0; 
const DISTANCIA_DA_BORDA = 470; // 1000px / 2 (raio) - 30px (margem) = 470px

// Cores para os setores da roleta (repetidas)
const CORES_SETORES = [
    "#FF6347", "#1E90FF", "#32CD32", "#8A2BE2", "#FF1493", 
    "#FFD700", "#00CED1", "#FF8C00", "#9400D3", "#ADFF2F", 
];

// --- FUNÇÕES DE LÓGICA DE GERAÇÃO E ROLETA ---

function getNomeGeracao(chave) {
    switch (chave) {
        case 'kanto': return 'Geração 1 (Kanto) - Filtrada';
        case 'johto': return 'Geração 2 (Johto) - Filtrada';
        case 'hoenn': return 'Geração 3 (Hoenn) - Filtrada';
        case 'sinnoh': return 'Geração 4 (Sinnoh) - Filtrada';
        case 'unova': return 'Geração 5 (Unova) - Filtrada';
        case 'todas': return 'Gerações 1 a 5 (Todas) - Filtrada';
        default: return 'Selecione uma Geração';
    }
}

// NOVO: Função para formatar o nome do Pokémon (ex: nidoran-m -> Nidoran ♂)
function formatarNome(nome) {
    if (nome.includes('nidoran')) {
        return nome.replace('nidoran-m', 'Nidoran ♂').replace('nidoran-f', 'Nidoran ♀');
    }
    return nome.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}


// NOVO: Função de busca de estatísticas da PokéAPI
async function fetchStats(pokemonName) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error(`Pokémon não encontrado para o nome: ${pokemonName}`);
        }
        const data = await response.json();
        
        const stats = {
            hp: data.stats[0].base_stat,
            attack: data.stats[1].base_stat,
            defense: data.stats[2].base_stat,
            maxStat: 255,
            tipos: data.types.map(t => t.type.name.charAt(0).toUpperCase() + t.type.name.slice(1)).join(', '),
            id: data.id
        };
        return stats;

    } catch (error) {
        console.error("Erro ao buscar estatísticas:", error);
        return null;
    }
}


// NOVO: Função para criar o CARD de resultado final
function criarPokemonCard(pokemonNome, pokemonId, stats) {
    const card = document.createElement('div');
    card.className = 'pokemon-card-result';
    
    const hpPercent = (stats.hp / stats.maxStat) * 100;
    const attackPercent = (stats.attack / stats.maxStat) * 100;
    const defensePercent = (stats.defense / stats.maxStat) * 100;
    
    card.innerHTML = `
        <div class="card-title">${formatarNome(pokemonNome)} (#${pokemonId})</div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png" alt="${formatarNome(pokemonNome)}" style="width:100px; height:100px;">
        <p><strong>Tipo(s):</strong> ${stats.tipos}</p>
        
        <div class="stat-bar-container hp">
            HP: ${stats.hp}
            <div class="stat-bar"><div class="stat-fill" style="width: ${hpPercent}%;"></div></div>
        </div>
        <div class="stat-bar-container attack">
            Ataque: ${stats.attack}
            <div class="stat-bar"><div class="stat-fill" style="width: ${attackPercent}%;"></div></div>
        </div>
        <div class="stat-bar-container defense">
            Defesa: ${stats.defense}
            <div class="stat-bar"><div class="stat-fill" style="width: ${defensePercent}%;"></div></div>
        </div>
    `;
    
    return card;
}


// FINAL: preencherRoletaComNomes - Gera o conic-gradient e os nomes na borda
function preencherRoletaComNomes(lista, nomeGeracao) {
    roletaCirculo.innerHTML = ''; // Limpa o círculo 

    const numSetores = lista.length; 
    const anguloPorSetor = 360 / numSetores;
    
    let gradientColors = [];
    
    // 1. Gera a string de cores do conic-gradient para as 137+ fatias (com borda preta)
    for (let i = 0; i < numSetores; i++) {
        const cor = CORES_SETORES[i % CORES_SETORES.length];
        const anguloFim = ((i + 1) * anguloPorSetor).toFixed(2);
        const anguloInicio = (i * anguloPorSetor).toFixed(2);
        // Adicionamos um pequeno offset (0.01 deg) para a borda preta
        gradientColors.push(`black ${anguloInicio}deg, ${cor} ${parseFloat(anguloInicio) + 0.01}deg ${anguloFim}deg`);
    }

    // 2. Aplica o conic-gradient no background (cria as 137+ fatias visuais com separação preta)
    roletaCirculo.style.background = `conic-gradient(${gradientColors.join(', ')})`;
    
    // 3. Posiciona TODOS os nomes na borda
    lista.forEach((nome, i) => {
        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'roleta-nome-setor';
        nomeDiv.textContent = formatarNome(nome);

        // Fórmula para o tamanho da fonte (Ajustada para o tamanho 1000px)
        const numPokemons = lista.length;
        nomeDiv.style.fontSize = `${Math.max(0.5, 1.2 - (numPokemons / 100) * 0.15)}em`; 
        
        // Posiciona e rotaciona o nome
        const angulo = i * anguloPorSetor;
        const anguloTexto = angulo + (anguloPorSetor / 2);
        
        // Aplica a rotação do setor e a rotação de 90 graus para deixar o texto na diagonal (seguindo o raio)
        nomeDiv.style.transform = `rotate(${anguloTexto}deg) translate(0, -${DISTANCIA_DA_BORDA}px) rotate(90deg)`;
        
        roletaCirculo.appendChild(nomeDiv);
    });
    
    // 4. Adiciona o texto central (informação da geração)
    const infoText = document.createElement('p');
    infoText.className = 'roleta-nome-temporario'; 
    infoText.innerHTML = `${getNomeGeracao(seletorGeracao.value)}<br>(${lista.length} Pokémon)`;
    roletaCirculo.appendChild(infoText);
}


function atualizarDisplayGeracao() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];
    const nomeGeracao = getNomeGeracao(geracaoSelecionada);

    preencherRoletaComNomes(listaAtual, nomeGeracao);

    // Garante que o botão de resetar esteja escondido
    btnResetar.classList.add('hidden');
    resultadosContainer.classList.add('hidden');
    btnGirar.disabled = false;
}

// FUNÇÃO DE RESET
function resetarRoleta() {
    resultadosContainer.innerHTML = '';
    resultadosContainer.classList.add('hidden');
    btnResetar.classList.add('hidden');

    roletaCirculo.style.transition = 'none';
    roletaCirculo.style.transform = 'rotate(0deg)';
    currentRotation = 0;
    
    atualizarDisplayGeracao();
}

// Função principal para girar a roleta visual e sortear
function girarRoleta() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorCageneroao[geracaoSelecionada]; // ERA 'pokemonPorCageneroao' AGORA É 'pokemonPorGeracao'
    const quantidade = parseInt(quantidadeSelect.value); 

    if (!listaAtual || listaAtual.length === 0) {
        return;
    }

    btnGirar.disabled = true;
    btnResetar.classList.add('hidden');
    
    // 1. Inicia o som (Com checagem para evitar erro se o arquivo MP3 não estiver no GitHub)
    if (somRoleta) {
        somRoleta.currentTime = 0; 
        somRoleta.play().catch(e => console.log('Áudio não pode ser tocado: ', e)); 
    }

    // 2. Exibe o "GIRANDO..." no centro
    const centroTextElement = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (centroTextElement) {
        centroTextElement.textContent = 'GIRANDO...'; 
        centroTextElement.style.color = 'var(--button-primary)';
    }
    // Remove os nomes da borda durante o giro (agora eles ficam visíveis para a animação)
    roletaCirculo.querySelectorAll('.roleta-nome-setor').forEach(el => el.style.opacity = 0);

    resultadosContainer.innerHTML = ''; 
    resultadosContainer.classList.add('hidden');

    const tempoGiroTotal = 5000; 
    const numVoltas = 5; 
    
    // 3. Lógica de Sorteio Múltiplo
    const resultadosSorteados = [];
    const numSetores = listaAtual.length; 
    const anguloPorSetor = 360 / numSetores; 
    
    const ultimoIndiceSorteado = Math.floor(Math.random() * listaAtual.length);
    
    for (let i = 0; i < quantidade; i++) {
        const indice = (i === quantidade - 1) ? ultimoIndiceSorteado : Math.floor(Math.random() * listaAtual.length);
        resultadosSorteados.push({ nome: listaAtual[indice], indice: indice });
    }

    // --- 4. CÁLCULO DA PARADA VISUAL ---
    const anguloParada = (ultimoIndiceSorteado * anguloPorSetor) + (anguloPorSetor / 2);
    const anguloAjustado = 360 - anguloParada; 

    const giroFinal = (numVoltas * 360) + anguloAjustado; 
    currentRotation += giroFinal; 

    // Define a rotação e a transição (ANIMAÇÃO)
    roletaCirculo.style.transform = `rotate(${currentRotation}deg)`;
    roletaCirculo.style.transition = `transform ${tempoGiroTotal / 1000}s ease-out`;

    
    setTimeout(() => {
        if (somRoleta) somRoleta.pause();
        
        // 1. Exibe o nome final no centro da roleta
        if (centroTextElement) {
            centroTextElement.textContent = formatarNome(resultadosSorteados[resultadosSorteados.length - 1].nome);
            centroTextElement.style.color = 'var(--text-color)';
        }

        // 2. Exibe o resultado detalhado com stats
        exibirResultado(resultadosSorteados);

        // 3. Reabilita o botão
        btnGirar.disabled = false;

        // 4. Restaura os nomes da borda
        setTimeout(() => {
             preencherRoletaComNomes(listaAtual, getNomeGeracao(geracaoSelecionada));
        }, 100);


    }, tempoGiroTotal);
}


function exibirResultado(resultados) {
    resultadosContainer.innerHTML = ''; // Limpa resultados anteriores
    resultadosContainer.classList.remove('hidden');
    btnResetar.classList.remove('hidden'); // Exibe o botão de reset

    resultados.forEach(async (resultado) => {
        const listaCompletaOriginal = kantoPokemon.concat(johtoPokemon, hoennPokemon, sinnohPokemon, unovaPokemon); 
        const idPokemon = listaCompletaOriginal.findIndex(name => name.toLowerCase() === resultado.nome) + 1; 

        if (idPokemon === 0) {
             console.error(`ID não encontrado para ${resultado.nome}`);
             return;
        }

        // 1. Busca as estatísticas
        const stats = await fetchStats(resultado.nome); // Usamos o nome normalizado para a API

        // 2. Cria e anexa o card
        if (stats) {
            const card = criarPokemonCard(resultado.nome, idPokemon, stats);
            resultadosContainer.appendChild(card);
        }
    });

    // Atualiza o texto central para o nome do primeiro Pokémon sorteado ou apenas "Resultado"
    const centroTextElement = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (centroTextElement) {
        centroTextElement.textContent = resultados.length > 1 
            ? `${resultados.length} Pokémons Sorteados!`
            : formatarNome(resultados[0].nome);
        centroTextElement.style.color = 'var(--text-color)';
    }

}


// --- FUNÇÕES DE LÓGICA DE TEMA ESCURO ---

function toggleTheme() {
    const isDark = themeToggle.checked;
    
    document.body.classList.toggle('dark-theme', isDark);

    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

function loadTheme() {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'enabled') {
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
    } else {
        toggleTheme.checked = false;
        document.body.classList.remove('dark-theme');
    }
}


// EVENT LISTENERS
btnGirar.addEventListener('click', girarRoleta);
btnResetar.addEventListener('click', resetarRoleta);
seletorGeracao.addEventListener('change', atualizarDisplayGeracao);
darkModeToggle.addEventListener('change', toggleTheme);

// Inicialização da página
loadTheme();
atualizarDisplayGeracao();
