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
