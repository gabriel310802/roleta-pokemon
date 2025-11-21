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

const hoennPokemon = [
    // 135 Pokémons da Geração 3 (252-386)
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
    // 107 Pokémons da Geração 4 (387-493)
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
    // 156 Pokémons da Geração 5 (494-649)
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


const pokemonPorGeracao = {
    kanto: kantoPokemon,
    johto: johtoPokemon,
    hoenn: hoennPokemon,
    sinnoh: sinnohPokemon,
    unova: unovaPokemon,
    todas: kantoPokemon.concat(johtoPokemon, hoennPokemon, sinnohPokemon, unovaPokemon) // Combine TODAS as 5 gerações
};

// --- REFERÊNCIAS DO DOM ---
const btnGirar = document.getElementById('btnGirar');
const roletaCirculo = document.getElementById('roleta-circulo');
const pokemonNomeH2 = document.getElementById('pokemon-nome');
const pokemonImg = document.getElementById('pokemon-img');
const seletorGeracao = document.getElementById('geracao');

let currentRotation = 0; 


// Função para obter o nome da geração formatado
function getNomeGeracao(chave) {
    switch (chave) {
        case 'kanto':
            return 'Geração 1 (Kanto)';
        case 'johto':
            return 'Geração 2 (Johto)';
        case 'hoenn':
            return 'Geração 3 (Hoenn)';
        case 'sinnoh':
            return 'Geração 4 (Sinnoh)';
        case 'unova':
            return 'Geração 5 (Unova)';
        case 'todas':
            return 'Gerações 1 a 5 (Todas)';
        default:
            return 'Selecione uma Geração';
    }
}

// --- NOVO: FUNÇÃO PARA PREENCHER A ROLETA COM 8 NOMES ---
function preencherRoletaComNomes(lista, nomeGeracao) {
    roletaCirculo.innerHTML = ''; // Limpa o círculo

    const nomesVisiveis = 8;
    const anguloPorNome = 360 / nomesVisiveis;

    // Adiciona 8 nomes da lista (ou repete se a lista for menor)
    for (let i = 0; i < nomesVisiveis; i++) {
        const nome = lista[i % lista.length]; // Usa o módulo para evitar erro se lista for menor que 8
        const nomeDiv = document.createElement('div');
        nomeDiv.className = 'roleta-nome-setor';
        nomeDiv.textContent = nome;

        // Calcula a rotação e a posição para posicionar o nome ao longo da borda
        const angulo = i * anguloPorNome;
        
        // CSS para centralizar e rotacionar o nome para que ele acompanhe o setor
        nomeDiv.style.transform = `rotate(${angulo}deg) translate(0, -120px) rotate(-${angulo}deg)`;
        
        roletaCirculo.appendChild(nomeDiv);
    }
    
    // Adiciona o texto central (total de Pokémons)
    const infoText = document.createElement('p');
    infoText.className = 'roleta-nome-temporario';
    infoText.innerHTML = `${nomeGeracao}<br>(${lista.length} Pokémon)`;
    roletaCirculo.appendChild(infoText);
}


// Função para atualizar o display da roleta (antes de girar)
function atualizarDisplayGeracao() {
    const geracaoSelecionada = seletorGeracao.value;
    const listaAtual = pokemonPorGeracao[geracaoSelecionada];
    const nomeGeracao = getNomeGeracao(geracaoSelecionada);

    // Usa a nova função para preencher a roleta
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
    
    // Remove o texto central (total de Pokémons) antes de girar
    const infoText = roletaCirculo.querySelector('.roleta-nome-temporario');
    if (infoText) infoText.remove();


    const tempoGiroTotal = 5000; 
    const numVoltas = 5; 
    
    // Sorteia o Pokémon final
    const indiceSorteado = Math.floor(Math.random() * listaAtual.length);
    const pokemonSorteado = listaAtual[indiceSorteado];

    // --- CÁLCULO DA ROTAÇÃO (O mesmo de antes) ---
    const numSetoresVisuais = 8; 
    const anguloPorSetor = 360 / numSetoresVisuais;
    const setorAlvo = indiceSorteado % numSetoresVisuais; 
    let anguloParada = (setorAlvo * anguloPorSetor) + (Math.random() * anguloPorSetor);
    anguloParada += (anguloPorSetor / 2); 
    
    const giroFinal = (numVoltas * 360) + anguloParada; 
    currentRotation += giroFinal; 

    // Define a rotação e a transição
    roletaCirculo.style.transform = `rotate(${currentRotation}deg)`;
    roletaCirculo.style.transition = `transform ${tempoGiroTotal / 1000}s ease-out`;

    
    // --- LÓGICA DO NOME TEMPORÁRIO (DE VOLTA AO SCROLL) ---
    // Mesmo sem os 649 nomes na borda, o scroll central dá o efeito de roleta
    let scrollInterval = setInterval(() => {
        const randomIndex = Math.floor(Math.random() * listaAtual.length);
        const randomPokemonName = listaAtual[randomIndex];
        // Adiciona o nome aleatório no centro
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

// (Função exibirResultado e Listeners permanecem IGUAIS)

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

btnGirar.addEventListener('click', girarRoleta);
seletorGeracao.addEventListener('change', atualizarDisplayGeracao);
atualizarDisplayGeracao();
// --- NOVO: LÓGICA DE TEMA ESCURO ---
const themeToggle = document.getElementById('darkModeToggle');

// Função para aplicar/remover a classe dark-theme
function toggleTheme() {
    const isDark = themeToggle.checked;
    
    // Aplica a classe no body
    document.body.classList.toggle('dark-theme', isDark);

    // Salva a preferência no armazenamento local
    localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');
}

// 1. Event Listener para a chave
themeToggle.addEventListener('change', toggleTheme);

// 2. Carrega o tema salvo ao iniciar a página
function loadTheme() {
    const savedTheme = localStorage.getItem('darkMode');

    if (savedTheme === 'enabled') {
        // Se estiver salvo como escuro, marca o checkbox e aplica o tema
        themeToggle.checked = true;
        document.body.classList.add('dark-theme');
    } else {
        // Garante que o checkbox não esteja marcado para o tema claro
        themeToggle.checked = false;
        document.body.classList.remove('dark-theme');
    }
}

// Chama a função de carregamento ao iniciar o script
loadTheme();
// --- FIM LÓGICA DE TEMA ESCURO ---


// --- LISTENERS DE EVENTOS ---
// ... (mantenha seus listeners existentes: btnGirar, seletorGeracao, atualizarDisplayGeracao) ...
