import { types as t } from "@marko/compiler";
import {
  getFile,
  getTemplateId,
  isNativeTag,
} from "@marko/compiler/babel-utils";

import { generateUid } from "../util/generate-uid";
import {
  getDeclarationRoot,
  getExprRoot,
  getFnRoot,
  getMarkoRoot,
} from "../util/get-root";
import { isCoreTagName } from "../util/is-core-tag";
import isInvokedFunction from "../util/is-invoked-function";
import { getCanonicalExtra, type RegisteredFnExtra } from "../util/references";
import { getSection } from "../util/sections";
import { createProgramState } from "../util/state";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface FunctionDeclarationExtra {
    registerId?: string;
    name?: string;
  }

  export interface FunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }

  export interface ArrowFunctionExpressionExtra {
    registerId?: string;
    name?: string;
  }
}

const [getReferencesByFn] = createProgramState(
  () => new Map<RegisteredFnExtra, Set<t.NodeExtra>>(),
);

export default {
  analyze(fn) {
    // bail on closures
    if (fn !== getFnRoot(fn)) {
      return;
    }

    const exprRoot = getExprRoot(fn);
    const markoRoot = getMarkoRoot(exprRoot);

    if (
      !markoRoot ||
      // bail within a placeholder
      markoRoot.isMarkoPlaceholder() ||
      // bail within a server only statement
      (markoRoot.isMarkoScriptlet() && markoRoot.node.target === "server") ||
      // bail within the tag name
      (markoRoot.isMarkoTag() && markoRoot.node.name == exprRoot.node)
    ) {
      return;
    }

    if (
      isMarkoAttribute(markoRoot) &&
      ((isNativeTag(markoRoot.parentPath) &&
        // TODO: all native tag functions should avoid registration but right now change handlers require it.
        /^on[A-Z-]/.test(markoRoot.node.name)) ||
        isCoreTagName(markoRoot.parentPath, "script") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for"))
    ) {
      // Native tags, script, lifecycle, and for loops aren't registered here since handle pulling in the function themselves.
      return;
    }

    const { node } = fn;
    const section = getSection(fn);
    const fnExtra = (node.extra ??= {}) as RegisteredFnExtra;
    fnExtra.section = section;
    fnExtra.name =
      (node as t.FunctionExpression).id?.name ||
      (isMarkoAttribute(markoRoot)
        ? markoRoot.node.default
          ? t.toIdentifier(
              markoRoot.parentPath.has("var")
                ? markoRoot.parentPath.get("var")
                : markoRoot.parentPath.get("name"),
            )
          : markoRoot.node.name
        : t.isVariableDeclarator(fn.parent) && t.isIdentifier(fn.parent.id)
          ? fn.parent.id.name
          : t.isObjectMethod(node) && t.isIdentifier(node.key)
            ? node.key.name
            : "anonymous");

    if (markoRoot.isMarkoScriptlet()) {
      const refs = getStaticDeclRefs(fnExtra, fn);
      if (refs.size) {
        getReferencesByFn().set(fnExtra, refs);
      }
    } else {
      registerFunction(fnExtra);
    }
  },
} satisfies TemplateVisitor<t.Function>;

export function finalizeFunctionRegistry() {
  for (const [fnExtra, exprExtras] of getReferencesByFn()) {
    const seenExtras = new Set<t.NodeExtra>();
    let shouldSerialize = false;
    for (const exprExtra of exprExtras) {
      const refExtra = getCanonicalExtra(exprExtra);
      if (seenExtras.has(refExtra)) continue;
      seenExtras.add(refExtra);
      // TODO: need to check if this expression is truly serialized.
      shouldSerialize = true;
      break;
    }

    if (shouldSerialize) {
      registerFunction(fnExtra);
    }
  }
}

function getStaticDeclRefs(
  fnExtra: RegisteredFnExtra,
  path: t.NodePath<t.Node>,
  refs = new Set<t.NodeExtra>(),
) {
  const decl = getDeclarationRoot(path);
  if (decl) {
    const ids = decl.getOuterBindingIdentifiers();
    if (ids) {
      for (const name in ids) {
        const binding = decl.scope.getBinding(name);
        if (!binding) continue;
        for (const ref of binding.referencePaths) {
          if (isInvokedFunction(ref)) continue;
          const exprRoot = getExprRoot(ref);
          const markoRoot = getMarkoRoot(exprRoot);
          if (!markoRoot) continue;
          if (markoRoot.isMarkoScriptlet()) {
            if (markoRoot.node.target !== "server") {
              getStaticDeclRefs(fnExtra, ref, refs);
            }
            continue;
          }

          if (
            markoRoot.isMarkoPlaceholder() ||
            (markoRoot.isMarkoTag() && markoRoot.node.name === exprRoot.node)
          ) {
            continue;
          }

          if (isMarkoAttribute(markoRoot)) {
            if (isNativeTag(markoRoot.parentPath)) {
              if (/^on[A-Z-]/.test(markoRoot.node.name)) {
                continue;
              }
            }
          }

          refs.add((exprRoot.node.extra ??= {}));
        }
      }
    }
  }

  return refs;
}

function registerFunction(fnExtra: RegisteredFnExtra) {
  const {
    markoOpts,
    path: program,
    opts: { filename },
  } = getFile();
  program.node.extra.isInteractive = true;
  fnExtra.name = generateUid(fnExtra.name);
  fnExtra.registerId = getTemplateId(
    markoOpts,
    filename as string,
    `${fnExtra.section.id}/${fnExtra.name.slice(1)}`,
  );
}

function isMarkoAttribute(
  path: t.NodePath | undefined | null,
): path is t.NodePath<t.MarkoAttribute> & {
  parent: t.MarkoTag;
  parentPath: t.NodePath<t.MarkoTag>;
} {
  return path ? path.isMarkoAttribute() : false;
}
