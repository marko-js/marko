import * as babelTypes from "@babel/types";
import { NodePath, Scope } from "@babel/traverse";
import builder from "@babel/types/lib/builders/builder";
import defineType from "@babel/types/lib/definitions/utils";
import * as generatedValidators from "@babel/types/lib/validators/generated";
import * as referencedValidators from "@babel/types/lib/validators/isReferenced";
import types from "./types";

const {
  TYPES,
  VISITOR_KEYS,
  FLIPPED_ALIAS_KEYS,
  DEPRECATED_KEYS,
  is
} = babelTypes;

const aliases = {};
export const MARKO_TYPES = Object.keys(types);
MARKO_TYPES.forEach(typeName => {
  const type = types[typeName];
  for (const alias of type.aliases) {
    aliases[alias] = aliases[alias] || [];
    aliases[alias].push(typeName);
  }
  defineType(typeName, type);
});
const ALIAS_TYPES = Object.keys(aliases);

// Update TYPES
for (const type of [
  ...Object.keys(VISITOR_KEYS),
  ...Object.keys(FLIPPED_ALIAS_KEYS),
  ...Object.keys(DEPRECATED_KEYS)
]) {
  if (!TYPES.includes(type)) TYPES.push(type);
}

// add marko validators & builders to `@babel/types` and `@babel/traverse`
MARKO_TYPES.forEach(typeName => {
  const lowerName = typeName[0].toLowerCase() + typeName.slice(1);
  const checkKey = `is${typeName}`;
  const assertKey = `assert${typeName}`;
  const checkFn = (babelTypes[checkKey] = (node, opts) =>
    is(typeName, node, opts));
  const assertFn = (babelTypes[assertKey] = (node, opts) =>
    assert(typeName, node, opts));
  NodePath.prototype[checkKey] = function(opts) {
    return checkFn(this.node, opts);
  };
  NodePath.prototype[assertKey] = function(opts) {
    assertFn(this.node, opts);
  };
  // Add builder.
  babelTypes[typeName] = babelTypes[lowerName] = (...args) =>
    builder(typeName, ...args);
});

ALIAS_TYPES.forEach(aliasName => {
  const checkKey = `is${aliasName}`;
  const originalCheck = generatedValidators[checkKey];
  generatedValidators[checkKey] = (node, opts) => {
    return is(aliasName, node, opts) || originalCheck(node, opts);
  };
  const originalProtoCheck = NodePath.prototype[checkKey];
  NodePath.prototype[checkKey] = function(opts) {
    return (
      is(aliasName, this.node, opts) ||
      originalProtoCheck.call(this, this.node, opts)
    );
  };
});

const originalIsReferenced = referencedValidators.default;
referencedValidators.default = (node, parent, grandparent) => {
  if (
    parent.type === "MarkoTag" &&
    parent.params &&
    parent.params.includes(node)
  ) {
    return false;
  }
  return originalIsReferenced(node, parent, grandparent);
};

const originalCrawl = Scope.prototype.crawl;
Scope.prototype.crawl = function() {
  const path = this.path;

  originalCrawl.apply(this, arguments);

  if (path.isMarkoTagBody()) {
    const params = path.parentPath.get("params");

    if (params.length) {
      for (const param of params) {
        this.registerBinding("param", param);
      }
    }
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

// export babel stuff
Object.assign(exports, babelTypes);
export * from "@babel/types";
