import { types as t } from "@marko/compiler";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

interface ReferenceMeta {
  state?: boolean;
  input?: { [x: string]: boolean };
}

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    references?: ReferenceMeta;
  }

  export interface MarkoTagExtra {
    references?: {
      var?: ReferenceMeta;
      name?: ReferenceMeta;
      // ResourceMeta as tracked from a child
      state?: boolean;
      input?: { [x: string]: boolean };
    };
  }

  export interface MarkoTagBodyExtra {
    references?: {
      params?: ReferenceMeta[];
    };
  }

  export interface MarkoAttributeExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }

  export interface MarkoSpreadAttributeExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }

  export interface MarkoPlaceholderExtra {
    references?: {
      value?: ReferenceMeta;
    };
  }
}

export default {
  Identifier(identifier) {
    if (
      identifier.node.name !== "input" ||
      identifier.scope.hasBinding(identifier.node.name)
    ) {
      return;
    }

    let curPath = identifier as t.NodePath<t.Node>;
    let inputPath = "input";

    while (true) {
      const { parentPath } = curPath;

      if (parentPath.isMemberExpression()) {
        const property = (parentPath as t.NodePath<t.MemberExpression>).get(
          "property"
        );
        if (property.isStringLiteral()) {
          inputPath = `${inputPath}.${property.node.value}`;
        } else if (property.isIdentifier()) {
          inputPath = `${inputPath}.${property.node.name}`;
        } else {
          // Bail when computed property used.
          break;
        }
      } else {
        // TODO handle destructuring
        break;
      }

      curPath = parentPath;
    }

    const exprRoot = getExprRoot(curPath);
    const tagMeta = getMetaForTag(exprRoot);
    const templateMeta = getMetaForTemplate(exprRoot);
    const inputsForExpr = (getMetaForExpr(exprRoot).input ??= {});
    const inputsForTag = tagMeta ? (tagMeta.input ??= {}) : inputsForExpr;
    const inputsForTemplate = (templateMeta.input ??= {});
    inputsForTemplate[inputPath] = inputsForTag[inputPath] = inputsForExpr[
      inputPath
    ] = true;
  },
  MarkoTag(tag) {
    // Mark any marko nodes that use bindings introduced by this tag as stateful.
    // TODO: should special case let/const/tag and friends and add logic for child template analysis
    // to only mark things as stateful when needed.

    if (tag.has("var")) {
      for (const name in tag.get("var").getBindingIdentifiers()) {
        for (const refPath of tag.scope.getBinding(name)!.referencePaths) {
          const exprRoot = getExprRoot(refPath);
          const exprMeta = getMetaForExpr(exprRoot);
          const tagMeta = getMetaForTag(exprRoot) ?? exprMeta;
          const templateMeta = getMetaForTemplate(exprRoot);
          templateMeta.state = tagMeta.state = exprMeta.state = true;
        }
      }
    }

    const body = tag.get("body");
    if (body.get("params").length) {
      for (const name in body.getBindingIdentifiers()) {
        for (const refPath of body.scope.getBinding(name)!.referencePaths) {
          const exprRoot = getExprRoot(refPath);
          const exprMeta = getMetaForExpr(exprRoot);
          const tagMeta = getMetaForTag(exprRoot) ?? exprMeta;
          const templateMeta = getMetaForTemplate(exprRoot);
          templateMeta.state = tagMeta.state = exprMeta.state = true;
        }
      }
    }
  }
} as t.Visitor;

function getMetaForExpr(expr: ReturnType<typeof getExprRoot>): ReferenceMeta {
  let references = ((expr.parentPath.node.extra ??= {}).references ??= {});

  if (expr.listKey) {
    references = references[expr.listKey] ??= [];
  }

  return (references[expr.key] ??= {});
}

function getMetaForTag(expr: ReturnType<typeof getExprRoot>) {
  let { parentPath } = expr;

  if (parentPath.isMarkoPlaceholder()) {
    return;
  }

  if (!parentPath.isMarkoTag()) {
    parentPath = parentPath.parentPath as typeof parentPath;
  }

  return ((parentPath.node.extra ??= {}).references ??= {}) as ReferenceMeta;
}

function getMetaForTemplate(path: t.NodePath<t.Node>) {
  return (path.hub.file.path.node.extra.references ??= {}) as ReferenceMeta;
}

function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarkoPath(curPath.parentPath)) {
    curPath = curPath.parentPath;
  }

  return curPath as t.NodePath<t.Node> & {
    parentPath: MarkoExprRootPath;
  };
}

function isMarkoPath(path: t.NodePath<any>): path is MarkoExprRootPath {
  switch (path.node.type) {
    case "MarkoTag":
    case "MarkoTagBody":
    case "MarkoAttribute":
    case "MarkoSpreadAttribute":
    case "MarkoPlaceholder":
      return true;
    default:
      return false;
  }
}
