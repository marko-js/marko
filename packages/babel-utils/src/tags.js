import { types as t } from "@marko/babel-types";
import { getTagDefForTagName } from "./taglib";
const TRANSPARENT_TAGS = new Set(["for", "while", "if", "else", "_no-update"]);
const MACROS = new WeakMap();

export function isNativeTag(path) {
  const tagDef = getTagDef(path);
  return (
    tagDef &&
    tagDef.html &&
    (tagDef.htmlType === "custom-element" ||
      (!tagDef.template && !tagDef.renderer))
  );
}

export function isDynamicTag(path) {
  return !t.isStringLiteral(path.node.name);
}

export function isAttributeTag(path) {
  const {
    node: { name }
  } = path;
  return t.isStringLiteral(name) && name.value[0] === "@";
}

export function isTransparentTag(path) {
  const {
    node: { name }
  } = path;
  return t.isStringLiteral(name) && TRANSPARENT_TAGS.has(name.value);
}

export function isMacroTag(path) {
  return Boolean(getMacroIdentifier(path));
}

export function getMacroIdentifier(path) {
  const macros = MACROS.get(path.hub.file);

  if (macros) {
    const {
      node: { name }
    } = path;
    return t.isStringLiteral(name) && macros.get(name.value);
  }
}

export function ___addMacro(file, name) {
  const id = file.scope.generateUidIdentifier(name);
  let macros = MACROS.get(file);
  if (macros) {
    if (macros.get(name)) {
      return false;
    }
  } else {
    MACROS.set(file, (macros = new Map()));
  }

  macros.set(name, id);
  return id;
}

export function getTagDef(path) {
  const {
    node,
    hub: { file }
  } = path;

  if (!node.tagDef) {
    if (isDynamicTag(path) || isMacroTag(path)) {
      node.tagDef = null;
    } else {
      node.tagDef =
        getTagDefForTagName(
          file,
          isAttributeTag(path) ? getFullyResolvedTagName(path) : node.name.value
        ) || null;
    }
  }

  return node.tagDef;
}

export function getFullyResolvedTagName(path) {
  const parts = [];
  let cur;
  do {
    cur = path.node.name.value;

    if (isAttributeTag(path)) {
      parts.push(cur.slice(1));
    } else {
      parts.push(cur || "*");
      break;
    }
  } while ((path = findParentTag(path)));

  return parts.reverse().join(":");
}

export function findParentTag(path) {
  let cur = path.parentPath;

  while (cur.node) {
    if (cur.isMarkoTagBody()) {
      cur = cur.parentPath;
      continue;
    }

    if (!cur.isMarkoTag()) {
      cur = undefined;
      break;
    }

    if (isTransparentTag(cur)) {
      cur = cur.parentPath;
      continue;
    }

    return cur;
  }
}

export function findAttributeTags(path, attributeTags = []) {
  path.get("body.body").forEach(child => {
    if (isAttributeTag(child)) {
      attributeTags.push(child);
    } else if (isTransparentTag(child)) {
      findAttributeTags(child, attributeTags);
    }
  });

  return attributeTags;
}

export function getArgOrSequence(path) {
  const {
    node: { arguments: args }
  } = path;
  const len = args && args.length;

  if (len) {
    if (len > 1) {
      return t.sequenceExpression(args);
    } else {
      return args[0];
    }
  }
}
