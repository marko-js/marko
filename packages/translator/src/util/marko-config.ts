import { currentProgramPath } from "../visitors/program";

export function isOutputHTML() {
  return getMarkoOpts().output === "html";
}

export function isOutputDOM() {
  return !isOutputHTML();
}

export function getMarkoOpts() {
  return currentProgramPath.hub.file.markoOpts;
}
