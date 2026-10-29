import path from "path";

import { types as t } from "@marko/compiler";
import {
  getFile,
  getProgram,
  getTemplateId,
  importDefault,
  loadFileForImport,
} from "@marko/compiler/babel-utils";

import { BindingType } from "./bindings";
import { generateUid } from "./generate-uid";
import {
  getDeclarationRoot,
  getExprRoot,
  getFnRoot,
  getMarkoRoot,
  type MarkoRootPath,
} from "./get-root";
import isInvokedFunction from "./is-invoked-function";
import isStatic from "./is-static";
import { getMarkoOpts, isOutputHTML, isPatch } from "./marko-config";
import { some } from "./optional";
import { isUnconditionalReason, type Reason } from "./reasons";
import {
  getCanonicalExtra,
  isRegisteredFnExtra,
  type ReferencedExtra,
  type RegisteredFnExtra,
} from "./references";
import { callRuntime, getRuntimePath, registerRuntimeValue } from "./runtime";
import {
  extraReaders,
  getReasonForBinding,
  getReasonForExpr,
  landsRetained,
  someRead,
} from "./solve-reasons";
import { ALWAYS, mergeSources } from "./sources";
import { createAnalysisState } from "./state";
import { getLiteralName, isValidPropertyIdentifier } from "./to-property-name";

const kRegisteredExports = Symbol("registered exports");
declare module "@marko/compiler/dist/types" {
  export interface ProgramExtra {
    // Every name an export is reachable by -> its reserved registration.
    [kRegisteredExports]?: Map<string, RegisteredExport>;
  }
  export interface ImportDeclarationExtra {
    /** Each local binding the template registers -> the export it imports. */
    registeredImports?: Map<string, RegisteredExport>;
  }
}

/**
 * An export registered under an id: the template that declares it, and the
 * canonical name it is exported under.
 */
export interface RegisteredExport {
  registerId: string;
  exportName: string;
  filename: string;
}

const [getReferencesByFn] = createAnalysisState(
  () => new Map<RegisteredFnExtra, Set<t.NodeExtra>>(),
);
const [getReferencesByImport] = createAnalysisState(
  () =>
    new Map<
      {
        node: t.ImportDeclaration;
        local: string;
        registered: RegisteredExport;
        /** Only for a template: the outermost functions its references sit in. */
        fnRoots?: Set<t.NodeExtra>;
      },
      Set<t.NodeExtra>
    >(),
);

// A function its template may register once client code reads it.
export function isTrackedFunction(extra: t.NodeExtra) {
  return getReferencesByFn().has(extra as RegisteredFnExtra);
}

// Tracks a function its template may register once client code reads it,
// reserving the id an importer registers it under when it is exported.
export function trackFunction(
  fn: t.NodePath<t.Function>,
  fnExtra: RegisteredFnExtra,
  markoRoot: MarkoRootPath,
) {
  reserveExportRegisterId(fnExtra, fn, markoRoot);

  if (isStatic(markoRoot)) {
    const refs = getStaticDeclRefs(fn);
    if (refs.size) {
      getReferencesByFn().set(fnExtra, refs);
    }
  } else {
    getReferencesByFn().set(fnExtra, new Set([fnExtra.exprRoot]));
  }
}

export function canIgnoreRegister(
  markoRoot: MarkoRootPath,
  exprRoot: t.NodePath<t.Node>,
) {
  return (
    // bail within a placeholder
    markoRoot.isMarkoPlaceholder() ||
    // bail within a server only statement
    (markoRoot.isMarkoScriptlet() &&
      (!markoRoot.node.static || markoRoot.node.target === "server")) ||
    // bail within the tag name
    (markoRoot.isMarkoTag() && markoRoot.node.name == exprRoot.node)
  );
}

// When client code reads each function; reasons may still grow, so
// this only widens them and registration waits until they settle.
export function addFunctionReasons() {
  for (const [fnExtra, exprExtras] of getReferencesByFn()) {
    const reason = resolveReason(exprExtras);
    if (reason) {
      fnExtra.reason = mergeSources(fnExtra.reason, reason);
    }
  }
}

export function finalizeRegistrations() {
  const programExtra = getProgram().node.extra;
  for (const fnExtra of getReferencesByFn().keys()) {
    if (fnExtra.reason) {
      registerFunction(fnExtra);
      programExtra.isInteractive ||= isUnconditionalReason(fnExtra.reason);
      programExtra.hasResumes ||= reachesPage(
        fnExtra.reason,
        getReferencesByFn().get(fnExtra)!,
      );
    }
  }

  for (const [
    { node, local, registered, fnRoots },
    exprExtras,
  ] of getReferencesByImport()) {
    const reason = fnRoots
      ? resolveTemplateReason(exprExtras)
      : resolveReason(exprExtras);
    if (reason) {
      if (!fnRoots || !isTemplateShipped(fnRoots, exprExtras)) {
        const extra = (node.extra ??= {});
        extra.registeredImports ??= new Map();
        extra.registeredImports.set(local, registered);
        programExtra.hasResumes ||= reachesPage(reason, exprExtras);
      }
      programExtra.isInteractive ||= isUnconditionalReason(reason);
    }
  }
}

// A `<let>` keeps its value on the client, so a patch build writes it, or
// what client code builds from it, where main does for a caller's client
// state: wherever a patch may change a value its readers join. Code landing in
// one has to reach the page then, as an unconditional reason's does.
function reachesPage(reason: Reason, exprExtras: Set<t.NodeExtra>) {
  if (!isPatch() || isUnconditionalReason(reason)) return false;
  for (const exprExtra of exprExtras) {
    if (
      someRead(extraReaders(getCanonicalExtra(exprExtra)), landsInWrittenLet)
    ) {
      return true;
    }
  }
  return false;
}

function landsInWrittenLet(read: ReferencedExtra) {
  return some(
    read.derives,
    (binding) =>
      binding.type === BindingType.let && !!getReasonForBinding(binding, true),
  );
}

/**
 * Tracks a template imported as a default export. The server writes a template
 * only as a binding's value, so the importing template registers it when one may.
 */
export function trackImportedTemplate(
  importDecl: t.NodePath<t.ImportDeclaration>,
  local: string,
  templateFile: t.BabelFile,
) {
  trackImport(
    importDecl,
    local,
    {
      registerId: templateFile.metadata.marko.id,
      exportName: "default",
      filename: templateFile.opts.filename,
    },
    new Set(),
  );
}

/**
 * Tracks an export imported from another template that registers under an id,
 * if it does. The importing template registers it (under that id) when client
 * code reads its own references.
 */
export function trackImport(
  importDecl: t.NodePath<t.ImportDeclaration>,
  local: string,
  registered: RegisteredExport | undefined,
  fnRoots?: Set<t.NodeExtra>,
) {
  const binding = registered && importDecl.scope.getBinding(local);
  if (!binding) return;

  const refs = new Set<t.NodeExtra>();
  addBindingRefs(binding, refs, new Set(), fnRoots);
  if (refs.size) {
    getReferencesByImport().set(
      { node: importDecl.node, local, registered, fnRoots },
      refs,
    );
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
): RegisteredExport | undefined {
  const filename = file.opts.filename;
  const key = `${filename}\0${exportName}`;
  if (seen.has(key)) return;
  seen.add(key);

  const registered =
    file.ast.program.extra?.[kRegisteredExports]?.get(exportName);
  if (registered) return registered;

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
        getLiteralName(specifier.exported) !== exportName
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

/**
 * Writes the registrations for module scoped functions: the ones this template
 * exports and registers itself, and the ones it imports from a template that
 * reserved a register id without registering it; and for templates it imports.
 */
export function writeModuleRegistrations(program: t.NodePath<t.Program>) {
  const file = getFile();
  const statements: t.Statement[] = [];
  const seen = new Set<string>();

  for (const child of program.node.body) {
    const registeredImports =
      t.isImportDeclaration(child) && child.extra?.registeredImports;
    if (registeredImports) {
      for (const [local, registered] of registeredImports) {
        if (seen.has(registered.registerId)) continue;
        seen.add(registered.registerId);

        // The dom output shares a module per export, so templates that import
        // the same one do not each carry a copy of its registration into the
        // bundle. The html output has no bundle to keep small, and a server
        // template registers itself.
        if (isOutputHTML()) {
          if (registered.exportName !== "default") {
            statements.push(buildRegistration(local, registered.registerId));
          }
        } else {
          importDefault(file, resolveRegisterModule(file, registered));
        }
      }
    } else if (child.type === "ExportNamedDeclaration") {
      addExportRegistrations(child, seen, statements);
    }
  }

  program.node.body.push(...statements);
}

function resolveReason(exprExtras: Set<t.NodeExtra>) {
  let reason: undefined | Reason;
  for (const exprExtra of exprExtras) {
    const extra = getCanonicalExtra(exprExtra);
    if (!exprExtra.consumed || extra.retained) {
      reason = mergeSources(
        reason,
        landsRetained(extra) ? ALWAYS : getReasonForExpr(extra),
      );
    }
  }

  return reason;
}

// When the server writes a template: an effect reading it runs on the client
// instead of reading it from the resume data.
function resolveTemplateReason(exprExtras: Set<t.NodeExtra>) {
  let reason: undefined | Reason;
  for (const exprExtra of exprExtras) {
    const extra = getCanonicalExtra(exprExtra);
    if (!extra.isEffect) {
      reason = mergeSources(reason, getReasonForExpr(extra));
    }
  }

  return reason;
}

// A resumed instance runs its effects and registered functions, so one that
// reads the template ships it wherever this template ships.
function isTemplateShipped(
  fnRoots: Set<t.NodeExtra>,
  exprExtras: Set<t.NodeExtra>,
) {
  for (const fnRoot of fnRoots) {
    if (isRegisteredFnExtra(fnRoot)) return true;
  }

  for (const exprExtra of exprExtras) {
    if (getCanonicalExtra(exprExtra).isEffect) return true;
  }

  return false;
}

// An exported function is always module scoped, so any template that imports it
// can register it as is; the id is reserved here so every one of them agrees.
// A function exported under several names still gets one id, keyed by the first.
function reserveExportRegisterId(
  fnExtra: RegisteredFnExtra,
  fn: t.NodePath<t.Function>,
  markoRoot: MarkoRootPath,
) {
  if (!isStatic(markoRoot)) return;
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
    filename,
    `${fnExtra.section.id}/export/${exportName}`,
  );

  const registered: RegisteredExport = {
    registerId,
    exportName,
    filename,
  };
  fnExtra.exportRegisterId = registerId;
  programExtra[kRegisteredExports] ??= new Map();
  for (const name of exportNames!) {
    programExtra[kRegisteredExports].set(name, registered);
  }
}

// Only a function that _is_ an exported value can be registered by an importer,
// whether it is exported where it is declared or by a later `export { … }`.
function getExportNames(fn: t.NodePath<t.Function>, markoRoot: MarkoRootPath) {
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
        const exportName = getLiteralName(specifier.exported);
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

function getStaticDeclRefs(
  path: t.NodePath<t.Node>,
  refs = new Set<t.NodeExtra>(),
  seen = new Set<t.Node>(),
  fnRoots?: Set<t.NodeExtra>,
): Set<t.NodeExtra> {
  const decl = getDeclarationRoot(path);
  // A self- or mutually-referential static/export declaration resolves back to
  // a declaration already being walked; skip it so the recursion terminates.
  if (decl && !seen.has(decl.node)) {
    seen.add(decl.node);
    const ids = decl.getOuterBindingIdentifiers();
    if (ids) {
      for (const name in ids) {
        const binding = decl.scope.getBinding(name);
        if (binding) addBindingRefs(binding, refs, seen, fnRoots);
      }
    }
  }

  return refs;
}

function addBindingRefs(
  binding: NonNullable<ReturnType<t.Scope["getBinding"]>>,
  refs: Set<t.NodeExtra>,
  seen: Set<t.Node>,
  fnRoots?: Set<t.NodeExtra>,
) {
  for (const ref of binding.referencePaths) {
    if (isInvokedFunction(ref) || ref.parentPath!.type === "Program") continue;
    const exprRoot = getExprRoot(ref);
    const markoRoot = getMarkoRoot(exprRoot);
    if (!markoRoot || canIgnoreRegister(markoRoot, exprRoot)) continue;
    if (fnRoots) {
      const fnRoot = getFnRoot(ref);
      if (fnRoot) fnRoots.add((fnRoot.node.extra ??= {}));
    }
    if (isStatic(markoRoot)) {
      getStaticDeclRefs(ref, refs, seen, fnRoots);
    } else {
      refs.add((exprRoot.node.extra ??= {}));
    }
  }
}

function registerFunction(fnExtra: RegisteredFnExtra) {
  const {
    markoOpts,
    opts: { filename },
  } = getFile();
  fnExtra.name = generateUid(fnExtra.name);
  fnExtra.registerId =
    fnExtra.exportRegisterId ??
    getTemplateId(
      markoOpts,
      filename,
      `${fnExtra.section.id}/${fnExtra.name.slice(1)}`,
    );
}

// The exporting template registers itself inline: it is the only module that
// can, and importing its own registration back would be a cycle through the
// declaration it is registering.
function addExportRegistrations(
  node: t.ExportNamedDeclaration,
  seen: Set<string>,
  statements: t.Statement[],
) {
  const { declaration } = node;
  if (!declaration) return;

  const add = (local: string, registerId: string) => {
    if (seen.has(registerId)) return;
    seen.add(registerId);
    statements.push(buildRegistration(local, registerId));
  };

  if (declaration.type === "FunctionDeclaration") {
    if (isRegisteredFnExtra(declaration.extra)) {
      add(declaration.id!.name, declaration.extra.registerId);
    }
    return;
  }

  // The html output registers exported function expressions where they are
  // written, by replacing them with the `_resume` call that returns them.
  if (isOutputHTML() || declaration.type !== "VariableDeclaration") return;

  for (const declarator of declaration.declarations) {
    const extra = declarator.init?.extra;
    if (isRegisteredFnExtra(extra) && t.isIdentifier(declarator.id)) {
      add(declarator.id.name, extra.registerId);
    }
  }
}

function buildRegistration(local: string, registerId: string) {
  return t.expressionStatement(
    isOutputHTML()
      ? callRuntime("_resume", t.identifier(local), t.stringLiteral(registerId))
      : registerRuntimeValue(registerId, t.identifier(local)),
  );
}

// Keyed by the declaring template and the export's canonical name, so every
// template that imports the function resolves to the same module.
function resolveRegisterModule(
  file: t.BabelFile,
  { filename, exportName, registerId }: RegisteredExport,
) {
  const importer = file.opts.filename;
  return getMarkoOpts().resolveVirtualDependency!(importer, {
    virtualPath: `${relativePath(importer, filename)}.register-${exportName}.js`,
    code:
      `import { ${exportName} as value } from "./${path.basename(filename)}";\n` +
      `import { _resumed } from "${getRuntimePath("dom")}";\n` +
      `_resumed${isValidPropertyIdentifier(registerId) ? `.${registerId}` : `[${JSON.stringify(registerId)}]`} = value;\n`,
  })!;
}

// The module is placed beside the template it registers, so that it can import
// it as a sibling. `resolveRelativePath` would name a template in another
// package by that package, which resolves somewhere else entirely.
function relativePath(from: string, to: string) {
  const relative = path
    .relative(path.dirname(from), to)
    .split(path.sep)
    .join("/");
  return relative.startsWith(".") ? relative : `./${relative}`;
}
