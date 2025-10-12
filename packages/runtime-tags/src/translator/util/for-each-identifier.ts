import type { types as t } from "@marko/compiler";
export function forEachIdentifier(
  node: t.Node,
  cb: (identifier: t.Identifier) => void,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        switch (prop.type) {
          case "ObjectProperty":
            if (prop.value.type === "AssignmentPattern") {
              forEachIdentifier(prop.value.left, cb);
            } else {
              forEachIdentifier(prop.value, cb);
            }
            break;
          case "RestElement":
            forEachIdentifier(prop.argument, cb);
            break;
        }
      }
      break;
    case "ArrayPattern":
      for (const el of node.elements) {
        if (el != null) {
          switch (el.type) {
            case "RestElement":
              forEachIdentifier(el.argument, cb);
              break;
            case "AssignmentPattern":
              forEachIdentifier(el.left, cb);
              break;
            default:
              forEachIdentifier(el, cb);
              break;
          }
        }
      }
      break;
    case "Identifier":
      cb(node);
      break;
  }
}

export function forEachIdentifierPath(
  nodePath: t.NodePath<any>,
  cb: (identifier: t.NodePath<t.Identifier>) => void,
) {
  if (nodePath.isIdentifier()) {
    cb(nodePath);
  } else if (nodePath.isObjectPattern()) {
    for (const prop of nodePath.get("properties")) {
      if (prop.isObjectProperty()) {
        const value = prop.get("value");
        if (value.isAssignmentPattern()) {
          forEachIdentifierPath(value.get("left"), cb);
        } else {
          forEachIdentifierPath(value, cb);
        }
      } else if (prop.isRestElement()) {
        forEachIdentifierPath(prop.get("argument"), cb);
      }
    }
  } else if (nodePath.isArrayPattern()) {
    for (const el of nodePath.get("elements")) {
      if (el) {
        if (el.isRestElement()) {
          forEachIdentifierPath(el.get("argument"), cb);
        } else if (el.isAssignmentPattern()) {
          forEachIdentifierPath(el.get("left"), cb);
        } else {
          forEachIdentifierPath(el, cb);
        }
      }
    }
  }
}

export function forEachAssignPattern(
  node: t.Node,
  cb: (pattern: t.AssignmentPattern) => void,
) {
  switch (node.type) {
    case "ObjectPattern":
      for (const prop of node.properties) {
        switch (prop.type) {
          case "ObjectProperty":
            forEachAssignPattern(prop.value, cb);
            break;
          case "RestElement":
            forEachAssignPattern(prop.argument, cb);
            break;
        }
      }
      break;
    case "ArrayPattern":
      for (const el of node.elements) {
        if (el != null) {
          switch (el.type) {
            case "RestElement":
              forEachAssignPattern(el.argument, cb);
              break;
            default:
              forEachAssignPattern(el, cb);
              break;
          }
        }
      }
      break;
    case "AssignmentPattern":
      forEachAssignPattern(node.left, cb);
      cb(node);
      break;
  }
}
