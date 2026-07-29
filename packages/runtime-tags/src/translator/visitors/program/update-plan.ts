import { createHash } from "crypto";

import {
  isPlanOnlyPersistedEntry,
  version as compilerVersion,
} from "@marko/compiler";
import type { types as t } from "@marko/compiler";
import { generator } from "@marko/compiler/internal/babel";

import {
  type AttachedComments,
  PRELIMINARY_PLAN_VERSION,
  type PreliminaryExport,
  type PreliminaryLoader,
  type PreliminaryPlan,
  type PreliminaryRequest,
  type PreliminaryStatement,
  type PreliminarySymbol,
  type RequestAttr,
  type StatementKind,
} from "../../util/preliminary-plan";
import runtimeInfo from "../../util/runtime-info";
import {
  getPlanFacts,
  type PlanExportTargetFact,
} from "../../util/update-plan-records";

declare module "@marko/compiler" {
  export interface MarkoMeta {
    updatePlan?: PreliminaryUpdatePlans;
    /** Test-visible marker (not contract): why plan publication was
     * suppressed; suppressed builds stay on the plain print path. */
    updatePlanSuppressed?: UpdatePlanSuppression;
  }
}

/** Multi-plan carrier on `metadata.marko.updatePlan`: the entry plan plus
 * sibling mini-plans per compiler-issued virtual module id — each a
 * complete `preliminary-plan@1.1` plan. */
export interface PreliminaryUpdatePlans {
  entry: PreliminaryPlan;
  virtuals: Record<string, PreliminaryPlan>;
}

export type UpdatePlanSuppression =
  | "non-esm-modules"
  | "post-translator-babel-plugins";

/** DOCUMENTED SENTINEL: a generated statement with no source anchor
 * publishes `origin.line === column === -1` — never a fake position. */
export const GENERATED_STATEMENT_LINE = -1;

/** Publishes the preliminary update plan from the FINAL program body: must
 * run after every post-emission body mutation (`needsCompat` relocation)
 * since the finalizer alone assigns statement/eval ordinals. */
export function publishUpdatePlan(program: t.NodePath<t.Program>) {
  const file = program.hub.file;
  const suppression = publicationSuppression(file);
  if (suppression) {
    if (isPlanOnlyPersistedEntry(file.markoOpts)) {
      // Plan-only with no publishable plan would compile to NOTHING;
      // fail loud instead of serving silent no-output.
      throw program.buildCodeFrameError(
        `A plan-only persisted entry requires plan publication, but it is suppressed here (${suppression}).`,
      );
    }
    // Fail closed: anything running on this AST after translator exit would
    // make the published statements misrepresent the emitted module.
    file.metadata.marko.updatePlanSuppressed = suppression;
    return;
  }

  const filename = file.opts.filename as string;
  const generatorOpts = {
    ...(file.opts.generatorOpts as Record<string, unknown>),
    sourceMaps: false,
  };
  const facts = getPlanFacts(file);
  const statements: PreliminaryStatement[] = [];
  const symbols: Record<string, PreliminarySymbol> = {};
  const requestedModules: PreliminaryRequest[] = [];
  const exports: PreliminaryExport[] = [];
  const loaders: PreliminaryLoader[] = [];
  const moduleStateLinks: PreliminaryPlan["moduleStateLinks"] = [];
  const eagerCandidates: PreliminaryPlan["eagerCandidates"] = [];
  const seenStatic = new Set<string>();
  const seenDynamic = new Set<string>();
  const built: { node: t.Statement; statement: PreliminaryStatement }[] = [];
  let previousTrailing: t.Statement["trailingComments"];

  program.node.body.forEach((node, ordinal) => {
    // A comment object shared with the previous statement's trailing prints
    // there (matching a whole-program print): exactly one owner.
    const leading = previousTrailing?.length
      ? node.leadingComments?.filter(
          (comment) => !previousTrailing!.includes(comment),
        )
      : node.leadingComments;
    previousTrailing = node.trailingComments;

    const nodeFacts = facts?.statements.get(node);
    const statement = buildStatement(
      node,
      ordinal,
      leading,
      generatorOpts,
      nodeFacts?.origin ??
        (node.loc
          ? {
              file: filename,
              line: node.loc.start.line,
              column: node.loc.start.column,
            }
          : {
              file: filename,
              line: GENERATED_STATEMENT_LINE,
              column: GENERATED_STATEMENT_LINE,
            }),
    );
    statements.push(statement);
    built.push({ node, statement });
    declareLocalSymbols(node, ordinal, symbols);

    const importFacts =
      node.type === "ImportDeclaration"
        ? facts?.imports.get(node.source.value)
        : undefined;
    if (importFacts) {
      const importNode = node as t.ImportDeclaration;
      const source = importNode.source.value;
      const attributes = importAttributes(importNode);
      requestedModules.push({
        specifier: source,
        attributes,
        kind: importFacts.kind,
        form: "import",
        bare: !importNode.specifiers.length,
        ordinal,
        firstOccurrence: firstOccurrence(
          seenStatic,
          rawIdentity(source, attributes),
        ),
        plainTemplate: importFacts.plainTemplate,
        span: specifierSpan(statement.text, source),
      });
      // Binding tuples are syntactic: derived from the final import AST so
      // no site can record a wrong or conflicting binding fact.
      for (const specifier of importNode.specifiers) {
        symbols[`%${specifier.local.name}`] = {
          name: specifier.local.name,
          kind: "import",
          declKind: "module",
          refCount: 0,
          declOrdinal: ordinal,
          import: {
            specifier: source,
            imported:
              specifier.type === "ImportSpecifier"
                ? specifier.imported.type === "Identifier"
                  ? specifier.imported.name
                  : specifier.imported.value
                : specifier.type === "ImportDefaultSpecifier"
                  ? "default"
                  : "*",
            attributes,
          },
        };
      }
      // Link records are 1:1 mirrors of their site-asserted request kinds.
      if (importFacts.kind === "module-state") {
        moduleStateLinks.push({
          specifier: source,
          ordinal,
          imported: importNode.specifiers.flatMap((specifier) =>
            specifier.type === "ImportSpecifier"
              ? [
                  specifier.imported.type === "Identifier"
                    ? specifier.imported.name
                    : specifier.imported.value,
                ]
              : [],
          ),
        });
      } else if (importFacts.kind === "eager-candidate") {
        eagerCandidates.push({ specifier: source, ordinal });
      }
    }
    // Export-decl/default records are syntactic (declared name, local/self
    // target): derived from the final statement, no site semantics.
    if (statement.kind === "export-decl") {
      const declaration = (node as t.ExportNamedDeclaration).declaration!;
      if (declaration.type === "VariableDeclaration") {
        for (const declarator of declaration.declarations) {
          if (declarator.id.type === "Identifier") {
            exports.push({
              exported: declarator.id.name,
              ordinal,
              target: { kind: "local", symId: `%${declarator.id.name}` },
            });
          }
        }
      } else if (declaration.type === "FunctionDeclaration" && declaration.id) {
        exports.push({
          exported: declaration.id.name,
          ordinal,
          target: { kind: "local", symId: `%${declaration.id.name}` },
        });
      }
    } else if (statement.kind === "export-default") {
      const inner = (node as t.ExportDefaultDeclaration).declaration;
      exports.push({
        exported: "default",
        ordinal,
        target:
          (inner.type === "FunctionDeclaration" ||
            inner.type === "ClassDeclaration") &&
          inner.id
            ? { kind: "local", symId: `%${inner.id.name}` }
            : { kind: "default-expr", ordinal },
      });
    }
    for (const specifier of nodeFacts?.lazyEdges || []) {
      requestedModules.push({
        specifier,
        attributes: [],
        kind: "lazy-edge",
        form: "dynamic-import",
        bare: false,
        ordinal,
        firstOccurrence: firstOccurrence(
          seenDynamic,
          rawIdentity(specifier, []),
        ),
        plainTemplate: false,
        span: specifierSpan(statement.text, specifier),
      });
    }
    if (nodeFacts?.loader) {
      const { targetKind, registryFn, rendererId, readyId, targets } =
        nodeFacts.loader;
      loaders.push({
        targetKind,
        registryFn,
        rendererId,
        ...(readyId !== undefined ? { readyId } : null),
        targets,
        ordinal,
        firstWins: true,
        ...(targetKind === "setup-virtual-demand" && readyId !== undefined
          ? { readyChain: { readyId, failureLatch: true } }
          : null),
      });
    }
    for (const { exported, target } of nodeFacts?.exports || []) {
      exports.push({ exported, ordinal, target: exportTarget(target) });
    }
  });

  // Spans resolve after the full symbol table exists (statements may
  // reference symbols their emitters declared later in the body).
  const symIdsByName = new Map<string, string>();
  for (const [symId, symbol] of Object.entries(symbols)) {
    symIdsByName.set(symbol.name, symId);
  }
  for (const { node, statement } of built) {
    const occurrences: IdentifierOccurrence[] = [];
    collectIdentifierOccurrences(node, symIdsByName, false, occurrences);
    statement.spans = alignSpans(statement.text, occurrences, symIdsByName);
    for (const occurrence of occurrences) {
      if (!occurrence.isDecl) {
        symbols[symIdsByName.get(occurrence.name)!].refCount++;
      }
    }
  }

  // Possession derives at the finalizer (brief §1.1): `claimable` from the
  // emitted `_static_shells` ids, `deferred` from DEMAND-CLASS loader
  // rendererIds only — never scheduled-load-ready readiness scheduling.
  const deferred = new Set<string>();
  for (const loader of loaders) {
    if (loader.targetKind !== "scheduled-load-ready") {
      deferred.add(loader.rendererId);
    }
  }

  file.metadata.marko.updatePlan = {
    entry: {
      schemaVersion: PRELIMINARY_PLAN_VERSION,
      importer: `${filename}?persisted`,
      originFile: filename,
      fingerprintFields: buildFingerprintFields(file),
      statements,
      symbols,
      requestedModules,
      exports,
      loaders,
      moduleStateLinks,
      eagerCandidates,
      shellCapability: { shells: facts?.shells ?? [] },
      shellPossession: {
        claimable: (facts?.shells ?? []).map((shell) => shell.shellId),
        deferred: [...deferred],
      },
    },
    virtuals: Object.fromEntries(facts?.virtuals || []),
  };
}

/** The compile-side Rev-4 fingerprint field set, produced from the REAL
 * inputs of this compile (never harness constants). */
export function buildFingerprintFields(
  file: t.BabelFile,
): Record<string, string | boolean> {
  const { markoOpts } = file;
  return {
    optimize: !!markoOpts.optimize,
    markoDebug: MARKO_DEBUG,
    runtimeId: String(markoOpts.runtimeId ?? ""),
    modules: String(markoOpts.modules ?? ""),
    targets: JSON.stringify(
      (file.opts as Record<string, unknown>).targets ?? null,
    ),
    output: String(markoOpts.output ?? ""),
    optimizeKnownTemplates: JSON.stringify(
      markoOpts.optimizeKnownTemplates ?? null,
    ),
    persisted: !!markoOpts.persisted,
    entry: String(markoOpts.entry ?? ""),
    compiler: `@marko/compiler@${compilerVersion}`,
    translator: `${runtimeInfo.name}@${runtimeInfo.version}`,
    producer: `${runtimeInfo.name}/translator@${PRELIMINARY_PLAN_VERSION}`,
    babelConfigHash: hashBabelSurface(file),
  };
}

// The hash fingerprints CONFIG, never file identity (importer carries that).
const FILE_IDENTITY_OPTS = new Set([
  "filename",
  "filenameRelative",
  "sourceFileName",
  "sourceMapTarget",
  "sourceRoot",
]);

/** Hashes the Babel surface that can shape emission while publication is
 * allowed: resolved plugin/preset identities + primitive generator options
 * (richer detector semantics are C-round integration work). */
function hashBabelSurface(file: t.BabelFile) {
  const { plugins, presets, generatorOpts } = file.opts as {
    plugins?: { key?: string }[];
    presets?: unknown[];
    generatorOpts?: Record<string, unknown>;
  };
  const primitiveGeneratorOpts = Object.entries(generatorOpts || {})
    .filter(
      ([key, value]) =>
        !FILE_IDENTITY_OPTS.has(key) &&
        (typeof value === "string" ||
          typeof value === "number" ||
          typeof value === "boolean"),
    )
    .sort((a, b) => (a[0] < b[0] ? -1 : 1));
  return createHash("sha256")
    .update(
      JSON.stringify([
        (plugins || []).map((plugin) => plugin?.key ?? null),
        (presets || []).length,
        file.markoOpts.modules ?? null,
        primitiveGeneratorOpts,
      ]),
    )
    .digest("hex")
    .slice(0, 16);
}

/** The translator-exit body is only final for ESM output with no other
 * Babel plugin in the pipeline (the compiler runs the rest AFTER this one);
 * anything else suppresses publication — conservative on purpose. */
function publicationSuppression(
  file: t.BabelFile,
): UpdatePlanSuppression | undefined {
  if (file.markoOpts.modules !== "esm") {
    return "non-esm-modules";
  }
  const { plugins, presets } = file.opts as {
    plugins?: { key?: string }[];
    presets?: unknown[];
  };
  if (presets?.length || plugins?.some((plugin) => plugin?.key !== "marko")) {
    return "post-translator-babel-plugins";
  }
}

function buildStatement(
  node: t.Statement,
  ordinal: number,
  leading: t.Statement["leadingComments"],
  generatorOpts: Record<string, unknown>,
  origin: PreliminaryStatement["origin"],
): PreliminaryStatement {
  const kind = statementKind(node);
  const printNode =
    leading === node.leadingComments
      ? node
      : ({
          ...node,
          leadingComments: leading?.length ? leading : null,
        } as t.Statement);
  const text = print(printNode, generatorOpts);
  const nodeOffset = leading?.length
    ? offsetIn(text, printNode, 0, generatorOpts)
    : 0;
  const statement: PreliminaryStatement = {
    ordinal,
    evalOrdinal: ordinal,
    kind,
    text,
    nodeOffset,
    spans: [],
    comments: collectCommentBuckets(kind, node, leading),
    origin,
  };

  if (kind === "export-decl" || kind === "export-default") {
    const inner = (node as t.ExportDefaultDeclaration).declaration;
    const fallback =
      nodeOffset +
      (kind === "export-default" ? "export default " : "export ").length;
    statement.innerOffset = inner
      ? offsetIn(text, inner, nodeOffset, generatorOpts, fallback)
      : fallback;
    if (
      kind === "export-default" &&
      (inner.type === "FunctionDeclaration" ||
        inner.type === "ClassDeclaration") &&
      inner.id
    ) {
      statement.defaultDeclName = inner.id.name;
    }
  }

  return statement;
}

function statementKind(node: t.Statement): StatementKind {
  switch (node.type) {
    case "ImportDeclaration":
      return "import";
    case "ExportNamedDeclaration":
      return node.declaration
        ? "export-decl"
        : node.source
          ? "reexport"
          : "export-locals";
    case "ExportDefaultDeclaration":
      return "export-default";
    case "ExportAllDeclaration":
      return "reexport";
    default:
      return "stmt";
  }
}

function exportTarget(
  target: PlanExportTargetFact,
): PreliminaryExport["target"] {
  return target.kind === "local"
    ? { kind: "local", symId: `%${target.name}` }
    : {
        kind: "external",
        specifier: target.specifier,
        imported: target.imported,
        attributes: [],
      };
}

function firstOccurrence(stream: Set<string>, identity: string) {
  const first = !stream.has(identity);
  stream.add(identity);
  return first;
}

/** Raw request identity: specifier + sorted attribute pairs (mirrors the
 * schema validator's provisional firstOccurrence identity). */
function rawIdentity(specifier: string, attributes: RequestAttr[]) {
  const pairs = attributes
    .map((attr) => [attr.key, attr.value] as const)
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  return `${specifier}\0${JSON.stringify(pairs)}`;
}

function importAttributes(node: t.ImportDeclaration): RequestAttr[] {
  return (node.attributes || []).map((attribute) => ({
    key:
      attribute.key.type === "Identifier"
        ? attribute.key.name
        : attribute.key.value,
    value: attribute.value.value,
    quoted: attribute.key.type !== "Identifier",
  }));
}

/** Locates the specifier string literal (quotes included) in the printed
 * statement text. */
function specifierSpan(text: string, specifier: string) {
  for (const quote of ['"', "'"]) {
    const literal = quote + specifier.replaceAll("\\", "\\\\") + quote;
    const start = text.indexOf(literal);
    if (start !== -1) return { start, end: start + literal.length };
  }
  return { start: 0, end: 0 };
}

function declareLocalSymbols(
  node: t.Statement,
  ordinal: number,
  symbols: Record<string, PreliminarySymbol>,
) {
  const target =
    node.type === "ExportNamedDeclaration" && node.declaration
      ? node.declaration
      : node;
  if (target.type === "VariableDeclaration") {
    for (const declarator of target.declarations) {
      if (declarator.id.type === "Identifier") {
        symbols[`%${declarator.id.name}`] = {
          name: declarator.id.name,
          kind: "local",
          declKind: target.kind,
          refCount: 0,
          declOrdinal: ordinal,
        };
      }
    }
  } else if (target.type === "FunctionDeclaration" && target.id) {
    symbols[`%${target.id.name}`] = {
      name: target.id.name,
      kind: "local",
      declKind: "hoisted",
      refCount: 0,
      declOrdinal: ordinal,
    };
  }
}

interface IdentifierOccurrence {
  name: string;
  isDecl: boolean;
}

/** Collects plan-symbol identifier occurrences in print order, excluding
 * non-reference positions (properties, keys, import/export name sides). */
function collectIdentifierOccurrences(
  node: unknown,
  symIdsByName: Map<string, string>,
  isDecl: boolean,
  out: IdentifierOccurrence[],
) {
  if (Array.isArray(node)) {
    for (const item of node) {
      collectIdentifierOccurrences(item, symIdsByName, isDecl, out);
    }
    return;
  }
  if (!node || typeof node !== "object") return;
  const expr = node as t.Node;
  const visit = (child: unknown, childIsDecl = isDecl) =>
    collectIdentifierOccurrences(child, symIdsByName, childIsDecl, out);

  switch (expr.type) {
    case "Identifier":
      if (symIdsByName.has(expr.name)) out.push({ name: expr.name, isDecl });
      return;
    case "MemberExpression":
    case "OptionalMemberExpression":
      visit(expr.object);
      if (expr.computed) visit(expr.property);
      return;
    case "ObjectProperty":
      if (expr.computed) visit(expr.key);
      visit(expr.value);
      return;
    case "ImportSpecifier":
    case "ImportDefaultSpecifier":
    case "ImportNamespaceSpecifier":
      visit(expr.local, true);
      return;
    case "ExportSpecifier":
      visit(expr.local, false);
      return;
    case "VariableDeclarator":
      visit(expr.id, true);
      visit(expr.init, false);
      return;
    case "FunctionDeclaration":
    case "FunctionExpression":
      visit(expr.id, true);
      visit(expr.params, true);
      visit(expr.body, false);
      return;
    case "ArrowFunctionExpression":
      visit(expr.params, true);
      visit(expr.body, false);
      return;
    default:
      for (const key of Object.keys(expr)) {
        if (!SKIPPED_WALK_KEYS.has(key)) {
          visit((expr as unknown as Record<string, unknown>)[key]);
        }
      }
  }
}

const SKIPPED_WALK_KEYS = new Set([
  "loc",
  "extra",
  "leadingComments",
  "trailingComments",
  "innerComments",
]);

const IDENT_CHAR = /[\p{ID_Continue}$]/u;

/** Aligns AST identifier occurrences with the printed text by scanning
 * identifier tokens outside strings/comments (template interpolations scan
 * as code); misalignment drops the statement's spans rather than publishing
 * wrong offsets. */
function alignSpans(
  text: string,
  occurrences: IdentifierOccurrence[],
  symIdsByName: Map<string, string>,
): [number, number, string][] {
  const spans: [number, number, string][] = [];
  // Brace depth per template-nested code segment; -1 marks template mode.
  const modes: number[] = [0];
  let expected = 0;
  let i = 0;
  while (i < text.length && expected < occurrences.length) {
    const char = text[i];
    if (modes[modes.length - 1] === -1) {
      if (char === "\\") i += 2;
      else if (char === "`") {
        modes.pop();
        i++;
      } else if (char === "$" && text[i + 1] === "{") {
        modes.push(0);
        i += 2;
      } else i++;
      continue;
    }
    if (char === '"' || char === "'") {
      i = skipString(text, i);
    } else if (char === "`") {
      modes.push(-1);
      i++;
    } else if (char === "{") {
      modes[modes.length - 1]++;
      i++;
    } else if (char === "}") {
      if (modes[modes.length - 1] === 0 && modes.length > 1) modes.pop();
      else modes[modes.length - 1]--;
      i++;
    } else if (char === "/" && text[i + 1] === "/") {
      while (i < text.length && text[i] !== "\n") i++;
    } else if (char === "/" && text[i + 1] === "*") {
      const end = text.indexOf("*/", i + 2);
      i = end === -1 ? text.length : end + 2;
    } else if (IDENT_CHAR.test(char)) {
      const start = i;
      while (i < text.length && IDENT_CHAR.test(text[i])) i++;
      const token = text.slice(start, i);
      if (token === occurrences[expected].name) {
        spans.push([start, i, symIdsByName.get(token)!]);
        expected++;
      }
    } else {
      i++;
    }
  }
  return expected === occurrences.length ? spans : [];
}

function skipString(text: string, start: number) {
  const quote = text[start];
  let i = start + 1;
  while (i < text.length) {
    if (text[i] === "\\") i += 2;
    else if (text[i] === quote) return i + 1;
    else i++;
  }
  return i;
}

const REGENERATED_KINDS = new Set(["import", "reexport", "export-locals"]);

/** Comment authority by kind (@1.1): regenerated kinds own their buckets;
 * spliced kinds keep comments verbatim in `text` with empty buckets. */
function collectCommentBuckets(
  kind: StatementKind,
  node: t.Statement,
  leading: t.Statement["leadingComments"],
): AttachedComments {
  if (!REGENERATED_KINDS.has(kind)) {
    return { leading: [], internal: [], trailing: [] };
  }
  const internal: string[] = [];
  const seen = new Set<t.Comment>([
    ...(leading || []),
    ...(node.trailingComments || []),
  ]);
  collectInternalComments(node, node, seen, internal);
  return {
    leading: (leading || []).map(printComment),
    internal,
    trailing: (node.trailingComments || []).map(printComment),
  };
}

function collectInternalComments(
  node: unknown,
  root: t.Node,
  seen: Set<t.Comment>,
  out: string[],
) {
  if (Array.isArray(node)) {
    for (const item of node) collectInternalComments(item, root, seen, out);
    return;
  }
  if (!node || typeof node !== "object") return;
  const current = node as t.Node;
  for (const key of Object.keys(current)) {
    if (key === "loc" || key === "extra") continue;
    const isCommentKey =
      key === "innerComments" ||
      (current !== root &&
        (key === "leadingComments" || key === "trailingComments"));
    if (isCommentKey) {
      for (const comment of (
        current as unknown as Record<string, t.Comment[] | null>
      )[key] || []) {
        if (!seen.has(comment)) {
          seen.add(comment);
          out.push(printComment(comment));
        }
      }
    } else if (key !== "leadingComments" && key !== "trailingComments") {
      collectInternalComments(
        (current as unknown as Record<string, unknown>)[key],
        root,
        seen,
        out,
      );
    }
  }
}

function printComment(comment: t.Comment) {
  return comment.type === "CommentBlock"
    ? `/*${comment.value}*/`
    : `//${comment.value}`;
}

/** Offset of `node`'s own print (leading trivia stripped) inside `text`. */
function offsetIn(
  text: string,
  node: t.Node,
  from: number,
  generatorOpts: Record<string, unknown>,
  fallback = 0,
) {
  const bare = print(
    { ...node, leadingComments: null } as t.Node,
    generatorOpts,
  );
  const offset = text.indexOf(bare, from);
  return offset === -1 ? fallback : offset;
}

function print(node: t.Node, generatorOpts: Record<string, unknown>) {
  return generator(node, generatorOpts).code;
}
