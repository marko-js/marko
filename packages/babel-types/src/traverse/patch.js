import "../types/patch";

import * as t from "@babel/types";
import Binding from "@babel/traverse/lib/scope/binding";
import traverse, { NodePath, Scope } from "@babel/traverse";
import { MARKO_TYPES, MARKO_ALIAS_TYPES } from "../types/definitions";

MARKO_TYPES.forEach(typeName => {
  const checkKey = `is${typeName}`;
  const assertKey = `assert${typeName}`;
  const checkFn = t[checkKey];
  const assertFn = t[assertKey];
  NodePath.prototype[checkKey] = function(opts) {
    return checkFn(this.node, opts);
  };
  NodePath.prototype[assertKey] = function(opts) {
    assertFn(this.node, opts);
  };
});

MARKO_ALIAS_TYPES.forEach(aliasName => {
  const checkKey = `is${aliasName}`;
  const originalProtoCheck = NodePath.prototype[checkKey];
  NodePath.prototype[checkKey] = function(opts) {
    return (
      t.is(aliasName, this.node, opts) ||
      originalProtoCheck.call(this, this.node, opts)
    );
  };
});

// Adds a one time patch to the scope collector visitors to include
// Marko bindings for params and tag vars.
const originalCrawl = Scope.prototype.crawl;
Scope.prototype.crawl = function() {
  const path = this.path;
  const originalTraverse = path.traverse;
  path.traverse = function(visitor) {
    Object.assign(
      traverse.explode(visitor),
      traverse.explode({
        Marko({ scope }) {
          if (!scope.bindings["input"]) {
            // If we found a Marko node in the AST then we register "input"
            // as a top level binding, rather than leaving it to be a global variable.
            // This allows us to gather references to it during the crawl.
            scope.bindings["input"] = new Binding({
              path: scope.path,
              identifier: t.identifier("input"),
              kind: "global",
              scope
            });
          }
        },
        MarkoTag(tag) {
          const bodyScope = tag.get("body").getScope();
          const tagVar = tag.get("var");
          const params = tag.get("params");

          if (params.length) {
            for (const param of params) {
              bodyScope.registerBinding("param", param);
            }
          }

          if (tagVar.node) {
            tag.scope.getBlockParent().registerBinding("local", tagVar);
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
