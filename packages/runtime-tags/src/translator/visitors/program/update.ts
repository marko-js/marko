import { types as t } from "@marko/compiler";
import { importDefault } from "@marko/compiler/babel-utils";
import { basename } from "path";

import { generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import { getScopeAccessorLiteral } from "../../util/references";
import {
  callRuntime,
  getPersistedRuntimePath,
  importRuntime,
} from "../../util/runtime";
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
 * `?update` entry (`entry: "update"`, dom output): the full dom translation
 * has run -- sections, accessors, and register ids match the main module -- but
 * instead of the template we emit per-section merge functions
 * `(patch, live) => { ... }` that apply a patch render's payload to live
 * scopes. Shared pieces (value/conditional signals, loop branch content)
 * resolve from the resume registry the persisted dom build populated; child
 * templates dispatch through their own `?update` module.
 *
 * Sparse: every statement is guarded by a presence check -- a key absent from
 * the patch means unchanged.
 */
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const rootSection = getSectionForBody(program)!;
      const file = program.hub.file;
      const hoistedDeclarations: t.Statement[] = [];
      const mergeFunctions: t.Statement[] = [];
      const mergeIdentifiers = new Map<Section, t.Identifier>();
      // Lazy-child loader registrations (`_load_ready`) dedupe by the
      // child's asset/ready id -- repeated lazy tags of one child share one
      // registration.
      const emittedLoadReady = new Set<string>();
      // The merge params must be generated unique names: `pruneUnusedImports`
      // keeps any import whose local name appears as an identifier, so bare
      // `patch`/`live` params would retain a user import of the same name --
      // reviving possibly server-only code in the update entry.
      const patchName = program.scope.generateUid("patch");
      const liveName = program.scope.generateUid("live");
      // The generic interpreter's imported local, hoisted so the merge-less
      // detection below compares against the real (possibly aliased) name.
      // If nothing ends up referencing it, its specifier is pruned.
      const updateScopeIdentifier = importRuntime(
        "_update_scope",
      ) as t.Identifier;

      forEachSectionReverse((section) => {
        const patchIdentifier = t.identifier(patchName);
        const liveIdentifier = t.identifier(liveName);
        const statements = buildMergeStatements(
          section,
          patchIdentifier,
          liveIdentifier,
          mergeIdentifiers,
          hoistedDeclarations,
          file,
          emittedLoadReady,
        );

        if (
          isGenericOnly(statements, updateScopeIdentifier.name) ||
          (!statements.length && section === rootSection)
        ) {
          // The whole merge reduced to the generic hole applier (or an empty
          // root -- captures pair 1:1 with merges, so no typed patch keys can
          // arrive and the interpreter is an equivalent noop): use the
          // interpreter directly, no per-section wrapper (dispatch sites clone
          // the identifier).
          mergeIdentifiers.set(section, t.cloneNode(updateScopeIdentifier));
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
          rootIdentifier.name !== updateScopeIdentifier.name)
      ) {
        // Parents dispatch this template's patch scopes through the bare
        // interpreter because analysis proved its update module would be
        // exactly that; compiled merge code here means that proof was wrong.
        throw program.buildCodeFrameError(
          "Marko internal error: analysis marked this template's update module as generic but translation produced merge code for it. Please open an issue with a reproduction.",
        );
      }
      // Built before imports are collected below -- `callRuntime` may add
      // the `_resume` import to the program body.
      const mergeIdentifier = program.scope.generateUidIdentifier("merge");
      const mergeDeclaration = t.variableDeclaration("const", [
        t.variableDeclarator(
          mergeIdentifier,
          callRuntime(
            "_resume",
            t.stringLiteral(getResumeRegisterId(rootSection, "update")),
            rootIdentifier,
          ),
        ),
      ]);
      // The factory's declared name is a program-scope uid aliased to the
      // public `createPatch` in its export specifier: a fixed declared name
      // would be a duplicate binding against a user import of the same name
      // (which `pruneUnusedImports` keeps -- the declaration references it).
      const patchFactoryIdentifier =
        program.scope.generateUidIdentifier("createPatch");
      const patchFactoryDeclaration = t.functionDeclaration(
        t.cloneNode(patchFactoryIdentifier),
        [],
        t.blockStatement([
          t.returnStatement(
            callRuntime("createPatch", t.cloneNode(mergeIdentifier)),
          ),
        ]),
      );
      const patchExport = t.exportNamedDeclaration(null, [
        t.exportSpecifier(patchFactoryIdentifier, t.identifier("createPatch")),
      ]);
      const body: t.Statement[] = [
        // The `?persisted` entry is this template's render graph plus the
        // registry registrations this entry's merges resolve signals, branch
        // content, and renderers from (the main dom module omits them to keep
        // hydration bundles lean). Static import so registrations land before
        // any merge dispatches.
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
      body.push(
        mergeDeclaration,
        // The template itself is a content renderer (`_template` registers
        // it through `_content_resume(templateId, ...)`), so a dynamic tag
        // whose renderer is this template dispatches its merge by that same
        // id -- the root's counterpart of the section registrations above.
        t.expressionStatement(
          callRuntime(
            "_update_content",
            t.stringLiteral(file.metadata.marko.id),
            t.cloneNode(mergeIdentifier),
          ),
        ),
        t.exportDefaultDeclaration(t.cloneNode(mergeIdentifier)),
        patchFactoryDeclaration,
        patchExport,
      );
      // `have` (runtime `_have`) builds the possession echo the router sends as
      // `x-marko-have`. The generated `createPatch()` above closes over this
      // entry's merge so the router cannot pair it with another route.
      body.push(
        t.exportNamedDeclaration(
          null,
          [t.exportSpecifier(t.identifier("_have"), t.identifier("have"))],
          t.stringLiteral(getPersistedRuntimePath()),
        ),
      );

      program.node.body = body;
      pruneUnusedImports(program.node);
    },
  },
};

// True when the section's whole merge is the single generic-applier call
// emitted by the merge loop below -- the marker for merge-less sections.
// Compared against the interpreter's actual imported local name (it aliases
// on collision with user code).
function isGenericOnly(statements: t.Statement[], updateScopeName: string) {
  if (statements.length !== 1) return false;
  const [statement] = statements;
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "CallExpression" &&
    statement.expression.callee.type === "Identifier" &&
    statement.expression.callee.name === updateScopeName
  );
}

function buildMergeStatements(
  section: Section,
  patchIdentifier: t.Identifier,
  liveIdentifier: t.Identifier,
  mergeIdentifiers: Map<Section, t.Identifier>,
  hoistedDeclarations: t.Statement[],
  file: t.BabelFile,
  emittedLoadReady: Set<string>,
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

  // State seeds (cross-route/seed-mode payloads) run FIRST: a fresh subtree's
  // `<let>` initializers may live behind server-only expressions, so the seed
  // must land before setup flushes (`_let` defers to it while updating).
  // Applied through the binding's registered signal so downstream derivations
  // recompute, and gated by `_update_seed` to scopes created during this apply
  // (matched scopes' live state never changes).
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

  // Hole placements (text/html/attr holes, controllables) and update-generic
  // child dispatch are fully typed by their patch keys, so one generic applier
  // call replaces their per-template merge lines (`_update_scope` iterates the
  // patch scope's keys, dispatches by prefix, and descends through
  // `PatchChild:` links; controllable semantics recover from the live
  // element). Only structural dispatch, non-generic children, and signal-backed
  // values still compile per template.
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
        patchIdentifier,
        liveIdentifier,
        mergeIdentifiers,
        hoistedDeclarations,
        file,
        emittedLoadReady,
        { patchGet, liveGet, ifPresent },
      ),
    );
  }

  // Statements mixing client state with `$global` re-run against the live
  // scope, last -- after patched values land and after `applyScopes` assigned
  // the payload's `serializedGlobals` (every update carries them, so this is
  // unconditional). The persisted entry registered the statements per section.
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
  patchIdentifier: t.Identifier,
  liveIdentifier: t.Identifier,
  mergeIdentifiers: Map<Section, t.Identifier>,
  hoistedDeclarations: t.Statement[],
  file: t.BabelFile,
  emittedLoadReady: Set<string>,
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
      // Same-branch content merges dispatch by branch index (no client
      // construction needed); a branch change applies a resumable fragment
      // (or fails loudly without one) -- see `_update_if` in
      // dom/update-merges.ts, mirroring the hop's `_update_dynamic`.
      const branchMerges = merge.branchBodySections.map(
        (branchSection) => branchSection && mergeIdentifiers.get(branchSection),
      );
      return [
        ifPresent(
          rendererKey,
          t.expressionStatement(
            callRuntime(
              "_update_if",
              t.cloneNode(patchIdentifier),
              liveIdentifier,
              t.stringLiteral(rendererKey),
              t.stringLiteral(branchScopesKey),
              branchMerges.some(Boolean)
                ? t.arrayExpression(
                    branchMerges.map((identifier) =>
                      identifier
                        ? t.cloneNode(identifier, true)
                        : t.numericLiteral(0),
                    ),
                  )
                : undefined,
            ),
          ),
        ),
      ];
    }
    case "for": {
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      const bodyMerge = mergeIdentifiers.get(merge.bodySection);

      if (merge.siteId) {
        // Request-derived: a genuinely new key or positional index applies
        // as a resumable fragment instead of client construction -- see
        // `_update_for_keyed` in dom/update-merges.ts. It consumes the same
        // `[branches, loopKeyPropName]` value shape a state-driven loop's
        // signal would get.
        const signalIdentifier = generateUidIdentifier("for_update");
        const patchBranchIdentifier = generateUidIdentifier("p");
        const liveBranchIdentifier = generateUidIdentifier("l");
        hoistedDeclarations.push(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              signalIdentifier,
              callRuntime(
                "_update_for_keyed",
                t.cloneNode(merge.encodedAccessor, true),
                // Hoisted declarations land before every per-section merge
                // function in the compiled module (see this file's program
                // exit), so a direct reference to `bodyMerge` here would be
                // a forward (TDZ) read when that section has its own
                // compiled merge. Deferring the read behind a delegate
                // (only actually called once dispatch reaches a real
                // branch, long after every top-level const has initialized)
                // avoids it -- the plain (non-hoisted) branch below needs no
                // such delegate, since it only ever runs from inside this
                // same section's own (already-lazy) merge function body.
                bodyMerge
                  ? t.arrowFunctionExpression(
                      [patchBranchIdentifier, liveBranchIdentifier],
                      t.callExpression(t.cloneNode(bodyMerge, true), [
                        patchBranchIdentifier,
                        liveBranchIdentifier,
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

      // Stable (render-once) list: a plain index-paired merge, no diff, no
      // client construction -- see `_update_for` in dom/update-merges.ts.
      // Not hoisted (it runs from inside this section's own merge function
      // body), so a direct reference to `bodyMerge` is safe here.
      return [
        ifPresent(
          branchScopesKey,
          t.expressionStatement(
            callRuntime(
              "_update_for",
              patchGet(branchScopesKey),
              liveGet(branchScopesKey),
              bodyMerge ? t.cloneNode(bodyMerge, true) : t.numericLiteral(0),
            ),
          ),
        ),
      ];
    }
    case "dynamic": {
      const rendererKey =
        getAccessorPrefix().ConditionalRenderer + merge.accessor.value;
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      // Divergence arrives as a fragment frame. A renderer mismatch without
      // its fragment fails loudly instead of constructing from client-shipped
      // render code.
      return [
        t.ifStatement(
          t.logicalExpression(
            "||",
            t.binaryExpression(
              "in",
              toKeyLiteral(rendererKey),
              patchIdentifier,
            ),
            t.binaryExpression(
              "in",
              toKeyLiteral(branchScopesKey),
              patchIdentifier,
            ),
          ),
          t.expressionStatement(
            callRuntime(
              "_update_dynamic",
              t.cloneNode(patchIdentifier),
              liveIdentifier,
              t.stringLiteral(rendererKey),
              t.stringLiteral(branchScopesKey),
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
              t.cloneNode(patchIdentifier),
              liveIdentifier,
              t.cloneNode(merge.accessor, true),
              bodyMerge ? t.cloneNode(bodyMerge, true) : t.numericLiteral(0),
            ),
          ),
        ),
      ];
    }
    case "child": {
      if (merge.load) {
        // `load=` lazy child: no import here -- the child's `?update` module
        // rides its lazy chunks and registers under the compile-constant id
        // both sides derive. `_update_load` merges once it has registered and
        // parks the patch until it loads. The trigger-gated loader also
        // registers under its asset/ready id so a fragment delivering the
        // child's markup can start the load and replay its parked keyed resume
        // batch (see `_load_ready` in dom/update-merges.ts).
        if (merge.loadReady && !emittedLoadReady.has(merge.loadReady.id)) {
          emittedLoadReady.add(merge.loadReady.id);
          hoistedDeclarations.push(
            t.expressionStatement(
              callRuntime(
                "_load_ready",
                t.stringLiteral(merge.loadReady.id),
                t.cloneNode(merge.loadReady.loadExpr, true),
              ),
            ),
          );
        }
        return [
          ifPresent(
            merge.accessor,
            t.expressionStatement(
              callRuntime(
                "_update_load",
                patchGet(merge.accessor),
                liveGet(merge.accessor),
                t.stringLiteral(merge.load),
              ),
            ),
          ),
        ];
      }
      // Only non-generic children reach here: a child whose whole update
      // module is the generic interpreter serializes its link under the typed
      // `PatchChild:` key instead, and the interpreter call above descends
      // through it (no import, so the child's `?update` module never builds).
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
    if (anyNode.type === "ExportNamedDeclaration") {
      // Export specifiers must not pin imports: the `exported` half is a
      // public name, not a usage, and with a `source` (the `_have as have`
      // re-export) the `local` half names the source module's binding, not
      // this scope's. Only source-less specifiers' `local` names count.
      const exportNode = anyNode as any as t.ExportNamedDeclaration;
      collectIdentifiers(exportNode.declaration, used);
      if (!exportNode.source) {
        for (const specifier of exportNode.specifiers) {
          if (specifier.type === "ExportSpecifier") {
            collectIdentifiers(specifier.local, used);
          }
        }
      }
      return;
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
