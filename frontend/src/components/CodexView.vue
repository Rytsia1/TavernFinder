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
  Info,
  Heart,
  Users,
  Compass,
  Scroll,
  HelpCircle,
  Clock,
  MapPin,
  CheckCircle2,
  AlertOctagon,
  Globe,
  Hourglass,
  Calendar,
  EyeOff,
  Navigation,
  FileText,
  Anchor,
  Radio,
  Landmark,
  ShieldAlert,
  FlameKindling,
  Crosshair,
  UserCheck
} from 'lucide-vue-next';

import { 
  racesData, 
  mixedRaceData, 
  racialPrejudices, 
  nationsData,
  archonNeutrality,
  usurperShadowData,
  continentsData, 
  globalFeatures, 
  historicalEras, 
  forbiddenTruths 
} from '../data/codexData.js';

// Top-Level Codex Section Tab
const mainSection = ref('nations'); // 'nations' | 'races' | 'geography' | 'chronicles' | 'power_system' | 'abyss_gnosis'

// ==========================================
// 1. NATIONS STATE
// ==========================================
const selectedNationId = ref('varencia');
const activeNation = computed(() => {
  return nationsData.find(n => n.id === selectedNationId.value) || nationsData[0];
});

const nationSearch = ref('');
const filteredNations = computed(() => {
  if (!nationSearch.value.trim()) return nationsData;
  const q = nationSearch.value.toLowerCase().trim();
  return nationsData.filter(n => 
    n.name.toLowerCase().includes(q) || 
    n.race.toLowerCase().includes(q) || 
    n.capital.toLowerCase().includes(q) ||
    n.patronGod.toLowerCase().includes(q) ||
    n.element.toLowerCase().includes(q)
  );
});

// ==========================================
// 2. RACES STATE
// ==========================================
const selectedRaceId = ref('human');
const activeRace = computed(() => {
  return racesData.find(r => r.id === selectedRaceId.value) || racesData[0];
});

const raceSearch = ref('');
const filteredRaces = computed(() => {
  if (!raceSearch.value.trim()) return racesData;
  const q = raceSearch.value.toLowerCase().trim();
  return racesData.filter(r => 
    r.name.toLowerCase().includes(q) || 
    r.element.toLowerCase().includes(q) || 
    r.homeland.toLowerCase().includes(q) ||
    r.patronGod.toLowerCase().includes(q)
  );
});

// Helper for Race & Element Icons
function getRaceIcon(raceId) {
  switch (raceId) {
    case 'human': return Flame;
    case 'elf': return Wind;
    case 'druid': return Leaf;
    case 'half_animal': return Zap;
    case 'dwarf': return Mountain;
    case 'liichtian': return Sun;
    case 'merfolk': return Droplets;
    case 'euchronian': return Skull;
    default: return Sparkles;
  }
}

// ==========================================
// 3. GEOGRAPHY STATE
// ==========================================
const selectedContinentId = ref('ardorim');
const activeContinent = computed(() => {
  return continentsData.find(c => c.id === selectedContinentId.value) || continentsData[0];
});

const landmarkSearch = ref('');
const filteredLandmarks = computed(() => {
  if (!landmarkSearch.value.trim()) return activeContinent.value.landmarks;
  const q = landmarkSearch.value.toLowerCase().trim();
  return activeContinent.value.landmarks.filter(l => 
    l.name.toLowerCase().includes(q) || 
    l.type.toLowerCase().includes(q) || 
    l.desc.toLowerCase().includes(q)
  );
});

// ==========================================
// 4. POWER SYSTEM DATA
// ==========================================
const powerCategory = ref('tier_magic');

const tierMagicLevels = [
  { circle: 'Circle 0', title: 'Apprentice / Cantrip', desc: 'Ignite kindling, spark light, minor telekinesis, cooling beverages.', scale: 'Domestic / Utility' },
  { circle: 'Circle 1', title: 'Adept Practitioner', desc: 'Targeted elemental bolts, barrier glyphs, wind acceleration, water purification.', scale: 'Guild Combat' },
  { circle: 'Circle 2', title: 'Mage Specialist', desc: 'Dense geometric wards, firestorm lances, earth tremors, tactical cloaking.', scale: 'Skirmish Unit' },
  { circle: 'Circle 3', title: 'High Mage', desc: 'Fortress-breaching artillery, localized weather control, heavy kinetic barriers.', scale: 'Battlefield Scale' },
  { circle: 'Circle 4', title: 'Grand Magus', desc: 'Mountain-shattering shockwaves, wide-area spatial freeze, summon elemental avatars.', scale: 'Siege War' },
  { circle: 'Circle 5', title: 'Archmage', desc: 'Regional climate manipulation, permanent transmutations, localized portal weaving.', scale: 'Provincial Scale' },
  { circle: 'Circle 6', title: 'Sovereign Magus', desc: 'Sundering mountain passes, stabilized dimensional gates, anti-gravity manipulation.', scale: 'Kingdom Threat' },
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
  <div class="w-full max-w-5xl mx-auto space-y-8 animate-fadeIn text-slate-200">
    <!-- Header Banner -->
    <div class="p-6 sm:p-8 rounded-2xl fantasy-card bg-gradient-to-r from-tavern-900 via-purple-950/40 to-tavern-900 border border-purple-500/30 shadow-2xl relative overflow-hidden">
      <div class="absolute -right-10 -bottom-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
      
      <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40 mb-3">
            <BookOpen class="w-3.5 h-3.5" />
            Interactive World Compendium
          </div>
          <h2 class="text-3xl sm:text-4xl font-bold font-cinzel text-amber-100 tracking-wide">
            Codex of the World of Myria
          </h2>
          <p class="text-sm sm:text-base text-slate-300 max-w-2xl mt-2 leading-relaxed font-sans">
            The canonical archives detailing the Seven Sovereign Nations, Elemental Lineages, Continents & Oceans, Epochal Chronicles, and the Metaphysical Laws of Ether.
          </p>
        </div>
      </div>
    </div>

    <!-- Main Navigation Bar -->
    <nav aria-label="Codex Sections" class="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-tavern-900/90 border border-tavern-border shadow-lg">
      <button
        type="button"
        @click="mainSection = 'nations'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'nations' 
          ? 'bg-gradient-to-r from-amber-600/30 to-amber-700/20 text-amber-200 border border-amber-500/50 shadow-md shadow-amber-950/40' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Landmark class="w-4 h-4 text-amber-400" />
        <span>🏛️ Nations & Geopolitics</span>
      </button>

      <button
        type="button"
        @click="mainSection = 'races'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'races' 
          ? 'bg-gradient-to-r from-purple-600/30 to-purple-700/20 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Crown class="w-4 h-4 text-purple-400" />
        <span>👑 Races & Bloodlines</span>
      </button>

      <button
        type="button"
        @click="mainSection = 'geography'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'geography' 
          ? 'bg-gradient-to-r from-cyan-600/30 to-cyan-700/20 text-cyan-200 border border-cyan-500/50 shadow-md shadow-cyan-950/40' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Globe class="w-4 h-4 text-cyan-400" />
        <span>🗺️ Continents & Geography</span>
      </button>

      <button
        type="button"
        @click="mainSection = 'chronicles'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'chronicles' 
          ? 'bg-gradient-to-r from-amber-600/30 to-purple-700/20 text-amber-200 border border-purple-500/50 shadow-md' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Hourglass class="w-4 h-4 text-purple-400" />
        <span>⏳ Chronicles & Eras</span>
      </button>

      <button
        type="button"
        @click="mainSection = 'power_system'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'power_system' 
          ? 'bg-purple-950/70 text-purple-200 border border-purple-500/50 shadow-md shadow-purple-950/40' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Wand2 class="w-4 h-4 text-purple-400" />
        <span>⚡ Power System</span>
      </button>

      <button
        type="button"
        @click="mainSection = 'abyss_gnosis'"
        class="flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
        :class="mainSection === 'abyss_gnosis' 
          ? 'bg-red-950/70 text-red-200 border border-red-500/50 shadow-md shadow-red-950/40' 
          : 'text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
      >
        <Skull class="w-4 h-4 text-red-400" />
        <span>♟️ Abyss & Gods’ Pieces</span>
      </button>
    </nav>

    <!-- ================================================================= -->
    <!-- SECTION 1: THE SEVEN NATIONS & GEOPOLITICS (New Primary Dossier)  -->
    <!-- ================================================================= -->
    <div v-if="mainSection === 'nations'" class="space-y-10 animate-fadeIn">
      
      <!-- Interactive Nation Selector Grid -->
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold font-cinzel text-amber-100 flex items-center gap-2">
            <Landmark class="w-5 h-5 text-amber-400" />
            Sovereignties & Realms of Myria
          </h3>
          <span class="text-xs text-slate-400">Select a nation to view geopolitical dossier</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            v-for="nat in nationsData"
            :key="nat.id"
            type="button"
            @click="selectedNationId = nat.id"
            class="flex flex-col items-center p-3.5 rounded-xl border text-center transition-all duration-300 relative group"
            :class="selectedNationId === nat.id 
              ? `${nat.badgeClass} ring-2 ring-amber-500/30 scale-[1.02] shadow-lg` 
              : 'bg-tavern-900/70 border-tavern-border text-slate-400 hover:text-slate-200 hover:bg-tavern-850/80'"
          >
            <component :is="getRaceIcon(nat.race.toLowerCase().replace(' ', '_').replace(/[\(\)-]/g, '').replace('halfplant', '').trim())" class="w-6 h-6 mb-1.5 transition-transform group-hover:scale-110" />
            <span class="font-cinzel font-bold text-xs sm:text-sm tracking-wide">{{ nat.name }}</span>
            <span class="text-[11px] opacity-75 font-mono">{{ nat.capital.split('(')[0].trim() }}</span>
          </button>
        </div>
      </section>

      <!-- Active Selected Nation Detailed Dossier -->
      <section class="rounded-2xl fantasy-card border overflow-hidden transition-all duration-300" :class="activeNation.borderClass">
        <div class="p-6 sm:p-8 bg-gradient-to-r from-tavern-900 via-tavern-850 to-tavern-900 border-b border-tavern-border/80">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2.5 mb-2 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider" :class="activeNation.badgeClass">
                  {{ activeNation.element }} • {{ activeNation.race }}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-tavern-800 text-amber-300 border border-amber-500/30">
                  {{ activeNation.government }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold font-cinzel text-amber-100">
                {{ activeNation.name }}
              </h3>
              <p class="text-xs sm:text-sm font-medium text-amber-400/90 tracking-wide mt-0.5 italic">
                {{ activeNation.title }}
              </p>
            </div>

            <!-- Quick Specs Box -->
            <div class="bg-tavern-950/70 p-3.5 rounded-xl border border-tavern-border/70 text-xs space-y-1.5 shrink-0">
              <div class="flex items-center gap-2">
                <Crown class="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span class="text-slate-400">Patron:</span>
                <span class="font-medium text-amber-200">{{ activeNation.patronGod }}</span>
              </div>
              <div class="flex items-center gap-2">
                <MapPin class="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span class="text-slate-400">Capital:</span>
                <span class="font-medium text-slate-200">{{ activeNation.capital }}</span>
              </div>
              <div class="flex items-center gap-2">
                <UserCheck class="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span class="text-slate-400">Ruler:</span>
                <span class="font-medium text-slate-200">{{ activeNation.ruler }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <!-- Culture & Military -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/60">
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <Sparkles class="w-3.5 h-3.5" />
                Culture & Society
              </span>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ activeNation.cultureSummary }}
              </p>
            </div>

            <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/60">
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <Shield class="w-3.5 h-3.5" />
                Military Strength & Defense
              </span>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ activeNation.military }}
              </p>
            </div>
          </div>

          <!-- Geopolitical Tensions -->
          <div class="p-4 rounded-xl bg-tavern-900/60 border border-rose-500/20">
            <span class="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
              <AlertOctagon class="w-3.5 h-3.5" />
              Key Geopolitical Tensions
            </span>
            <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li v-for="(tension, idx) in activeNation.tensions" :key="idx" class="flex items-start gap-2">
                <span class="text-rose-400 mt-1">•</span>
                <span>{{ tension }}</span>
              </li>
            </ul>
          </div>

          <!-- Role in the Story -->
          <div class="p-4 rounded-xl bg-tavern-950/70 border border-tavern-border text-xs sm:text-sm">
            <span class="text-xs font-semibold uppercase tracking-wider text-purple-300 flex items-center gap-1.5 mb-2">
              <Scroll class="w-3.5 h-3.5 text-purple-400" />
              Role in the Chronicles of Avalon
            </span>
            <p class="text-slate-300 leading-relaxed font-sans">
              {{ activeNation.storyRole }}
            </p>
          </div>
        </div>
      </section>

      <!-- Nations Comparison Matrix Table -->
      <section class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h3 class="text-lg font-bold font-cinzel text-amber-100 flex items-center gap-2">
            <Scroll class="w-4 h-4 text-amber-400" />
            Sovereignty Comparison Matrix
          </h3>
          <div class="relative w-full sm:w-64">
            <Search class="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              v-model="nationSearch"
              type="text"
              placeholder="Search nations, races, gods..."
              class="w-full bg-tavern-900 border border-tavern-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        <div class="overflow-x-auto rounded-xl border border-tavern-border bg-tavern-900/80 shadow-xl">
          <table class="w-full text-left text-xs sm:text-sm">
            <thead class="bg-tavern-950/80 text-slate-400 uppercase font-cinzel tracking-wider text-[11px] border-b border-tavern-border">
              <tr>
                <th class="py-3 px-4">Nation</th>
                <th class="py-3 px-4">Dominant Race</th>
                <th class="py-3 px-4">Patron God</th>
                <th class="py-3 px-4">Capital</th>
                <th class="py-3 px-4">Government</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-tavern-border/50 text-slate-300 font-sans">
              <tr 
                v-for="n in filteredNations" 
                :key="n.id"
                @click="selectedNationId = n.id"
                class="hover:bg-tavern-850/80 cursor-pointer transition-colors"
                :class="selectedNationId === n.id ? 'bg-amber-500/10' : ''"
              >
                <td class="py-3 px-4 font-bold text-amber-200 font-cinzel flex items-center gap-2">
                  <Landmark class="w-4 h-4 shrink-0 text-amber-400" />
                  {{ n.name }}
                </td>
                <td class="py-3 px-4">{{ n.race }}</td>
                <td class="py-3 px-4 font-medium">{{ n.patronGod.split(',')[0] }}</td>
                <td class="py-3 px-4 text-slate-300 font-mono text-xs">{{ n.capital.split('(')[0].trim() }}</td>
                <td class="py-3 px-4 text-xs text-slate-400">{{ n.government }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- The Neutrality of the Archons -->
      <section class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-950/30 via-tavern-900 to-tavern-950 border border-amber-500/40 shadow-2xl relative overflow-hidden space-y-4">
        <div class="flex items-center gap-2 text-amber-300 font-cinzel font-bold text-lg">
          <ShieldAlert class="w-5 h-5 text-amber-400" />
          {{ archonNeutrality.title }}
        </div>
        <p class="text-xs font-semibold text-amber-400/90 tracking-wide uppercase font-mono">
          {{ archonNeutrality.subtitle }}
        </p>

        <blockquote class="p-4 rounded-xl bg-tavern-950/80 border-l-4 border-amber-500 text-xs sm:text-sm italic text-amber-100 font-serif leading-relaxed">
          "{{ archonNeutrality.oath }}"
        </blockquote>

        <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          {{ archonNeutrality.role }}
        </p>
      </section>

      <!-- The Shadow of The Usurpers (Geopolitical Conspiracies) -->
      <section class="space-y-4">
        <div class="flex items-center gap-2 text-purple-300 font-cinzel font-bold text-lg">
          <EyeOff class="w-5 h-5 text-purple-400" />
          The Shadow of The Usurpers across the Seven Nations
        </div>
        <p class="text-xs text-slate-400">
          Behind every border dispute, trade embargo, and succession crisis lies a hidden hand manipulating world leaders.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="u in usurperShadowData" 
            :key="u.name"
            class="p-4 rounded-xl bg-tavern-900/90 border border-purple-500/20 hover:border-purple-500/50 transition-colors"
          >
            <div class="flex items-center justify-between mb-1">
              <span class="font-cinzel font-bold text-sm text-amber-200">{{ u.name }}</span>
              <span class="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-500/30">{{ u.alias }}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed mt-2 font-sans">
              {{ u.manipulation }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 2: RACES & BLOODLINES                                    -->
    <!-- ================================================================= -->
    <div v-else-if="mainSection === 'races'" class="space-y-10 animate-fadeIn">
      
      <section class="space-y-4">
        <div class="flex items-center justify-between">
          <h3 class="text-xl font-bold font-cinzel text-amber-100 flex items-center gap-2">
            <Users class="w-5 h-5 text-amber-400" />
            The Lineages & Bloodlines
          </h3>
          <span class="text-xs text-slate-400">Select a lineage to inspect dossier</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <button
            v-for="race in racesData"
            :key="race.id"
            type="button"
            @click="selectedRaceId = race.id"
            class="flex flex-col items-center p-3.5 rounded-xl border text-center transition-all duration-300 relative group"
            :class="selectedRaceId === race.id 
              ? `${race.badgeClass} ring-2 ring-amber-500/30 scale-[1.02] shadow-lg` 
              : 'bg-tavern-900/70 border-tavern-border text-slate-400 hover:text-slate-200 hover:bg-tavern-850/80'"
          >
            <component :is="getRaceIcon(race.id)" class="w-6 h-6 mb-1.5 transition-transform group-hover:scale-110" />
            <span class="font-cinzel font-bold text-xs sm:text-sm tracking-wide">{{ race.name }}</span>
            <span class="text-[11px] opacity-75 font-mono">{{ race.element }}</span>
          </button>
        </div>
      </section>

      <!-- Active Selected Race Detailed Dossier -->
      <section class="rounded-2xl fantasy-card border overflow-hidden transition-all duration-300" :class="activeRace.borderClass">
        <div class="p-6 sm:p-8 bg-gradient-to-r border-b border-tavern-border/80" :class="activeRace.accentBg">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div class="flex items-center gap-2.5 mb-2 flex-wrap">
                <span class="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider" :class="activeRace.badgeClass">
                  <component :is="getRaceIcon(activeRace.id)" class="w-3.5 h-3.5" />
                  {{ activeRace.element }} Affinity
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-mono bg-tavern-800 text-amber-300 border border-amber-500/30">
                  {{ activeRace.auraBoost }}
                </span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold font-cinzel text-amber-100">
                {{ activeRace.name }}
              </h3>
              <p class="text-xs sm:text-sm font-medium text-amber-400/90 tracking-wide mt-0.5 italic">
                {{ activeRace.subtitle }}
              </p>
            </div>

            <div class="bg-tavern-950/60 p-3.5 rounded-xl border border-tavern-border/70 text-xs space-y-1.5 shrink-0">
              <div class="flex items-center gap-2">
                <Crown class="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span class="text-slate-400">Patron:</span>
                <span class="font-medium text-amber-200">{{ activeRace.patronGod }}</span>
              </div>
              <div class="flex items-center gap-2">
                <MapPin class="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span class="text-slate-400">Homeland:</span>
                <span class="font-medium text-slate-200">{{ activeRace.homeland }}</span>
              </div>
              <div class="flex items-center gap-2">
                <Clock class="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span class="text-slate-400">Lifespan:</span>
                <span class="font-medium text-slate-200">{{ activeRace.lifespan }}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="p-6 sm:p-8 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/60">
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <Sparkles class="w-3.5 h-3.5" />
                Physical Characteristics
              </span>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ activeRace.physicalTraits }}
              </p>
            </div>

            <div class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/60">
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 flex items-center gap-1.5 mb-2">
                <Compass class="w-3.5 h-3.5" />
                Culture & Societal Order
              </span>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {{ activeRace.culture }}
              </p>
            </div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="p-4 rounded-xl bg-tavern-900/60 border border-emerald-500/20">
              <span class="text-xs font-semibold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2">
                <CheckCircle2 class="w-3.5 h-3.5" />
                Innate Strengths
              </span>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li v-for="(str, idx) in activeRace.strengths" :key="idx" class="flex items-start gap-2">
                  <span class="text-emerald-400 mt-1">•</span>
                  <span>{{ str }}</span>
                </li>
              </ul>
            </div>

            <div class="p-4 rounded-xl bg-tavern-900/60 border border-rose-500/20">
              <span class="text-xs font-semibold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2">
                <AlertOctagon class="w-3.5 h-3.5" />
                Weaknesses & Burdens
              </span>
              <ul class="space-y-1.5 text-xs sm:text-sm text-slate-300">
                <li v-for="(w, idx) in activeRace.weaknesses" :key="idx" class="flex items-start gap-2">
                  <span class="text-rose-400 mt-1">•</span>
                  <span>{{ w }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- The Deeper Truth: The Spark of Azamina -->
      <section class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-purple-950/40 via-tavern-900 to-tavern-950 border border-purple-500/40 shadow-2xl relative overflow-hidden">
        <div class="absolute -right-8 -top-8 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl pointer-events-none"></div>

        <div class="relative z-10 space-y-4">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-purple-500/20 text-purple-300 border border-purple-500/40">
            <Heart class="w-3.5 h-3.5 text-purple-400" />
            The Deeper Metaphysical Truth
          </div>

          <h3 class="text-2xl font-bold font-cinzel text-amber-100">
            The Spark of Azamina & The Mortal Soul
          </h3>

          <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            The bodies, elemental affinities, and imperial hierarchies were shaped by the Seven. But the <strong>mortal soul</strong>—the capacity to love, to feel, to hope, and to choose one’s own destiny—was the sacred gift of <strong>Azamina, Goddess of Darkness</strong>.
          </p>

          <blockquote class="p-4 rounded-xl bg-tavern-950/80 border-l-4 border-purple-500 text-xs sm:text-sm italic text-amber-100 font-serif leading-relaxed">
            "When the Seven sealed Azamina in the deep Abyss, they did not merely imprison a rival—they crippled their own creations. Mortals are defined by the spark of Azamina that still burns within them: the power to love, to sacrifice, and to choose."
          </blockquote>
        </div>
      </section>
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 3: CONTINENTS & GEOGRAPHY                                -->
    <!-- ================================================================= -->
    <div v-else-if="mainSection === 'geography'" class="space-y-8 animate-fadeIn">
      
      <!-- Continent Selector Tabs -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <button
          v-for="c in continentsData"
          :key="c.id"
          type="button"
          @click="selectedContinentId = c.id; landmarkSearch = ''"
          class="p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between"
          :class="selectedContinentId === c.id 
            ? `${c.badgeClass} ring-2 ring-amber-500/30 scale-[1.01] shadow-lg` 
            : 'bg-tavern-900/70 border-tavern-border text-slate-400 hover:text-slate-200 hover:bg-tavern-850'"
        >
          <div>
            <div class="flex items-center justify-between mb-1">
              <span class="font-cinzel font-bold text-sm sm:text-base text-amber-100">{{ c.name }}</span>
              <Navigation class="w-4 h-4 text-amber-400" />
            </div>
            <span class="text-xs font-medium text-amber-300/80">{{ c.title }}</span>
          </div>
          <span class="text-[11px] text-slate-500 mt-2 font-mono">{{ c.landmarks.length }} Key Landmarks</span>
        </button>
      </div>

      <!-- Active Continent Header Dossier -->
      <section class="p-6 sm:p-8 rounded-2xl fantasy-card border border-tavern-border space-y-4">
        <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-tavern-border/60 pb-5">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-0.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-2" :class="activeContinent.badgeClass">
              <Globe class="w-3.5 h-3.5" />
              {{ activeContinent.title }}
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold font-cinzel text-amber-100">
              {{ activeContinent.name }}
            </h3>
            <p class="text-xs sm:text-sm text-amber-300/80 italic mt-0.5">
              "{{ activeContinent.tagline }}"
            </p>
          </div>

          <div class="bg-tavern-950/80 p-3.5 rounded-xl border border-tavern-border/70 text-xs space-y-1 md:max-w-xs">
            <span class="font-semibold uppercase tracking-wider text-slate-400 block text-[10px]">Climate & Terrain</span>
            <p class="text-slate-300">{{ activeContinent.climate }}</p>
          </div>
        </div>

        <div class="p-4 rounded-xl bg-tavern-950/60 border border-tavern-border/50 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <strong class="text-amber-200 uppercase tracking-wider text-xs block mb-1">Strategic Significance:</strong>
          {{ activeContinent.significance }}
        </div>
      </section>

      <!-- Landmark Explorer Grid -->
      <section class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <h4 class="text-lg font-bold font-cinzel text-amber-100 flex items-center gap-2">
            <MapPin class="w-4 h-4 text-amber-400" />
            Landmarks & Strategic Nodes ({{ filteredLandmarks.length }})
          </h4>
          <div class="relative w-full sm:w-64">
            <Search class="w-3.5 h-3.5 text-slate-400 absolute left-3 top-2.5" />
            <input
              v-model="landmarkSearch"
              type="text"
              placeholder="Filter landmarks..."
              class="w-full bg-tavern-900 border border-tavern-border rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-200 focus:outline-none focus:border-amber-500/50"
            />
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="l in filteredLandmarks" 
            :key="l.name"
            class="p-4 rounded-xl bg-tavern-900/80 border border-tavern-border/70 hover:border-amber-500/40 transition-colors flex flex-col justify-between"
          >
            <div>
              <div class="flex items-center justify-between mb-1.5">
                <h5 class="font-cinzel font-bold text-sm text-amber-200">{{ l.name }}</h5>
                <span class="text-[10px] font-mono text-slate-400 bg-tavern-950 px-2 py-0.5 rounded border border-tavern-border">{{ l.type }}</span>
              </div>
              <p class="text-xs text-slate-300 leading-relaxed font-sans">
                {{ l.desc }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 4: CHRONICLES & ERAS                                    -->
    <!-- ================================================================= -->
    <div v-else-if="mainSection === 'chronicles'" class="space-y-10 animate-fadeIn">
      <div class="p-6 rounded-2xl bg-tavern-900/80 border border-tavern-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-bold font-cinzel text-amber-100 flex items-center gap-2">
            <Hourglass class="w-5 h-5 text-amber-400" />
            Chronology of the World of Myria
          </h3>
          <p class="text-xs text-slate-400 mt-1">
            From the Primordial Fracture through the War in Heaven, the Blank Age, to the Present 4-Faction War.
          </p>
        </div>
      </div>

      <div class="relative border-l-2 border-tavern-border/70 ml-4 sm:ml-8 space-y-8 pl-6 sm:pl-8">
        <div 
          v-for="era in historicalEras" 
          :key="era.id"
          class="relative group"
        >
          <div class="absolute -left-[33px] sm:-left-[41px] top-1.5 w-4 h-4 rounded-full bg-tavern-950 border-2 border-amber-500 shadow-md group-hover:scale-125 transition-transform group-hover:bg-amber-400"></div>

          <div class="p-5 sm:p-6 rounded-2xl bg-tavern-900/90 border border-tavern-border hover:border-amber-500/40 transition-all shadow-xl space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-tavern-border/50 pb-3">
              <div>
                <span class="text-xs font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                  {{ era.timeline }}
                </span>
                <h4 class="text-lg sm:text-xl font-bold font-cinzel text-amber-100 mt-1.5">
                  {{ era.name }}
                </h4>
              </div>
              <span class="text-xs font-semibold text-slate-400 italic">{{ era.headline }}</span>
            </div>

            <p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              {{ era.summary }}
            </p>

            <div class="p-3.5 rounded-xl bg-tavern-950/70 border border-tavern-border/50 space-y-1.5">
              <span class="text-[11px] font-semibold uppercase tracking-wider text-amber-300 block mb-1">Key Chronological Events:</span>
              <ul class="space-y-1 text-xs text-slate-300">
                <li v-for="(ev, idx) in era.events" :key="idx" class="flex items-start gap-2">
                  <span class="text-amber-400 shrink-0">•</span>
                  <span>{{ ev }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- The 6 Forgotten Truths Secret Dossier -->
      <section class="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-red-950/30 via-tavern-900 to-tavern-950 border border-red-500/40 shadow-2xl relative overflow-hidden space-y-6">
        <div class="flex items-center gap-2 text-red-400 font-cinzel font-bold text-lg">
          <EyeOff class="w-5 h-5 text-red-400" />
          The Six Forgotten Truths of Creation
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div 
            v-for="truth in forbiddenTruths" 
            :key="truth.number"
            class="p-4 rounded-xl bg-tavern-950/80 border border-red-500/20 hover:border-red-500/50 transition-colors"
          >
            <div class="flex items-center gap-2 text-sm font-bold font-cinzel text-amber-200 mb-1.5">
              <span class="text-red-400 font-mono">[{{ truth.number }}]</span>
              <span>{{ truth.title }}</span>
            </div>
            <p class="text-xs text-slate-300 leading-relaxed font-sans">
              {{ truth.desc }}
            </p>
          </div>
        </div>
      </section>
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 5: POWER SYSTEM & LEY LINES                             -->
    <!-- ================================================================= -->
    <div v-else-if="mainSection === 'power_system'" class="space-y-8 animate-fadeIn">
      <div class="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        <button
          v-for="sub in [
            { id: 'tier_magic', name: 'Tier Magic (MP)', icon: Wand2 },
            { id: 'aura', name: 'Aura Discipline (TP)', icon: Shield },
            { id: 'wild_magic', name: 'Wild Magic & Witches', icon: Feather },
            { id: 'awakener', name: 'The Awakener (Dual)', icon: Sword }
          ]"
          :key="sub.id"
          type="button"
          @click="powerCategory = sub.id"
          class="flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide transition-all shrink-0 border"
          :class="powerCategory === sub.id 
            ? 'bg-purple-950/80 text-purple-200 border-purple-500/60 shadow-lg' 
            : 'bg-tavern-900/80 text-slate-400 border-tavern-border hover:bg-tavern-850 hover:text-slate-200'"
        >
          <component :is="sub.icon" class="w-4 h-4 text-amber-400" />
          <span>{{ sub.name }}</span>
        </button>
      </div>

      <!-- Tier Magic Ladder -->
      <div v-if="powerCategory === 'tier_magic'" class="space-y-4">
        <div class="p-4 rounded-xl bg-tavern-900/60 border border-tavern-border flex items-center gap-3 text-xs sm:text-sm text-sky-200">
          <Wand2 class="w-5 h-5 text-sky-400 shrink-0" />
          <span>Tier Magic operates via geometric circles and incantations, drawing upon internal Mana Points (MP). Spell potency scales from Circle 0 to Circle 9.</span>
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

      <!-- Aura Ladder -->
      <div v-if="powerCategory === 'aura'" class="space-y-4">
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

      <!-- Wild Magic & Hexenzirkel -->
      <div v-if="powerCategory === 'wild_magic'" class="space-y-6">
        <div class="p-5 rounded-2xl bg-rose-950/30 border border-rose-500/30 text-rose-200">
          <div class="flex items-center gap-2 font-cinzel font-bold text-base mb-1">
            <Feather class="w-5 h-5 text-rose-400" />
            The Hexenzirkel Rule (Female Only)
          </div>
          <p class="text-xs sm:text-sm leading-relaxed text-slate-300">
            Wild Magic draws directly from planetary leylines without geometric spell circles. True Witches are strictly <strong>Female Only</strong>, carrying immense natural mana reserves categorized by Hexenzirkel color frequencies.
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

      <!-- The Awakener -->
      <div v-if="powerCategory === 'awakener'" class="space-y-6">
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
    </div>

    <!-- ================================================================= -->
    <!-- SECTION 6: THE ABYSS & THE 7 GODS' PIECES                        -->
    <!-- ================================================================= -->
    <div v-else-if="mainSection === 'abyss_gnosis'" class="space-y-8 animate-fadeIn">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
