/**
 * Given a template filename, returns the path of the `tags/` directory it
 * belongs to (including the trailing `tags`), or `false` when the file is not
 * inside a `tags/` directory.
 *
 * A `components/` directory takes precedence and stops the search, mirroring
 * the detection used by the interop translator.
 */
export default function getTagsDir(filename) {
  const pathSeparator = /\/|\\/.exec(filename)?.[0];
  if (pathSeparator) {
    let previousIndex = filename.length - 1;
    while (previousIndex > 0) {
      const index = filename.lastIndexOf(pathSeparator, previousIndex);
      switch (previousIndex - index) {
        case 4 /** "tags".length */: {
          if (filename.startsWith("tags", index + 1)) {
            return filename.slice(0, index + 5);
          }
          break;
        }
        case 10 /** "components".length */: {
          if (filename.startsWith("components", index + 1)) {
            return false;
          }
          break;
        }
      }
      previousIndex = index - 1;
    }
  }
  return false;
}
