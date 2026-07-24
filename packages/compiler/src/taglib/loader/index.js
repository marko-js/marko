import * as cache from "./cache";
import DependencyChain from "./DependencyChain";
import * as loaders from "./loaders";
import * as types from "./types";

function loadTaglibFromProps(taglib, taglibProps) {
  return loaders.loadTaglibFromProps(taglib, taglibProps);
}

function loadTaglibFromFile(filePath, isFromPackageJson, packageName) {
  return loaders.loadTaglibFromFile(filePath, isFromPackageJson, packageName);
}

function loadTaglibFromDir(filePath, tagDiscoveryDir) {
  return loaders.loadTaglibFromDir(filePath, tagDiscoveryDir);
}

function clearCache() {
  cache.clear();
}

function createTaglib(filePath) {
  return new types.Taglib(filePath);
}

function loadTag(tagProps, filePath) {
  var tag = new types.Tag(filePath);
  loaders.loadTagFromProps(
    tag,
    tagProps,
    new DependencyChain(filePath ? [filePath] : []),
  );
  return tag;
}

export {
  clearCache,
  createTaglib,
  loadTag,
  loadTaglibFromDir,
  loadTaglibFromFile,
  loadTaglibFromProps,
};
