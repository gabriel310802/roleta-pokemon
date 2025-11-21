// --- LISTAS DE POKÉMONS (GERAÇÕES 1 a 5) ---

// Listas originais de cada Geração (usamos o array completo e filtramos depois)
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

// --- LISTAS DE POKÉMONS A SEREM EXCLUÍDOS ---
const POKEMON_PARA_EXCLUIR = [
    // --- Geração 1 (Kanto) ---
    // Iniciais e Evoluções
    "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise",
    // Lendários/Míticos
    "Articuno", "Zapdos", "Moltres", "Mewtwo", "Mew",

    // --- Geração 2 (Johto) ---
    // Iniciais e Evoluções
    "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr",
    // Lendários/Míticos
    "Raikou", "Entei", "Suicune", "Lugia", "Ho-Oh", "Celebi",

    // --- Geração 3 (Hoenn) ---
    // Iniciais e Evoluções
    "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert",
    // Lendários/Míticos
    "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys",
    
    // --- Geração 4 (Sinnoh) ---
    // Iniciais e Evoluções
    "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon",
    // Lendários/Míticos
    "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus",
    
    // --- Geração 5 (Unova) ---
    // Iniciais e Evoluções
    "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott",
    // Lendários/Míticos e especiais (Victini)
    "Victini", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect"
];

// --- FUNÇÃO DE FILTRO ---
function filtrarPokemon(lista) {
    // Retorna uma nova lista, excluindo os nomes que estão na lista POKEMON_PARA_EXCLUIR
    return lista.filter(nome => !POKEMON_PARA_EXCLUIR.includes(nome));
}

// --- APLICAÇÃO DO FILTRO NAS LISTAS ---
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
    // A lista "todas" também é filtrada, unindo todas as listas filtradas
    todas: kantoFiltrada.concat(johtoFiltrada, hoennFiltrada, sinnohFiltrada, unovaFiltrada)
};

// --- REFERÊNCIAS DO DOM ---
const btnGirar = document.getElementById('btnGirar');
const roletaCirculo = document.getElementById('roleta-circulo');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao');
const themeToggle = document.getElementById('darkModeToggle');

let currentRotation = 0; 


// --- FUNÇÕES DE LÓGICA DE GERAÇÃO E ROLETA ---

function getNomeGeracao(chave) {
    // Apenas mudamos o texto para refletir que as listas são 'filtradas'
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

// CORREÇÃO: Garante que os 8 primeiros nomes da lista atual sejam exibidos.
function preencherRoletaComNomes(lista, nomeGeracao) {
    roletaCirculo.innerHTML = ''; // Limpa o círculo

    const nomesVisiveis = 8;
    const anguloPorNome = 360 / nomesVisiveis;

    // Adiciona 8 nomes da lista (usando módulo para garantir que sempre haja um nome)
    for (let i = 0; i < nomesVisiveis; i++) {
        // Usa o índice 'i' da lista ATUAL (corrigindo o bug do filtro solo)
        const nome = lista[i % lista.length]; 
        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'roleta-nome-setor';
        nomeDiv.textContent = nome;

        // Posiciona e rotaciona o nome
        const angulo = i * anguloPorNome;
        nomeDiv.style.transform = `rotate(${angulo}deg) translate(0, -120px) rotate(-${angulo}deg)`;
        
        roletaCirculo.appendChild(nomeDiv);
    }
    
    // Adiciona o texto central (total de Pokémons)
    const infoText = document.createElement('p');
    infoText.className = 'roleta-nome-temporario';
    infoText.innerHTML = `${nomeGeracao}<br>(${lista.length} Pokémon)`;
    roletaCirculo.appendChild(infoText);
}


function atualizarDisplayGeracao() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];
    const nomeGeracao = getNomeGeracao(geracaoSelecionada);

    preencherRoletaComNomes(listaAtual, nomeGeracao);

    // Limpa o resultado anterior
    pokemonNomeH2.textContent = ''; 
    pokemonImg.classList.add('hidden'); 

    // Reseta a rotação da roleta visual 
    roletaCirculo.style.transition = 'none'; 
    roletaCirculo.style.transform = `rotate(0deg)`;
    setTimeout(() => {
        roletaCirculo.style.transition = 'transform 5s ease-out'; 
    }, 50);
    currentRotation = 0;
}

// Função principal para girar a roleta visual e sortear
function girarRoleta() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];

    if (!listaAtual || listaAtual.length === 0) {
        return;
    }

    btnGirar.disabled = true;
    
    // Remove os nomes dos setores e o texto central
    roletaCirculo.innerHTML = '';

    const tempoGiroTotal = 5000; 
    const numVoltas = 5; 
    
    // Sorteia o Pokémon final
    const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
    const pokemonSorteado = listaAtual[indiceSorteado];

    // --- CÁLCULO DA ROTAÇÃO ---
    // Mantemos 8 setores visuais, mas o sorteio é de 137, por exemplo.
    const numSetoresVisuais = 8; 
    const anguloPorSetor = 360 / numSetoresVisuais;
    // O setor alvo é calculado usando o índice do sorteado em relação aos 8 setores visuais
    const setorAlvo = indiceSorteado % numSetoresVisuais; 
    let anguloParada = (setorAlvo * anguloPorSetor) + (Math.random() * anguloPorSetor);
    anguloParada += (anguloPorSetor / 2); 
    
    const giroFinal = (numVoltas * 360) + anguloParada; 
    currentRotation += giroFinal; 

    // Define a rotação e a transição
    roletaCirculo.style.transform = `rotate(${currentRotation}deg)`;
    roletaCirculo.style.transition = `transform ${tempoGiroTotal / 1000}s ease-out`;

    
    // --- LÓGICA DO NOME EM SCROLL CENTRAL ---
    let scrollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * listaAtual.length);
        const randomPokemonName = listaAtual[randomIndex];
        // Exibe o nome aleatório no centro
        roletaCirculo.innerHTML = `<p class="roleta-nome-temporario">${randomPokemonName}</p>`;
    }, 50);


    setTimeout(() => {
        // 1. Para o intervalo de scroll
        clearInterval(scrollInterval);
        
        // 2. Exibe o nome final no centro da roleta
        roletaCirculo.innerHTML = `<p class="roleta-nome-temporario">${pokemonSorteado}</p>`;
        
        // 3. Exibe o resultado final completo
        exibirResultado(pokemonSorteado);

        // 4. Reabilita o botão
        btnGirar.disabled = false;

    }, tempoGiroTotal);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    pokemonNomeH2.textContent = nome;

    try {
        // A lista completa para buscar o ID precisa ser a lista original (não filtrada) para manter a ordem correta do Pokedex (ID 1 = Bulbasaur)
        const listaCompletaOriginal = kantoPokemon.concat(johtoPokemon, hoennPokemon, sinnohPokemon, unovaPokemon); 
        const idPokemon = listaCompletaOriginal.indexOf(nome) + 1; 

        if (idPokemon === 0) {
             // Se o nome não for encontrado na lista original (o que não deve acontecer)
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
        themeToggle.checked = false;
        document.body.classList.remove('dark-theme');
    }
}


// --- LISTENERS DE EVENTOS ---
btnGirar.addEventListener('click', girarRoleta);
seletorGeracao.addEventListener('change', atualizarDisplayGeracao);
themeToggle.addEventListener('change', toggleTheme);

// Inicialização da página
loadTheme();
atualizarDisplayGeracao();
