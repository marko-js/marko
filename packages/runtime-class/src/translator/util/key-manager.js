import { types as t } from "@marko/compiler";
import {
  isLoopTag,
  isTransparentTag,
  normalizeTemplateString,
} from "@marko/compiler/babel-utils";
const KeyManagerLookup = new WeakMap();

/**
 * @returns {KeyManager}
 */
export function getKeyManager(path) {
  const { hub } = path;
  return (
    KeyManagerLookup.get(hub) ||
    KeyManagerLookup.set(hub, new KeyManager()).get(hub)
  );
}

export function hasAutoKey(path) {
  const key = path.get("key").node;
  return Boolean(key && key._isAutoKey);
}

export function hasUserKey(path) {
  return path.node._hasUserKey;
}

class KeyManager {
  constructor() {
    this._nextKey = 0;
  }

  nextKey() {
    return Object.assign(t.stringLiteral(String(this._nextKey++)), {
      _isAutoKey: true,
    });
  }

  resolveKey(path) {
    if (isLoopTag(path)) {
      // Record the first child key if found under a loop.
      const firstChildTag = path
        .get("body.body")
        .find((child) => child.isMarkoTag());
      const firstChildKey = firstChildTag && getUserKey(firstChildTag);

      if (firstChildKey) {
        const keyValueIdentifier = path.scope.generateUidIdentifier("keyValue");
        firstChildTag.set("key", keyValueIdentifier);
        firstChildTag.insertBefore(
          t.variableDeclaration("const", [
            t.variableDeclarator(keyValueIdentifier, firstChildKey),
          ]),
        );

        path.set("keyValue", keyValueIdentifier);
        path.get("body").scope.crawl();
      }
      return;
    }

    if (isTransparentTag(path)) {
      return;
    }

    if (getUserKey(path)) {
      return;
    }

    const parentKeyScope = getParentKeyScope(path);
    const autoKey = path.get("key").node || this.nextKey();
    path.set(
      "key",
      parentKeyScope
        ? t.binaryExpression("+", autoKey, parentKeyScope)
        : autoKey,
    );
  }
}

function getParentKeyScope(path) {
  const parentLoopTag = path.findParent(isLoopTag);
  return parentLoopTag && getKeyScope(parentLoopTag);
}

function getKeyScope(path) {
  const existingKeyScope = path.get("keyScope").node;
  if (existingKeyScope) {
    return existingKeyScope;
  }

  const keyScopeIdentifier = path.scope.generateUidIdentifier("keyScope");
  const firstChildKeyValue = path.get("keyValue").node;

  if (firstChildKeyValue) {
    const valuePath = path
      .get("body")
      .scope.getOwnBinding(firstChildKeyValue.name).path;
    const declarationPath = valuePath.parentPath;
    declarationPath.pushContainer(
      "declarations",
      t.variableDeclarator(
        keyScopeIdentifier,
        normalizeTemplateString`[${firstChildKeyValue}]`,
      ),
    );
  } else {
    let keyValue;

    if (path.get("name.value").node === "for") {
      if (path.node.attributes.some((attr) => attr.name === "of")) {
        keyValue = path.node.body.params[1];
      } else {
        keyValue = path.node.body.params[0];
      }
    }

    if (!keyValue) {
      const keyValueIdentifier = path.scope.generateUidIdentifier("keyValue");
      path.insertBefore(
        t.variableDeclaration("let", [
          t.variableDeclarator(keyValueIdentifier, t.numericLiteral(0)),
        ]),
      );

      keyValue = t.updateExpression("++", keyValueIdentifier);
    }

    const parentKeyScope = getParentKeyScope(path);
    if (parentKeyScope) {
      keyValue = t.binaryExpression("+", keyValue, parentKeyScope);
    }

    const keyScopeDecl = t.variableDeclaration("const", [
      t.variableDeclarator(
        keyScopeIdentifier,
        normalizeTemplateString`[${keyValue}]`,
      ),
    ]);

    if (path.node.attributeTags.length) {
      path.unshiftContainer("attributeTags", keyScopeDecl);
    } else {
      path.get("body").unshiftContainer("body", keyScopeDecl);
    }
  }

  path.set("keyScope", keyScopeIdentifier);
  return keyScopeIdentifier;
}

function getUserKey(path) {
  if (hasAutoKey(path)) {
    return undefined;
  }

  let key = path.get("key").node;
  if (key === undefined) {
    const keyAttr = path
      .get("attributes")
      .find((attr) => attr.get("name").node === "key");

    if (keyAttr) {
      key = normalizeTemplateString`@${keyAttr.get("value").node}`;
      path.node._hasUserKey = true;
      keyAttr.remove();
    } else {
      key = null;
    }

    path.set("key", key);
  }

  return key;
}
