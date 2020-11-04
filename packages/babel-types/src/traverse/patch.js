import "../types/patch";

import * as t from "@babel/types";
import { NodePath, Scope } from "@babel/traverse";
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
