import { types as t } from "@marko/babel-types";
import { isNativeTag, getTagDef, isLoopTag } from "@marko/babel-utils";

export const staticNodes = new WeakSet();

export const visitor = {
  MarkoText(path) {
    staticNodes.add(path.node);
  },
  MarkoPlaceholder(path) {
    if (path.node.escape) {
      const { confident } = path.get("value").evaluate();
      if (confident) staticNodes.add(path.node);
    }
  },
  MarkoTag: {
    enter(path) {
      // needed to handle global keys on elements that don't have specific key attributes
      if (isLoopTag(path)) path.skip();
    },
    exit(path) {
      // check name
      let isStatic =
        isNativeTag(path) && !path.node.params && !path.node.arguments;

      const tagDef = getTagDef(path);
      isStatic = isStatic && !tagDef.codeGeneratorModulePath;

      // check attributes
      isStatic =
        isStatic &&
        path.get("attributes").every(attr => {
          if (
            !t.isMarkoAttribute(attr) ||
            attr.node.arguments ||
            attr.node.modifier
          )
            return false;

          const attrValue = attr.get("value");
          const exclude =
            t.isObjectExpression(attrValue) ||
            t.isArrayExpression(attrValue) ||
            t.isRegExpLiteral(attrValue);
          if (exclude) return false;
          const { confident } = attrValue.evaluate();
          return confident;
        });

      // check children
      isStatic =
        isStatic &&
        path
          .get("body")
          .get("body")
          .every(t => staticNodes.has(t.node));
      if (isStatic) staticNodes.add(path.node);
    }
  }
};
