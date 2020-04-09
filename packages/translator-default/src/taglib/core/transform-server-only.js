export function exit(path) {
  if (path.hub.options.output !== "html") {
    path.remove();
  }
}
