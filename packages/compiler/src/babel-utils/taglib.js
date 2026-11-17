import { CompileDependencies } from "../taglib/dependencies";

export function getTaglibLookup(file) {
  return file.___taglibLookup;
}

export function getTagDefForTagName(file, tagName) {
  const tagDef = getTaglibLookup(file).getTag(tagName);
  if (tagDef) {
    CompileDependencies.addTag(file.metadata.marko.dependencies, tagDef);
  }
  return tagDef;
}
