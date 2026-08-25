/**
 * World of Myria Canonical Codex Dataset
 * Contains detailed lore for:
 * 1. The Seven Elemental Races & Euchronians
 * 2. The Seven Nations of Myria & Geopolitics
 * 3. Continents, Oceans & Subterranean Geography
 * 4. Chronological Timeline, Eras & The 6 Forgotten Truths
 * 5. Archon Neutrality & Usurper Geopolitical Conspiracies
 */

// ==========================================
// 1. RACES OF MYRIA DATASET
// ==========================================

export const racesData = [
  {
    id: "human",
    name: "Human",
    subtitle: "The Ambitious & Adaptable",
    patronGod: "Valafar, God of Fire",
    element: "Fire",
    auraColor: "Crimson / Gold",
    homeland: "Varencia Empire (Emerose City)",
    auraBoost: "Strength +20%",
    lifespan: "60–80 years",
    themeColor: "red",
    borderClass: "border-red-500/40 hover:border-red-500/70",
    badgeClass: "bg-red-950/60 text-red-300 border-red-500/40 shadow-red-900/30",
    glowClass: "shadow-red-500/10",
    accentBg: "from-red-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Humans are the most diverse race in appearance, with skin tones ranging from pale to dark, and hair from black to blonde to red. Average in height and build, they lack the distinctive features of other races—an 'ordinariness' that grants them supreme adaptability in any environment.",
    culture: "Defined by ambition and urgency. Their brief lifespans drive them to build empires, wage wars, and innovate constantly. The Varencia Empire is the largest and most powerful nation in Myria, a bustling melting pot dominated by Human determination.",
    strengths: [
      "Adaptability: Humans thrive, adapt, and build in any climate or terrain.",
      "Innovation: Short lifespans push them to relentlessly create, engineer, and discover.",
      "Passion: Fire affinity mirrors their fierce emotional intensity and driving will."
    ],
    weaknesses: [
      "Short-sightedness: Often prioritize immediate gains over generational consequences.",
      "Recklessness: Fire burns hot and fast, causing frequent volatile conflicts.",
      "Imperialism: The Varencian Empire carries a long, bloody history of conquest."
    ],
    notableFigures: [
      { name: "Rei Ardent", role: "The Nahobino" },
      { name: "Auclair Reise Fanatio", role: "Princess of Varencia" },
      { name: "Grius Reise Fanatio", role: "The Dark Twin" },
      { name: "Irine Ardent", role: "Witch of White" },
      { name: "Natasha Belaruna", role: "Witch of Red" },
      { name: "Sheliri", role: "Witch of Black / End" }
    ],
    conditionSummary: "Humans are the most 'ordinary' race, which makes their achievements all the more remarkable. They have produced the most Witches and the most Awakeners of any race. Their short lifespans and fiery spirits make them both the most destructive and creative of the Seven Races."
  },
  {
    id: "elf",
    name: "Elf",
    subtitle: "The Timeless & Aloof",
    patronGod: "Mirinara, Goddess of Wind",
    element: "Wind",
    auraColor: "Silver / Green",
    homeland: "Seviel (Cendres Forest)",
    auraBoost: "Speed +20%",
    lifespan: "300–500 years",
    themeColor: "emerald",
    borderClass: "border-emerald-500/40 hover:border-emerald-500/70",
    badgeClass: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40 shadow-emerald-900/30",
    glowClass: "shadow-emerald-500/10",
    accentBg: "from-emerald-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Tall, slender, and exceptionally graceful with sharp angular features and long pointed ears. Hair ranges from silver-white to deep forest green; eyes are pale grey, blue, or violet. They move with an effortless, weightless glide.",
    culture: "Ancient, aristocratic, and deeply traditional. The Silver Court governs from the heart of the Cendres Forest. Elven nobles trace genealogies thousands of years back, valuing beauty, music, poetry, and communion with wind-currents.",
    strengths: [
      "Longevity: Centuries of accumulated wisdom, tactical mastery, and arcane research.",
      "Grace: Unrivaled kinetic agility, archery precision, and weightless maneuverability.",
      "Nature Attunement: The ancient forest whispers incoming threats and answers their call."
    ],
    weaknesses: [
      "Arrogance: Cultural superiority complex viewing short-lived races with quiet disdain.",
      "Isolationism: Seviel rarely intervenes in continental crises until it is too late.",
      "Stagnation: Multi-century lifespans and rigid court etiquette make them fiercely resistant to change."
    ],
    notableFigures: [
      { name: "Salezas 'Raoul' Briarwood", role: "Legendary Bounty Hunter" },
      { name: "Amelia Kusalina", role: "The Fair Lady (Deceased)" }
    ],
    conditionSummary: "Haunted by the loss of their ancient glory during the War in Heaven, which decimated a generation of their finest mages. Modern Seviel is breathtaking but diminished—a fading, melancholic echo of celestial heights."
  },
  {
    id: "druid",
    name: "Druid (Half-Plant)",
    subtitle: "The Guardians of the Grove",
    patronGod: "Muna, Goddess of Plant",
    element: "Plant",
    auraColor: "Verdant",
    homeland: "Eqinada (Sacred Groves)",
    auraBoost: "Endurance +20%",
    lifespan: "150–250 years",
    themeColor: "green",
    borderClass: "border-green-500/40 hover:border-green-500/70",
    badgeClass: "bg-green-950/60 text-green-300 border-green-500/40 shadow-green-900/30",
    glowClass: "shadow-green-500/10",
    accentBg: "from-green-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Humanoids with biological botanical features: skin with faint chlorophyll-green undertones, hair resembling leaves, vines, or moss that shifts color with the seasons. Small flowers or thorns may naturally sprout from their skin.",
    culture: "Communal, egalitarian, and deeply spiritual. They do not build stone cities; their civilization is a vast web of sacred groves linked by leyline pathways. Governed by the Circle of Elders through consensus in communion with Muna.",
    strengths: [
      "Planetary Harmony: Forests physically rise, shift, and entangle enemies to defend them.",
      "Miraculous Healing: Renowned as the most gifted botanic and cellular healers in Myria.",
      "Endurance: Unshakable physical constitution, outlasting siege attrition and severe toxins."
    ],
    weaknesses: [
      "Gentle Stereotype: Often perceived by warlike nations as passive prey, fueling internal resentment.",
      "No Standing Military: Entirely reliant on environmental defenses and individual wardens.",
      "Pacifism: Deep cultural reluctance to wage offensive or preemptive campaigns."
    ],
    notableFigures: [
      { name: "Vicktor Huthront", role: "The Thorned Controller" },
      { name: "Revali Archibald", role: "Ghost of the Leaf (Deceased)" }
    ],
    conditionSummary: "Caught perpetually between Varencia's logging expansions and Seviel's isolation. Many modern Druids struggle with the realization that their gentle ways invite exploitation, leading some to weaponize toxic rootcraft in defense."
  },
  {
    id: "half_animal",
    name: "Half-Animal (Beastman)",
    subtitle: "The Instinctive Clan Warriors",
    patronGod: "Rydos, God of Thunder",
    element: "Thunder",
    auraColor: "Violet / Blue",
    homeland: "Shinazuma Dynasty (Shimotsugi City)",
    auraBoost: "Reflexes +20%",
    lifespan: "70–100 years",
    themeColor: "purple",
    borderClass: "border-purple-500/40 hover:border-purple-500/70",
    badgeClass: "bg-purple-950/60 text-purple-300 border-purple-500/40 shadow-purple-900/30",
    glowClass: "shadow-purple-500/10",
    accentBg: "from-purple-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Humanoid builds adorned with distinct beast traits: lupine or vulpine ears, prehensile tails, fangs, sharp claws, or sensory whiskers. Neuromuscular pathways are hyper-conductive, granting lightning-fast reaction speeds.",
    culture: "Built on honor, martial discipline, and clan fidelity. Features pagoda citadel architecture and serene stone gardens. Samurai serve the Shogun with unwavering loyalty, while ninja clans operate in the shadows of the archipelago.",
    strengths: [
      "Predatory Instinct: Preternatural reflexes, enhanced night vision, and acute hearing.",
      "Clan Bonds: Unbreakable loyalty and collective battlefield cohesion.",
      "Thunder Mastery: Explosive electrical bursts that empower weapon velocity."
    ],
    weaknesses: [
      "Prejudice: Surface imperialists routinely dismiss them as 'savage' or bestial.",
      "Clan Feuds: Blood rivalries between animal houses occasionally fracture the dynasty.",
      "Rigid Honor: Strict codes of conduct that can be exploited by deceitful adversaries."
    ],
    notableFigures: [
      { name: "Shizuku Kageyuki", role: "Samurai Blade Prodigy" },
      { name: "Ilya Alberich / Kaori Kageyuki", role: "The Nightingale (Deceased)" }
    ],
    conditionSummary: "Living between civilization and untamed instinct, Beastmen fight tirelessly for respect on the world stage while balancing the lethal nature of their heritage with delicate spiritual serenity."
  },
  {
    id: "dwarf",
    name: "Dwarf",
    subtitle: "The Unyielding Mountain Smiths",
    patronGod: "Zefraath, God of Earth",
    element: "Earth",
    auraColor: "Bronze / Grey",
    homeland: "Ogusta Empire (Ored City)",
    auraBoost: "Defense +20%",
    lifespan: "150–250 years",
    themeColor: "amber",
    borderClass: "border-amber-500/40 hover:border-amber-500/70",
    badgeClass: "bg-amber-950/60 text-amber-300 border-amber-500/40 shadow-amber-900/30",
    glowClass: "shadow-amber-500/10",
    accentBg: "from-amber-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Short, broad-shouldered, and densely built with thick bone structures and weathered, stone-tough skin. Both men and women grow thick facial hair adorned with metal clan rings and runic beads.",
    culture: "Subterranean metropolis architecture carved into mountain roots, illuminated by glowing Maglica lanterns and forge-fires. Governed by the Council of Thanes. Masters of metallurgy, runic warding, and mechanical engineering.",
    strengths: [
      "Durability: Physical resilience capable of absorbing concussive blasts that shatter iron.",
      "Craftsmanship: The undisputed masters of high-tier armor, blades, and Maglica engines.",
      "Earth Affinity: Unmovable grounding against physical and kinetic displacement."
    ],
    weaknesses: [
      "Stubbornness: Dogmatic adherence to ancient grudges and refusal to alter failed doctrines.",
      "Subterranean Isolation: Deep suspicion of surface politics and open sky.",
      "Avarice: Relentless hunger for raw Maglica veins and ancestral relics."
    ],
    notableFigures: [
      { name: "Noah Centineo", role: "The Unbreakable Vanguard" }
    ],
    conditionSummary: "Descendants of the Khazadrim who lost three great clan-halls during the Abyssal Breach. That ancient trauma fuels their obsessive impulse to construct thicker walls, deeper vaults, and heavier armor."
  },
  {
    id: "liichtian",
    name: "Liichtian (Angel)",
    subtitle: "The Dispersed Photonic Celestials",
    patronGod: "Hethos, God of Light",
    element: "Light",
    auraColor: "White / Gold",
    homeland: "None (Global Diaspora & Hidden Sanctuaries)",
    auraBoost: "Speed & Reflexes +10% each",
    lifespan: "500+ years (Declining)",
    themeColor: "yellow",
    borderClass: "border-yellow-400/40 hover:border-yellow-400/70",
    badgeClass: "bg-yellow-950/60 text-yellow-200 border-yellow-400/40 shadow-yellow-900/30",
    glowClass: "shadow-yellow-400/15",
    accentBg: "from-yellow-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Strikingly beautiful with luminous skin, hair ranging from platinum blonde to radiant snow-white, and silver, gold, or pale azure eyes. In moments of high ether surge, luminous glyphs ignite on their skin and phantom wings of light emerge.",
    culture: "Once an exalted order of sacred crusaders and scholars. Following the catastrophic Celestian Purge, their population was decimated by two-thirds. Surviving Liichtians live as hidden refugees, cloaked scholars, or wandering paladins.",
    strengths: [
      "Photonic Purity: High-frequency light ether that instantly purges blights and heals wounds.",
      "Transcendent Lifespan: Centuries of accumulated philosophical and military insight.",
      "Divine Resonance: Innate telepathic harmony with celestial relics."
    ],
    weaknesses: [
      "Near Extinction: Dwindling population with few births, facing steady biological decline.",
      "Persecution: Feared as apocalyptic omens or hunted by fanatical occultists for their blood.",
      "Psychological Burden: Ancestral guilt over their role as instruments in the ancient Purge."
    ],
    notableFigures: [
      { name: "Fiore / Alome", role: "Saintly Healer (Deceased)" },
      { name: "Slaine Arlondorn", role: "Exiled Sun Paladin" }
    ],
    conditionSummary: "The most tragic victims of divine betrayal. Used by Hethos as holy shock troops during the ancient wars, then discarded. Survivors navigate a world where they are simultaneously worshipped as saints and hunted as monsters."
  },
  {
    id: "merfolk",
    name: "Merfolk",
    subtitle: "The Tidal Memory Keepers",
    patronGod: "Uphine, Goddess of Water",
    element: "Water",
    auraColor: "Blue / Teal",
    homeland: "Iberia Kingdom (The Iberian Reefs)",
    auraBoost: "Endurance & Defense +10% each",
    lifespan: "120–200 years",
    themeColor: "cyan",
    borderClass: "border-cyan-500/40 hover:border-cyan-500/70",
    badgeClass: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40 shadow-cyan-900/30",
    glowClass: "shadow-cyan-500/10",
    accentBg: "from-cyan-950/30 via-tavern-900 to-tavern-900",
    physicalTraits: "Amphibious humanoids with legs (similar to the Zora), allowing effortless movement both on land and through abyssal trenches. Skin has a shimmering aqua sheen; gills line their necks, and fingers are lightly webbed with pearl-smooth nails.",
    culture: "Built upon coral atolls, stilt platforms, and submerged palace chambers. Ruled by the Coral Throne and advised by the Tide Sages. Masters of tidal hydro-magic, pearl carving, and marine acoustic harmony.",
    strengths: [
      "Amphibious Mastery: Flawless combat velocity underwater and on land.",
      "Tidal Hydro-Magic: Manipulate oceanic pressure, water shields, and deep freeze spells.",
      "Acoustic Memory: Ability to 'listen' to historical echoes carried across ocean currents."
    ],
    weaknesses: [
      "Surface Mistrust: Deep skepticism toward dry-land politics and imperial treaties.",
      "Pollution Vulnerability: Highly susceptible to chemical runoff and Abyssal ocean blight.",
      "Isolationist Tendency: Frequently retreat into deep trenches when continental wars break out."
    ],
    notableFigures: [
      { name: "Alissa Seinbenz", role: "Tidal Prodigy Mage" }
    ],
    conditionSummary: "Keepers of the world's ancient memories. Because ocean currents carry the residue of all fallen civilizations, the Tide Sages are often the first to register tremors in planetary leylines and abyssal incursions."
  },
  {
    id: "euchronian",
    name: "Euchronians (The Forgotten Cursed)",
    subtitle: "The Immortal Remnant of Cleathari'ah",
    patronGod: "None (Sealed Abyssal Covenant)",
    element: "Abyssal / Void",
    auraColor: "Indigo / Pitch Black",
    homeland: "Ruins of Cleathari'ah (Euchronia Prime)",
    auraBoost: "Immortal Flesh (Eroding Soul)",
    lifespan: "Ageless Immortality (Soul Decay)",
    themeColor: "indigo",
    borderClass: "border-indigo-500/50 hover:border-indigo-500/80",
    badgeClass: "bg-indigo-950/80 text-indigo-200 border-indigo-500/50 shadow-indigo-950/50",
    glowClass: "shadow-indigo-500/20",
    accentBg: "from-indigo-950/40 via-tavern-900 to-tavern-900",
    physicalTraits: "Humanoid figures with deathly pale skin, obsidian-veined hands, and hollow violet or pitch-black irises. Their bodies do not physically age or bleed normal red blood; necrotic ether seeps from deep wounds.",
    culture: "Before the War in Heaven, Euchronia was a golden civilization where all races lived as equals without caste divisions. After their destruction, the non-royal populace was warped into Abyssal monstrosities, while pure-blooded royalty was cursed with agonizing immortality.",
    strengths: [
      "Undying Physiology: Biological immortality; immune to conventional mortal diseases and aging.",
      "Abyssal Resonance: Channel unadulterated void ether that bypasses standard magic barriers.",
      "Lost Gnosis: Possess fragments of forbidden, pre-divine metaphysical formulas."
    ],
    weaknesses: [
      "Soul Erosion: Their consciousness slowly decays over millennia, threatening madness.",
      "Divine Damnation: Holy magic causes severe agonizing burns upon contact.",
      "Absolute Exile: Hunted on sight by the Church of the Seven Gods as abominations."
    ],
    notableFigures: [
      { name: "Reinhart von Exillion", role: "The Last Sovereign" },
      { name: "Velika Cirina", role: "The Pale Oracle" },
      { name: "Ilya Alberich", role: "The Lost Heir" }
    ],
    conditionSummary: "Not a race by biology, but a cursed remnant of a lost golden era. Marked by divine punishment, their very existence serves as living proof that the Seven Gods destroyed a unified mortal world."
  }
];

export const mixedRaceData = [
  {
    name: "Shizuku Kageyuki",
    heritage: "Half-Human, Half-Fox Beastman",
    struggle: "Ostracized within her Shinazuma clan for lacking 'pure' blood, yet feared in human cities for her lethal animal instincts."
  },
  {
    name: "Rei Ardent",
    heritage: "Human (Witch Mother) + Platinum Dragon (Father)",
    struggle: "The Nahobino—a metaphysical convergence never meant to exist, bridging mortal leyline resonance with divine draconic majesty."
  },
  {
    name: "Ilya Alberich (Kaori)",
    heritage: "Pure-Blood Euchronian, Raised by Beastmen",
    struggle: "Trapped between an immortal cursed lineage and a foster clan whose animal honor codes could never fully embrace her darkness."
  }
];

export const racialPrejudices = [
  {
    stereotype: "Humans are ambitious and expansionist.",
    target: "Humans",
    reality: "Largely true; their brief 70-year lifespans compel them toward rapid territorial and technological expansion."
  },
  {
    stereotype: "Elves are aloof and condescending.",
    target: "Elves",
    reality: "Partially true; living 400+ years creates emotional detachment from the fleeting conflicts of mortal neighbors."
  },
  {
    stereotype: "Druids are gentle, passive, and weak.",
    target: "Druids",
    reality: "False; guardians like Vicktor Huthront command lethal rootcraft and poisonous spore storms when groves are violated."
  },
  {
    stereotype: "Beastmen are bloodthirsty savages.",
    target: "Beastmen",
    reality: "False; the Shinazuma Dynasty maintains one of the most sophisticated codes of honor, poetry, and samurai discipline in Myria."
  },
  {
    stereotype: "Dwarves care only for gold and stone.",
    target: "Dwarves",
    reality: "Partially true; their obsession with Maglica mining stems from generational trauma and the need to fortify against breaches."
  },
  {
    stereotype: "Liichtians are untouchable holy saints.",
    target: "Liichtians",
    reality: "A tragic paradox; they are revered as living divine icons while simultaneously living in hiding as a persecuted, dying diaspora."
  },
  {
    stereotype: "Merfolk are secretive and untrustworthy.",
    target: "Merfolk",
    reality: "Partially true; they guard historical ocean memories and intentionally avoid entanglement in dry-land political squabbles."
  }
];

// ==========================================
// 2. THE SEVEN NATIONS & GEOPOLITICS
// ==========================================

export const nationsData = [
  {
    id: "varencia",
    name: "Varencia Empire",
    race: "Human",
    title: "Kingdom of Humanity",
    patronGod: "Valafar, God of Fire",
    element: "Fire",
    capital: "Emerose City",
    ruler: "Emperor / Empress (Reise Fanatio dynasty)",
    government: "Imperial Monarchy",
    military: "Imperial Legions, Knightly Orders, Corps of Battlemages, Aura Imperial Guards (Largest standing army)",
    themeColor: "red",
    badgeClass: "bg-red-950/60 text-red-300 border-red-500/40",
    borderClass: "border-red-500/40 hover:border-red-500/70",
    cultureSummary: "Ambition, innovation, and urgency. Emerose City is a grand cosmopolitan hub of trade, knightly chivalry, and political intrigue.",
    tensions: [
      "Ogusta: Violent border disputes over rich Maglica veins in the Greyfang Hills and Donnavista Mountains.",
      "Seviel: Historical scars from the Human logging incursions near the Cendres Forest.",
      "Internal Strife: Succession crisis following King Urdia's assassination."
    ],
    storyRole: "Starting hub for Avalon. Rei meets Auclair and Grius at the Emerose royal tournament before King Urdia's assassination sets the continent aflame."
  },
  {
    id: "ogusta",
    name: "Ogusta Empire",
    race: "Dwarf",
    title: "Kingdom of the Dwarves",
    patronGod: "Zefraath, God of Earth",
    element: "Earth",
    capital: "Ored City",
    ruler: "Council of Thanes (High Thane in wartime)",
    government: "Council of Thanes",
    military: "Heavy Armoured Infantry, Legendary Siege Engines, The Stonewardens (Impenetrable defense)",
    themeColor: "amber",
    badgeClass: "bg-amber-950/60 text-amber-300 border-amber-500/40",
    borderClass: "border-amber-500/40 hover:border-amber-500/70",
    cultureSummary: "Built on stonecraft, metallurgical engineering, and runic sagas. Subterranean halls lit by forge-fires and glowing Maglica veins.",
    tensions: [
      "Varencia: Contested mining rights in Greyfang Hills.",
      "Iberia: Trade competition over marine Maglica crystal fields.",
      "Eqinada: Deep shaft blasting occasionally damages delicate Druidic root networks."
    ],
    storyRole: "Where Noah Centineo joins Avalon. The first Vault of Oblivion is breached near Ored City, and Dellons' theft of the Rook of Creation begins the race."
  },
  {
    id: "seviel",
    name: "Seviel",
    race: "Elf",
    title: "Kingdom of the Elves",
    patronGod: "Mirinara, Goddess of Wind",
    element: "Wind",
    capital: "Cendres Forest (Tree-cities & Moonlit Glades)",
    ruler: "Sylvan Monarch & The Silver Court",
    government: "Silver Court & Sylvan Monarch",
    military: "Aura Bow Snipers, Sylvan Rangers, Windsong Mages, Awakened Fey Ents",
    themeColor: "emerald",
    badgeClass: "bg-emerald-950/60 text-emerald-300 border-emerald-500/40",
    borderClass: "border-emerald-500/40 hover:border-emerald-500/70",
    cultureSummary: "Ancient, aristocratic, and isolationist. The Silver Court weighs decisions across centuries, valuing celestial harmony, music, and poetry.",
    tensions: [
      "Varencia: Bitter memory of the Silverwood Incident (logging bloodshed).",
      "Eqinada: Overlapping claims to ancient ancestral timberlands.",
      "Court Isolationism: Hardline noble factions refusing contact with mortal realms."
    ],
    storyRole: "The site of Amelia Kusalina's climactic battle at the ruined sylvan amphitheater where her lover fell centuries ago."
  },
  {
    id: "shinazuma",
    name: "Shinazuma Dynasty",
    race: "Half-Animal (Beastman)",
    title: "Kingdom of the Beastmen",
    patronGod: "Rydos, God of Thunder",
    element: "Thunder",
    capital: "Shimotsugi City",
    ruler: "The Shogun & Divine Empress",
    government: "Shogunate + Divine Empress",
    military: "Samurai Blade-Masters, Covert Ninja Operatives, Thunder Warrior-Monks, Archipelago Fleet",
    themeColor: "purple",
    badgeClass: "bg-purple-950/60 text-purple-300 border-purple-500/40",
    borderClass: "border-purple-500/40 hover:border-purple-500/70",
    cultureSummary: "Honor, bushido, thunder reverence, and clan solidarity. Pagoda fortresses surrounded by tranquil rock gardens and stormy sea shoals.",
    tensions: [
      "Iberia: The Coral Straits Crisis—disputed fishing rights and naval boundaries.",
      "Clan Blood Rivalries: Fierce competition between animal houses exploited by outsiders.",
      "Varencia: Trade tariffs and cultural friction."
    ],
    storyRole: "Where Shizuku Kageyuki joins Avalon. The Kageyuki clan's heritage, Ilya's history as Kaori, and the succession of the Blade of Judgement unfold here."
  },
  {
    id: "iberia",
    name: "Iberia Kingdom",
    race: "Merfolk",
    title: "Kingdom of the Merfolk",
    patronGod: "Uphine, Goddess of Water",
    element: "Water",
    capital: "The Iberian Reefs",
    ruler: "Coral Throne Monarch & Tide Sages",
    government: "The Coral Throne (Monarchy advised by Tide Sages)",
    military: "Seahorse & Shark Cavalry, Tidespeakers, Submerged Depth Hunters, Oceanic Pressure Shields",
    themeColor: "cyan",
    badgeClass: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40",
    borderClass: "border-cyan-500/40 hover:border-cyan-500/70",
    cultureSummary: "Amphibious architecture built on stilts and iridescent coral reefs. Tide Sages read the echoes of ancient history carried by ocean currents.",
    tensions: [
      "Shinazuma: Maritime boundary clashes in the Coral Straits.",
      "Ogusta: Competition over underwater crystal mining.",
      "Abyssal Pollution: Necrotic runoff from Cleathari'ah poisoning the Coral Graveyard."
    ],
    storyRole: "Where Alissa Seinbenz joins Avalon. The Sunken Vault of Oblivion is opened, yielding the Bishop of Illusion before Amelia ambushes the party."
  },
  {
    id: "eqinada",
    name: "Eqinada",
    race: "Druid (Half-Plant)",
    title: "Kingdom of the Druids",
    patronGod: "Muna, Goddess of Plant",
    element: "Plant",
    capital: "None (Sacred Groves & Assembly of the Great Oak)",
    ruler: "Circle of Elders (Consensus-based)",
    government: "Circle of Elders",
    military: "Living Forest & Treants, Swarms of Stinging Insects, Green Fey, Shapeshifter Wardens",
    themeColor: "green",
    badgeClass: "bg-green-950/60 text-green-300 border-green-500/40",
    borderClass: "border-green-500/40 hover:border-green-500/70",
    cultureSummary: "Communal, egalitarian, and deeply spiritual. No stone cities exist; life thrives in communion with planetary ley lines and sacred roots.",
    tensions: [
      "Varencia: Logging expeditions threatening sacred groves.",
      "Seviel: Overlapping ancestral claims.",
      "Ogusta: Subterranean mining detonations disrupting root leylines."
    ],
    storyRole: "Where Vicktor Huthront joins Avalon. The Sunken Fens Vault is discovered, and Revali Archibald's tragic trial at Dragonspine takes place."
  },
  {
    id: "diaspora",
    name: "Liichtian Diaspora",
    race: "Liichtian (Angel)",
    title: "The Dying People of Light",
    patronGod: "Hethos, God of Light",
    element: "Light",
    capital: "No homeland (Scattered across Varencia & remote sanctuaries)",
    ruler: "None (Scattered orders & wandering paladins)",
    government: "None (Scattered communities)",
    military: "Sun Paladins, Photonic Healers, Ascendant Saint Guardians",
    themeColor: "yellow",
    badgeClass: "bg-yellow-950/60 text-yellow-200 border-yellow-400/40",
    borderClass: "border-yellow-400/40 hover:border-yellow-400/70",
    cultureSummary: "A dwindling angelic diaspora preserving fragments of ancient hymns, healing arts, and melancholic memories of their lost celestial homeland.",
    tensions: [
      "Hunted by fanatical occultists for their photonic blood.",
      "Near-extinction after the catastrophic Celestian Purge.",
      "Deep ancestral guilt from their weaponized role in the War in Heaven."
    ],
    storyRole: "Represented by Fiore (Alome), Slaine Arlondorn, and Sheliri (before her fall). Their tragic heritage is central to the mystery of the Divine Order."
  },
  {
    id: "euchronia_remnant",
    name: "Ruins of Cleathari'ah",
    race: "Euchronian (Cursed)",
    title: "The Cursed Imperial Remnant",
    patronGod: "None (Sealed Abyssal Covenant)",
    element: "Abyssal / Void",
    capital: "Euchronia Prime (Shattered Subterranean Halls)",
    ruler: "The Fallen Crown (Reinhart von Exillion)",
    government: "The Fallen Crown Remnant",
    military: "Corrupted Magitek Automata, Undying Royal Blades, Abyssal Dreadnoughts",
    themeColor: "indigo",
    badgeClass: "bg-indigo-950/80 text-indigo-200 border-indigo-500/50",
    borderClass: "border-indigo-500/50 hover:border-indigo-500/80",
    cultureSummary: "The immortal royal remnant of a once-unified Magitek empire that challenged heaven, now enduring endless soul erosion and divine damnation.",
    tensions: [
      "Absolute exile by the Church of the Seven Gods.",
      "Eternal war against Celestia to free Azamina from the Abyss."
    ],
    storyRole: "The endgame stage where Avalon descends into the Thirteen Towers of Costlevania to face Dellons, Revali, and The Unknown."
  }
];

export const archonNeutrality = {
  title: "The Neutrality of the Archons",
  subtitle: "Chosen Warriors of the Seven Holy Weapons",
  oath: "The Archons swear a sacred divine oath forbidding them from joining mortal wars. They exist solely to protect all people from existential threats—Abyssal incursions, rogue dragons, and planetary cataclysms.",
  role: "When nations march to war, Archons act as neutral mediators. If diplomacy fails, they stand aside. Rulers who attempt to coerce Archons into battle invite divine retribution, for when Archons fight Archons, innocent worlds burn."
};

export const usurperShadowData = [
  {
    name: "Amelia Kusalina",
    alias: "The Fair Lady / Mind Queen",
    manipulation: "Mind-controlled royal ministers and court nobles in Varencia and Seviel to vote for unnecessary trade embargoes and military mobilizations."
  },
  {
    name: "Revali Archibald",
    alias: "Ghost of the Leaf / Eternal Hunter",
    manipulation: "Sabotaged Dwarven mining shafts and Human logging camps, planting forged insignias to make each empire blame the other."
  },
  {
    name: "Ilya Alberich",
    alias: "The Nightingale / Whispering Blade",
    manipulation: "Fanned clan rivalries in the Shinazuma Dynasty from the shadows, ensuring the Beastman shogunate remained divided and distracted."
  },
  {
    name: "The Unknown",
    alias: "The Grand Puppetmaster",
    manipulation: "Orchestrated targeted Abyss Order strikes against coastal towns to force nations to mobilize armies toward dormant Vaults of Oblivion."
  }
];

// ==========================================
// 3. GEOGRAPHY & CONTINENTS DATASET
// ==========================================

export const continentsData = [
  {
    id: "ardorim",
    name: "Ardorim",
    title: "The Old World",
    tagline: "Cradle of Mortal Civilizations & Imperial Ambitions",
    climate: "Temperate, alpine mountains, dense ancient forests, vast river basins",
    significance: "The most politically complex continent. Hosts the Varencia Empire, the Dwarven Mountain Kingdom, and the sacred Cendres Forest. Early chapters of Avalon's journey and conspiracies against the Usurpers unfold across these lands.",
    themeColor: "amber",
    badgeClass: "bg-amber-950/60 text-amber-300 border-amber-500/40",
    landmarks: [
      { name: "Donnavista Mountains", type: "Colossal Mountain Range", desc: "Runs north-south along Ardorim's eastern edge. Extremely rich in raw minerals and Maglica crystal veins. Ancestral subterranean home of the Dwarves." },
      { name: "Traums Peaks", type: "Jagged Alpine Range", desc: "Forms the northern perimeter of the central plains. Named for the ethereal, dream-like silver mists shrouding their needle summits." },
      { name: "Greyfang Hills", type: "Highland Plateau", desc: "Rolling highlands in central Ardorim, dotted with abandoned iron mines, fortified watchtowers, and bandit hideouts." },
      { name: "The Serrated Wall", type: "Coastal Cliffs", desc: "Sheer coastal cliffs along the western coast, riddled with sea caverns and ancient smuggler coves." },
      { name: "Cendres Forest", type: "Primordial Woodland", desc: "Immense, ancient forest in the west. The living heart of Elven civilization and the Silver Court, pulsing with Fey leyline magic." },
      { name: "Whisperwood", type: "Haunted Forest", desc: "A dark, suffocating woodland near Traums Peaks where auditory leyline echoes mimic the voices of dead travelers." },
      { name: "The Golden Glade", type: "Sacred Grove", desc: "Sun-drenched botanical sanctuary in the north; spiritual sanctuary and assembly grounds for Druidic Circle elders." },
      { name: "Emberwood", type: "Fire-Resilient Forest", desc: "Peculiar eastern timberland adapted to frequent thermal discharges, blooming anew after volcanic ash cycles." },
      { name: "The Argent River", type: "Major Waterway", desc: "The longest and most vital river in Ardorim, transporting commerce and trade from the Donnavista Mountains to the western ocean." },
      { name: "Lake Luminara", type: "Bioluminescent Inland Sea", desc: "Vast northern freshwater lake glowing with gentle blue luminescence at night due to submerged crystal beds; a sacred pilgrimage site." },
      { name: "The Sunken Fens", type: "Miasmic Marshland", desc: "Treacherous southeastern marshlands home to pariah settlements, venomous flora, and forgotten imperial ruins." }
    ]
  },
  {
    id: "uephisia",
    name: "Uephisia",
    title: "The Maritime Realm",
    tagline: "Realm of Turquoise Seas, Volcanic Archipelagos & Clan Honor",
    climate: "Tropical, island archipelagos, lush rainforests, oceanic coral reefs",
    significance: "The oceanic highway connecting the Beastman Shinazuma Dynasty and the Merfolk Iberia Kingdom. Crucial for oceanic navigation, locating the Sunken Vaults of Oblivion, and tracking early Abyss Order incursions.",
    themeColor: "cyan",
    badgeClass: "bg-cyan-950/60 text-cyan-300 border-cyan-500/40",
    landmarks: [
      { name: "The Spine of Uephisia", type: "Rugged Island Chain", desc: "A mountain backbone running the length of the mainland, carpeted in dense rainforest along its seaward slopes." },
      { name: "Mount Raikazan", type: "Sacred Active Volcano", desc: "Highest peak in the archipelago. A colossal active volcanic forge crowned with thunder shrines dedicated to the God Rydos." },
      { name: "The Smoldering Sisters", type: "Volcanic Island Trio", desc: "Three volcanic islands: two inhabited by samurai fishing clans, and one constantly venting superheated ether steam." },
      { name: "The Jade Canopy", type: "Interior Rainforest", desc: "Dense, untamed tropical canopy covering the mainland interior, filled with exotic alchemical reagents and predatory beasts." },
      { name: "Bamboo Sea of Seiran", type: "Giant Bamboo Forest", desc: "Endless grove of towering iron-bamboo in the mountain foothills where ninja clans train in silent vertical combat." },
      { name: "The Celestial Cascade", type: "Mega Waterfall", desc: "Spectacular vertical waterfalls plunging thousands of feet from Mount Raikazan directly into sacred misty calderas." },
      { name: "The Sapphire Expanse", type: "Warm Shallow Ocean", desc: "Vibrant turquoise waters surrounding the archipelago, teeming with marine biodiversity and crystal-clear navigation channels." },
      { name: "The Iberian Reefs", type: "Colossal Coral Barrier", desc: "A massive, iridescent living coral reef system housing the underwater palaces and stilt platforms of the Merfolk." },
      { name: "The Stultifera Sea", type: "Treacherous Northern Waters", desc: "Notorious ocean expanse plagued by sudden squalls, tidal whirlpools, and ghost ship sightings." },
      { name: "The Coral Graveyard", type: "Bleached Reef Trench", desc: "A haunting sector of dead, bleached white coral where early Abyssal necrotic runoff poisoned the marine currents." }
    ]
  },
  {
    id: "cleathariah",
    name: "Cleathari'ah",
    title: "The Dark Continent",
    tagline: "Grave of the Euchronian Empire & Abyssal Wasteland",
    climate: "Cursed ash plains, necrotic blight, perpetual twilight, violent mana disruption",
    significance: "Once a technological paradise that challenged the heavens, now a shattered wasteland. Serves as the climactic staging ground where Avalon confronts Dellons, Revali, and The Unknown amidst the ruins of Euchronia.",
    themeColor: "indigo",
    badgeClass: "bg-indigo-950/80 text-indigo-200 border-indigo-500/50",
    landmarks: [
      { name: "The Thirteen Towers of Costlevania", type: "Magitek Megastructures", desc: "Colossal Magitek fortresses that survived the divine bombardment. Still operational and guarded by corrupted, autonomous Automata." },
      { name: "The Dead Zones", type: "Mana-Void Impact Craters", desc: "Areas where Sunfall missiles detonated during the War in Heaven. Mana is violently fractured, leylines are severed, and the soil is grey ash." },
      { name: "Euchronia Prime (Subterranean Capital)", type: "Ruined Imperial Heart", desc: "A sprawling multi-tiered metropolis of collapsed crystal domes, shattered grand plazas, and creeping Abyssal vines." },
      { name: "The Aerial Spires (Ruined)", type: "Fallen Sky Cities", desc: "Shattered remnants of anti-gravity floating cities that plummeted from the heavens during Celestia's counterstrike." },
      { name: "The Penitent's Trench", type: "Abyssal Fissure", desc: "An unfathomably deep oceanic trench gouged by divine spears, leaking raw Abyssal void energy directly into the seabed." },
      { name: "The Abyssal Ocean", type: "Frigid Black Waters", desc: "Pitch-black, icy waters surrounding Cleathari'ah that devour ambient torchlight and confuse compass navigation." }
    ]
  },
  {
    id: "the_chasm",
    name: "The Chasm",
    title: "The Subterranean Frontier",
    tagline: "The Underworld Labyrinth, Criminal Havens & Ancient Veins",
    climate: "Vast cavern networks, geothermal vents, glowing crystal grottos, subterranean rivers",
    significance: "An immense underworld network beneath Ardorim and Uephisia. Acts as a haven for black markets, dwarven deep-shaft mines, and clandestine forward outposts of the Abyss Order.",
    themeColor: "purple",
    badgeClass: "bg-purple-950/60 text-purple-300 border-purple-500/40",
    landmarks: [
      { name: "Nullshades", type: "Neutral Underworld Sanctuary", desc: "A sprawling settlement built inside a colossal hollow geode. Violence and murder are punishable by instant exile, making it strangely peaceful." },
      { name: "The Dragossuary", type: "Ancient Dragon Graveyard", desc: "A subterranean graveyard of ancient draconic skeletons, haunted by animated skeletal wyrms and void scavengers." },
      { name: "Deep Maglica Veins", type: "Crystalline Fault Lines", desc: "Pristine subterranean crystal canyons where miners risk cave-ins and gas pockets to harvest high-density blue and violet mana crystals." },
      { name: "The Deepflow", type: "Subterranean Torrent", desc: "A roaring underground river network navigating through jagged stalactite canyons directly beneath the Donnavista Mountains." },
      { name: "Abyss Order Staging Outposts", type: "Fortified Redoubts", desc: "Hidden stone garrisons equipped with teleportation circles used by cursed Euchronians to launch surface operations." }
    ]
  }
];

export const globalFeatures = [
  {
    title: "Planetary Ley Lines & Confluences",
    desc: "Rivers of ambient ether flowing through earth, atmosphere, and water. Where two or more leylines cross, a 'Confluence' forms—creating zones of extreme magical potency, accelerated healing, or volatile dimensional rifts."
  },
  {
    title: "Magla Crystals (Solidified Ether)",
    desc: "Crystallized mana harvested from mountain roots and deep fault lines. Used as energy fuel for Magitek machinery, weapon infusion, high-potency potions, and the financial backbone of continental trade."
  },
  {
    title: "The Vaults of Oblivion",
    desc: "Artificial pocket dimensions scattered across space and time to seal away the 7 Gods' Pieces. Their entrance Gates remain dormant until nearby Abyssal corruption or an Awakener forces them to anchor."
  },
  {
    title: "Kritochelo's Temporal Dimension",
    desc: "An isolated sub-reality constructed outside the linear flow of time, designed as an impenetrable prison that holds entities whose existence threatens causality."
  }
];

// ==========================================
// 4. CHRONOLOGICAL TIMELINE & ERAS DATASET
// ==========================================

export const historicalEras = [
  {
    id: "primordial_era",
    name: "The Primordial Era",
    timeline: "Before Linear Time",
    themeColor: "amber",
    headline: "The Fracture of the One Above All & The Spark of Azamina",
    summary: "Before space and light existed, the static One Above All fractured into Dagemis (Observer of Motion/Time) and Dyneas (Weaver of Form/Light). Dyneas wove space and life; Dagemis wove time, growth, and death. From the void between moments emerged Azamina, Goddess of Darkness—not evil, but gentle rest, who endowed mortal creations with the capacity to love and connect.",
    events: [
      "The One Above All fractures into Dyneas and Dagemis.",
      "Azamina emerges from the quiet void and weaves the mortal soul.",
      "Dagemis rebels against creation; the One Above All sacrifices itself to preserve existence, shattering into the Seven Gods' Pieces.",
      "Dyneas creates the Seven Holy Gods (Hethos, Valafar, Uphine, Zefraath, Mirinara, Muna, Rydos) as stewards to guard the Pieces."
    ]
  },
  {
    id: "divine_era",
    name: "The Divine Era & The Great Betrayal",
    timeline: "~10,000+ Years Ago",
    themeColor: "purple",
    headline: "The Sealing of Azamina & Creation of the Abyss",
    summary: "Jealous of mortals' natural love for Azamina's gentle darkness over their rigid elemental dogmas, the Seven Gods lured Azamina to a summit under false pretenses. They struck her down using the Seven Holy Weapons (locks) and sealed her into her own realm. Her gentle Darkness twisted into the screaming, agonizing Abyss. The gods then systematically purged all memory of her from mortal records.",
    events: [
      "The Seven Gods strike down Azamina using the Seven Holy Weapons.",
      "Azamina's gentle darkness mutates into the necrotic, corrupted Abyss.",
      "The Divine Order is instituted: mortals are taught to worship the Seven as sole creators.",
      "The first Abyssal corruption bleeds into the lower strata of the world."
    ]
  },
  {
    id: "skytria_era",
    name: "The Skytria Rebellion & Death's Pact",
    timeline: "~3,000 – 2,200 Years Ago",
    themeColor: "red",
    headline: "The Annihilation of the Northern Knights & Dellons' Ascension",
    summary: "In northern Ardorim, the pious knightly Empire of Skytria flourished under Celestia's banner. On his wedding day, high knight Dellons saw his fiancée and sister assassinated in a political coup while the Gods remained silent. In grief and madness, he slaughtered his own empire in a single night—summoning the Avatar of Death. Defeating Death four times, Dellons was granted a fragment of Death's primordial authority, becoming immortal.",
    events: [
      "Skytria flourishes as a devout northern military power.",
      "Dellons' family assassinated; divine prayers go unanswered.",
      "Dellons annihilates the Skytrian empire in a single night sacrifice.",
      "Dellons defeats the Avatar of Death four times, becoming Death's Immortal Vessel."
    ]
  },
  {
    id: "the_unknown_arrival",
    name: "The Arrival of The Unknown",
    timeline: "~2,000 Years Ago",
    themeColor: "cyan",
    headline: "The Broken Future & The Shattering of Causality",
    summary: "In a ruined future where all companions died and Fiore was slain, the hero Rei Ardent used the King of Time to travel backward. Punished by the Primordial Force of Time for breaking absolute causal law, he was hurled 2,000 years into the ancient past. Stripped of his time-travel ability, his carried Gods' Pieces scattered across the world, entering deep dormancy within the Vaults of Oblivion.",
    events: [
      "Future Rei Ardent loses Avalon and travels backward using the King of Time.",
      "Time's absolute law retaliates, banishing him 2,000 years into the past.",
      "The Gods' Pieces scatter across continents into dormant pocket dimensions.",
      "The entity known as 'The Unknown' begins his long, patient vigil."
    ]
  },
  {
    id: "euchronia_era",
    name: "The Rise of Euchronia & The War in Heaven",
    timeline: "~1,800 – 1,500 Years Ago",
    themeColor: "indigo",
    headline: "The Magitek Zenith, The Divine Genocide & The Cursed Continent",
    summary: "On Cleathari'ah, a godless civilization unified all races through Magitek engineering. When Euchronia challenged Celestia, a catastrophic two-year war erupted on four fronts. Euchronia breached the threshold of heaven and scarred Hethos, but an Abyssal ritual by Scholar Madeleine corrupted the capital. The Gods offered terms of surrender, then brutally broke them—turning citizens into monsters and cursing the royals with soul-eroding immortality.",
    events: [
      "Euchronia unites all mortal races, pioneering Magitek, Airships, and Sunfall missiles.",
      "War in Heaven begins: Euchronian fleets breach Celestia's borders and kill five Archons.",
      "Abyssal breach corrupts Euchronia Prime; Sunfall strikes create Dead Zones.",
      "Gods break surrender terms; Cleathari'ah tainted forever; royal Euchronians cursed with undying soul decay."
    ]
  },
  {
    id: "blank_age",
    name: "The Celestian Purge & The Blank Age",
    timeline: "~800 – 500 Years Ago",
    themeColor: "yellow",
    headline: "Three Centuries of Systematic Erasure & Inquisition",
    summary: "To bury the humiliation of nearly losing to mortals and conceal the truth of Azamina, the Seven Gods conducted the Celestian Purge. Libraries were incinerated, uncooperative scholars slaughtered, and history rewritten. The Liichtian angelic race was reduced to a scattered remnant.",
    events: [
      "The Celestian Purge executes two-thirds of the Liichtian population.",
      "The Blank Age burns all libraries and historical records mentioning Euchronia or Azamina.",
      "The Church of the Seven Gods establishes absolute theological hegemony."
    ]
  },
  {
    id: "usurper_era",
    name: "The Gathering of the Usurpers",
    timeline: "~1,200 Years Ago – Present",
    themeColor: "purple",
    headline: "The Assembly of Broken Titans",
    summary: "The Unknown assembled five broken souls of godlike caliber—Dellons (Death's Vessel), Amelia Kusalina (Mind Queen), Revali Archibald (Eternal Hunter), Sheliri (Witch of End), and Ilya Alberich (The Nightingale)—to seize the reawakening Gods' Pieces and usurp the predetermined fate of the universe.",
    events: [
      "The Unknown recruits Dellons, Amelia, Revali, Sheliri, and Ilya.",
      "The Usurpers operate from the shadows, manipulating imperial wars.",
      "Abyssal spread accelerates across Ardorim and Uephisia, activating dormant Vault Gates."
    ]
  },
  {
    id: "present_day",
    name: "The Present Day — The Four-Faction War",
    timeline: "Year 0 (Current Timeline)",
    themeColor: "amber",
    headline: "The Awakening of Avalon & The Battle for the Pieces",
    summary: "The Vaults of Oblivion have anchored across dungeons. Four factions enter open warfare: Avalon (led by young Rei Ardent), The Usurpers, The Abyss Order, and Celestia.",
    events: [
      "Rei Ardent gathers the companions of Avalon.",
      "The race for the 7 Gods' Pieces begins across Ardorim, Uephisia, and Cleathari'ah.",
      "Young Rei faces the choice: repeat the tragic loop of The Unknown or forge a new destiny."
    ]
  }
];

// ==========================================
// 5. THE 6 FORBIDDEN TRUTHS
// ==========================================

export const forbiddenTruths = [
  {
    number: "I",
    title: "Azamina's Sacred Gift",
    desc: "The mortal soul—the capacity to love, feel, mourn, and connect—was given exclusively by Azamina, Goddess of Darkness. The Seven Gods only formed the physical vessels and elemental constraints."
  },
  {
    number: "II",
    title: "The Original Sin of the Gods",
    desc: "The Seven Gods sealed Azamina not to protect mortals, but out of petty divine jealousy because mortals naturally loved her gentle darkness more than their demanding elemental altars."
  },
  {
    number: "III",
    title: "The Near-Defeat of Heaven",
    desc: "Euchronia came within inches of overthrowing Celestia. Mortal Magitek pierced heaven and wounded the God of Light. The Gods' current paranoia stems from the terror of mortal potential."
  },
  {
    number: "IV",
    title: "The Broken Surrender",
    desc: "The Seven Gods formally offered terms of peace to Euchronia, then immediately broke their divine oath once weapons were lowered—cursing an entire civilization to rot into Abyssal abominations."
  },
  {
    number: "V",
    title: "The Manufactured Blank Age",
    desc: "Three full centuries of mortal history were wiped clean through systematic mass execution and library burnings to erase all evidence of the Gods' atrocities."
  },
  {
    number: "VI",
    title: "The Nahobino's Temporal Loop",
    desc: "The supreme adversary, 'The Unknown', is actually the future self of Rei Ardent, trapped in a 2,000-year causal loop of grief. Young Rei's central struggle is choosing hope over bitter omnipotence."
  }
];
