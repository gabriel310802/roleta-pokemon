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
    return lista.filter(nome => !POKEMON_PARA_EXCLUIR.includes(nome));
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
const roletaCirculo = document.getElementById('roleta-circulo');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao');
const themeToggle = document.getElementById('darkModeToggle');

let currentRotation = 0; 
// NOVO: Distância para 1000px de diâmetro. (1000/2) - 30 = 470px
const DISTANCIA_DA_BORDA = 470; 

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

// NOVO: preencherRoletaComNomes - Gera o conic-gradient e os nomes na borda
function preencherRoletaComNomes(lista, nomeGeracao) {
    roletaCirculo.innerHTML = ''; // Limpa o círculo 

    const numSetores = lista.length; 
    const anguloPorSetor = 360 / numSetores;
    
    let gradientColors = [];
    
    // 1. Gera a string de cores do conic-gradient para as 137+ fatias
    for (let i = 0; i < numSetores; i++) {
        const cor = CORES_SETORES[i % CORES_SETORES.length];
        const anguloFim = ((i + 1) * anguloPorSetor).toFixed(2);
        const anguloInicio = (i * anguloPorSetor).toFixed(2);
        gradientColors.push(`${cor} ${anguloInicio}deg ${anguloFim}deg`);
    }

    // 2. Aplica o conic-gradient no background (cria as 137+ fatias visuais)
    roletaCirculo.style.background = `conic-gradient(${gradientColors.join(', ')})`;
    
    // 3. Posiciona TODOS os nomes na borda
    lista.forEach((nome, i) => {
        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'roleta-nome-setor';
        nomeDiv.textContent = nome;

        // Fórmula para o tamanho da fonte (Ajustada para o tamanho 1000px)
        nomeDiv.style.fontSize = `${Math.max(0.5, 1.2 - (numSetores / 100) * 0.15)}em`; 
        
        // Posiciona e rotaciona o nome
        const angulo = i * anguloPorSetor;
        // Ajuste para o meio da fatia
        const anguloTexto = angulo + (anguloPorSetor / 2);
        
        // Aplica a rotação do setor e a rotação de 90 graus para deixar o texto na diagonal (seguindo o raio)
        nomeDiv.style.transform = `rotate(${anguloTexto}deg) translate(0, -${DISTANCIA_DA_BORDA}px) rotate(90deg)`;
        
        roletaCirculo.appendChild(nomeDiv);
    });
    
    // 4. Adiciona o texto central (informação da geração)
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
    
    // 1. Limpa APENAS o texto central e exibe o "GIRANDO..."
    const centroTextElement = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (centroTextElement) {
        centroTextElement.textContent = 'GIRANDO...'; 
        centroTextElement.style.color = 'var(--button-primary)';
    }

    // 2. Remove os nomes da borda durante o giro para melhor desempenho e menos confusão visual
    roletaCirculo.querySelectorAll('.roleta-nome-setor').forEach(el => el.style.opacity = 0);


    const tempoGiroTotal = 5000; 
    const numVoltas = 5; 
    
    // Sorteia o Pokémon final
    const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
    const pokemonSorteado = listaAtual[indiceSorteado];

    // --- CÁLCULO DA ROTAÇÃO (USANDO O NÚMERO TOTAL DE ITENS) ---
    const numSetores = listaAtual.length; 
    const anguloPorSetor = 360 / numSetores; 
    
    // Ângulo de parada exato (apontamos para o meio da fatia do Pokémon)
    const anguloParada = (indiceSorteado * anguloPorSetor) + (anguloPorSetor / 2);
    const anguloAjustado = 360 - anguloParada; // Ajuste para mover o item sorteado até o ponteiro

    // Adiciona as voltas completas
    const giroFinal = (numVoltas * 360) + anguloAjustado; 
    currentRotation += giroFinal; 

    // Define a rotação e a transição
    roletaCirculo.style.transform = `rotate(${currentRotation}deg)`;
    roletaCirculo.style.transition = `transform ${tempoGiroTotal / 1000}s ease-out`;

    
    setTimeout(() => {
        // 1. Exibe o nome final no centro da roleta
        roletaCirculo.innerHTML = `<p class="roleta-nome-temporario">${pokemonSorteado}</p>`;
        
        // 2. Exibe o resultado final completo
        exibirResultado(pokemonSorteado);

        // 3. Reabilita o botão
        btnGirar.disabled = false;

        // 4. Restaura os nomes da borda
        // Chamamos a função de preenchimento para redesenhar o círculo após a parada
        setTimeout(() => {
             preencherRoletaComNomes(listaAtual, getNomeGeracao(geracaoSelecionada));
        }, 100);


    }, tempoGiroTotal);
}

// Função para exibir o resultado final e buscar a imagem
async function exibirResultado(nome) {
    pokemonNomeH2.textContent = nome;

    try {
        const listaCompletaOriginal = kantoPokemon.concat(johtoPokemon, hoennPokemon, sinnohPokemon, unovaPokemon); 
        const idPokemon = listaCompletaOriginal.indexOf(nome) + 1; 

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
