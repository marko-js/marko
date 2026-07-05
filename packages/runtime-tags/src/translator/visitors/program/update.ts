import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";
import { basename } from "path";

import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { isPersistedFragments } from "../../util/marko-config";
import { getScopeAccessorLiteral } from "../../util/references";
import { callRuntime, getRuntimePath, importRuntime } from "../../util/runtime";
import {
  forEachSectionReverse,
  getSectionForBody,
  getSectionParentIsOwner,
  type Section,
} from "../../util/sections";
import { getResumeRegisterId, getSignals } from "../../util/signals";
import {
  forEachUpdateSeedBinding,
  forEachUpdateValueBinding,
  getUpdateGlobalsRegisterId,
  getUpdateGlobalsStatements,
  getUpdateMerges,
  getUpdateVarRegisterId,
  type UpdateMerge,
} from "../../util/update-merges";

/**
 * Program exit for `?update` entry compiles (`entry: "update"` with dom
 * output). The full dom translation has already run -- sections, accessors,
 * and register ids match the main module exactly -- but instead of emitting
 * the template we assemble the per-section merge entries the visitors
 * recorded into compiled merge functions: `(patch, live) => { ... }`
 * statements that apply a persisted update-render patch to live scopes.
 * Shared pieces (value/conditional signals, loop branch content) are looked
 * up from the resume registry where the persisted dom build registered them;
 * child templates are dispatched through their own `?update` module.
 *
 * Sparse merge semantics: every statement is guarded by a presence check --
 * a key absent from the patch means unchanged.
 */
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const rootSection = getSectionForBody(program)!;
      const file = program.hub.file;
      const hoistedDeclarations: t.Statement[] = [];
      const mergeFunctions: t.Statement[] = [];
      const mergeIdentifiers = new Map<Section, t.Identifier>();

      forEachSectionReverse((section) => {
        const patchIdentifier = t.identifier("patch");
        const liveIdentifier = t.identifier("live");
        const statements = buildMergeStatements(
          section,
          patchIdentifier,
          liveIdentifier,
          mergeIdentifiers,
          hoistedDeclarations,
          file,
        );

        if (
          isGenericOnly(statements) ||
          (!statements.length && section === rootSection)
        ) {
          // The whole merge reduced to the generic hole applier (or, for a
          // root with nothing to merge, to a noop -- captures pair 1:1 with
          // merges, so no typed patch keys can arrive and the interpreter
          // is an equivalent noop): the section registers/exports the
          // interpreter itself -- no per-section wrapper (dispatch sites
          // clone the identifier).
          mergeIdentifiers.set(
            section,
            t.cloneNode(importRuntime("_update_scope") as t.Identifier),
          );
        } else if (statements.length) {
          const identifier = generateUidIdentifier(
            section === rootSection ? "update" : `${section.name}__update`,
          );
          mergeIdentifiers.set(section, identifier);
          mergeFunctions.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                t.arrowFunctionExpression(
                  [patchIdentifier, liveIdentifier],
                  t.blockStatement(statements),
                ),
              ),
            ]),
          );
        }
      });

      const rootIdentifier = mergeIdentifiers.get(rootSection)!;
      if (
        program.node.extra.domExports?.updateGeneric &&
        (mergeFunctions.length ||
          hoistedDeclarations.length ||
          !rootIdentifier.name.includes("_update_scope"))
      ) {
        // Parent templates dispatch this template's patch scopes through
        // the bare interpreter based on the analyze phase proving this
        // module would be exactly that; compiled merge code here means
        // that proof was wrong and must fail loudly.
        throw program.buildCodeFrameError(
          "Marko internal error: analysis marked this template's update module as generic but translation produced merge code for it. Please open an issue with a reproduction.",
        );
      }
      // Built before imports are collected below -- `callRuntime` may add
      // the `_resume` import to the program body.
      const defaultExport = t.exportDefaultDeclaration(
        callRuntime(
          "_resume",
          t.stringLiteral(getResumeRegisterId(rootSection, "update")),
          rootIdentifier,
        ),
      );
      const body: t.Statement[] = [
        // The persisted entry (`?persisted`, this template compiled with
        // `entry: "persisted"`) is the template's render graph WITH the
        // registry registrations this entry's merges resolve signals,
        // branch content, and renderers from -- the main dom module omits
        // them so hydration bundles stay lean, and this import defers the
        // render graph to the first persisted navigation (this entry is
        // always lazily loaded). A static import so registrations land
        // before any merge dispatches.
        t.importDeclaration(
          [],
          t.stringLiteral(
            `./${basename(file.opts.filename as string)}?persisted`,
          ),
        ),
      ];
      for (const statement of program.node.body) {
        if (statement.type === "ImportDeclaration") {
          body.push(statement);
        }
      }
      body.push(...hoistedDeclarations, ...mergeFunctions);
      // Content sections rendered through dynamic tags (eg a layout's
      // `<${input.content}/>`) are dispatched by renderer id at merge time,
      // so their merges register under the same content id the dom output
      // registers the renderer with (`_content_resume`).
      forEachSectionReverse((section) => {
        const identifier = mergeIdentifiers.get(section);
        if (
          identifier &&
          section !== rootSection &&
          !getSectionParentIsOwner(section)
        ) {
          body.push(
            t.expressionStatement(
              callRuntime(
                "_update_content",
                t.stringLiteral(getResumeRegisterId(section, "content")),
                t.cloneNode(identifier, true),
              ),
            ),
          );
        }
      });
      body.push(defaultExport);
      // Re-export the appliers so consumers (the client router) need no
      // knowledge of the runtime module path this entry was compiled
      // against (debug vs optimized). `createUpdate` is the per-navigation
      // streaming form (one call per response frame).
      body.push(
        t.exportNamedDeclaration(
          null,
          [
            t.exportSpecifier(
              t.identifier("applyUpdate"),
              t.identifier("applyUpdate"),
            ),
            t.exportSpecifier(
              t.identifier("createUpdate"),
              t.identifier("createUpdate"),
            ),
          ],
          t.stringLiteral(getRuntimePath("dom")),
        ),
      );

      program.node.body = body;
      pruneUnusedImports(program.node);
    },
  },
};

// True when the section's whole merge is the single generic-applier call
// emitted by the merge loop below -- the marker for merge-less sections.
function isGenericOnly(statements: t.Statement[]) {
  if (statements.length !== 1) return false;
  const [statement] = statements;
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "CallExpression" &&
    statement.expression.callee.type === "Identifier" &&
    statement.expression.callee.name.includes("_update_scope")
  );
}

function buildMergeStatements(
  section: Section,
  patchIdentifier: t.Identifier,
  liveIdentifier: t.Identifier,
  mergeIdentifiers: Map<Section, t.Identifier>,
  hoistedDeclarations: t.Statement[],
  file: t.BabelFile,
) {
  const statements: t.Statement[] = [];

  // Sections with effects pair their patch scope to the live scope so
  // payload effect entries (patch-local scope ids) can resolve their live
  // scope -- executed only for scopes freshly created during the apply.
  let hasEffects = false;
  for (const signal of getSignals(section).values()) {
    if (signal.effect.length) {
      hasEffects = true;
      break;
    }
  }
  if (hasEffects) {
    statements.push(
      t.expressionStatement(
        callRuntime("_update_pair", patchIdentifier, liveIdentifier),
      ),
    );
  }

  const patchGet = (key: string | t.StringLiteral | t.NumericLiteral) =>
    t.memberExpression(patchIdentifier, toKeyLiteral(key), true);
  const liveGet = (key: string | t.StringLiteral | t.NumericLiteral) =>
    t.memberExpression(liveIdentifier, toKeyLiteral(key), true);
  const ifPresent = (
    key: string | t.StringLiteral | t.NumericLiteral,
    whenPresent: t.Statement,
  ) =>
    t.ifStatement(
      t.binaryExpression("in", toKeyLiteral(key), patchIdentifier),
      whenPresent,
    );

  // State seeds (cross-route/seed-mode payloads) run FIRST: a fresh
  // subtree's `<let>` initializers may live behind server-only
  // expressions, so the seed must land before setup flushes (`_let`
  // defers to it while updating). Applied through the binding's
  // registered signal so downstream derivations recompute, and gated by
  // `_update_seed` to scopes created during this apply -- matched scopes'
  // live state never changes. Sparse like everything else: the key is
  // absent from non-seed payloads entirely.
  forEachUpdateSeedBinding(section, (binding) => {
    if (binding.pruned) return;
    const accessor = getScopeAccessorLiteral(binding);
    const signalIdentifier = generateUidIdentifier(`${binding.name}_seed`);
    hoistedDeclarations.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          signalIdentifier,
          callRuntime(
            "_update_signal",
            t.stringLiteral(getUpdateVarRegisterId(section, binding)),
          ),
        ),
      ]),
    );
    statements.push(
      ifPresent(
        accessor,
        t.expressionStatement(
          callRuntime(
            "_update_seed",
            liveIdentifier,
            signalIdentifier,
            patchGet(accessor),
          ),
        ),
      ),
    );
  });

  forEachUpdateValueBinding(section, (binding, needsSignal) => {
    if (binding.pruned) return;
    const accessor = getScopeAccessorLiteral(binding);
    if (needsSignal) {
      const signalIdentifier = generateUidIdentifier(`${binding.name}_update`);
      hoistedDeclarations.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            signalIdentifier,
            callRuntime(
              "_update_signal",
              t.stringLiteral(getUpdateVarRegisterId(section, binding)),
            ),
          ),
        ]),
      );
      statements.push(
        ifPresent(
          accessor,
          t.expressionStatement(
            t.callExpression(signalIdentifier, [
              liveIdentifier,
              patchGet(accessor),
            ]),
          ),
        ),
      );
    } else {
      statements.push(
        ifPresent(
          accessor,
          t.expressionStatement(
            t.assignmentExpression("=", liveGet(accessor), patchGet(accessor)),
          ),
        ),
      );
    }
  });

  // Hole placements (text/html holes, attr holes, controllables) and
  // update-generic child dispatch are fully typed by their patch keys, so
  // one generic applier call replaces their per-template merge lines
  // (`_update_scope` iterates the patch scope's keys, dispatches by
  // prefix, and descends through `UpdateChild:` links; controllable
  // semantics are recovered from the live element). Only structural
  // dispatch, non-generic children, and signal-backed values still
  // compile per template.
  let genericEmitted = false;
  for (const merge of getUpdateMerges(section)) {
    if (
      merge.kind === "text" ||
      merge.kind === "html" ||
      merge.kind === "attr" ||
      merge.kind === "controllable" ||
      (merge.kind === "child" && merge.generic)
    ) {
      if (!genericEmitted) {
        genericEmitted = true;
        statements.push(
          t.expressionStatement(
            callRuntime("_update_scope", patchIdentifier, liveIdentifier),
          ),
        );
      }
      continue;
    }
    statements.push(
      ...buildMerge(
        merge,
        liveIdentifier,
        mergeIdentifiers,
        hoistedDeclarations,
        file,
        { patchGet, liveGet, ifPresent },
      ),
    );
  }

  // Statements mixing client state with `$global` re-run against the live
  // scope, last -- after patched values land, and after `applyScopes` has
  // already assigned the payload's `serializedGlobals` (every update carries
  // them, so this is unconditional: absent-means-unchanged doesn't apply to
  // `$global`). The persisted entry registered the statements per section.
  if (getUpdateGlobalsStatements(section).length) {
    const signalIdentifier = generateUidIdentifier("globals_update");
    hoistedDeclarations.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          signalIdentifier,
          callRuntime(
            "_update_signal",
            t.stringLiteral(getUpdateGlobalsRegisterId(section)),
          ),
        ),
      ]),
    );
    statements.push(
      t.expressionStatement(
        t.callExpression(signalIdentifier, [liveIdentifier]),
      ),
    );
  }

  return statements;
}

function buildMerge(
  merge: Exclude<
    UpdateMerge,
    { kind: "text" | "html" | "attr" | "controllable" }
  >,
  liveIdentifier: t.Identifier,
  mergeIdentifiers: Map<Section, t.Identifier>,
  hoistedDeclarations: t.Statement[],
  file: t.BabelFile,
  {
    patchGet,
    liveGet,
    ifPresent,
  }: {
    patchGet: (
      key: string | t.StringLiteral | t.NumericLiteral,
    ) => t.Expression;
    liveGet: (key: string | t.StringLiteral | t.NumericLiteral) => t.Expression;
    ifPresent: (
      key: string | t.StringLiteral | t.NumericLiteral,
      whenPresent: t.Statement,
    ) => t.Statement;
  },
): t.Statement[] {
  switch (merge.kind) {
    case "if": {
      const rendererKey =
        getAccessorPrefix().ConditionalRenderer + merge.accessor.value;
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      const signalIdentifier = generateUidIdentifier("if_update");
      hoistedDeclarations.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            signalIdentifier,
            callRuntime("_update_signal", t.stringLiteral(merge.signalId)),
          ),
        ]),
      );

      const bodyStatements: t.Statement[] = [
        t.expressionStatement(
          t.callExpression(signalIdentifier, [
            liveIdentifier,
            patchGet(rendererKey),
          ]),
        ),
      ];

      const branchMerges = merge.branchBodySections.map(
        (branchSection) => branchSection && mergeIdentifiers.get(branchSection),
      );
      if (branchMerges.some(Boolean)) {
        const patchBranch = generateUidIdentifier("patchBranch");
        const liveBranch = generateUidIdentifier("liveBranch");
        const branchMerge = generateUidIdentifier("branchMerge");
        bodyStatements.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(patchBranch, patchGet(branchScopesKey)),
            t.variableDeclarator(liveBranch, liveGet(branchScopesKey)),
            t.variableDeclarator(
              branchMerge,
              branchMerges.length === 1
                ? t.cloneNode(branchMerges[0]!, true)
                : t.memberExpression(
                    t.arrayExpression(
                      branchMerges.map((identifier) =>
                        identifier
                          ? t.cloneNode(identifier, true)
                          : t.numericLiteral(0),
                      ),
                    ),
                    patchGet(rendererKey),
                    true,
                  ),
            ),
          ]),
          t.ifStatement(
            t.logicalExpression(
              "&&",
              t.logicalExpression("&&", patchBranch, liveBranch),
              branchMerge,
            ),
            t.expressionStatement(
              t.callExpression(t.cloneNode(branchMerge, true), [
                t.cloneNode(patchBranch, true),
                t.cloneNode(liveBranch, true),
              ]),
            ),
          ),
        );
      }

      return [ifPresent(rendererKey, t.blockStatement(bodyStatements))];
    }
    case "for": {
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      const bodyMerge = mergeIdentifiers.get(merge.bodySection);
      const signalIdentifier = generateUidIdentifier("for_update");
      const branchIdentifier = t.identifier("branch");
      const argsIdentifier = t.identifier("args");
      hoistedDeclarations.push(
        t.variableDeclaration("const", [
          t.variableDeclarator(
            signalIdentifier,
            callRuntime(
              "_update_for",
              t.cloneNode(merge.encodedAccessor, true),
              t.stringLiteral(merge.contentId),
              bodyMerge
                ? t.arrowFunctionExpression(
                    [branchIdentifier, argsIdentifier],
                    t.callExpression(bodyMerge, [
                      t.memberExpression(
                        argsIdentifier,
                        t.numericLiteral(0),
                        true,
                      ),
                      branchIdentifier,
                    ]),
                  )
                : t.numericLiteral(0),
            ),
          ),
        ]),
      );
      return [
        ifPresent(
          branchScopesKey,
          t.expressionStatement(
            t.callExpression(signalIdentifier, [
              liveIdentifier,
              t.arrayExpression([
                patchGet(branchScopesKey),
                t.stringLiteral(getAccessorProp().LoopKey),
              ]),
            ]),
          ),
        ),
      ];
    }
    case "dynamic": {
      const rendererKey =
        getAccessorPrefix().ConditionalRenderer + merge.accessor.value;
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      // Fragment-first builds compile no replay path: divergence arrives
      // as a fragment frame, and a fragment-less renderer mismatch fails
      // the apply loudly (see `_update_dynamic`) instead of constructing
      // from a registered renderer the build no longer ships.
      let replayExpression: t.Expression = t.numericLiteral(0);
      if (!isPersistedFragments()) {
        const signalIdentifier = generateUidIdentifier("dynamic_update");
        hoistedDeclarations.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              signalIdentifier,
              callRuntime("_update_signal", t.stringLiteral(merge.signalId)),
            ),
          ]),
        );
        replayExpression = signalIdentifier;
      }
      return [
        ifPresent(
          rendererKey,
          t.expressionStatement(
            callRuntime(
              "_update_dynamic",
              t.identifier("patch"),
              liveIdentifier,
              t.stringLiteral(rendererKey),
              t.stringLiteral(branchScopesKey),
              t.cloneNode(replayExpression, true),
            ),
          ),
        ),
      ];
    }
    case "branch": {
      // `<await>`/`<try>` body dispatch: a single always-body branch, linked
      // by the same `BranchScopes:<accessor>` key the live page stores its
      // branch under. An await body's link arrives with the body's own frame
      // (resolution order) -- until then the presence check skips it. The
      // runtime helper also attaches detached awaits (a fresh subtree's
      // await whose promise compute was skipped while updating).
      const bodyMerge = mergeIdentifiers.get(merge.bodySection);
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      return [
        ifPresent(
          branchScopesKey,
          t.expressionStatement(
            callRuntime(
              "_update_branch",
              t.identifier("patch"),
              liveIdentifier,
              t.cloneNode(merge.accessor, true),
              bodyMerge ? t.cloneNode(bodyMerge, true) : t.numericLiteral(0),
            ),
          ),
        ),
      ];
    }
    case "child": {
      // Only non-generic children reach here (a child that proved its
      // whole update module is the generic interpreter serializes its link
      // under the typed `UpdateChild:` key instead, and the interpreter
      // call above descends through it -- no import, so the child's
      // `?update` module never builds).
      const childIdentifier = importDefault(
        file,
        `${merge.relativePath}?update`,
        `${merge.tagName}_update`,
      ) as t.Expression;
      return [
        ifPresent(
          merge.accessor,
          t.expressionStatement(
            t.callExpression(t.cloneNode(childIdentifier, true), [
              patchGet(merge.accessor),
              liveGet(merge.accessor),
            ]),
          ),
        ),
      ];
    }
  }
}

function toKeyLiteral(key: string | t.StringLiteral | t.NumericLiteral) {
  return typeof key === "string"
    ? t.stringLiteral(key)
    : t.cloneNode(key, true);
}

// The dom visitors ran in full to keep analysis identical to the main
// module, adding imports (runtime helpers, child templates) the merge module
// never references. Drop unused specifiers so entries only pull what they
// use.
function pruneUnusedImports(program: t.Program) {
  const used = new Set<string>();
  collectIdentifiers(
    program.body.filter((node) => node.type !== "ImportDeclaration"),
    used,
  );
  program.body = program.body.filter((node) => {
    if (node.type === "ImportDeclaration") {
      // Side-effect-only imports (the `?persisted` entry) always stay.
      if (!node.specifiers.length) return true;
      node.specifiers = node.specifiers.filter((specifier) =>
        used.has(specifier.local.name),
      );
      return node.specifiers.length > 0;
    }
    return true;
  });
}

function collectIdentifiers(node: unknown, used: Set<string>) {
  if (Array.isArray(node)) {
    for (const child of node) collectIdentifiers(child, used);
  } else if (node && typeof node === "object") {
    const anyNode = node as Record<string, unknown> & { type?: string };
    if (anyNode.type === "Identifier") {
      used.add((anyNode as any as t.Identifier).name);
    }
    for (const key in anyNode) {
      if (key === "loc" || key === "leadingComments" || key === "extra") {
        continue;
      }
      const value = anyNode[key];
      if (value && typeof value === "object") {
        collectIdentifiers(value, used);
      }
    }
  }
}
