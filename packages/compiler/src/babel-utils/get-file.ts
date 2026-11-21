import type { types as t } from "@marko/compiler";

let currentFile: t.BabelFile | undefined;

export function getFile() {
  if (currentFile) {
    return currentFile;
  }

  throw new Error("Unable to access Marko File outside of a compilation");
}

export function getProgram() {
  if (currentFile) {
    return currentFile.path;
  }

  throw new Error("Unable to access Marko Program outside of a compilation");
}

export function getFileInternal() {
  return currentFile;
}

export function setFileInternal<T extends t.BabelFile | undefined>(file: T) {
  currentFile = file;
  return file;
}
