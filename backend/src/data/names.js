/**
 * Grounded Historical Names & Surnames Dataset
 * Eliminated generic high-fantasy tropes in favor of authentic European and East Asian historical traditions.
 */

// ==========================================
// 1. FIRST NAMES BY CULTURAL TRADITION
// ==========================================

export const angloNormanNames = [
  "Godric", "Barnaby", "Walter", "Edith", "Aldous",
  "Bartholomew", "Dunstan", "Margaret", "Beatrice", "Roger",
  "Osric", "Constance", "Jocelyn", "Wystan", "Geoffrey",
  "Wulfric", "Eadmund", "Cuthbert", "Morcar", "Sybil",
  "Elowen", "Cecily", "Rowena", "Athelstan", "Leofric"
];

export const frenchOccitanNames = [
  "Thibault", "Marcel", "Guy", "Adrienne", "Renaud",
  "Bertrand", "Etienne", "Guillaume", "Ysabeau", "Clotilde",
  "Gaston", "Jehanne", "Pascal", "Matthieu", "Amaury",
  "Balian", "Yvain", "Melisande", "Blanche", "Vivien",
  "Florian", "Grosjean", "Honoré", "Leonce", "Valerand"
];

export const germanicNames = [
  "Albrecht", "Dieter", "Dietrich", "Greta", "Wolfram",
  "Konrad", "Heinrich", "Brunhild", "Walther", "Agnes",
  "Reinhard", "Mathilde", "Oskar", "Hedwig", "Siegfried",
  "Fastred", "Hildegard", "Ulrich", "Gerhart", "Liesel",
  "Gottfried", "Erwin", "Otto", "Klaus", "Wilhelm"
];

export const romanLatinNames = [
  "Cassian", "Lucian", "Marius", "Valeria", "Severus",
  "Claudia", "Julian", "Tiberius", "Faustus", "Aurelia",
  "Antonius", "Drusus", "Octavia", "Titus", "Quintus",
  "Flavia", "Cassius", "Aurelius", "Valerius", "Camilla",
  "Lucretia", "Silvanus", "Cornelius", "Maximus", "Vesta"
];

export const byzantineGreekNames = [
  "Niketas", "Theron", "Damaso", "Helena", "Leontios",
  "Georgios", "Eudokia", "Stephanos", "Theodora", "Ioannes",
  "Alexios", "Konstantinos", "Kallisto", "Basileios", "Demetrios",
  "Cassander", "Irena", "Thaddeus", "Kallista", "Sophronia",
  "Nikos", "Evander", "Phokas", "Zoe", "Cosmas"
];

export const classicalChineseNames = [
  "Wenchen", "Yan", "Feng", "Xue", "Mingze",
  "Zhiyuan", "Lanying", "Bojing", "Huiling", "Junjie",
  "Guanyu", "Meifeng", "Chenglei", "Xiuying", "Zhurong",
  "Baoyu", "Minghua", "Ruoguang", "Yuan", "Changge",
  "Shen", "Lingxin", "Haoran", "Yuwei", "Zixuan"
];

export const preModernJapaneseNames = [
  "Genzo", "Ryoma", "Kenshin", "Jiro", "Kaede",
  "Ren", "Yasuke", "Chiyo", "Tomoe", "Hidetora",
  "Kazumasa", "Shinsaku", "Oichi", "Yukimura", "Hanzo",
  "Musashi", "Chiyome", "Kotaro", "Sakon", "Katsuro",
  "Tatsuo", "Keiji", "Masamune", "Nobunaga", "Goemon"
];

export const joseonKoreanNames = [
  "Min-hyuk", "Do-jin", "Ha-neul", "Jin-woo", "Seon-woo",
  "Yeong-ho", "Dong-yul", "Ji-hye", "Eun-ji", "Tae-seok",
  "Hyun-woo", "Sang-won", "So-yeon", "Kyung-soo", "Yeong-jin",
  "Seon-deok", "Gwang-ha", "Chae-won", "Hae-in", "Byeong-ho",
  "Su-bin", "Myeong-seok", "Woo-jin", "Nari", "Kyung-ho"
];

/**
 * Consolidated First Names Pool (180+ Authentic Names)
 */
export const firstNames = [
  ...angloNormanNames,
  ...frenchOccitanNames,
  ...germanicNames,
  ...romanLatinNames,
  ...byzantineGreekNames,
  ...classicalChineseNames,
  ...preModernJapaneseNames,
  ...joseonKoreanNames
];

// ==========================================
// 2. SURNAMES BY CULTURAL TRADITION
// ==========================================

export const europeanSurnames = [
  "Fletcher", "Mercer", "Becker", "Richter", "Blackwood",
  "Fontaine", "Holtz", "Vogel", "Corvin", "Dufresne",
  "Cartwright", "Wainwright", "Cooper", "Weaver", "Miller",
  "Carpenter", "Schumacher", "Bouchard", "Thiel", "Kruger",
  "Ashford", "Dunbar", "Beaumont", "Vanderbilt", "Harding",
  "Hawthorn", "Ironwood", "Thatcher", "Sterling", "Oakhaven",
  "Montclair", "Greenwood", "Adler", "Eisenhauer", "Lindqvist",
  "the Stout", "the Red", "the Limping", "the Quiet", "the Mason",
  "the One-Eyed", "the Weaver", "the Elder", "the Black", "the Ironwilled"
];

export const chineseSurnames = [
  "Lin", "Zhang", "Zhao", "Chen", "Shen",
  "Gu", "Liang", "Wang", "Wu", "Song",
  "Tang", "Han", "Qian", "Feng", "Huang",
  "Lu", "Qi", "Yan", "Xu", "Cheng", "Zhou", "Ye"
];

export const japaneseSurnames = [
  "Sakai", "Tachibana", "Kuroda", "Hattori", "Sugimoto",
  "Fujimoto", "Minamoto", "Mori", "Ishikawa", "Takahashi",
  "Nakano", "Shimada", "Matsuda", "Okamoto", "Date",
  "Sanada", "Oda", "Uesugi", "Takeda", "Chosokabe"
];

export const koreanSurnames = [
  "Kang", "Yoon", "Baek", "Choi", "Kwon",
  "Han", "Jeong", "Park", "Im", "Shin",
  "Yoo", "Gim", "Seo", "Ryu", "Moon",
  "Hwang", "Son", "Heo", "Yang", "Song"
];

/**
 * Consolidated Surnames Pool (100+ Grounded Surnames & Epithets)
 */
export const surnames = [
  ...europeanSurnames,
  ...chineseSurnames,
  ...japaneseSurnames,
  ...koreanSurnames
];

/**
 * Alias for compatibility
 */
export const lastNames = surnames;
