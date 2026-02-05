/* eslint-disable no-import-assign */
import "../generator/patch";

import * as babelTypes from "@babel/types";
import * as definitionUtils from "@babel/types/lib/definitions/utils";
import * as generatedValidators from "@babel/types/lib/validators/generated";
import * as referencedValidators from "@babel/types/lib/validators/isReferenced";
import validate from "@babel/types/lib/validators/validate";

import definitions, { MARKO_ALIAS_TYPES, MARKO_TYPES } from "./definitions";

const {
  TYPES,
  VISITOR_KEYS,
  FLIPPED_ALIAS_KEYS,
  DEPRECATED_KEYS,
  is,
  getBindingIdentifiers,
} = babelTypes;

getBindingIdentifiers.keys.Program = ["params"];
getBindingIdentifiers.keys.MarkoTag = ["var"];
getBindingIdentifiers.keys.MarkoTagBody = ["params"];
getBindingIdentifiers.keys.MarkoScriptlet = ["body"];

MARKO_TYPES.forEach((typeName) => {
  definitionUtils.default(typeName, definitions[typeName]);
});

babelTypes.NODE_FIELDS.Program.params =
  babelTypes.NODE_FIELDS.MarkoTagBody.params;

for (const type of [
  ...Object.keys(VISITOR_KEYS),
  ...Object.keys(FLIPPED_ALIAS_KEYS),
  ...Object.keys(DEPRECATED_KEYS),
]) {
  if (!TYPES.includes(type)) TYPES.push(type);
}

MARKO_TYPES.forEach((typeName) => {
  const lowerName = typeName[0].toLowerCase() + typeName.slice(1);
  const checkKey = `is${typeName}`;
  const assertKey = `assert${typeName}`;
  babelTypes[checkKey] = (node, opts) => is(typeName, node, opts);
  babelTypes[assertKey] = (node, opts) => assert(typeName, node, opts);
  babelTypes[typeName] = babelTypes[lowerName] = function () {
    return builder(typeName, arguments);
  };
});

MARKO_ALIAS_TYPES.forEach((aliasName) => {
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

for (const { types, set } of definitionUtils.allExpandedTypes || []) {
  for (const type of types) {
    const aliases = FLIPPED_ALIAS_KEYS[type];
    if (aliases) {
      aliases.forEach(set.add, set);
    } else {
      set.add(type);
    }
  }
}

function assert(typeName, node, opts) {
  if (!is(typeName, node, opts)) {
    throw new Error(
      `Expected type "${typeName}" with option ${JSON.stringify(
        opts,
      )}, but instead got "${node.type}".`,
    );
  }
}

function builder(type, args) {
  const definition = definitions[type];
  const keys = definition.builder;
  const countArgs = args.length;
  if (countArgs > keys.length) {
    throw new Error(
      `${type}: Too many arguments passed. Received ${countArgs} but can receive no more than ${keys.length}`,
    );
  }

  const node = { type };

  for (let i = 0; i < keys.length; ++i) {
    const key = keys[i];
    const field = definition.fields[key];

    let arg;
    if (i < countArgs) arg = args[i];
    if (arg === undefined) {
      arg = Array.isArray(field.default) ? [] : field.default;
    }

    node[key] = arg;
  }

  // (assume all enumerable properties are own)

  for (const key in node) {
    validate(node, key, node[key]);
  }

  return node;
}
