/**
 * Grounded Historical Names & Surnames Dataset
 * Structured by Cultural Tradition and Gender (Male / Female).
 */

// ==========================================
// 1. MALE FIRST NAMES BY CULTURAL TRADITION
// ==========================================

export const maleAngloNorman = [
  "Godric", "Barnaby", "Walter", "Aldous", "Bartholomew",
  "Dunstan", "Roger", "Osric", "Wystan", "Geoffrey",
  "Wulfric", "Eadmund", "Cuthbert", "Morcar", "Athelstan", "Leofric"
];

export const maleFrenchOccitan = [
  "Thibault", "Marcel", "Guy", "Renaud", "Bertrand",
  "Etienne", "Guillaume", "Gaston", "Pascal", "Matthieu",
  "Amaury", "Balian", "Yvain", "Vivien", "Florian",
  "Grosjean", "Honoré", "Leonce", "Valerand"
];

export const maleGermanic = [
  "Albrecht", "Dieter", "Dietrich", "Wolfram", "Konrad",
  "Heinrich", "Walther", "Reinhard", "Oskar", "Siegfried",
  "Fastred", "Ulrich", "Gerhart", "Gottfried", "Erwin",
  "Otto", "Klaus", "Wilhelm"
];

export const maleRomanLatin = [
  "Cassian", "Lucian", "Marius", "Severus", "Julian",
  "Tiberius", "Faustus", "Antonius", "Drusus", "Titus",
  "Quintus", "Cassius", "Aurelius", "Valerius", "Silvanus",
  "Cornelius", "Maximus"
];

export const maleByzantineGreek = [
  "Niketas", "Theron", "Damaso", "Leontios", "Georgios",
  "Stephanos", "Ioannes", "Alexios", "Konstantinos", "Basileios",
  "Demetrios", "Cassander", "Thaddeus", "Nikos", "Evander",
  "Phokas", "Cosmas"
];

export const maleClassicalChinese = [
  "Wenchen", "Feng", "Mingze", "Zhiyuan", "Bojing",
  "Junjie", "Guanyu", "Chenglei", "Baoyu", "Minghua",
  "Ruoguang", "Yuan", "Changge", "Shen", "Haoran"
];

export const malePreModernJapanese = [
  "Genzo", "Ryoma", "Kenshin", "Jiro", "Ren",
  "Yasuke", "Hidetora", "Kazumasa", "Shinsaku", "Yukimura",
  "Hanzo", "Musashi", "Kotaro", "Sakon", "Katsuro",
  "Tatsuo", "Keiji", "Masamune", "Nobunaga", "Goemon"
];

export const maleJoseonKorean = [
  "Min-hyuk", "Do-jin", "Jin-woo", "Seon-woo", "Yeong-ho",
  "Dong-yul", "Tae-seok", "Hyun-woo", "Sang-won", "Kyung-soo",
  "Yeong-jin", "Gwang-ha", "Byeong-ho", "Myeong-seok", "Woo-jin", "Kyung-ho"
];

// ==========================================
// 2. FEMALE FIRST NAMES BY CULTURAL TRADITION
// ==========================================

export const femaleAngloNorman = [
  "Edith", "Margaret", "Beatrice", "Constance", "Jocelyn",
  "Sybil", "Elowen", "Cecily", "Rowena"
];

export const femaleFrenchOccitan = [
  "Adrienne", "Ysabeau", "Clotilde", "Jehanne", "Melisande",
  "Blanche"
];

export const femaleGermanic = [
  "Greta", "Brunhild", "Agnes", "Mathilde", "Hedwig",
  "Hildegard", "Liesel"
];

export const femaleRomanLatin = [
  "Valeria", "Claudia", "Aurelia", "Octavia", "Flavia",
  "Camilla", "Lucretia", "Vesta"
];

export const femaleByzantineGreek = [
  "Helena", "Eudokia", "Theodora", "Kallisto", "Irena",
  "Kallista", "Sophronia", "Zoe"
];

export const femaleClassicalChinese = [
  "Yan", "Xue", "Lanying", "Huiling", "Meifeng",
  "Xiuying", "Zhurong", "Lingxin", "Yuwei", "Zixuan"
];

export const femalePreModernJapanese = [
  "Kaede", "Chiyo", "Tomoe", "Oichi", "Chiyome"
];

export const femaleJoseonKorean = [
  "Ha-neul", "Ji-hye", "Eun-ji", "So-yeon", "Seon-deok",
  "Chae-won", "Hae-in", "Su-bin", "Nari"
];

// ==========================================
// 3. CONSOLIDATED FIRST NAMES
// ==========================================

export const maleNames = [
  ...maleAngloNorman,
  ...maleFrenchOccitan,
  ...maleGermanic,
  ...maleRomanLatin,
  ...maleByzantineGreek,
  ...maleClassicalChinese,
  ...malePreModernJapanese,
  ...maleJoseonKorean
];

export const femaleNames = [
  ...femaleAngloNorman,
  ...femaleFrenchOccitan,
  ...femaleGermanic,
  ...femaleRomanLatin,
  ...femaleByzantineGreek,
  ...femaleClassicalChinese,
  ...femalePreModernJapanese,
  ...femaleJoseonKorean
];

export const firstNames = [
  ...maleNames,
  ...femaleNames
];

// ==========================================
// 4. SURNAMES BY CULTURAL TRADITION
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

export const surnames = [
  ...europeanSurnames,
  ...chineseSurnames,
  ...japaneseSurnames,
  ...koreanSurnames
];

export const lastNames = surnames;
