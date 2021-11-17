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
const patchedVisitors = new WeakSet();

Scope.prototype.crawl = function () {
  const path = this.path;
  const originalTraverse = path.traverse;
  path.traverse = function (visitor, state) {
    state.hoistableTagVarsByScope = new Map();
    path.traverse = originalTraverse;

    if (!patchedVisitors.has(visitor)) {
      patchedVisitors.add(visitor);
      Object.assign(
        traverse.explode(visitor),
        traverse.explode({
          MarkoTagBody(body) {
            for (const param of body.get("params")) {
              body.scope.registerBinding("param", param);
            }
          },
          MarkoTag(tag, state) {
            const tagVar = tag.get("var");
            if (tagVar.node) {
              tag.scope.registerBinding("local", tagVar, tag);
              for (const name in tagVar.getBindingIdentifiers()) {
                let curScope = tag.scope;
                const binding = curScope.getBinding(name);

                while ((curScope = curScope.parent)) {
                  const hoistableTagVars =
                    state.hoistableTagVarsByScope.get(curScope);

                  if (hoistableTagVars) {
                    hoistableTagVars[name] = hoistableTagVars[name]
                      ? true
                      : binding;
                  } else {
                    state.hoistableTagVarsByScope.set(curScope, {
                      [name]: binding
                    });
                  }
                }
              }
            }
          }
        })
      );
    }

    this.traverse(visitor, state);

    if (state.references.length) {
      const movedBindings = new Map();
      for (const ref of state.references) {
        const { name } = ref.node;
        let curScope = ref.scope;
        if (curScope.hasBinding(name)) continue;

        do {
          const hoistableBinding =
            state.hoistableTagVarsByScope.get(curScope)?.[name];

          if (hoistableBinding) {
            if (hoistableBinding === true) {
              throw ref.buildCodeFrameError(
                "Ambiguous reference, variable was defined in multiple places and was not shadowed."
              );
            }

            const movedBinding = movedBindings.get(hoistableBinding);
            if (
              !movedBinding ||
              getScopeDepth(movedBinding) < getScopeDepth(curScope)
            ) {
              movedBindings.set(hoistableBinding, curScope);
            }
          }
        } while ((curScope = curScope.parent));
      }

      for (const [binding, scope] of movedBindings) {
        binding.scope.moveBindingTo(binding.identifier.name, scope);
      }
    }
  };

  originalCrawl.call(this);
  path.traverse = originalTraverse;
};

function getScopeDepth(scope) {
  let depth = 0;
  let cur = scope;
  while ((cur = cur.parent)) depth++;
  return depth;
}
