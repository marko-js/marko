import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
  loadFileForImport,
  withLoc,
} from "@marko/compiler/babel-utils";

import { generateUid } from "../util/generate-uid";
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
  getAllSerializeReasonsForExtra,
  getCanonicalExtra,
  type RegisteredFnExtra,
} from "../util/references";
import { getSection } from "../util/sections";
import {
  mergeSerializeReasons,
  type SerializeReason,
} from "../util/serialize-reasons";
import { createProgramState } from "../util/state";
import analyzeTagNameType, { TagNameType } from "../util/tag-name-type";
import { traverseFindAwait } from "../util/traverse";
import type { TemplateVisitor } from "../util/visitors";

declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    // Every name an export is reachable by -> its reserved registration.
    registeredExports?: Map<string, ReservedExport>;
  }
}

/** The canonical name a reserved register id is exported under, and its id. */
export interface ReservedExport {
  registerId: string;
  exportName: string;
}

/** A reserved export, plus the template that declares it. */
export interface ResolvedExport extends ReservedExport {
  filename: string;
}

interface ImportedFn extends ResolvedExport {
  node: t.ImportDeclaration;
  local: string;
}

const [getReferencesByFn] = createProgramState(
  () => new Map<RegisteredFnExtra, Set<t.NodeExtra>>(),
);
const [getReferencesByImportedFn] = createProgramState(
  () => new Map<ImportedFn, Set<t.NodeExtra>>(),
);
export default {
  analyze(fn) {
    const awaitNode =
      isMarkoAttribute(fn.parentPath) &&
      t.isFunctionExpression(fn.node) &&
      !fn.node.async &&
      traverseFindAwait(fn.node.body);
    if (awaitNode) {
      const file = getFile();
      const start = file.code.indexOf("await", awaitNode.start ?? 0);
      const highlight =
        start >= 0 && (awaitNode.end == null || start < awaitNode.end)
          ? withLoc(file, t.cloneNode(awaitNode), start, start + 5)
          : awaitNode;
      throw fn.hub.buildError(
        highlight,
        "Attribute methods containing `await` must be `async`. Add `async` before the method name.",
      );
    }

    // bail on closures
    if (fn !== getFnRoot(fn)) return;

    const { node } = fn;

    // Accessors stay exactly as written; they are never registered.
    if (
      (t.isObjectMethod(node) || t.isClassMethod(node)) &&
      (node.kind === "get" || node.kind === "set")
    ) {
      return;
    }

    const exprRoot = getExprRoot(fn);
    (exprRoot.node.extra ??= {}).functionValued = true;
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) return;

    const section = getSection(fn);
    const fnExtra = (node.extra ??= {}) as RegisteredFnExtra;
    fnExtra.section = section;
    fnExtra.name =
      (node as t.FunctionExpression).id?.name ||
      (isMarkoAttribute(markoRoot)
        ? markoRoot.node.default
          ? t.toIdentifier(
              (markoRoot.parentPath.has("var")
                ? markoRoot.parentPath.get("var")
                : markoRoot.parentPath.get("name")
              ).toString(),
            )
          : markoRoot.node.name
        : t.isVariableDeclarator(fn.parent) && t.isIdentifier(fn.parent.id)
          ? fn.parent.id.name
          : t.isObjectMethod(node) && t.isIdentifier(node.key)
            ? node.key.name
            : "anonymous");

    reserveExportRegisterId(fnExtra, fn, markoRoot);

    if (isStaticRoot(markoRoot)) {
      const refs = getStaticDeclRefs(fn);
      if (refs === true) {
        registerFunction(fnExtra, true);
      } else if (refs.size) {
        getReferencesByFn().set(fnExtra, refs);
      }
    } else if (shouldAlwaysRegister(markoRoot)) {
      registerFunction(fnExtra, true);
    } else {
      const refs = new Set([(exprRoot.node.extra ??= {})]);
      // A `<const>` can carry this function (eg an attrs object) into an
      // always-register position such as a dynamic tag spread, so its tag
      // variable's references decide registration like static declarations do.
      if (getConstTagVarRefs(markoRoot, refs) === true) {
        registerFunction(fnExtra, true);
      } else {
        getReferencesByFn().set(fnExtra, refs);
      }
    }
  },
} satisfies TemplateVisitor<t.Function>;

function getConstTagVarRefs(
  markoRoot: MarkoExprRootPath,
  refs: Set<t.NodeExtra>,
  seen = new Set<t.Node>(),
): Set<t.NodeExtra> | true {
  const tag = getTagFromMarkoRoot(markoRoot);
  if (!tag?.node.var || !isCoreTagName(tag, "const") || seen.has(tag.node)) {
    return refs;
  }
  seen.add(tag.node);
  const ids = tag.get("var").getOuterBindingIdentifiers();
  for (const name in ids) {
    const binding = tag.scope.getBinding(name);
    if (binding && addBindingRefs(binding, refs, seen) === true) {
      return true;
    }
  }

  return refs;
}

export function finalizeFunctionRegistry() {
  for (const [fnExtra, exprExtras] of getReferencesByFn()) {
    const reason = resolveSerializeReason(exprExtras);
    if (reason) {
      registerFunction(fnExtra, reason);
    }
  }

  for (const [importedFn, exprExtras] of getReferencesByImportedFn()) {
    if (resolveSerializeReason(exprExtras)) {
      registerImportedFn(importedFn);
    }
  }
}

/**
 * Tracks a function imported from another template that reserved a register id.
 * The importing template registers it (under the reserved id) when its own
 * references reach something serialized.
 */
export function trackImportedFn(
  importDecl: t.NodePath<t.ImportDeclaration>,
  local: string,
  resolved: ResolvedExport,
) {
  const binding = importDecl.scope.getBinding(local);
  if (!binding) return;

  const importedFn: ImportedFn = { ...resolved, node: importDecl.node, local };
  const refs = new Set<t.NodeExtra>();
  if (addBindingRefs(binding, refs, new Set()) === true) {
    registerImportedFn(importedFn);
  } else if (refs.size) {
    getReferencesByImportedFn().set(importedFn, refs);
  }
}

/**
 * Finds the id reserved for an export, following `export ... from` hops. Each
 * template only records the exports it declares, so this resolves on demand:
 * a template in an import cycle is read while it is still analyzing, and would
 * hand out an incomplete map if the ids were pushed ahead of time.
 */
export function resolveRegisteredExport(
  file: t.BabelFile,
  exportName: string,
  seen = new Set<string>(),
): ResolvedExport | undefined {
  const filename = file.opts.filename as string;
  const key = `${filename}\0${exportName}`;
  if (seen.has(key)) return;
  seen.add(key);

  const reserved = file.ast.program.extra?.registeredExports?.get(exportName);
  if (reserved) return { ...reserved, filename };

  for (const child of file.ast.program.body) {
    if (
      (child.type !== "ExportNamedDeclaration" &&
        child.type !== "ExportAllDeclaration") ||
      !child.source ||
      (child.exportKind || "value") !== "value"
    ) {
      continue;
    }

    const sourceFile = loadFileForImport(file, child.source.value);
    if (!sourceFile) continue;

    if (child.type === "ExportAllDeclaration") {
      const resolved = resolveRegisteredExport(sourceFile, exportName, seen);
      if (resolved) return resolved;
      continue;
    }

    for (const specifier of child.specifiers) {
      if (
        specifier.type !== "ExportSpecifier" ||
        (specifier.exportKind || "value") !== "value" ||
        getExportedName(specifier) !== exportName
      ) {
        continue;
      }

      const resolved = resolveRegisteredExport(
        sourceFile,
        specifier.local.name,
        seen,
      );
      if (resolved) return resolved;
    }
  }
}

function resolveSerializeReason(exprExtras: Set<t.NodeExtra>) {
  let reason: undefined | SerializeReason;
  for (const exprExtra of exprExtras) {
    reason = mergeSerializeReasons(
      reason,
      getAllSerializeReasonsForExtra(getCanonicalExtra(exprExtra), true),
    );
  }

  return reason;
}

function registerImportedFn({ node, ...importedFn }: ImportedFn) {
  const extra = (node.extra ??= {});
  extra.registeredImportedFns ??= [];
  extra.registeredImportedFns.push(importedFn);
  getProgram().node.extra.isInteractive = true;
}

// An exported function is always module scoped, so any template that imports it
// can register it as is; the id is reserved here so every one of them agrees.
// A function exported under several names still gets one id, keyed by the first.
function reserveExportRegisterId(
  fnExtra: RegisteredFnExtra,
  fn: t.NodePath<t.Function>,
  markoRoot: MarkoExprRootPath,
) {
  if (!isStaticRoot(markoRoot)) return;
  const exportNames = getExportNames(fn, markoRoot);
  // The generated module imports the function by name, so the id is keyed by a
  // name that can be spelled in an import.
  const exportName = exportNames?.find((name) => t.isValidIdentifier(name));
  if (!exportName) return;

  const {
    markoOpts,
    opts: { filename },
  } = getFile();
  const programExtra = getProgram().node.extra;
  const registerId = getTemplateId(
    markoOpts,
    filename as string,
    `${fnExtra.section.id}/export/${exportName}`,
  );

  fnExtra.exportRegisterId = registerId;
  programExtra.registeredExports ??= new Map();
  for (const name of exportNames!) {
    programExtra.registeredExports.set(name, { registerId, exportName });
  }
}

// Only a function that _is_ an exported value can be registered by an importer,
// whether it is exported where it is declared or by a later `export { … }`.
function getExportNames(
  fn: t.NodePath<t.Function>,
  markoRoot: MarkoExprRootPath,
) {
  const localName = getExportableName(fn);
  if (localName === undefined) return;

  const exportNames =
    markoRoot.isExportNamedDeclaration() && !markoRoot.node.source
      ? [localName]
      : [];

  // A later `export { … }` reads the binding, so its specifiers are among the
  // references babel already tracks for it.
  const binding = fn.scope.getBinding(localName);
  if (binding) {
    for (const ref of binding.referencePaths) {
      const specifier = ref.parent;
      if (
        specifier?.type === "ExportSpecifier" &&
        (specifier.exportKind || "value") === "value" &&
        !(ref.parentPath!.parent as t.ExportNamedDeclaration).source
      ) {
        const exportName = getExportedName(specifier);
        // A template's default export is the template itself.
        if (exportName !== "default") {
          exportNames.push(exportName);
        }
      }
    }
  }

  return exportNames.length ? exportNames : undefined;
}

// The name this function is declared under, when it is bound to one it cannot
// be reassigned through — the register id is bound to the value, not the name.
function getExportableName(fn: t.NodePath<t.Function>) {
  const { node, parent } = fn;
  if (node.type === "FunctionDeclaration") {
    return node.id?.name;
  }

  if (
    t.isVariableDeclarator(parent) &&
    parent.init === node &&
    t.isIdentifier(parent.id) &&
    t.isVariableDeclaration(fn.parentPath!.parent, { kind: "const" })
  ) {
    return parent.id.name;
  }
}

function getExportedName(specifier: t.ExportSpecifier) {
  const { exported } = specifier;
  return exported.type === "Identifier" ? exported.name : exported.value;
}

function canIgnoreRegister(
  markoRoot: MarkoExprRootPath,
  exprRoot: t.NodePath<t.Node>,
) {
  return (
    // bail within a placeholder
    markoRoot.isMarkoPlaceholder() ||
    // bail within a server only statement
    (markoRoot.isMarkoScriptlet() &&
      (!markoRoot.node.static || markoRoot.node.target === "server")) ||
    // bail within the tag name
    (markoRoot.isMarkoTag() && markoRoot.node.name == exprRoot.node) ||
    (isMarkoAttribute(markoRoot) &&
      ((analyzeTagNameType(markoRoot.parentPath) === TagNameType.NativeTag &&
        // TODO: all native tag functions should avoid registration but right now change handlers require it.
        /^on[A-Z-]/.test(markoRoot.node.name) &&
        !hasSpreadAttributeAfter(markoRoot)) ||
        isCoreTagName(markoRoot.parentPath, "script") ||
        isCoreTagName(markoRoot.parentPath, "lifecycle") ||
        isCoreTagName(markoRoot.parentPath, "for")))
  );
}

function getStaticDeclRefs(
  path: t.NodePath<t.Node>,
  refs = new Set<t.NodeExtra>(),
  seen = new Set<t.Node>(),
): Set<t.NodeExtra> | true {
  const decl = getDeclarationRoot(path);
  // A self- or mutually-referential static/export declaration resolves back to
  // a declaration already being walked; skip it so the recursion terminates.
  if (decl && !seen.has(decl.node)) {
    seen.add(decl.node);
    const ids = decl.getOuterBindingIdentifiers();
    if (ids) {
      for (const name in ids) {
        const binding = decl.scope.getBinding(name);
        if (!binding) continue;
        if (addBindingRefs(binding, refs, seen) === true) {
          return true;
        }
      }
    }
  }

  return refs;
}

function addBindingRefs(
  binding: NonNullable<ReturnType<t.Scope["getBinding"]>>,
  refs: Set<t.NodeExtra>,
  seen: Set<t.Node>,
) {
  for (const ref of binding.referencePaths) {
    if (isInvokedFunction(ref) || ref.parentPath!.type === "Program") continue;
    const exprRoot = getExprRoot(ref);
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) continue;
    if (isStaticRoot(markoRoot)) {
      if (getStaticDeclRefs(ref, refs, seen) === true) {
        return true;
      }
    } else if (shouldAlwaysRegister(markoRoot)) {
      return true;
    } else {
      refs.add((exprRoot.node.extra ??= {}));
      // Follow `<const>` aliases (eg `<const/b=a/>` spread onto a dynamic
      // tag) the same way the walk entered through the declaring `<const>`.
      if (getConstTagVarRefs(markoRoot, refs, seen) === true) {
        return true;
      }
    }
  }
}

function shouldAlwaysRegister(markoRoot: MarkoExprRootPath) {
  const tag = getTagFromMarkoRoot(markoRoot);
  if (!tag) return false;
  if (isCoreTagName(tag, "let")) return true;
  if (isCoreTagName(tag, "return")) return true;

  // Native-tag event handlers are already skipped in `canIgnoreRegister`, so
  // anything else must serialize. A dynamic tag's input resolves through its
  // expression's `dynamicTagInput` in `finalizeFunctionRegistry`.
  return analyzeTagNameType(tag) === TagNameType.NativeTag;
}

function hasSpreadAttributeAfter(attr: t.NodePath<t.MarkoAttribute>) {
  const attrs = (attr.parent as t.MarkoTag).attributes;
  for (let i = (attr.key as number) + 1; i < attrs.length; i++) {
    if (attrs[i].type === "MarkoSpreadAttribute") return true;
  }

  return false;
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

function registerFunction(fnExtra: RegisteredFnExtra, reason: SerializeReason) {
  const {
    markoOpts,
    path: program,
    opts: { filename },
  } = getFile();
  program.node.extra.isInteractive = true;
  fnExtra.registerReason = reason;
  fnExtra.name = generateUid(fnExtra.name);
  fnExtra.registerId =
    fnExtra.exportRegisterId ??
    getTemplateId(
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

function isStaticRoot(path: t.NodePath<t.Node>) {
  switch (path.type) {
    case "MarkoScriptlet":
      return (path.node as t.MarkoScriptlet).static;
    case "ExportDefaultDeclaration":
    case "ExportNamedDeclaration":
      return true;
    default:
      return false;
  }
}
