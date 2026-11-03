// A generated id's tokens use only CSS identifier characters. Each starts with
// one character naming its type and its length, so the tokens parse in order.
const DIGITS =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
// A declaration's first character never follows within another's, so the
// declaration ending an id parses from its end.
const DECLARATION_HEADS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_-";
const unsafeKey = /[^a-zA-Z0-9_-]/;
const escapedUnit = /[^a-zA-Z0-9-]/g;

// Header values: integers 0-9 are their own header; then integers of 1-4
// digits, longer integers, strings of length 0-36, and the rest.
const INT = 10;
const LONG_INT = 14;
const STR = 15;
const LONG_STR = 52;
const ESCAPED = 53;
const OTHER_NUMBER = 54;
const WITHHELD = 55;
const SITE = 56;
const LONG_SITE = 63;

export const withheldIdToken = DIGITS[WITHHELD];

// The `n`th declaration of a template rendering an `<id>`.
export function encodeIdDeclaration(n: number) {
  return n < DECLARATION_HEADS.length
    ? DECLARATION_HEADS[n]
    : DECLARATION_HEADS[n % DECLARATION_HEADS.length] +
        (Math.floor(n / DECLARATION_HEADS.length) - 1).toString(36);
}

// The `n`th call site of a template that renders another scope's content.
export function encodeIdSite(n: number) {
  return n < LONG_SITE - SITE
    ? DIGITS[SITE + n]
    : DIGITS[LONG_SITE] + encodeIdInt(n - (LONG_SITE - SITE));
}

export function encodeIdKey(key: string | number) {
  if (typeof key === "number") {
    return Number.isSafeInteger(key) && key >= 0
      ? encodeIdInt(key)
      : encodeIdEscaped(OTHER_NUMBER, key + "");
  }
  if (unsafeKey.test(key)) return encodeIdEscaped(ESCAPED, key);
  return key.length < LONG_STR - STR
    ? DIGITS[STR + key.length] + key
    : DIGITS[LONG_STR] + encodeIdInt(key.length) + key;
}

function encodeIdInt(n: number) {
  if (n < INT) return DIGITS[n];
  let digits = "";
  for (; n; n = Math.floor(n / 64)) digits = DIGITS[n % 64] + digits;
  return digits.length < LONG_INT - INT + 1
    ? DIGITS[INT - 1 + digits.length] + digits
    : DIGITS[LONG_INT] + DIGITS[digits.length] + digits;
}

// Escapes `_` and each code unit outside the identifier characters as `_`
// and three digits.
function encodeIdEscaped(header: number, str: string) {
  const escaped = str.replace(escapedUnit, escapeIdUnit);
  return DIGITS[header] + encodeIdInt(escaped.length) + escaped;
}

function escapeIdUnit(unit: string) {
  const code = unit.charCodeAt(0);
  return (
    "_" + DIGITS[code >> 12] + DIGITS[(code >> 6) & 63] + DIGITS[code & 63]
  );
}
