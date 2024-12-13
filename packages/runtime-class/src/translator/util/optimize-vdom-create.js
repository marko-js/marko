import { types as t } from "@marko/compiler";
import {
  computeNode,
  getTagDef,
  importDefault,
  isLoopTag,
  isNativeTag,
} from "@marko/compiler/babel-utils";
import { decode } from "he";

import translateAttributes from "../tag/native-tag[vdom]/attributes";
import { getKeyManager, hasUserKey } from "./key-manager";
import write from "./vdom-out-write";

const skipDirectives = new Set([
  "key",
  "w-bind",
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
      [t.stringLiteral(decode(node.value))],
    );
  },
  MarkoPlaceholder(path, state) {
    const computed = computeNode(path.node.value);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("t")),
      [
        t.stringLiteral(
          computed && computed.value != null ? `${computed.value}` : "",
        ),
      ],
    );
  },
  MarkoTag(path, state) {
    getKeyManager(path).resolveKey(path);
    state.currentRoot = t.callExpression(
      t.memberExpression(state.currentRoot, t.identifier("e")),
      getConstElementArgs(path),
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
        !path.node.attributeTags.length &&
        !path.node.body.attributeTags &&
        !path.node.body.params.length &&
        !path.node.arguments &&
        !hasUserKey(path);

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
              ),
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
  const state = {
    currentRoot: t.callExpression(
      importDefault(
        file,
        "marko/src/runtime/vdom/helpers/const-element.js",
        "marko_constElement",
      ),
      getConstElementArgs(path),
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

function getConstElementArgs(path) {
  const { node } = path;
  return [
    node.name,
    translateAttributes(path, path.get("attributes")),
    t.numericLiteral(node.body.body.length),
  ];
}
