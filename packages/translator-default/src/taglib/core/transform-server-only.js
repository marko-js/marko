export function exit(path) {
  if (path.hub.file._markoOptions.output !== "html") {
    path.remove();
  }
}
