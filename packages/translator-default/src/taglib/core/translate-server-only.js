export function enter(path) {
  if (path.hub.file.markoOpts.output !== "html") {
    path.remove();
  }
}
