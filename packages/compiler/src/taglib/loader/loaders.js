import loadAttributeFromProps from "./loadAttributeFromProps";
import loadAttributes from "./loadAttributes";
import loadTagFromProps from "./loadTagFromProps";
import loadTaglibFromDir from "./loadTaglibFromDir";
import loadTaglibFromFile from "./loadTaglibFromFile";
import loadTaglibFromProps from "./loadTaglibFromProps";
import * as types from "./types";

function isSupportedAttributeProperty(propertyName) {
  return loadAttributeFromProps.isSupportedProperty(propertyName);
}

function isSupportedTagProperty(propertyName) {
  return loadTagFromProps.isSupportedProperty(propertyName);
}

function createTaglib(taglibPath) {
  return new types.Taglib(taglibPath);
}

export {
  createTaglib,
  isSupportedAttributeProperty,
  isSupportedTagProperty,
  loadAttributeFromProps,
  loadAttributes,
  loadTagFromProps,
  loadTaglibFromDir,
  loadTaglibFromFile,
  loadTaglibFromProps,
};
