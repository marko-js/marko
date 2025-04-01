import { getFile } from "@marko/compiler";

export function isOutputHTML() {
  return getMarkoOpts().output === "html";
}

export function isOutputDOM() {
  return !isOutputHTML();
}

export function getMarkoOpts() {
  return getFile().markoOpts;
}

export function isOptimize() {
  return getMarkoOpts().optimize;
}
