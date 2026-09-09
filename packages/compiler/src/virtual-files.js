import { resolve } from "path";

const declarations = new Map();

export function registerVirtualFile(filename, source, origin) {
  if (!filename.endsWith(".d.marko")) {
    throw new Error("Only declaration-only .d.marko files can be registered.");
  }
  declarations.set(resolve(filename), { source, origin });
}

export function getVirtualFile(filename) {
  return declarations.get(resolve(filename))?.source;
}

export function getVirtualFileOrigin(filename) {
  return declarations.get(resolve(filename))?.origin;
}

export function clearVirtualFiles() {
  declarations.clear();
}
