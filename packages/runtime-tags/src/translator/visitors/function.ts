import { types as t } from "@marko/compiler";
import { getFile, getTemplateId } from "@marko/compiler/babel-utils";

import { generateUid } from "../util/generate-uid";
import { getAttributeTagParent } from "../util/get-parent-tag";
import {
  getDeclarationRoot,
  getExprRoot,
  getFnRoot,
  getMarkoRoot,
  type MarkoExprRootPath,
} from "../util/get-root";
import { isCoreTagName } from "../util/is-core-tag";
import isInvokedFunction from "../util/is-invoked-function";
import {
  type Binding,
  getCanonicalExtra,
  type RegisteredFnExtra,
} from "../util/references";
import { getSection } from "../util/sections";
import { getBindingSerializeReason } from "../util/serialize-reasons";
import { createProgramState } from "../util/state";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
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
    if (fn !== getFnRoot(fn)) return;

    const exprRoot = getExprRoot(fn);
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) return;

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
      if (refs === true) {
        registerFunction(fnExtra);
      } else if (refs.size) {
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
    let shouldRegister = false;
    for (const exprExtra of exprExtras) {
      const refExtra = getCanonicalExtra(exprExtra);
      if (seenExtras.has(refExtra)) continue;
      seenExtras.add(refExtra);

      if (refExtra.downstream) {
        const { bindings, excludeProperties } = refExtra.downstream;
        if (
          Array.isArray(bindings)
            ? bindings.some((binding) => couldSerializeBinding(binding))
            : couldSerializeBinding(bindings, excludeProperties)
        ) {
          shouldRegister = true;
          break;
        }
      }
    }

    if (shouldRegister) {
      registerFunction(fnExtra);
    }
  }
}

function couldSerializeBinding(
  binding: Binding,
  excludeProperties?: Set<string> | undefined,
) {
  if (getBindingSerializeReason(binding.section, binding)) {
    return true;
  }

  for (const [name, propBinding] of binding.propertyAliases) {
    if (
      !excludeProperties?.has(name) &&
      getBindingSerializeReason(propBinding.section, propBinding)
    ) {
      return true;
    }
  }

  return false;
}

function canIgnoreRegister(
  markoRoot: MarkoExprRootPath,
  exprRoot: t.NodePath<t.Node>,
) {
  return (
    // bail within a placeholder
    markoRoot.isMarkoPlaceholder() ||
    // bail within a server only statement
    (markoRoot.isMarkoScriptlet() && markoRoot.node.target === "server") ||
    // bail within the tag name
    (markoRoot.isMarkoTag() && markoRoot.node.name == exprRoot.node) ||
    (isMarkoAttribute(markoRoot) &&
      ((analyzeTagNameType(markoRoot.parentPath) === TagNameType.NativeTag &&
        // TODO: all native tag functions should avoid registration but right now change handlers require it.
        /^on[A-Z-]/.test(markoRoot.node.name)) ||
        isCoreTagName(markoRoot.parentPath, "script") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for")))
  );
}

function getStaticDeclRefs(
  fnExtra: RegisteredFnExtra,
  path: t.NodePath<t.Node>,
  refs = new Set<t.NodeExtra>(),
): Set<t.NodeExtra> | true {
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
          if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) continue;
          if (markoRoot.isMarkoScriptlet()) {
            if (getStaticDeclRefs(fnExtra, ref, refs) === true) {
              return true;
            }
            continue;
          }

          const tag = getTagFromMarkoRoot(markoRoot);
          if (!tag) continue;
          if (isCoreTagName(tag, "let")) return true;

          switch (analyzeTagNameType(tag)) {
            case TagNameType.DynamicTag:
            case TagNameType.NativeTag:
              // Passing a function to a dynamic tag could always be potentially serialized.
              // Native tag event handlers are skipped in the `canIgnoreRegister`
              // if it's anything else we need to unconditionally serialize.
              return true;
            case TagNameType.AttributeTag:
              if (
                analyzeTagNameType(getAttributeTagParent(tag)) ===
                TagNameType.DynamicTag
              ) {
                return true;
              }
              break;
          }

          refs.add((exprRoot.node.extra ??= {}));
        }
      }
    }
  }

  return refs;
}

function getTagFromMarkoRoot(
  markoRoot: MarkoExprRootPath,
): t.NodePath<t.MarkoTag> | undefined {
  let cur = markoRoot;
  do {
    if (cur.isMarkoTag()) return cur;
    cur = cur.parentPath as MarkoExprRootPath;
  } while (cur);
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
