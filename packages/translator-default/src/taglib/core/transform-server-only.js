export function exit(path) {
  if (path.hub.file.markoOpts.output !== "html") {
    path.remove();
  }
}
