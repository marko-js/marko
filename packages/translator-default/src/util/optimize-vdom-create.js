import { decode } from "he";
import { types as t } from "@marko/compiler";
import {
  computeNode,
  getTagDef,
  importDefault,
  isLoopTag,
  isNativeTag,
} from "@marko/babel-utils";
import { getKeyManager } from "./key-manager";
import write from "./vdom-out-write";
import { tagArguments } from "../tag/native-tag[vdom]";

const skipDirectives = new Set([
  "no-update",
  "no-update-if",
  "no-update-body",
  "no-update-body-if",
]);
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
    const computed = computeNode(path.node.value);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [
        t.stringLiteral(
          computed && computed.value != null ? `${computed.value}` : ""
        ),
      ]
    );
  },
  MarkoTag(path, state) {
    getKeyManager(path).resolveKey(path);
    const writeArgs = tagArguments(path, true);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("e")),
      writeArgs
    );
  },
};

const analyzeStaticVisitor = {
  MarkoText(path) {
    staticNodes.add(path.node);
  },
  MarkoPlaceholder(path) {
    if (path.node.escape) {
      const computed = computeNode(path.node.value);
      if (computed) {
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
        isNativeTag(path) &&
        !path.node.body.params.length &&
        !path.node.arguments;

      const tagDef = getTagDef(path);
      isStatic = isStatic && !tagDef.translator;

      // check attributes
      isStatic =
        isStatic &&
        path
          .get("attributes")
          .every(
            (attr) =>
              t.isMarkoAttribute(attr) &&
              !(
                attr.node.arguments ||
                attr.node.modifier ||
                skipDirectives.has(attr.node.name) ||
                !computeNode(attr.node.value)
              )
          );

      // check children
      isStatic =
        isStatic &&
        path
          .get("body")
          .get("body")
          .every((t) => staticNodes.has(t.node));

      if (isStatic) staticNodes.add(path.node);
    },
  },
};

export function optimizeStaticVDOM(path) {
  const {
    hub: { file },
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
        "marko/src/runtime/vdom/helpers/v-element.js",
        "marko_createElement"
      ),
      writeArgs
    ),
  };

  path.traverse(mergeStaticCreateVisitor, state);

  const d = t.variableDeclaration("const", [
    t.variableDeclarator(identifier, state.currentRoot),
  ]);
  file.path.node.body.push(d);
  path.replaceWith(write("n", identifier, file._componentInstanceIdentifier));
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
