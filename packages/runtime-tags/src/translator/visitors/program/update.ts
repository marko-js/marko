import { types as t } from "@marko/compiler";
import {
  importNamed,
  loadFileForImport,
  resolveRelativePath,
} from "@marko/compiler/babel-utils";

import { scopeIdentifier } from ".";
import { assembleConstructFragments } from "../../util/construct-pass";
import { generateUid, generateUidIdentifier } from "../../util/generate-uid";
import {
  getAccessorPrefix,
  getAccessorProp,
} from "../../util/get-accessor-char";
import type { Binding } from "../../util/references";
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
import {
  buildClosureSignalInvocation,
  getResumeRegisterId,
  getSignals,
} from "../../util/signals";
import {
  forEachUpdateSeedBinding,
  forEachUpdateValueBinding,
  getClientGatedClosureSections,
  getUpdateGlobalsRegisterId,
  getUpdateGlobalsStatements,
  getUpdateMerges,
  getUpdateVarRegisterId,
  type UpdateMerge,
} from "../../util/update-merges";
import {
  markPlanStatement,
  recordPlanImport,
} from "../../util/update-plan-records";
import { getChildImportPath } from "../tag/custom-tag";

/** Appends sparse patch merges to a persisted render graph. */
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      const rootSection = getSectionForBody(program)!;
      const file = program.hub.file;
      const hoistedDeclarations: t.Statement[] = [];
      const mergeFunctions: t.Statement[] = [];
      const mergeIdentifiers = new Map<Section, t.Identifier>();
      const emittedLoadReady = new Set<string>();
      const patchName = generateUid("patch");
      const liveName = generateUid("live");
      const constructIdentifiers = new Map<Section, t.Identifier>();
      const constructRegistrations: t.Statement[] = [];
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

        // The section's construct pass: declared fill/wiring fragments plus
        // structural merges that only apply to constructed scopes (adopted
        // branch linkage of state-only selections), registered under the
        // section's shell id so construction can look it up.
        const constructStatements = [
          ...assembleConstructFragments(section),
          ...buildConstructMergeStatements(
            section,
            mergeIdentifiers,
            hoistedDeclarations,
            file,
            emittedLoadReady,
          ),
        ];
        if (constructStatements.length) {
          const identifier = generateUidIdentifier(
            section === rootSection
              ? "construct"
              : `${section.name}__construct`,
          );
          constructIdentifiers.set(section, identifier);
          mergeFunctions.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                t.arrowFunctionExpression(
                  [scopeIdentifier],
                  t.blockStatement(constructStatements),
                ),
              ),
            ]),
          );
          constructRegistrations.push(
            t.expressionStatement(
              callRuntime(
                "_construct",
                t.stringLiteral(getResumeRegisterId(section, "update")),
                t.cloneNode(identifier, true),
              ),
            ),
          );
        }

        const directMerge = getDirectMerge(statements, patchName, liveName);
        if (directMerge) {
          mergeIdentifiers.set(section, directMerge);
        } else if (!statements.length && section === rootSection) {
          const identifier = generateUidIdentifier("update");
          hoistedDeclarations.push(
            t.variableDeclaration("const", [
              t.variableDeclarator(
                identifier,
                t.arrowFunctionExpression([], t.blockStatement([])),
              ),
            ]),
          );
          mergeIdentifiers.set(section, identifier);
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
      const updateName = program.node.extra.domExports!.update;
      // Built before imports are collected below -- `callRuntime` may add
      // the `_resume` import to the program body.
      const mergeIdentifier = generateUidIdentifier("merge");
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
      const patchFactoryIdentifier = generateUidIdentifier("patch");
      // The transport's post-apply failure sink (lazy-module load failures)
      // rides through to the runtime patch factory.
      const patchFailIdentifier = generateUidIdentifier("fail");
      const patchFactoryDeclaration = t.functionDeclaration(
        t.cloneNode(patchFactoryIdentifier),
        [t.cloneNode(patchFailIdentifier)],
        t.blockStatement([
          t.returnStatement(
            callRuntime(
              "patch",
              t.cloneNode(mergeIdentifier),
              t.cloneNode(patchFailIdentifier),
            ),
          ),
        ]),
      );
      const patchExport = t.exportNamedDeclaration(null, [
        t.exportSpecifier(patchFactoryIdentifier, t.identifier("patch")),
      ]);
      markPlanStatement(file, patchExport, {
        exports: [
          {
            exported: "patch",
            target: { kind: "local", name: patchFactoryIdentifier.name },
          },
        ],
      });
      // The entry's protocol surface: `patch` applies, `echo` reports the
      // page's provable possessions for the router's next request.
      const echoExport = t.exportNamedDeclaration(null, [
        t.exportSpecifier(
          importRuntime("_echo_snapshot"),
          t.identifier("echo"),
        ),
      ]);
      // `echo` re-exports the runtime import: an EXTERNAL export target.
      markPlanStatement(file, echoExport, {
        exports: [
          {
            exported: "echo",
            target: {
              kind: "external",
              specifier: getPersistedRuntimePath(),
              imported: "_echo_snapshot",
            },
          },
        ],
      });
      const body: t.Statement[] = [];
      body.push(
        ...hoistedDeclarations,
        ...mergeFunctions,
        ...constructRegistrations,
      );
      // Every dispatchable content section registers a merge (a shared noop
      // when it has no values): registration is how `_update_dynamic` proves
      // a dispatched renderer id is known before constructing or merging.
      // Parent-owned branch sections (conditional/loop/boundary bodies)
      // register under their update id — the site half of a value-group
      // key — so a completion line can dispatch them directly when a hit
      // parent's walk no longer reaches them.
      let noopIdentifier: t.Identifier | undefined;
      forEachSectionReverse((section) => {
        if (section === rootSection) {
          return;
        }
        const parentIsOwner = getSectionParentIsOwner(section);
        let identifier = mergeIdentifiers.get(section);
        if (!identifier) {
          if (!noopIdentifier) {
            noopIdentifier = generateUidIdentifier("noop_update");
            body.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  noopIdentifier,
                  t.arrowFunctionExpression([], t.blockStatement([])),
                ),
              ]),
            );
          }
          identifier = noopIdentifier;
        }
        const constructIdentifier = parentIsOwner
          ? undefined
          : constructIdentifiers.get(section);
        body.push(
          t.expressionStatement(
            callRuntime(
              "_update_content",
              t.stringLiteral(
                getResumeRegisterId(
                  section,
                  parentIsOwner ? "update" : "content",
                ),
              ),
              t.cloneNode(identifier, true),
              ...(constructIdentifier
                ? [t.cloneNode(constructIdentifier, true)]
                : []),
            ),
          ),
        );
      });
      // Templates escaping this module as runtime values register a deferred
      // loader so `_update_dynamic` can pull the child's merge on demand.
      for (const request of program.node.extra.escapedTemplateImports || []) {
        const importPath = getChildImportPath(file, request);
        const childFile =
          importPath !== request && loadFileForImport(file, request);
        if (childFile) {
          const loaderStatement = t.expressionStatement(
            callRuntime(
              "_update_loader",
              t.stringLiteral(childFile.metadata.marko.id),
              t.arrowFunctionExpression(
                [],
                t.callExpression(t.import(), [t.stringLiteral(importPath)]),
              ),
            ),
          );
          markPlanStatement(file, loaderStatement, {
            loader: {
              targetKind: "escaped-direct",
              registryFn: "_update_loader",
              rendererId: childFile.metadata.marko.id,
              targets: [importPath],
            },
            lazyEdges: [importPath],
          });
          body.push(loaderStatement);
        }
      }
      const rootConstructIdentifier = constructIdentifiers.get(rootSection);
      const updateExport = t.exportNamedDeclaration(null, [
        t.exportSpecifier(mergeIdentifier, t.identifier(updateName)),
      ]);
      markPlanStatement(file, updateExport, {
        exports: [
          {
            exported: updateName,
            target: { kind: "local", name: mergeIdentifier.name },
          },
        ],
      });
      body.push(
        mergeDeclaration,
        t.expressionStatement(
          callRuntime(
            "_update_content",
            t.stringLiteral(file.metadata.marko.id),
            t.cloneNode(mergeIdentifier),
            ...(rootConstructIdentifier
              ? [t.cloneNode(rootConstructIdentifier, true)]
              : []),
          ),
        ),
        updateExport,
        patchFactoryDeclaration,
        patchExport,
        echoExport,
      );
      program.node.body.push(...body);
    },
  },
};

function getDirectMerge(
  statements: t.Statement[],
  patchName: string,
  liveName: string,
) {
  if (statements.length !== 1) return false;
  const [statement] = statements;
  if (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "CallExpression" &&
    statement.expression.callee.type === "Identifier" &&
    statement.expression.arguments.length === 2 &&
    statement.expression.arguments[0]?.type === "Identifier" &&
    statement.expression.arguments[0].name === patchName &&
    statement.expression.arguments[1]?.type === "Identifier" &&
    statement.expression.arguments[1].name === liveName
  ) {
    return t.cloneNode(statement.expression.callee);
  }
  return false;
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

  const patchGet = (accessor: string | t.StringLiteral | t.NumericLiteral) =>
    t.memberExpression(patchIdentifier, toAccessorLiteral(accessor), true);
  const liveGet = (accessor: string | t.StringLiteral | t.NumericLiteral) =>
    t.memberExpression(liveIdentifier, toAccessorLiteral(accessor), true);
  const ifPresent = (
    accessor: string | t.StringLiteral | t.NumericLiteral,
    whenPresent: t.Statement,
  ) =>
    t.ifStatement(
      t.binaryExpression("in", toAccessorLiteral(accessor), patchIdentifier),
      whenPresent,
    );

  forEachUpdateSeedBinding(section, (binding) => {
    if (binding.pruned) return;
    const accessor = getScopeAccessorLiteral(binding);
    const signalIdentifier = generateUidIdentifier(`${binding.name}_seed`);
    const signalDeclaration = t.variableDeclaration("const", [
      t.variableDeclarator(
        signalIdentifier,
        callRuntime(
          "_update_signal",
          t.stringLiteral(getUpdateVarRegisterId(section, binding)),
        ),
      ),
    ]);
    markPlanStatement(
      file,
      signalDeclaration,
      bindingOriginFacts(file, binding),
    );
    hoistedDeclarations.push(signalDeclaration);
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
      const signalDeclaration = t.variableDeclaration("const", [
        t.variableDeclarator(
          signalIdentifier,
          callRuntime(
            "_update_signal",
            t.stringLiteral(getUpdateVarRegisterId(section, binding)),
          ),
        ),
      ]);
      markPlanStatement(
        file,
        signalDeclaration,
        bindingOriginFacts(file, binding),
      );
      hoistedDeclarations.push(signalDeclaration);
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
      const assign = t.expressionStatement(
        t.assignmentExpression("=", liveGet(accessor), patchGet(accessor)),
      );
      // Content derived from this value inside a client-state-driven
      // branch has no fill carrier: after the assignment, invoke each
      // gated closure's owner signal so the live branch re-renders from
      // the new value (the signal itself checks branch liveness).
      const gatedSections = getClientGatedClosureSections(binding);
      statements.push(
        ifPresent(
          accessor,
          gatedSections
            ? t.blockStatement([
                assign,
                ...gatedSections.map((closureSection) =>
                  t.expressionStatement(
                    buildClosureSignalInvocation(
                      closureSection,
                      binding,
                      t.cloneNode(liveIdentifier),
                    ),
                  ),
                ),
              ])
            : assign,
        ),
      );
    }
  });

  const merges = getUpdateMerges(section);
  const handlers = merges.filter(isUpdateHandlerMerge);
  if (handlers.length) {
    const handlerIdentifier = generateUidIdentifier(`${section.name}_holes`);
    hoistedDeclarations.push(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          handlerIdentifier,
          callRuntime(
            "_update_scopes",
            t.objectExpression(handlers.map(buildUpdateHandler)),
          ),
        ),
      ]),
    );
    statements.push(
      t.expressionStatement(
        t.callExpression(t.cloneNode(handlerIdentifier), [
          patchIdentifier,
          liveIdentifier,
        ]),
      ),
    );
  }

  for (const merge of merges) {
    if (isUpdateHandlerMerge(merge) || isConstructOnlyStructuralMerge(merge)) {
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

type UpdateHandlerMerge = Extract<
  UpdateMerge,
  { kind: "text" | "html" | "attr" | "style-item" | "controllable" }
>;

// A structural merge that only applies to constructed scopes (a state-only
// selection's adopted branch linkage): never dispatched on matched patches.
function isConstructOnlyStructuralMerge(
  merge: UpdateMerge,
): merge is Extract<UpdateMerge, { kind: "if" }> {
  return merge.kind === "if" && !!merge.constructOnly;
}

function buildConstructMergeStatements(
  section: Section,
  mergeIdentifiers: Map<Section, t.Identifier>,
  hoistedDeclarations: t.Statement[],
  file: t.BabelFile,
  emittedLoadReady: Set<string>,
) {
  const statements: t.Statement[] = [];
  const scopeGet = (accessor: string | t.StringLiteral | t.NumericLiteral) =>
    t.memberExpression(scopeIdentifier, toAccessorLiteral(accessor), true);
  const ifPresent = (
    accessor: string | t.StringLiteral | t.NumericLiteral,
    whenPresent: t.Statement,
  ) =>
    t.ifStatement(
      t.binaryExpression("in", toAccessorLiteral(accessor), scopeIdentifier),
      whenPresent,
    );
  for (const merge of getUpdateMerges(section)) {
    if (!isConstructOnlyStructuralMerge(merge)) continue;
    statements.push(
      ...buildMerge(
        merge,
        scopeIdentifier,
        scopeIdentifier,
        mergeIdentifiers,
        hoistedDeclarations,
        file,
        emittedLoadReady,
        { patchGet: scopeGet, liveGet: scopeGet, ifPresent },
      ),
    );
  }
  return statements;
}

function isUpdateHandlerMerge(merge: UpdateMerge): merge is UpdateHandlerMerge {
  return (
    merge.kind === "text" ||
    merge.kind === "html" ||
    merge.kind === "attr" ||
    merge.kind === "style-item" ||
    merge.kind === "controllable"
  );
}

function buildUpdateHandler(merge: UpdateHandlerMerge): t.ObjectProperty {
  let handler: t.Expression;
  switch (merge.kind) {
    case "text":
      handler = callRuntime("_update_text", t.cloneNode(merge.accessor));
      break;
    case "html":
      handler = callRuntime("_update_html", t.cloneNode(merge.accessor));
      break;
    case "attr":
      handler =
        merge.helper === "_attr"
          ? callRuntime(
              "_update_named_attr",
              t.cloneNode(merge.accessor),
              t.stringLiteral(merge.name),
            )
          : callRuntime(
              "_update_attr",
              t.cloneNode(merge.accessor),
              importRuntime(merge.helper),
            );
      break;
    case "style-item":
      handler = callRuntime(
        "_update_style_item",
        t.cloneNode(merge.accessor),
        t.stringLiteral(merge.name),
      );
      break;
    case "controllable":
      handler = callRuntime(
        "_update_controllable",
        t.cloneNode(merge.accessor),
        importRuntime(merge.helper),
      );
      break;
  }
  return t.objectProperty(
    t.stringLiteral(merge.patchAccessor),
    merge.constructOnly ? callRuntime("_update_construct", handler) : handler,
  );
}

function buildMerge(
  merge: Exclude<
    UpdateMerge,
    { kind: "text" | "html" | "attr" | "style-item" | "controllable" }
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
      accessor: string | t.StringLiteral | t.NumericLiteral,
    ) => t.Expression;
    liveGet: (
      accessor: string | t.StringLiteral | t.NumericLiteral,
    ) => t.Expression;
    ifPresent: (
      accessor: string | t.StringLiteral | t.NumericLiteral,
      whenPresent: t.Statement,
    ) => t.Statement;
  },
): t.Statement[] {
  switch (merge.kind) {
    case "region": {
      const rendererKey =
        getAccessorPrefix().ConditionalRenderer + merge.accessor.value;
      return [
        ifPresent(
          rendererKey,
          t.expressionStatement(
            t.callExpression(
              callRuntime("_update_region", t.cloneNode(merge.accessor)),
              [t.cloneNode(patchIdentifier), t.cloneNode(liveIdentifier)],
            ),
          ),
        ),
      ];
    }
    case "if": {
      const rendererKey =
        getAccessorPrefix().ConditionalRenderer + merge.accessor.value;
      const branchScopesKey =
        getAccessorPrefix().BranchScopes + merge.accessor.value;
      const branchMerges = merge.branchBodySections.map(
        (branchSection) => branchSection && mergeIdentifiers.get(branchSection),
      );
      if (merge.stateSelection) {
        // Content dispatch only: the selection is client-owned. Pairing
        // registers the branch anchor even when every branch merge is a
        // noop.
        return [
          ifPresent(
            branchScopesKey,
            t.expressionStatement(
              callRuntime(
                "_update_if_state",
                t.cloneNode(patchIdentifier),
                liveIdentifier,
                t.stringLiteral(rendererKey),
                t.stringLiteral(branchScopesKey),
                t.arrayExpression(
                  branchMerges.map((identifier) =>
                    identifier
                      ? t.cloneNode(identifier, true)
                      : t.numericLiteral(0),
                  ),
                ),
              ),
            ),
          ),
        ];
      }
      // Branch construct ids key each body section's wire shell so a
      // diverged branch constructs client-side.
      const branchIds = merge.branchBodySections.map(
        (branchSection) =>
          branchSection && getResumeRegisterId(branchSection, "update"),
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
                : branchIds.some(Boolean)
                  ? t.numericLiteral(0)
                  : undefined,
              branchIds.some(Boolean)
                ? t.arrayExpression(
                    branchIds.map((id) =>
                      id ? t.stringLiteral(id) : t.numericLiteral(0),
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

      if (merge.anchorId) {
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
                bodyMerge
                  ? t.arrowFunctionExpression(
                      [patchBranchIdentifier, liveBranchIdentifier],
                      t.callExpression(t.cloneNode(bodyMerge, true), [
                        patchBranchIdentifier,
                        liveBranchIdentifier,
                      ]),
                    )
                  : t.numericLiteral(0),
                t.stringLiteral(merge.anchorId),
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

      return [
        ifPresent(
          branchScopesKey,
          t.expressionStatement(
            callRuntime(
              "_update_for",
              patchGet(branchScopesKey),
              liveGet(branchScopesKey),
              bodyMerge ? t.cloneNode(bodyMerge, true) : t.numericLiteral(0),
              // Missing tail branches (a freshly constructed parent) build
              // from the body section's wire shell.
              liveIdentifier,
              t.stringLiteral(branchScopesKey),
              t.stringLiteral(getResumeRegisterId(merge.bodySection, "update")),
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
      for (const [rendererId, loadExpr] of merge.candidateLoaders || []) {
        if (!emittedLoadReady.has(`candidate:${rendererId}`)) {
          emittedLoadReady.add(`candidate:${rendererId}`);
          const demandLoadExpr = t.cloneNode(loadExpr, true);
          const loaderStatement = t.expressionStatement(
            callRuntime(
              "_update_loader",
              t.stringLiteral(rendererId),
              demandLoadExpr,
            ),
          );
          const chain = extractLoadChainFacts(demandLoadExpr);
          markPlanStatement(file, loaderStatement, {
            loader: {
              targetKind: "setup-virtual-demand",
              registryFn: "_update_loader",
              rendererId,
              readyId: chain.readyId,
              targets: chain.specifier ? [chain.specifier] : [],
            },
            lazyEdges: chain.specifier ? [chain.specifier] : [],
          });
          hoistedDeclarations.push(loaderStatement);
        }
      }
      return [
        t.ifStatement(
          t.logicalExpression(
            "||",
            t.binaryExpression(
              "in",
              toAccessorLiteral(rendererKey),
              patchIdentifier,
            ),
            t.binaryExpression(
              "in",
              toAccessorLiteral(branchScopesKey),
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
              // Constructs the boundary branch from the body section's wire
              // shell under a freshly constructed parent.
              t.stringLiteral(getResumeRegisterId(merge.bodySection, "update")),
              // A pending boundary constructs its placeholder from the
              // page-registered content renderer.
              merge.placeholderSection
                ? t.stringLiteral(
                    getResumeRegisterId(merge.placeholderSection, "content"),
                  )
                : undefined,
            ),
          ),
        ),
      ];
    }
    case "child": {
      if (merge.load) {
        if (merge.loadReady && !emittedLoadReady.has(merge.loadReady.id)) {
          emittedLoadReady.add(merge.loadReady.id);
          const readyLoadExpr = t.cloneNode(merge.loadReady.loadExpr, true);
          const readyStatement = t.expressionStatement(
            callRuntime(
              "_load_ready",
              t.stringLiteral(merge.loadReady.id),
              readyLoadExpr,
            ),
          );
          const chain = extractLoadChainFacts(readyLoadExpr);
          markPlanStatement(file, readyStatement, {
            loader: {
              targetKind: "scheduled-load-ready",
              registryFn: "_load_ready",
              // The native renderer id (custom-tag records it beside the
              // ready id) — never the opaque readiness spelling.
              rendererId: merge.load,
              readyId: merge.loadReady.id,
              targets: chain.specifier ? [chain.specifier] : [],
            },
            lazyEdges: chain.specifier ? [chain.specifier] : [],
          });
          hoistedDeclarations.push(readyStatement);
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
                // A constructed parent builds the child's DOM immediately
                // from its root wire shell; behavior arrives at ready.
                liveIdentifier,
                merge.loadMarker && t.cloneNode(merge.loadMarker, true),
                merge.loadTemplateId
                  ? t.stringLiteral(merge.loadTemplateId)
                  : undefined,
              ),
            ),
          ),
        ];
      }
      const childRequest = resolveRelativePath(
        file,
        `${merge.relativePath}?persisted`,
      );
      const childIdentifier = importNamed(
        file,
        childRequest,
        merge.updateName,
        `${merge.tagName}_update`,
      ) as t.Identifier;
      recordPlanImport(file, childRequest, "internalized-child");
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
    case "define-child": {
      return [
        ifPresent(
          merge.accessor,
          t.expressionStatement(
            callRuntime(
              "_update_child",
              patchGet(merge.accessor),
              liveGet(merge.accessor),
              t.stringLiteral(merge.contentId),
            ),
          ),
        ),
      ];
    }
    default:
      // A silently omitted merge kind would under-describe patch dispatch.
      throw new Error(
        `Marko internal error: unknown update merge kind "${
          (merge as { kind: string }).kind
        }".`,
      );
  }
}

function toAccessorLiteral(
  accessor: string | t.StringLiteral | t.NumericLiteral,
) {
  return typeof accessor === "string"
    ? t.stringLiteral(accessor)
    : t.cloneNode(accessor, true);
}

function bindingOriginFacts(file: t.BabelFile, binding: Binding) {
  return binding.loc
    ? {
        origin: {
          file: file.opts.filename as string,
          line: binding.loc.start.line,
          column: binding.loc.start.column,
        },
      }
    : undefined;
}

/** Reads the demand chain the site just emitted: the dynamic-import target
 * plus the readiness id declared through the ready call, if any. */
function extractLoadChainFacts(loadExpr: t.Node) {
  const facts: { specifier?: string; readyId?: string } = {};
  const visit = (node: unknown) => {
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    if (!node || typeof node !== "object") return;
    const expr = node as t.Node;
    if (expr.type === "CallExpression") {
      const [arg] = expr.arguments;
      if (arg?.type === "StringLiteral") {
        if (expr.callee.type === "Import") {
          facts.specifier = arg.value;
        } else if (expr.callee.type === "Identifier") {
          facts.readyId = arg.value;
        }
      }
    }
    for (const key of Object.keys(expr)) {
      if (key === "loc" || key === "extra") continue;
      visit((expr as unknown as Record<string, unknown>)[key]);
    }
  };
  visit(loadExpr);
  return facts;
}
