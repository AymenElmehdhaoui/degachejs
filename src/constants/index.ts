/**
 * Tunisian governorates and their codes
 */
export const GOVERNORATES = {
  ARIANA: "12",
  BEJA: "21",
  BEN_AROUS: "13",
  BIZERTE: "17",
  GABES: "81",
  GAFSA: "71",
  JENDOUBA: "22",
  KAIROUAN: "41",
  KASSERINE: "42",
  KEBILI: "73",
  KEF: "23",
  MAHDIA: "53",
  MANOUBA: "14",
  MEDENINE: "82",
  MONASTIR: "52",
  NABEUL: "15",
  SFAX: "61",
  SIDI_BOUZID: "43",
  SILIANA: "24",
  SOUSSE: "51",
  TATAOUINE: "83",
  TOZEUR: "72",
  TUNIS: "11",
  ZAGHOUAN: "16",
} as const;

/**
 * Mobile carrier prefixes
 */
export const MOBILE_PREFIXES = {
  OOREDOO: ["2", "5"],
  ORANGE: ["4", "5"],
  TELECOM: ["2", "9"],
} as const;

/**
 * Currency code and symbol
 */
export const CURRENCY = {
  CODE: "TND",
  SYMBOL: "د.ت",
  NAME: "Tunisian Dinar",
} as const;

/**
 * Date locale
 */
export const LOCALE = "ar-TN";

/**
 * Country calling code
 */
export const COUNTRY_CODE = "+216";
