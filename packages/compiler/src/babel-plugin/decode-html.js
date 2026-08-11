import he from "he";

// Raw source text for a text-only tag whose value reaches the DOM as a string
// rather than as markup, so its character references must be resolved.
export function decodeHTMLText(value) {
  return value.includes("&") ? he.decode(value) : value;
}
