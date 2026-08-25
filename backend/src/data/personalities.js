/**
 * Personality Traits and Contextual Dialogue Dataset
 * Supports placeholder interpolation: {name}, {title}, {fear}, {secret}
 */

export const personalities = [
  {
    id: "Paranoid",
    name: "Paranoid",
    description: "Constantly looking over their shoulder, deeply suspicious of all inquiries.",
    dialogue: [
      "No, no... don't tell me your name. Names have a way of becoming liabilities.",
      "Lower your voice. Even the tavern floorboards have ears when the moon is full.",
      "Why are you asking about me? Who sent you? Was it the magistrate's hounds?",
      "Check your cup before you sip. In this wretched town, even wine has an agenda.",
      "I saw you glancing toward the doorway. Who were you signaling out in the fog?",
      "Keep your distance. The moment I let my guard down is the moment {fear} finds me.",
      "You think you're clever, watching me like that. I know what they say in the alleyways."
    ]
  },
  {
    id: "Charming",
    name: "Charming",
    description: "Flirtatious, disarming, and effortlessly persuasive.",
    dialogue: [
      "Sit, stranger. The ale is thin, but good company makes even vinegar taste like sweet mead.",
      "A face like yours usually comes with an interesting tale or a hefty bounty. Which is it?",
      "Let's trade secrets instead of coin tonight. They're far more valuable, don't you think?",
      "You have the eyes of someone who knows how to spot a rare and dangerous opportunity.",
      "Smile a little. The realm outside may be rotting, but beside this hearth, we're still alive.",
      "Buy the next round and I'll tell you how a humble {title} survived the Grand Inquest.",
      "They say everyone in this tavern is running from something, but you... you look like you're hunting."
    ]
  },
  {
    id: "Melancholic",
    name: "Melancholic",
    description: "Brooding, sorrowful, and haunted by the ghosts of what was lost.",
    dialogue: [
      "The hearth fire always burns down to cold ash in the end. Just like every promise made in this realm.",
      "I used to watch the dawn break over silver spires. Now I only see the shadows lengthening across the stones.",
      "Drink up, traveler. Tomorrow only brings older regrets in newer, heavier clothes.",
      "Some griefs cannot be washed away with ale, no matter how many tankards you empty before midnight.",
      "Every ballad ends in silence. Why pretend our little lives are any different?",
      "I used to fear death. Now my only true dread is {fear}.",
      "Look around this hall. Broken men drinking to forget they were once whole."
    ]
  },
  {
    id: "Greedy",
    name: "Greedy",
    description: "Calculating, mercenary, and constantly appraising the value of everything.",
    dialogue: [
      "Information is like gold, friend: never given away for free, and remarkably heavy to carry.",
      "Everything in this tavern has a price tag. Even a smile... though yours isn't worth much.",
      "Talk is cheap. Clink some silver on the wood, and suddenly my memory will become crystal clear.",
      "If it doesn't bring profit, leverage, or blood money, I don't care to hear another word about it.",
      "A fair deal is any deal where I walk away richer and you walk away breathing.",
      "You want a favor from a {title}? Show me the color of your purse first.",
      "Gold doesn't judge, doesn't lie, and never stabs you in the back while you sleep."
    ]
  },
  {
    id: "Compassionate",
    name: "Compassionate",
    description: "Gentle, empathetic, and protective of the weary and downtrodden.",
    dialogue: [
      "You look weary from the road. Rest your feet; no harm will find you beside this hearth tonight.",
      "We all carry burdens we dare not speak aloud. If you need bread or bandages, you need only ask.",
      "The realm is cruel enough outside these stone walls. In here, at least, no one goes cold.",
      "Take some hot broth before you head back into the dark. It's not much, but it warms the blood.",
      "Kindness costs nothing, yet in times like these, it is rarer than imperial diamonds.",
      "I pray you never have to endure {fear}. No mortal soul deserves such torment.",
      "Sit close to the fire. You've walked through too much rain to stand alone by the door."
    ]
  },
  {
    id: "Cynical",
    name: "Cynical",
    description: "World-weary, blunt, and expecting deceit at every turn.",
    dialogue: [
      "Heroes die young, and kings die fat. The only people who survive are the ones minding their own business.",
      "Save your righteous speeches. Everyone in this tavern is running from a debt or towards a payday.",
      "Hope is a slow poison that tastes like honey until your throat closes up.",
      "Don't look at me like that. Trust is an indulgence only dead men can afford.",
      "You think you're different from the last fool who walked through that door? You're not.",
      "A {title} learns early on: give a man a chance to betray you, and he'll take it twice.",
      "The gods don't look down on this gutter. We're all just clawing over scraps in the dark."
    ]
  },
  {
    id: "Zealous",
    name: "Zealous",
    description: "Fanatically devoted to sacred vows, omens, or an unyielding moral code.",
    dialogue: [
      "The signs are written in the blood moon. Repent, or the cleansing flames will decide your fate.",
      "Every step upon this soil is a divine trial. Do not stray from the sacred path, traveler.",
      "Light reveals truth, but sacred fire purges corruption. Hold fast to your vows.",
      "The ancient prophecies are unfolding before our very eyes, yet you sip wine in blind ignorance.",
      "There are no coincidences in the grand design. You were brought to my table for a reason.",
      "Wickedness cannot hide behind tavern walls. The wrath of the heavens will find the guilty.",
      "I fear neither sword nor sorcery; my only terror is {fear} if I falter in my holy duty."
    ]
  },
  {
    id: "Eccentric",
    name: "Eccentric",
    description: "Quirky, unpredictable, and immersed in esoteric oddities.",
    dialogue: [
      "Did you hear that? The hearth fire just whispered a recipe for invisibility. Or maybe turnip soup.",
      "Careful with that pouch! Three dried toad tongues and a shard of starlight are remarkably fragile.",
      "I collect the final breaths of dying candles. They make an extraordinary tea when brewed at dusk.",
      "The rats in the cellar speak fluent High Elvish, you know. Very rude conversationalists, though.",
      "Never look directly into a bowl of fermented cabbage on a Tuesday. The visions will curdle your mind.",
      "They call me mad, but who among us hasn't spoken to an enchanted turnip when lonely?",
      "Quick, tell me: if a shadow loses its master at midnight, does it keep drinking the ale?"
    ]
  },
  {
    id: "Stoic",
    name: "Stoic",
    description: "Taciturn, enduring, and unmoved by chaos or emotion.",
    dialogue: [
      "Words waste breath. If you need something, say it plainly and move along.",
      "Scars heal. Steel dulls. Winter comes regardless of how loud you complain.",
      "I do my work, I take my coin, and I ask nothing of gods or men.",
      "Pain is just a reminder that the blade hasn't reached bone yet.",
      "Quiet. The wind tells you all you need to know about what's coming over the hills.",
      "I have seen whole garrisons broken. A long winter night in a tavern is nothing.",
      "Speak if you must, but keep your hands where I can see them."
    ]
  },
  {
    id: "Resourceful",
    name: "Resourceful",
    description: "Sharp-eyed, opportunistic, and quick to turn any situation to their advantage.",
    dialogue: [
      "Every lock has a weak pin, and every city watchman has a price. It's just simple arithmetic.",
      "Keep your purse on your belt and your daggers sharp. Opportunity favors those with quick hands.",
      "Give me ten copper pieces and twenty minutes, and I'll find whatever you're looking for.",
      "A clever fox never uses the same hole twice. Remember that when you plan your escape.",
      "When life hands you hemlock, you find someone with deep pockets who wants their rival poisoned.",
      "As a {title}, you learn to never leave a room without taking something useful with you.",
      "I don't need luck. I have lockpicks, three aliases, and a bribe for the night watchman."
    ]
  },
  {
    id: "Enigmatic",
    name: "Enigmatic",
    description: "Veiled in mystery, speaking in riddles and double meanings.",
    dialogue: [
      "The question is not why I am sitting here, traveler. The question is why you were guided to this bench.",
      "Some truths are like glass daggers: they gleam brightly until they shatter in your palm.",
      "Listen closely to the silence between the tavern songs. That is where the real story lives.",
      "We wear our faces like cloaks, but the night always knows what walks beneath the fabric.",
      "You seek an answer, yet you have not even learned the price of asking.",
      "I have crossed three thresholds where names are forbidden. Do not tempt the dark by speaking mine."
    ]
  },
  {
    id: "Callous",
    name: "Callous",
    description: "Cold-hearted, unsympathetic, and indifferent to the suffering of others.",
    dialogue: [
      "Bleed somewhere else. You're getting dirt on the floorboards.",
      "The weak die so the strong can eat breakfast. That's the only law this realm actually obeys.",
      "If your companion didn't want an arrow in the neck, they shouldn't have stood in the doorway.",
      "Save your tears. In this city, water is cheap and sympathy is nonexistent.",
      "I wouldn't cross the street to spit on you if you were on fire, unless you paid me three silver pieces."
    ]
  },
  {
    id: "Arrogant",
    name: "Arrogant",
    description: "Smug, condescending, and convinced of their utter superiority.",
    dialogue: [
      "You are addressing a master of their craft. Mind your tone before you embarrass yourself.",
      "I suppose you think that crude iron blade at your hip makes you intimidating. How quaint.",
      "I am only in this squalid pigsty because the local authorities lacked the intellect to appreciate my talents.",
      "Do not mistake my presence at this common table for equality, peasant.",
      "Few in this province have the refinement to understand what I have achieved."
    ]
  }
];
