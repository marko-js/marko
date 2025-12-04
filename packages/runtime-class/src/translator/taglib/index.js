import coreTaglib from "./core";
export const optionalTaglibs = ["marko-widgets", "@marko/compat-v4"];
export default [
  ["marko-html-title", { "<title>": { parseOptions: { text: false } } }], // In Marko 5 the title tag parses as html even though only text is really allowed.
  [coreTaglib.taglibId, coreTaglib],
];
