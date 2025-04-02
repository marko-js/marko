let currentFile;

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

export function setFileInternal(file) {
  return (currentFile = file);
}
