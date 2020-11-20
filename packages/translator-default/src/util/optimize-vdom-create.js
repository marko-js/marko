import { decode } from "he";
import { types as t } from "@marko/babel-types";
import {
  importDefault,
  isNativeTag,
  isLoopTag,
  getTagDef
} from "@marko/babel-utils";
import { getKeyManager } from "./key-manager";
import write from "./vdom-out-write";
import { tagArguments } from "../tag/native-tag[vdom]";
import directives from "../tag/attribute/directives";

const staticNodes = new WeakSet();

const mergeStaticCreateVisitor = {
  MarkoText(path, state) {
    const { node } = path;
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [t.stringLiteral(decode(node.value))]
    );
  },
  MarkoPlaceholder(path, state) {
    const { value } = path.get("value").evaluate();
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [t.stringLiteral(value != null ? value.toString() : "")]
    );
  },
  MarkoTag(path, state) {
    if (path.node.attributes.find(a => a.name === "key"))
      getKeyManager(path).resolveKey(path);
    const writeArgs = tagArguments(path, true);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("e")),
      writeArgs
    );
  }
};

const analyzeStaticVisitor = {
  MarkoText(path) {
    staticNodes.add(path.node);
  },
  MarkoPlaceholder(path) {
    if (path.node.escape) {
      const { confident } = path.get("value").evaluate();
      if (confident) {
        staticNodes.add(path.node);
      }
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
            attr.node.modifier ||
            directives[attr.node.name]
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

export function optimizeStaticVDOM(path) {
  const {
    hub: { file }
  } = path;

  if (
    !shouldRun(file.markoOpts) ||
    !staticNodes.has(path.node) ||
    staticNodes.has(path.parentPath.parentPath.node)
  ) {
    return;
  }

  const identifier = path.scope.generateUidIdentifier("marko_node");
  const writeArgs = tagArguments(path, true);
  const state = {
    currentRoot: t.callExpression(
      importDefault(
        file,
        "marko/src/runtime/vdom/helpers/v-element",
        "marko_createElement"
      ),
      writeArgs
    )
  };

  path.traverse(mergeStaticCreateVisitor, state);

  const d = t.variableDeclaration("const", [
    t.variableDeclarator(identifier, state.currentRoot)
  ]);
  file.path.node.body.push(d);
  path.replaceWith(write("n", identifier, t.identifier("component")));
  path.skip();
}

export function analyzeStaticVDOM(path) {
  if (shouldRun(path.hub.file.markoOpts)) {
    path.traverse(analyzeStaticVisitor);
  }
}

function shouldRun(markoOpts) {
  return markoOpts.optimize && markoOpts.output !== "html";
}
