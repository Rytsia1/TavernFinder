<script setup>
import { ref, computed } from 'vue';
import { 
  BookOpen, 
  Sparkles, 
  Flame, 
  Wind, 
  Leaf, 
  Zap, 
  Mountain, 
  Sun, 
  Droplets, 
  Shield, 
  Wand2, 
  Feather, 
  Sword, 
  Skull, 
  Crown, 
  Search,
  Gem,
  Layers,
  ChevronDown,
  Info
} from 'lucide-vue-next';

// Active Category Tab in Codex
const activeCategory = ref('foundations');
const searchQuery = ref('');

const categories = [
  { id: 'foundations', name: 'Foundations', icon: Gem, count: '3 Lore Entries' },
  { id: 'races', name: 'Races & Auras', icon: Flame, count: '7 Lineages' },
  { id: 'tier_magic', name: 'Tier Magic (MP)', icon: Wand2, count: 'Circles 0 - 9' },
  { id: 'aura_system', name: 'Aura Discipline (TP)', icon: Shield, count: '1 - 10 Stars' },
  { id: 'wild_magic', name: 'Wild Magic & Witches', icon: Feather, count: 'Hexenzirkel' },
  { id: 'awakener', name: 'The Awakener', icon: Sword, count: 'Dual System' },
  { id: 'abyss_gods', name: 'Abyss & Gods’ Pieces', icon: Skull, count: 'Gnosis & 6 Laws' },
];

// Lore Data Sections
const racialMatrix = [
  { race: 'Human', element: 'Fire', aura: 'Crimson / Gold', boost: 'Strength +20%', desc: 'Explosive, volatile physical prowess fueled by inner thermal combustion.' },
  { race: 'Elf', element: 'Wind', aura: 'Silver / Green', boost: 'Speed +20%', desc: 'Near-frictionless atmospheric acceleration and precision projectile vectoring.' },
  { race: 'Druid', element: 'Plant', aura: 'Verdant', boost: 'Endurance +20%', desc: 'Deep biological regeneration, toxic resistance, and unbreakable physical stamina.' },
  { race: 'Half-Animal', element: 'Thunder', aura: 'Violet / Blue', boost: 'Reflexes +20%', desc: 'Lightning-fast neuromuscular impulses allowing reflex dodges on incoming spellcraft.' },
  { race: 'Dwarf', element: 'Earth', aura: 'Bronze / Grey', boost: 'Defense +20%', desc: 'High-density bone structure and kinetic dispersion against concussive trauma.' },
  { race: 'Liichtian', element: 'Light', aura: 'White / Gold', boost: 'Speed & Reflexes +10% each', desc: 'High-frequency photonic radiance elevating both mobility and reaction simultaneously.' },
  { race: 'Merfolk', element: 'Water', aura: 'Blue / Teal', boost: 'Endurance & Defense +10% each', desc: 'Fluid pressure-resistant moisture barriers resilient against both crushing and thermal shock.' }
];

const tierMagicLevels = [
  { circle: 'Circle 0', title: 'Apprentice / Cantrip', desc: 'Ignite kindling, manipulate light, minor telekinesis, cooling beverages.', scale: 'Domestic / Utility' },
  { circle: 'Circle 1', title: 'Adept Practitioner', desc: 'Targeted elemental bolts, barrier glyphs, wind acceleration, water purification.', scale: 'Guild Combat' },
  { circle: 'Circle 2', title: 'Mage Specialist', desc: 'Dense geometric wards, firestorm lances, earth tremors, tactical cloaking.', scale: 'Skirmish Unit' },
  { circle: 'Circle 3', title: 'High Mage', desc: 'Fortress-breaching artillery, localized weather control, heavy kinetic barriers.', scale: 'Battlefield Scale' },
  { circle: 'Circle 4', title: 'Grand Magus', desc: 'Mountain-shattering shockwaves, wide-area spatial freeze, summon minor elementals.', scale: 'Siege War' },
  { circle: 'Circle 5', title: 'Archmage', desc: 'Regional climate manipulation, permanent transmutations, portal weaving.', scale: 'Provincial Scale' },
  { circle: 'Circle 6', title: 'Sovereign Magus', desc: 'Sundering city walls, opening stabilized planar portals, gravity manipulation.', scale: 'Kingdom Threat' },
  { circle: 'Circle 7', title: 'Cataclysmic Mage', desc: 'Erupting dormant volcanoes, altering continental leylines, celestial calling.', scale: 'Continental Scale' },
  { circle: 'Circle 8', title: 'Gnosis Ascendant', desc: 'Rewriting biological laws, permanent pocket dimension creation, temporal distortion.', scale: 'Planetary Event' },
  { circle: 'Circle 9', title: 'Transcendent Sovereign', desc: 'Mythic pinnacle of structured divine spellcraft. Bends fundamental metaphysical reality.', scale: 'Divine Scale' }
];

const auraStarsLadder = [
  { stars: '1-Star', title: 'Faint Ember', desc: 'Internal ether coating muscles. Enhanced bone density and slightly superhuman strength.', tier: 'Common Soldier' },
  { stars: '2-Star', title: 'Steady Glow', desc: 'Visible luminous sheen across armor and weapons. Kinetic shockwave dispersal on strike.', tier: 'Elite Veteran' },
  { stars: '3-Star', title: 'Bright Crest', desc: 'Blinding physical aura. Skin repels ordinary iron weapons; instantaneous burst dashing.', tier: 'Superhuman Hero' },
  { stars: '4-Star', title: 'Blazing Sovereign', desc: 'Crushing ambient pressure. Able to bisect siege engines and stone ramparts with bare fists.', tier: 'Imperial General' },
  { stars: '5-Star', title: 'Calamity Vanguard', desc: 'Aura takes solid kinetic form, creating phantom elemental weaponry and impenetrable armor.', tier: 'Realm Champion' },
  { stars: '6-Star to 8-Star', title: 'Grand Warlord', desc: 'Aura shears through high-tier spell circles effortlessly. Footsteps leave scorched chasms.', tier: 'Continental Scourge' },
  { stars: '9-Star & 10-Star', title: 'God-Slayer / Mythic', desc: 'Ultimate martial transcendence. The sheer pressure of their aura extinguishes lower-tier magic.', tier: 'Legendary' }
];

const hexenzirkelCoven = [
  { color: 'Verdant', title: 'Green Witch', domain: 'Bio-catalysis, spore rot, rapid botanical growth, and cellular rejuvenation.' },
  { color: 'Crimson', title: 'Red Witch', domain: 'Blood ether boiling, thermokinetic surges, combustion, and rage curses.' },
  { color: 'Silver-White', title: 'White Witch', domain: 'Atmospheric pressure, sensory phantoms, ghost-whispering, and memory fog.' },
  { color: 'Obsidian', title: 'Obsidian Witch', domain: 'Leyline consumption, spatial necrosis, silent hexes, and shadow binding.' },
  { color: 'Violet', title: 'Violet Witch', domain: 'Nervous system destabilization, bio-electric discharge, and kinetic seizure.' },
  { color: 'Azure', title: 'Azure Witch', domain: 'Tidal resonance, cryogenic deep freeze, and atmospheric moisture withdrawal.' }
];
</script>

<template>
  <div class="w-full max-w-5xl mx-auto space-y-8 animate-fadeIn">
    <!-- Codex Header Banner -->
    <div class="p-6 sm:p-8 rounded-2xl fantasy-card bg-gradient-to-r from-tavern-900 via-purple-950/40 to-tavern-900 border border-purple-500/30 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-3">
            <BookOpen class="w-3.5 h-3.5" />
            Metaphysical Compendium
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-cinzel text-amber-100 tracking-wide">
            Codex of the World of Myria
          </h2>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed font-sans">
            The canonical encyclopedia of ether, divine tier magic, martial aura stars, Hexenzirkel covens, Awakeners, and the encroaching Abyssal corruption.
          </p>
        </div>
      </div>
    </div>

    <!-- Category Pill Selector -->
    <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
      <button
        v-for="cat in categories"
        :key="cat.id"
        type="button"
        @click="activeCategory = cat.id"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shrink-0 border select-none"
        :class="activeCategory === cat.id 
          ? 'bg-purple-950/80 text-purple-200 border-purple-500/60 shadow-lg shadow-purple-950/50' 
          : 'bg-tavern-900/80 text-slate-400 border-tavern-border hover:bg-tavern-850 hover:text-slate-200'"
      >
        <component :is="cat.icon" class="w-4 h-4" :class="activeCategory === cat.id ? 'text-purple-400' : 'text-slate-500'" />
        <span>{{ cat.name }}</span>
      </button>
    </div>

    <!-- TAB 1: FOUNDATIONS (Mana, Leylines, Maglica) -->
    <div v-if="activeCategory === 'foundations'" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <!-- Mana -->
        <div class="p-6 rounded-2xl bg-tavern-900/90 border border-tavern-border hover:border-amber-500/40 transition-colors">
          <div class="flex items-center gap-2.5 text-amber-400 font-cinzel font-bold text-lg mb-2">
            <Sparkles class="w-5 h-5 text-amber-400" />
            Ether & Mana (MP)
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            The ambient lifeblood of reality. Atmospheric ether is shaped through structured geometric spell circles into <strong>Tier Magic</strong>, consuming internal Mana Points (MP).
          </p>
        </div>

        <!-- Ley Lines -->
        <div class="p-6 rounded-2xl bg-tavern-900/90 border border-tavern-border hover:border-purple-500/40 transition-colors">
          <div class="flex items-center gap-2.5 text-purple-300 font-cinzel font-bold text-lg mb-2">
            <Feather class="w-5 h-5 text-purple-400" />
            Planetary Ley Lines
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Unconscious planetary veins coursing beneath the earth. Tapped directly by <strong>Hexenzirkel Witches</strong> to fuel Wild Magic without geometric circles or divine blessing.
          </p>
        </div>

        <!-- Maglica -->
        <div class="p-6 rounded-2xl bg-tavern-900/90 border border-tavern-border hover:border-cyan-500/40 transition-colors">
          <div class="flex items-center gap-2.5 text-cyan-300 font-cinzel font-bold text-lg mb-2">
            <Gem class="w-5 h-5 text-cyan-400" />
            Maglica Crystals
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Petrified ether minerals formed over centuries in subterranean pressure faults. Essential for crafting mana batteries, aura blade-edges, and illicit alchemical boosters.
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 2: RACES & AURA AFFINITIES -->
    <div v-if="activeCategory === 'races'" class="space-y-6">
      <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border flex items-center gap-3 text-xs sm:text-sm text-amber-200">
        <Info class="w-5 h-5 text-amber-400 shrink-0" />
        <span>Every sentient race in Myria carries an innate elemental affinity that dictates their natural aura coloration and baseline attribute multiplier.</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="r in racialMatrix" 
          :key="r.race"
          class="p-5 rounded-2xl bg-tavern-900/90 border border-tavern-border hover:border-amber-500/40 transition-all flex flex-col justify-between"
        >
          <div>
            <div class="flex items-center justify-between mb-2">
              <span class="text-lg font-bold font-cinzel text-amber-100">{{ r.race }}</span>
              <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-tavern-800 text-amber-300 border border-amber-500/20">
                {{ r.boost }}
              </span>
            </div>
            <div class="flex items-center gap-2 text-xs font-mono text-slate-400 mb-3">
              <span class="text-purple-300 font-medium">Element: {{ r.element }}</span>
              <span>•</span>
              <span class="text-amber-300/80">Aura: {{ r.aura }}</span>
            </div>
            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {{ r.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 3: TIER MAGIC (Circles 0 - 9) -->
    <div v-if="activeCategory === 'tier_magic'" class="space-y-6">
      <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border flex items-center gap-3 text-xs sm:text-sm text-sky-200">
        <Wand2 class="w-5 h-5 text-sky-400 shrink-0" />
        <span>Tier Magic is the academic divine system. Spellcraft scales across structured Circles from domestic cantrips to reality-shattering sovereign spells.</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="t in tierMagicLevels" 
          :key="t.circle"
          class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/80 hover:border-sky-500/40 transition-colors"
        >
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-bold font-cinzel text-sky-300">{{ t.circle }}: {{ t.title }}</span>
            <span class="text-xs font-mono text-slate-400 bg-tavern-800 px-2 py-0.5 rounded border border-tavern-border">{{ t.scale }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ t.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 4: AURA SYSTEM (1 - 10 Stars) -->
    <div v-if="activeCategory === 'aura_system'" class="space-y-6">
      <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border flex items-center gap-3 text-xs sm:text-sm text-amber-200">
        <Shield class="w-5 h-5 text-amber-400 shrink-0" />
        <span>Aura is the martial discipline of internal ether manipulation, fueled by Tension/Technique Points (TP) to reinforce flesh, speed, and kinetic force.</span>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div 
          v-for="a in auraStarsLadder" 
          :key="a.stars"
          class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/80 hover:border-amber-500/40 transition-colors"
        >
          <div class="flex items-center justify-between mb-1.5">
            <span class="text-sm font-bold font-cinzel text-amber-300">{{ a.stars }} — {{ a.title }}</span>
            <span class="text-xs font-mono text-slate-400 bg-tavern-800 px-2 py-0.5 rounded border border-tavern-border">{{ a.tier }}</span>
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ a.desc }}
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 5: WILD MAGIC & WITCHES -->
    <div v-if="activeCategory === 'wild_magic'" class="space-y-6">
      <div class="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-rose-200">
        <div class="flex items-center gap-2 font-cinzel font-bold text-base mb-1">
          <Feather class="w-5 h-5 text-rose-400" />
          The Hexenzirkel Rule (Female Only)
        </div>
        <p class="text-xs sm:text-sm leading-relaxed text-slate-300">
          Wild Magic draws directly from the raw planetary pulse of leylines. True Witches are strictly <strong>Female Only</strong>, carrying immense natural mana reserves categorized by Hexenzirkel color titles.
        </p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          v-for="h in hexenzirkelCoven" 
          :key="h.color"
          class="p-4 rounded-xl bg-tavern-900/90 border border-tavern-border hover:border-rose-500/40 transition-colors"
        >
          <div class="text-sm font-bold font-cinzel text-amber-200 mb-1">
            {{ h.title }} ({{ h.color }})
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {{ h.domain }}
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 6: THE AWAKENER -->
    <div v-if="activeCategory === 'awakener'" class="space-y-6">
      <div class="p-6 rounded-2xl bg-sky-950/30 border border-sky-500/30 text-sky-200 space-y-4">
        <div class="flex items-center gap-2 font-cinzel font-bold text-lg text-sky-300">
          <Sword class="w-5 h-5 text-sky-400" />
          The Awakener Phenomenon (Male Only)
        </div>
        <p class="text-xs sm:text-sm leading-relaxed text-slate-300">
          Awakeners are rare combat prodigies capable of wielding both <strong>Aura Stars (TP)</strong> and <strong>Tier Magic (MP)</strong> simultaneously in live combat.
        </p>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border">
            <span class="text-xs font-semibold uppercase tracking-wider text-amber-400">Combative Synergy</span>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">
              Coat weapons with 2-Star+ Aura while launching instantaneous Tier 1 or Tier 2 projectile spells from the off-hand.
            </p>
          </div>

          <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border">
            <span class="text-xs font-semibold uppercase tracking-wider text-rose-400">The Dual Penalty</span>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">
              Active physical Aura circulation disrupts subtle ether circuits, inflicting a mandatory <strong>20% MP cost penalty</strong> on all spells cast while Aura is manifested.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 7: ABYSS & SEVEN GODS' PIECES -->
    <div v-if="activeCategory === 'abyss_gods'" class="space-y-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Abyssal Corruption -->
        <div class="p-6 rounded-2xl bg-tavern-900/90 border border-red-500/30 hover:border-red-500/60 transition-colors">
          <div class="flex items-center gap-2.5 text-red-400 font-cinzel font-bold text-lg mb-2">
            <Skull class="w-5 h-5 text-red-400" />
            Azamina's Abyssal Corruption
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3">
            Beyond the northern perimeter lies the Abyss. Corrupted Magla dust infects the blood of survivors, granting erratic surges of necrotic strength while slowly calcifying the host's organs.
          </p>
          <span class="inline-flex items-center gap-1 text-xs font-mono text-red-300 bg-red-950/60 px-2 py-1 rounded border border-red-500/20">
            6 Primordial Living Laws
          </span>
        </div>

        <!-- Gods' Pieces / Gnosis -->
        <div class="p-6 rounded-2xl bg-tavern-900/90 border border-amber-500/30 hover:border-amber-500/60 transition-colors">
          <div class="flex items-center gap-2.5 text-amber-300 font-cinzel font-bold text-lg mb-2">
            <Crown class="w-5 h-5 text-amber-400" />
            The 7 Gods' Pieces (Gnosis)
          </div>
          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans mb-3">
            Sacred primordial shards scattered across Myria during the Divine Cleaving. Rumored to unlock Circle 10 magic and grant sovereign mastery over all elemental frequencies.
          </p>
          <span class="inline-flex items-center gap-1 text-xs font-mono text-amber-300 bg-amber-950/60 px-2 py-1 rounded border border-amber-500/20">
            Seven Sacred Divine Artifacts
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
