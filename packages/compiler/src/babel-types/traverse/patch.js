import "../types/patch";

import * as t from "@babel/types";
import traverse, { NodePath, Scope } from "@babel/traverse";
import { MARKO_TYPES, MARKO_ALIAS_TYPES } from "../types/definitions";

MARKO_TYPES.forEach(typeName => {
  const checkKey = `is${typeName}`;
  const assertKey = `assert${typeName}`;
  const checkFn = t[checkKey];
  const assertFn = t[assertKey];
  NodePath.prototype[checkKey] = function (opts) {
    return checkFn(this.node, opts);
  };
  NodePath.prototype[assertKey] = function (opts) {
    assertFn(this.node, opts);
  };
});

MARKO_ALIAS_TYPES.forEach(aliasName => {
  const checkKey = `is${aliasName}`;
  const originalProtoCheck = NodePath.prototype[checkKey];
  NodePath.prototype[checkKey] = function (opts) {
    return (
      t.is(aliasName, this.node, opts) ||
      originalProtoCheck.call(this, this.node, opts)
    );
  };
});

// Adds a one time patch to the scope collector visitors to include
// Marko bindings for params and tag vars.
const originalCrawl = Scope.prototype.crawl;
Scope.prototype.crawl = function () {
  const path = this.path;
  const originalTraverse = path.traverse;
  path.traverse = function (visitor) {
    Object.assign(
      traverse.explode(visitor),
      traverse.explode({
        MarkoTagBody(body) {
          for (const param of body.get("params")) {
            body.scope.registerBinding("param", param);
          }
        },
        MarkoTag(tag) {
          if (tag.has("var")) {
            tag.scope.registerBinding("local", tag.get("var"), tag);
          }
        }
      })
    );

    path.traverse = originalTraverse;
    return originalTraverse.apply(this, arguments);
  };

  Scope.prototype.crawl = originalCrawl;
  originalCrawl.apply(this, arguments);
};
