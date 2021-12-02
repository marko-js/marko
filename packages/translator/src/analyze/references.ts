import type { types as t } from "@marko/compiler";

type MarkoExprRootPath = t.NodePath<
  | t.MarkoTag
  | t.MarkoTagBody
  | t.MarkoAttribute
  | t.MarkoSpreadAttribute
  | t.MarkoPlaceholder
>;

interface ReferenceMeta {
  bindings?: string | Set<string>;
}

declare module "@marko/compiler/dist/types" {
  export interface MarkoTagExtra {
    vars?: string | Set<string>;
    references?: {
      var?: ReferenceMeta;
      name?: ReferenceMeta;
    };
  }

  export interface MarkoTagBodyExtra {
    params?: string | Set<string>;
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
  MarkoTag: {
    exit(tag) {
      if (tag.has("var")) {
        for (const name in tag.get("var").getBindingIdentifiers()) {
          addReferenceMeta(name, tag.scope);
        }
      }
    },
  },
  MarkoTagBody(body) {
    if (body.get("params").length) {
      for (const name in body.getBindingIdentifiers()) {
        addReferenceMeta(name, body.scope);
      }
    }
  },
} as t.Visitor;

function getMetaForExpr(expr: ReturnType<typeof getExprRoot>): ReferenceMeta {
  let references = ((expr.parentPath.node.extra ??= {}).references ??=
    {}) as any;

  if (expr.listKey) {
    references = references[expr.listKey] ??= [];
  }

  return (references[expr.key] ??= {});
}

function getExprRoot(path: t.NodePath<t.Node>) {
  let curPath = path;
  while (!isMarkoPath(curPath.parentPath!)) {
    curPath = curPath.parentPath!;
  }

  return curPath as t.NodePath<t.Node> & {
    parentPath: MarkoExprRootPath;
  };
}

function addReferenceMeta(name: string, scope: t.Scope) {
  for (const refPath of scope.getBinding(name)!.referencePaths) {
    const exprRoot = getExprRoot(refPath);
    const exprMeta = getMetaForExpr(exprRoot);

    if (exprMeta.bindings) {
      if (typeof exprMeta.bindings === "string") {
        if (exprMeta.bindings !== name) {
          exprMeta.bindings = new Set([exprMeta.bindings, name]);
        }
      } else {
        exprMeta.bindings.add(name);
      }
    } else {
      exprMeta.bindings = name;
    }
  }
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
