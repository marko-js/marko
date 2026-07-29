import type { types as t } from "@marko/compiler";

import type {
  LoaderTargetKind,
  PreliminaryPlan,
  RequestKind,
  StatementOrigin,
} from "./preliminary-plan";

/** Loader facts as the emission site asserts them (ordinals, firstWins, and
 * readyChain topology are finalizer-owned). */
export interface PlanLoaderFact {
  targetKind: LoaderTargetKind;
  registryFn: string;
  rendererId: string;
  readyId?: string;
  targets: string[];
}

export type PlanExportTargetFact =
  | { kind: "local"; name: string }
  | { kind: "external"; specifier: string; imported: string };

/** Semantic facts an emission site records against the statement NODE it
 * emits; the Program-exit finalizer assigns ordinals from the final body. */
export interface PlanStatementFacts {
  origin?: StatementOrigin;
  loader?: PlanLoaderFact;
  /** Raw specifiers of dynamic-import request events inside this statement. */
  lazyEdges?: string[];
  exports?: { exported: string; target: PlanExportTargetFact }[];
}

/** Facts for an import statement keyed by its RAW specifier (babel-utils
 * dedupes import declarations by request, so the node is not site-owned).
 * Only the semantic KIND is site-asserted; binding tuples derive from the
 * final import AST (so a wrong/duplicated binding fact cannot exist). */
export interface PlanImportFacts {
  kind: RequestKind;
  /** Plain-template drop-residue candidate (site-asserted). */
  plainTemplate: boolean;
}

/** One emitted `_static_shells` entry: shell id + its [template, walks]
 * symbol pair, as the emission site registered them. */
export interface PlanShellFact {
  shellId: string;
  templateSym: string;
  walksSym: string;
}

interface FilePlanFacts {
  statements: Map<t.Node, PlanStatementFacts>;
  imports: Map<string, PlanImportFacts>;
  shells?: PlanShellFact[];
  virtuals?: Map<string, PreliminaryPlan>;
}

const factsForFile = new WeakMap<t.BabelFile, FilePlanFacts>();

export function markPlanStatement(
  file: t.BabelFile,
  statement: t.Statement,
  facts?: PlanStatementFacts,
) {
  const { statements } = getFacts(file);
  const existing = statements.get(statement);
  if (!existing) {
    statements.set(statement, facts || {});
    return;
  }
  if (!facts) return;
  for (const key of Object.keys(facts) as (keyof PlanStatementFacts)[]) {
    if (existing[key] !== undefined) {
      // Every fact family has exactly one emitting site per statement; a
      // second write is a conflicting record, never a merge.
      throw new Error(
        `update-plan-records: statement fact "${key}" recorded twice for one statement`,
      );
    }
    (existing as Record<string, unknown>)[key] = facts[key];
  }
}

export function recordPlanImport(
  file: t.BabelFile,
  specifier: string,
  kind: RequestKind,
  plainTemplate = false,
) {
  const { imports } = getFacts(file);
  const facts = imports.get(specifier);
  if (!facts) {
    imports.set(specifier, { kind, plainTemplate });
  } else if (facts.kind !== kind || facts.plainTemplate !== plainTemplate) {
    // The requesting statement is shared (dedup-by-request): its semantic
    // facts must be asserted identically by every recording site.
    throw new Error(
      `update-plan-records: import ${JSON.stringify(specifier)} recorded as ` +
        `both "${facts.kind}" and "${kind}"`,
    );
  }
}

export function recordPlanShells(file: t.BabelFile, shells: PlanShellFact[]) {
  const facts = getFacts(file);
  if (facts.shells) {
    throw new Error(
      "update-plan-records: shell capability recorded twice for one module",
    );
  }
  facts.shells = shells;
}

/** Records a compiler-issued virtual module's sibling mini-plan at
 * generation time (site 37 has no translate pass of its own). Re-recording
 * the identical plan is a no-op; a divergent one is a conflict. */
export function recordPlanVirtual(
  file: t.BabelFile,
  virtualId: string,
  plan: PreliminaryPlan,
) {
  const facts = getFacts(file);
  const virtuals = (facts.virtuals ??= new Map());
  const existing = virtuals.get(virtualId);
  if (!existing) {
    virtuals.set(virtualId, plan);
  } else if (JSON.stringify(existing) !== JSON.stringify(plan)) {
    throw new Error(
      `update-plan-records: virtual plan ${JSON.stringify(virtualId)} recorded twice with divergent content`,
    );
  }
}

export function getPlanFacts(file: t.BabelFile): FilePlanFacts | undefined {
  return factsForFile.get(file);
}

function getFacts(file: t.BabelFile) {
  let facts = factsForFile.get(file);
  if (!facts) {
    factsForFile.set(
      file,
      (facts = { statements: new Map(), imports: new Map() }),
    );
  }
  return facts;
}
