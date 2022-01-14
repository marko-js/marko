/* eslint-disable no-import-assign */
import * as babelTypes from "@babel/types";
import builder from "@babel/types/lib/builders/builder";
import defineType from "@babel/types/lib/definitions/utils";
import * as generatedValidators from "@babel/types/lib/validators/generated";
import * as referencedValidators from "@babel/types/lib/validators/isReferenced";
import definitions, { MARKO_TYPES, MARKO_ALIAS_TYPES } from "./definitions";

const {
  TYPES,
  VISITOR_KEYS,
  FLIPPED_ALIAS_KEYS,
  DEPRECATED_KEYS,
  is,
  getBindingIdentifiers
} = babelTypes;

getBindingIdentifiers.keys["MarkoTag"] = ["var"];
getBindingIdentifiers.keys["MarkoTagBody"] = ["params"];

MARKO_TYPES.forEach(typeName => {
  defineType(typeName, definitions[typeName]);
});

for (const type of [
  ...Object.keys(VISITOR_KEYS),
  ...Object.keys(FLIPPED_ALIAS_KEYS),
  ...Object.keys(DEPRECATED_KEYS)
]) {
  if (!TYPES.includes(type)) TYPES.push(type);
}

MARKO_TYPES.forEach(typeName => {
  const lowerName = typeName[0].toLowerCase() + typeName.slice(1);
  const checkKey = `is${typeName}`;
  const assertKey = `assert${typeName}`;
  babelTypes[checkKey] = (node, opts) => is(typeName, node, opts);
  babelTypes[assertKey] = (node, opts) => assert(typeName, node, opts);
  babelTypes[typeName] = babelTypes[lowerName] = function () {
    return builder.apply(typeName, arguments);
  };
});

MARKO_ALIAS_TYPES.forEach(aliasName => {
  const checkKey = `is${aliasName}`;
  const originalCheck = generatedValidators[checkKey];
  generatedValidators[checkKey] = (node, opts) =>
    is(aliasName, node, opts) || originalCheck(node, opts);
});

const originalIsReferenced = referencedValidators.default;
referencedValidators.default = (node, parent, grandparent) => {
  switch (parent.type) {
    case "MarkoTag":
      return parent.var !== node;
    case "MarkoTagBody":
      return false;
    default:
      return originalIsReferenced(node, parent, grandparent);
  }
};

function assert(typeName, node, opts) {
  if (!is(typeName, node, opts)) {
    throw new Error(
      `Expected type "${typeName}" with option ${JSON.stringify(
        opts
      )}, but instead got "${node.type}".`
    );
  }
}
