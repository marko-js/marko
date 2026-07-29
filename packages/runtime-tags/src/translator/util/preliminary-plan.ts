// =============================================================================
// PRELIMINARY PLAN SCHEMA — the contract the marko Program-exit finalizer
// publishes on `metadata.marko.updatePlan` (Rev 6.1 §1), frozen by Round B0
// (work/b0-brief.md). Rigorous TS types + a runtime validator (the brief's
// sanctioned alternative to a JSON Schema document; the types below ARE the
// schema and the validator is normative).
//
// THE TWO-STAGE SPLIT IS THE CORE OF THIS SCHEMA: a PRELIMINARY plan carries
// RAW specifier spellings + the importer's own raw identity + the compiler's
// semantic classifications, and NOTHING resolver-issued. Canonical module ids
// exist only after the async vite finalization stage (b0/twostage/finalize.ts
// prototypes it). The validator hard-rejects any object carrying a
// `canonical` or `moduleKey` key anywhere in a preliminary plan — preliminary
// plans never partition, never fingerprint, never cache (Rev 6.1 §1).
//
// -----------------------------------------------------------------------------
// CHANGELOG (schema discipline: ANY change to the types or validator semantics
// bumps SCHEMA_VERSION and appends an entry here naming the migration).
//
// preliminary-plan@1.1 (2026-07-28, Round B0.1 — work/grok-schema-review.md
// GO checklist; soft bump per finding 14: additive enum member + tighter
// checks, no field removals except request `comments`, which review finding
// 4 explicitly prefers dropped from static events)
//   MUST items:
//   1. (finding 1, BLOCKER) RequestKind is SIX-way: `load-edge-child` added.
//      `eager-candidate` is strictly the Rev 6 §4 NON-load dynamic-tag
//      candidate and is 1:1 with EagerCandidateLink; `load-edge-child` is a
//      bare static ?persisted request that IS a load edge (setup-virtual
//      demand internalization) and must NOT have an EagerCandidateLink.
//      The classifier seam's allow-set for bare+persisted+import is exactly
//      {eager-candidate, load-edge-child}; the seam re-derives NEITHER (the
//      distinction is compiler-semantic, not resolver-semantic). The
//      demand-chain tie is checkable only at SET level (the loader that
//      demands a setup virtual lives in the DEMANDING plan):
//      `assertLoadEdgeDemandCoverage(plans)` requires every plan carrying a
//      load-edge-child request to itself be a loader target somewhere in
//      the set. Migration: producers split former bare-child kinds; links
//      only for eager-candidate.
//   2. (finding 2) `readyId` is an OPAQUE emission fact (debug/optimize
//      spellings differ); NO derivation (`ready:`+path, hash) anywhere in
//      producer/validator/finalize; `rendererId` is the native renderer
//      registration key. `readyId` REQUIRED for scheduled-load-ready;
//      rendererId === readyId is NOT enforced (the adapter's dual-fill for
//      scheduled-load-ready is a harness STAND-IN, not contract).
//   3. (open Q1) `evalOrdinal === ordinal` FOREVER on published plans:
//      the published preliminary plan is POST-relocation (the Program-exit
//      finalizer relocates before publish and renumbers); statement-list
//      order IS evaluation order for External-Prefix/body semantics; source
//      provenance is `origin.{file,line,column}`. Pre-move indices, if a
//      consumer ever needs them, are a NEW field under @2 — never a silent
//      relaxation of this rule.
//   4. (open Q4 / findings 4+9) Comment authority is BY STATEMENT KIND and
//      validator-enforced: regenerated kinds (import | reexport |
//      export-locals) own their comment BUCKETS (authoritative for
//      regeneration); spliced kinds (stmt | export-decl | export-default)
//      require EMPTY buckets — their comments live verbatim in `text`.
//      Request events no longer carry `comments` at all (statement buckets
//      are the single authority; the old static-event copies were duplicate
//      bytes with ambiguous authority). Migration: consumers regenerating
//      merged imports read the REQUESTING STATEMENT's buckets.
//   SHOULD items (same bump):
//   5. (finding 6) Normative loader table enforced: per targetKind the
//      registryFn is fixed (_update_loader | _update_loader | _load_ready |
//      _load_template), firstWins is always true, readyChain is
//      required+failureLatch for setup-virtual-demand, absent for
//      escaped-direct/template-loader, optional for scheduled-load-ready.
//   6. (finding 7) Possession tethering: every `deferred` id must equal a
//      loader `rendererId` of a demand-class loader (targetKind !==
//      scheduled-load-ready, whose rendererId field is an opaque readiness
//      id in the stand-in); claimable ∩ deferred must be empty (symmetric
//      over-claim check).
//   7. (finding 8) `firstOccurrence` on dynamic-import events is validated
//      like static: provisional over raw identity in a SEPARATE stream
//      (mirrors finalization's static/dynamic identity spaces).
//   8. (finding 5) Span decode is normative StringLiteral: JSON rules for
//      double quotes, full escape handling for single quotes; a backtick
//      slice REJECTS — "only StringLiteral, never TemplateLiteral" is an
//      emission invariant enforced here.
//
// preliminary-plan@1 (2026-07-28, Round B0)
//   Initial freeze. Derived from harness-plan-producer@3 (harness/plan.ts at
//   scratch commit 5b72010) with these contract-level divergences, each
//   justified in work/b0-report.md:
//     1. PRELIMINARY/FINALIZED split: no `canonical` fields anywhere; the
//        plan-level identity is `importer` (raw compiler-side id), not
//        `moduleKey` (resolver-issued, finalized-only).
//     2. Statements carry their own `text` (statement-relative UTF-16 spans)
//        instead of one plan-level carrier text + [start,end) segments.
//     3. Request kinds are the five-way semantic enum
//        external | internalized-child | module-state | eager-candidate |
//        lazy-edge (compiler-asserted at the emission site; re-derived and
//        cross-checked by an independent classifier seam at finalization —
//        codex A5 finding 1). Dynamic imports are lazy-edge REQUEST EVENTS,
//        not statement-local `moduleRefs`.
//     4. Every request event carries a `span` into its statement's text (the
//        specifier string literal, quotes included) so finalization can
//        substitute resolver-issued targets without re-entering the
//        translator.
//     5. Loaders are FULLY specified records (rendererId, readyId, target
//        kind, first-wins registration, readiness/failure-latch chain), not
//        the harness's inferred {kind, registryFn, id, targets}.
//     6. ModuleStateLink is a first-class link record (the harness only
//        classifies the request event); EagerCandidateLink is carried as
//        recorded-at-emission-site (Rev 6 §4), mirrored by request kind
//        eager-candidate.
//     7. Day-1 shell-type split (grok risk 4): ShellCapability (this module's
//        shell ids + [templateSym, walksSym]) vs ShellPossessionFacts (what
//        an eager closure may claim) are TWO types, never one.
//     8. `fingerprintFields` (compile-side Rev-4 field set, incl. targets) is
//        INPUT to the finalized fingerprint, not a cache identity; the
//        harness's `resolver` fingerprint field is REMOVED from the
//        preliminary plan (resolver identity is a finalization-stage fact,
//        carried by the finalized plan's resolution deps).
//     9. Statement `origin` gains `file` ({file, loc} per statement) for
//        future sourcemaps and for finalizer-merged child statements.
//    10. `evalOrdinal` per statement (evaluation ordinal). In @1 it MUST
//        equal `ordinal`; it exists so a finalizer that relocates late
//        imports can preserve pre-relocation evaluation order. OPEN QUESTION
//        for the Round-B adversarial review (see the report).
// =============================================================================

export const PRELIMINARY_PLAN_VERSION = "preliminary-plan@1.1";

/** Plan-local symbol id: "%<originalName>" or "%default@<ordinal>". */
export type SymId = string;

/** Verbatim comment text segments, bucketed by position. For statements the
 * emitter REGENERATES (import | reexport | export-locals) these buckets are
 * authoritative; for spliced statements the comments live verbatim inside
 * `text` and the buckets are empty (no duplication). */
export interface AttachedComments {
  leading: string[];
  internal: string[];
  trailing: string[];
}

/** One import attribute with its source key spelling preserved. */
export interface RequestAttr {
  key: string;
  value: string;
  /** Key written as a string literal (`"resolution-mode"`), not an
   * identifier — regeneration must keep the quotes. */
  quoted: boolean;
}

/** Semantic request classification, asserted by the EMISSION SITE (the
 * compiler knows why it emitted each request). Finalization re-derives the
 * classification from the resolver-issued canonical id through an independent
 * classifier and rejects on mismatch (the classifier seam, A5 finding 1) —
 * EXCEPT for the eager-candidate/load-edge-child distinction, which is
 * compiler-semantic (not resolver-semantic): the seam only checks membership
 * in the allow-set {eager-candidate, load-edge-child} for bare+persisted
 * static imports and re-derives neither (@1.1, review finding 1). */
export type RequestKind =
  | "external"
  | "internalized-child"
  | "module-state"
  /** Bare static ?persisted request for a NON-load dynamic-tag candidate
   * (Rev 6 §4). 1:1 with EagerCandidateLink. */
  | "eager-candidate"
  /** Bare static ?persisted request that IS a load edge — the setup-virtual
   * demand-target internalization. NEVER has an EagerCandidateLink; the
   * carrying plan must itself be a loader target somewhere in the plan set
   * (assertLoadEdgeDemandCoverage). */
  | "load-edge-child"
  | "lazy-edge";

export type RequestForm = "import" | "reexport" | "dynamic-import";

/** UTF-16 [start, end) into the OWNING STATEMENT's `text`. */
export interface TextSpan {
  start: number;
  end: number;
}

/** A semantic module-request EVENT (Rev 6 §1 as amended by A5 finding 1):
 * one entry per requesting statement (static) or per dynamic-import site
 * (lazy-edge), in statement order. PRELIMINARY: raw spelling only. */
export interface PreliminaryRequest {
  /** Raw specifier text exactly as written. */
  specifier: string;
  attributes: RequestAttr[];
  kind: RequestKind;
  form: RequestForm;
  /** The requesting statement binds no names (static forms only). */
  bare: boolean;
  /** Ordinal of the requesting statement. */
  ordinal: number;
  /** PROVISIONAL first-occurrence over (raw specifier, attributes) identity.
   * Finalization RECOMPUTES this against resolver-issued canonical identity
   * (two spellings of one module collapse; an alias split diverges). */
  firstOccurrence: boolean;
  /** Plain template import (drop-residue candidate at emit). */
  plainTemplate: boolean;
  /** Span of the specifier string literal (quotes included) in the owning
   * statement's `text` — the substitution point for finalized targets.
   * @1.1: request events carry NO `comments` — the requesting STATEMENT's
   * buckets are the single comment authority (review finding 4). */
  span: TextSpan;
}

export type StatementKind =
  | "import"
  | "export-decl"
  | "export-default"
  | "export-locals"
  | "reexport"
  | "stmt";

export interface StatementOrigin {
  /** Source file this statement was compiled from ({file, loc} per statement
   * — finalizer-merged child statements keep their own origin). */
  file: string;
  line: number;
  column: number;
}

export interface PreliminaryStatement {
  /** Position in the plan's statement list (== array index). */
  ordinal: number;
  /** Evaluation ordinal. @1: MUST equal `ordinal` (validator-enforced);
   * reserved for finalizer import relocation. */
  evalOrdinal: number;
  kind: StatementKind;
  /** The statement's full owned text segment, verbatim, comments included. */
  text: string;
  /** Offset of the statement node in `text` (after owned leading trivia). */
  nodeOffset: number;
  /** export-decl/export-default: offset where the inner declaration begins,
   * so [nodeOffset, innerOffset) is exactly the `export (default)?` prefix. */
  innerOffset?: number;
  /** export-default backed by a NAMED fn/class declaration. */
  defaultDeclName?: string;
  /** [start, end, symId] identifier spans, UTF-16, statement-relative. */
  spans: [number, number, SymId][];
  /** Comment authority is BY KIND (@1.1, review findings 4+9): regenerated
   * kinds (import | reexport | export-locals) own these buckets
   * (authoritative for regeneration); spliced kinds (stmt | export-decl |
   * export-default) MUST have empty buckets — their comments live verbatim
   * in `text`. Validator-enforced. */
  comments: AttachedComments;
  origin: StatementOrigin;
}

export interface PreliminarySymbol {
  name: string;
  kind: "local" | "import";
  /** Babel binding kind: const/let/var/hoisted/module/... */
  declKind: string;
  /** Reference count (excludes declarations). */
  refCount: number;
  /** Declaring statement ordinal. */
  declOrdinal: number;
  /** Import bindings: per-binding request identity in RAW terms. */
  import?: {
    specifier: string;
    imported: string; // named | "default" | "*"
    attributes: RequestAttr[];
  };
}

export type PreliminaryExportTarget =
  | { kind: "local"; symId: SymId }
  | {
      kind: "external";
      specifier: string; // raw
      imported: string;
      attributes: RequestAttr[];
    }
  | { kind: "default-expr"; ordinal: number };

export interface PreliminaryExport {
  exported: string;
  ordinal: number;
  target: PreliminaryExportTarget;
}

/** Loader target kinds (the brief's three + the translator's lazy
 * default-template loader, which harness-plan-producer@3 records and
 * dropping would lose an emission-site fact). */
export type LoaderTargetKind =
  | "setup-virtual-demand" // _update_loader -> setup virtual, readyPersisted chain
  | "escaped-direct" // _update_loader -> ?persisted module directly, no chain
  | "scheduled-load-ready" // _load_ready registration (scheduled readiness)
  | "template-loader"; // _load_template lazy default-template load

/** FULLY specified loader record (brief Deliverable 1). Normative per-kind
 * table (@1.1, review finding 6), validator-enforced:
 *
 *   targetKind            registryFn       firstWins  readyChain
 *   setup-virtual-demand  _update_loader   true       required, failureLatch
 *   escaped-direct        _update_loader   true       absent
 *   scheduled-load-ready  _load_ready      true       optional; readyId req.
 *   template-loader       _load_template   true       absent
 */
export interface PreliminaryLoader {
  targetKind: LoaderTargetKind;
  /** Registry function imported name — FIXED by targetKind (see table). */
  registryFn: string;
  /** The NATIVE renderer registration key (@1.1, review finding 2). The
   * B0 adapter dual-fills this with the readiness id for
   * scheduled-load-ready — a harness STAND-IN, not contract; the real
   * emission site records the renderer id natively. */
  rendererId: string;
  /** The readiness id: an OPAQUE emission fact (debug and optimize spell it
   * differently) — NEVER derived from rendererId or paths anywhere
   * (@1.1, review finding 2). Required for scheduled-load-ready. */
  readyId?: string;
  /** Raw dynamic specifiers inside the loader chain; each is also a
   * lazy-edge request event at the same ordinal. */
  targets: string[];
  ordinal: number;
  /** Registration is first-wins (repeat registrations for the same id are
   * ignored by the runtime registry). */
  firstWins: boolean;
  /** Readiness/failure-latch chain: the loader resolves through
   * readyPersisted(readyId), which latches failure (a failed load rejects
   * every waiter and stays rejected until superseded). */
  readyChain?: { readyId: string; failureLatch: boolean };
}

/** First-class link records (Rev 6 §4 / Rev 6.1 §1). */
export interface ModuleStateLink {
  specifier: string; // raw spelling of this module's own plain template
  ordinal: number;
  /** Names imported across the link. */
  imported: string[];
}

export interface EagerCandidateLink {
  specifier: string; // raw
  ordinal: number;
}

/** CAPABILITY: the shells THIS module registers — shell ids with their
 * [templateSym, walksSym] value pair. Artifact -> shell-id capability
 * metadata derives from this (Rev 6.1 §5). */
export interface ShellCapability {
  shells: { shellId: string; templateSym: SymId; walksSym: SymId }[];
}

/** POSSESSION eligibility facts: what an eager closure containing this module
 * MAY claim. DELIBERATELY a different type from ShellCapability (grok risk 4:
 * two types, never one — an unevaluated lazy artifact is never held).
 * `claimable`: shell ids registered synchronously at this module's body
 * evaluation. `deferred`: renderer ids whose shells hide behind this module's
 * loaders and must NOT be claimed until the target artifact evaluates.
 * @1.1 tethering (review finding 7): every deferred id must equal the
 * rendererId of a DEMAND-CLASS loader in this plan (targetKind !==
 * scheduled-load-ready: readiness scheduling is not a demand gate — its
 * rendererId is the native renderer registration key from the emission site
 * and its readyId stays an opaque readiness fact); claimable and deferred
 * are disjoint. */
export interface ShellPossessionFacts {
  claimable: string[];
  deferred: string[];
}

export interface PreliminaryPlan {
  schemaVersion: typeof PRELIMINARY_PLAN_VERSION;
  /** RAW module identity as the compiler knows it (file id + entry query).
   * This is the importer identity every request resolves relative to. The
   * resolver-issued identity (`moduleKey`) exists only on finalized plans. */
  importer: string;
  /** The origin template/source file. */
  originFile: string;
  /** Compile-side Rev-4 fingerprint field set (incl. `targets`). INPUT to the
   * finalized fingerprint — never a cache identity by itself. Must NOT carry
   * a `resolver` field (resolver identity is a finalization-stage fact). */
  fingerprintFields: Record<string, string | boolean>;
  statements: PreliminaryStatement[];
  symbols: Record<SymId, PreliminarySymbol>;
  /** Ordered request EVENTS (static: one per requesting statement; dynamic:
   * one per lazy-edge site), ascending by ordinal, static before lazy-edge
   * within a statement. */
  requestedModules: PreliminaryRequest[];
  exports: PreliminaryExport[];
  loaders: PreliminaryLoader[];
  moduleStateLinks: ModuleStateLink[];
  eagerCandidates: EagerCandidateLink[];
  shellCapability: ShellCapability;
  shellPossession: ShellPossessionFacts;
}

// =============================================================================
// Runtime validator (normative). Throws SchemaViolation with a path.
// =============================================================================

export class SchemaViolation extends Error {
  path: string;
  constructor(path: string, detail: string) {
    super(`preliminary-plan schema violation at ${path}: ${detail}`);
    this.name = "SchemaViolation";
    this.path = path;
  }
}

const STATEMENT_KINDS = new Set([
  "import",
  "export-decl",
  "export-default",
  "export-locals",
  "reexport",
  "stmt",
]);
const REQUEST_KINDS = new Set([
  "external",
  "internalized-child",
  "module-state",
  "eager-candidate",
  "load-edge-child",
  "lazy-edge",
]);
const REQUEST_FORMS = new Set(["import", "reexport", "dynamic-import"]);
const LOADER_TARGET_KINDS = new Set([
  "setup-virtual-demand",
  "escaped-direct",
  "scheduled-load-ready",
  "template-loader",
]);
/** Compile-side Rev-4 fingerprint fields that MUST be present. */
const REQUIRED_FINGERPRINT_FIELDS = [
  "optimize",
  "markoDebug",
  "runtimeId",
  "modules",
  "targets",
  "output",
  "optimizeKnownTemplates",
  "persisted",
  "entry",
  "compiler",
  "translator",
  "babelConfigHash",
  "producer",
];
/** Keys that must not appear ANYWHERE in a preliminary plan: they are
 * resolver-issued (finalized-stage) identity. */
const FORBIDDEN_KEYS = new Set(["canonical", "moduleKey"]);

function fail(path: string, detail: string): never {
  throw new SchemaViolation(path, detail);
}

function isObj(v: unknown): v is Record<string, unknown> {
  return typeof v === "object" && v !== null && !Array.isArray(v);
}

function str(v: unknown, path: string): string {
  if (typeof v !== "string") fail(path, `expected string, got ${typeof v}`);
  return v as string;
}

function num(v: unknown, path: string): number {
  if (typeof v !== "number" || !Number.isFinite(v)) {
    fail(path, `expected finite number, got ${JSON.stringify(v)}`);
  }
  return v as number;
}

function bool(v: unknown, path: string): boolean {
  if (typeof v !== "boolean") fail(path, `expected boolean, got ${typeof v}`);
  return v as boolean;
}

function arr(v: unknown, path: string): unknown[] {
  if (!Array.isArray(v)) fail(path, `expected array`);
  return v as unknown[];
}

function checkComments(v: unknown, path: string): AttachedComments {
  if (!isObj(v)) fail(path, "expected AttachedComments object");
  for (const bucket of ["leading", "internal", "trailing"]) {
    const b = arr((v as any)[bucket], `${path}.${bucket}`);
    b.forEach((c, i) => str(c, `${path}.${bucket}[${i}]`));
  }
  return v as unknown as AttachedComments;
}

function checkAttrs(v: unknown, path: string): RequestAttr[] {
  const a = arr(v, path);
  a.forEach((attr, i) => {
    if (!isObj(attr)) fail(`${path}[${i}]`, "expected attribute object");
    str((attr as any).key, `${path}[${i}].key`);
    str((attr as any).value, `${path}[${i}].value`);
    bool((attr as any).quoted, `${path}[${i}].quoted`);
  });
  return v as RequestAttr[];
}

function attrsIdentity(attributes: RequestAttr[]): string {
  const pairs = attributes
    .map((a) => [a.key, a.value] as const)
    .sort((a, b) => (a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0));
  return JSON.stringify(pairs);
}

/** Reject resolver-issued identity keys anywhere in the tree (two-stage
 * purity: preliminary plans carry raw spellings only). */
function rejectForbiddenKeys(v: unknown, path: string) {
  if (Array.isArray(v)) {
    v.forEach((item, i) => rejectForbiddenKeys(item, `${path}[${i}]`));
    return;
  }
  if (!isObj(v)) return;
  for (const [k, val] of Object.entries(v)) {
    if (FORBIDDEN_KEYS.has(k)) {
      fail(
        `${path}.${k}`,
        `preliminary plans must not carry resolver-issued identity ` +
          `("${k}" is a finalized-plan field; Rev 6.1 §1 two-stage split)`,
      );
    }
    rejectForbiddenKeys(val, `${path}.${k}`);
  }
}

const IDENT_CHAR = /[\p{ID_Continue}$]/u;

/** Normative specifier-literal decode (@1.1, review finding 5): the span is
 * a StringLiteral node, quotes included. Double quotes decode by JSON rules;
 * single quotes with full JS escape handling; a backtick REJECTS —
 * TemplateLiteral is never a valid specifier carrier (emission invariant). */
function decodeSpecifierLiteral(lit: string, path: string): string {
  if (lit.length >= 2 && lit[0] === '"' && lit[lit.length - 1] === '"') {
    try {
      return JSON.parse(lit);
    } catch {
      fail(
        path,
        `malformed double-quoted specifier literal ${JSON.stringify(lit)}`,
      );
    }
  }
  if (lit.length >= 2 && lit[0] === "'" && lit[lit.length - 1] === "'") {
    let out = "";
    for (let i = 1; i < lit.length - 1; i++) {
      const c = lit[i];
      if (c === "'") fail(path, "unescaped quote inside single-quoted literal");
      if (c !== "\\") {
        out += c;
        continue;
      }
      const n = lit[++i];
      switch (n) {
        case "n":
          out += "\n";
          break;
        case "t":
          out += "\t";
          break;
        case "r":
          out += "\r";
          break;
        case "b":
          out += "\b";
          break;
        case "f":
          out += "\f";
          break;
        case "v":
          out += "\v";
          break;
        case "0":
          out += "\0";
          break;
        case "x":
          out += String.fromCharCode(parseInt(lit.slice(i + 1, i + 3), 16));
          i += 2;
          break;
        case "u":
          if (lit[i + 1] === "{") {
            const end = lit.indexOf("}", i);
            out += String.fromCodePoint(parseInt(lit.slice(i + 2, end), 16));
            i = end;
          } else {
            out += String.fromCharCode(parseInt(lit.slice(i + 1, i + 5), 16));
            i += 4;
          }
          break;
        case "\n":
          break; // line continuation
        default:
          out += n;
      }
    }
    return out;
  }
  if (lit[0] === "`") {
    fail(
      path,
      "TemplateLiteral is not a valid specifier carrier — only StringLiteral " +
        "(emission invariant, @1.1 review finding 5)",
    );
  }
  fail(path, `slice ${JSON.stringify(lit)} is not a string literal`);
}

export function validatePreliminaryPlan(planIn: unknown): PreliminaryPlan {
  if (!isObj(planIn)) fail("$", "plan is not an object");
  const plan = planIn as unknown as PreliminaryPlan;
  if (plan.schemaVersion !== PRELIMINARY_PLAN_VERSION) {
    fail(
      "$.schemaVersion",
      `expected "${PRELIMINARY_PLAN_VERSION}", got ${JSON.stringify(
        (plan as any).schemaVersion,
      )}`,
    );
  }
  str(plan.importer, "$.importer");
  str(plan.originFile, "$.originFile");

  rejectForbiddenKeys(planIn, "$");

  // --- fingerprintFields.
  if (!isObj(plan.fingerprintFields))
    fail("$.fingerprintFields", "expected object");
  for (const f of REQUIRED_FINGERPRINT_FIELDS) {
    if (!(f in plan.fingerprintFields)) {
      fail("$.fingerprintFields", `missing required Rev-4 field "${f}"`);
    }
  }
  if ("resolver" in plan.fingerprintFields) {
    fail(
      "$.fingerprintFields.resolver",
      "resolver identity is a finalization-stage fact; it must not appear in " +
        "the preliminary plan (it rides the finalized plan's resolution deps)",
    );
  }
  for (const [k, v] of Object.entries(plan.fingerprintFields)) {
    if (typeof v !== "string" && typeof v !== "boolean") {
      fail(`$.fingerprintFields.${k}`, `expected string|boolean`);
    }
  }

  // --- statements.
  const statements = arr(
    plan.statements,
    "$.statements",
  ) as PreliminaryStatement[];
  statements.forEach((s, i) => {
    const p = `$.statements[${i}]`;
    if (!isObj(s)) fail(p, "expected statement object");
    if (num(s.ordinal, `${p}.ordinal`) !== i) {
      fail(`${p}.ordinal`, `must equal array index ${i}`);
    }
    if (num(s.evalOrdinal, `${p}.evalOrdinal`) !== i) {
      fail(
        `${p}.evalOrdinal`,
        `@1 requires evalOrdinal === ordinal (${i}); relocation semantics are reserved`,
      );
    }
    if (!STATEMENT_KINDS.has(s.kind))
      fail(`${p}.kind`, `unknown kind "${s.kind}"`);
    const text = str(s.text, `${p}.text`);
    const nodeOffset = num(s.nodeOffset, `${p}.nodeOffset`);
    if (nodeOffset < 0 || nodeOffset >= Math.max(text.length, 1)) {
      fail(
        `${p}.nodeOffset`,
        `out of bounds (${nodeOffset} in ${text.length})`,
      );
    }
    if (s.innerOffset !== undefined) {
      const io = num(s.innerOffset, `${p}.innerOffset`);
      if (io < nodeOffset || io > text.length)
        fail(`${p}.innerOffset`, "out of bounds");
      if (s.kind !== "export-decl" && s.kind !== "export-default") {
        fail(
          `${p}.innerOffset`,
          `only export-decl/export-default carry innerOffset`,
        );
      }
    } else if (s.kind === "export-decl" || s.kind === "export-default") {
      fail(`${p}.innerOffset`, `${s.kind} requires innerOffset`);
    }
    if (s.defaultDeclName !== undefined)
      str(s.defaultDeclName, `${p}.defaultDeclName`);
    const buckets = checkComments(s.comments, `${p}.comments`);
    // Comment authority by kind (@1.1, findings 4+9): spliced kinds carry
    // their comments verbatim in `text` and must have EMPTY buckets.
    const regenerated =
      s.kind === "import" ||
      s.kind === "reexport" ||
      s.kind === "export-locals";
    if (
      !regenerated &&
      (buckets.leading.length ||
        buckets.internal.length ||
        buckets.trailing.length)
    ) {
      fail(
        `${p}.comments`,
        `spliced statement kind "${s.kind}" must have empty comment buckets — ` +
          `its comments live verbatim in text (comment authority by kind, @1.1)`,
      );
    }
    if (!isObj(s.origin)) fail(`${p}.origin`, "expected origin object");
    str(s.origin.file, `${p}.origin.file`);
    num(s.origin.line, `${p}.origin.line`);
    num(s.origin.column, `${p}.origin.column`);
    arr(s.spans, `${p}.spans`).forEach((sp, j) => {
      const span = sp as [number, number, SymId];
      if (!Array.isArray(span) || span.length !== 3) {
        fail(`${p}.spans[${j}]`, "expected [start, end, symId]");
      }
      const [start, end, symId] = span;
      num(start, `${p}.spans[${j}][0]`);
      num(end, `${p}.spans[${j}][1]`);
      str(symId, `${p}.spans[${j}][2]`);
      if (start < 0 || end > text.length || start >= end) {
        fail(
          `${p}.spans[${j}]`,
          `bad bounds [${start}, ${end}) in text of ${text.length}`,
        );
      }
    });
  });

  // --- symbols (and span/symbol cross-checks).
  if (!isObj(plan.symbols)) fail("$.symbols", "expected record");
  for (const [symId, sym] of Object.entries(plan.symbols)) {
    const p = `$.symbols[${JSON.stringify(symId)}]`;
    if (symId.charCodeAt(0) !== 37 /* % */)
      fail(p, `symId must start with "%"`);
    if (!isObj(sym)) fail(p, "expected symbol record");
    str(sym.name, `${p}.name`);
    if (sym.kind !== "local" && sym.kind !== "import")
      fail(`${p}.kind`, "local|import");
    str(sym.declKind, `${p}.declKind`);
    num(sym.refCount, `${p}.refCount`);
    const d = num(sym.declOrdinal, `${p}.declOrdinal`);
    if (d < 0 || d >= statements.length)
      fail(`${p}.declOrdinal`, "out of range");
    if (sym.kind === "import") {
      if (!isObj(sym.import))
        fail(`${p}.import`, "import symbol requires import record");
      str(sym.import!.specifier, `${p}.import.specifier`);
      str(sym.import!.imported, `${p}.import.imported`);
      checkAttrs(sym.import!.attributes, `${p}.import.attributes`);
    } else if (sym.import !== undefined) {
      fail(`${p}.import`, "local symbol must not carry an import record");
    }
  }
  statements.forEach((s, i) => {
    for (const [start, end, symId] of s.spans) {
      const sym = (plan.symbols as any)[symId] as PreliminarySymbol | undefined;
      if (!sym) fail(`$.statements[${i}].spans`, `unknown symbol ${symId}`);
      const slice = s.text.slice(start, end);
      if (slice !== sym.name) {
        fail(
          `$.statements[${i}].spans`,
          `span [${start}, ${end}) is ${JSON.stringify(slice)}, expected ` +
            `${JSON.stringify(sym.name)} for ${symId}`,
        );
      }
      if (start > 0 && IDENT_CHAR.test(s.text[start - 1])) {
        fail(
          `$.statements[${i}].spans`,
          `span for ${symId} starts mid-identifier`,
        );
      }
      if (end < s.text.length && IDENT_CHAR.test(s.text[end])) {
        fail(
          `$.statements[${i}].spans`,
          `span for ${symId} ends mid-identifier`,
        );
      }
    }
  });

  // --- requests.
  const requests = arr(
    plan.requestedModules,
    "$.requestedModules",
  ) as PreliminaryRequest[];
  const seenRawIdentity = new Set<string>();
  const seenRawDynamic = new Set<string>();
  let lastOrdinal = -1;
  requests.forEach((ev, i) => {
    const p = `$.requestedModules[${i}]`;
    if (!isObj(ev)) fail(p, "expected request event");
    str(ev.specifier, `${p}.specifier`);
    checkAttrs(ev.attributes, `${p}.attributes`);
    if (!REQUEST_KINDS.has(ev.kind))
      fail(`${p}.kind`, `unknown kind "${ev.kind}"`);
    if (!REQUEST_FORMS.has(ev.form))
      fail(`${p}.form`, `unknown form "${ev.form}"`);
    bool(ev.bare, `${p}.bare`);
    bool(ev.plainTemplate, `${p}.plainTemplate`);
    if ("comments" in (ev as unknown as Record<string, unknown>)) {
      fail(
        `${p}.comments`,
        "request events carry no comments since @1.1 — the requesting " +
          "statement's buckets are the single comment authority (finding 4)",
      );
    }
    const ordinal = num(ev.ordinal, `${p}.ordinal`);
    if (ordinal < 0 || ordinal >= statements.length)
      fail(`${p}.ordinal`, "out of range");
    if (ordinal < lastOrdinal) {
      fail(`${p}.ordinal`, "request events must be ascending by ordinal");
    }
    lastOrdinal = ordinal;
    // Form/kind cross rules.
    if ((ev.kind === "lazy-edge") !== (ev.form === "dynamic-import")) {
      fail(
        `${p}.kind`,
        `lazy-edge <=> form dynamic-import (got ${ev.kind}/${ev.form})`,
      );
    }
    if (ev.kind === "eager-candidate" && !(ev.bare && ev.form === "import")) {
      fail(
        `${p}.kind`,
        "eager-candidate requests are bare static imports (Rev 6 §4)",
      );
    }
    if (ev.kind === "load-edge-child" && !(ev.bare && ev.form === "import")) {
      fail(
        `${p}.kind`,
        "load-edge-child requests are bare static imports (@1.1 finding 1: " +
          "the setup-virtual demand-target internalization edge)",
      );
    }
    if (ev.form === "dynamic-import" && ev.bare) {
      fail(`${p}.bare`, "dynamic-import events are never bare");
    }
    // Span points at the specifier literal in the statement text.
    const stmt = statements[ordinal];
    if (!isObj(ev.span)) fail(`${p}.span`, "expected span");
    const start = num(ev.span.start, `${p}.span.start`);
    const end = num(ev.span.end, `${p}.span.end`);
    if (start < 0 || end > stmt.text.length || start >= end) {
      fail(`${p}.span`, `bad bounds [${start}, ${end}) in statement text`);
    }
    const lit = stmt.text.slice(start, end);
    const inner = decodeSpecifierLiteral(lit, `${p}.span`);
    if (inner !== ev.specifier) {
      fail(
        `${p}.span`,
        `statement slice ${JSON.stringify(lit)} is not the specifier literal ` +
          `for ${JSON.stringify(ev.specifier)}`,
      );
    }
    // Static events must sit on a requesting statement of the matching kind.
    if (ev.form === "import" && stmt.kind !== "import") {
      fail(`${p}.form`, `import event on a ${stmt.kind} statement`);
    }
    if (ev.form === "reexport" && stmt.kind !== "reexport") {
      fail(`${p}.form`, `reexport event on a ${stmt.kind} statement`);
    }
    // Provisional firstOccurrence over RAW identity — static and dynamic are
    // SEPARATE identity streams (@1.1 finding 8, mirroring finalization).
    const id = `${ev.specifier}\0${attrsIdentity(ev.attributes)}`;
    const stream =
      ev.form === "dynamic-import" ? seenRawDynamic : seenRawIdentity;
    const want = !stream.has(id);
    stream.add(id);
    if (ev.firstOccurrence !== want) {
      fail(
        `${p}.firstOccurrence`,
        `provisional raw-identity firstOccurrence must be ${want} ` +
          `(${ev.form === "dynamic-import" ? "dynamic" : "static"} stream, ` +
          `identity ${JSON.stringify(ev.specifier)} + attrs)`,
      );
    }
  });
  // Requesting statements <-> static events, 1:1.
  statements.forEach((s, i) => {
    const staticEvents = requests.filter(
      (e) => e.ordinal === i && e.form !== "dynamic-import",
    );
    const requesting = s.kind === "import" || s.kind === "reexport";
    if (requesting && staticEvents.length !== 1) {
      fail(
        `$.statements[${i}]`,
        `${s.kind} statement has ${staticEvents.length} static request event(s), expected 1`,
      );
    }
    if (!requesting && staticEvents.length) {
      fail(
        `$.statements[${i}]`,
        `${staticEvents.length} static request event(s) on a non-requesting statement`,
      );
    }
  });

  // --- exports.
  arr(plan.exports, "$.exports").forEach((e, i) => {
    const p = `$.exports[${i}]`;
    const rec = e as PreliminaryExport;
    if (!isObj(rec)) fail(p, "expected export record");
    str(rec.exported, `${p}.exported`);
    const o = num(rec.ordinal, `${p}.ordinal`);
    if (o < 0 || o >= statements.length) fail(`${p}.ordinal`, "out of range");
    if (!isObj(rec.target)) fail(`${p}.target`, "expected target");
    switch (rec.target.kind) {
      case "local":
        if (!(plan.symbols as any)[rec.target.symId]) {
          fail(`${p}.target.symId`, `unknown symbol ${rec.target.symId}`);
        }
        break;
      case "external":
        str(rec.target.specifier, `${p}.target.specifier`);
        str(rec.target.imported, `${p}.target.imported`);
        checkAttrs(rec.target.attributes, `${p}.target.attributes`);
        break;
      case "default-expr":
        num(rec.target.ordinal, `${p}.target.ordinal`);
        break;
      default:
        fail(`${p}.target.kind`, `unknown kind ${(rec.target as any).kind}`);
    }
  });

  // --- loaders.
  arr(plan.loaders, "$.loaders").forEach((l, i) => {
    const p = `$.loaders[${i}]`;
    const rec = l as PreliminaryLoader;
    if (!isObj(rec)) fail(p, "expected loader record");
    if (!LOADER_TARGET_KINDS.has(rec.targetKind)) {
      fail(`${p}.targetKind`, `unknown targetKind "${rec.targetKind}"`);
    }
    str(rec.registryFn, `${p}.registryFn`);
    str(rec.rendererId, `${p}.rendererId`);
    bool(rec.firstWins, `${p}.firstWins`);
    const o = num(rec.ordinal, `${p}.ordinal`);
    if (o < 0 || o >= statements.length) fail(`${p}.ordinal`, "out of range");
    const lazyAt = requests.filter(
      (e) => e.ordinal === o && e.form === "dynamic-import",
    );
    arr(rec.targets, `${p}.targets`).forEach((t, j) => {
      const spec = str(t, `${p}.targets[${j}]`);
      if (!lazyAt.some((e) => e.specifier === spec)) {
        fail(
          `${p}.targets[${j}]`,
          `loader target ${JSON.stringify(spec)} has no lazy-edge request ` +
            `event at ordinal ${o}`,
        );
      }
    });
    // Normative loader table (@1.1, finding 6): registryFn fixed by kind,
    // firstWins always true, readyChain presence fixed by kind.
    const LOADER_TABLE: Record<
      string,
      { registryFn: string; readyChain: "required" | "absent" | "optional" }
    > = {
      "setup-virtual-demand": {
        registryFn: "_update_loader",
        readyChain: "required",
      },
      "escaped-direct": { registryFn: "_update_loader", readyChain: "absent" },
      "scheduled-load-ready": {
        registryFn: "_load_ready",
        readyChain: "optional",
      },
      "template-loader": { registryFn: "_load_template", readyChain: "absent" },
    };
    const row = LOADER_TABLE[rec.targetKind];
    if (rec.registryFn !== row.registryFn) {
      fail(
        `${p}.registryFn`,
        `${rec.targetKind} registers via ${row.registryFn}, got "${rec.registryFn}" ` +
          `(normative loader table, @1.1)`,
      );
    }
    if (rec.firstWins !== true) {
      fail(
        `${p}.firstWins`,
        "loader registration is always first-wins (normative table)",
      );
    }
    if (row.readyChain === "required" && !rec.readyChain) {
      fail(`${p}.readyChain`, `${rec.targetKind} requires a readiness chain`);
    }
    if (row.readyChain === "absent" && rec.readyChain) {
      fail(`${p}.readyChain`, `${rec.targetKind} carries no readiness chain`);
    }
    if (
      rec.targetKind === "scheduled-load-ready" &&
      rec.readyId === undefined
    ) {
      fail(
        `${p}.readyId`,
        "scheduled-load-ready requires the registered readiness id",
      );
    }
    if (rec.readyChain) {
      str(rec.readyChain.readyId, `${p}.readyChain.readyId`);
      bool(rec.readyChain.failureLatch, `${p}.readyChain.failureLatch`);
      if (
        rec.targetKind === "setup-virtual-demand" &&
        !rec.readyChain.failureLatch
      ) {
        fail(
          `${p}.readyChain.failureLatch`,
          "demand chains latch failure (normative table)",
        );
      }
      if (rec.readyId !== rec.readyChain.readyId) {
        fail(`${p}.readyId`, "readyId must equal readyChain.readyId");
      }
    } else if (
      rec.readyId !== undefined &&
      rec.targetKind !== "scheduled-load-ready"
    ) {
      fail(`${p}.readyId`, "readyId without a readiness chain");
    }
    // NOTE (@1.1, finding 2): rendererId === readyId is deliberately NOT
    // enforced anywhere; readiness ids are opaque emission facts.
  });

  // --- links <-> request kinds.
  const msEvents = requests.filter((e) => e.kind === "module-state");
  const msLinks = arr(
    plan.moduleStateLinks,
    "$.moduleStateLinks",
  ) as ModuleStateLink[];
  if (msLinks.length !== msEvents.length) {
    fail(
      "$.moduleStateLinks",
      `${msLinks.length} link(s) vs ${msEvents.length} module-state request event(s)`,
    );
  }
  msLinks.forEach((link, i) => {
    const p = `$.moduleStateLinks[${i}]`;
    str(link.specifier, `${p}.specifier`);
    const o = num(link.ordinal, `${p}.ordinal`);
    arr(link.imported, `${p}.imported`).forEach((n, j) =>
      str(n, `${p}.imported[${j}]`),
    );
    if (
      !msEvents.some((e) => e.ordinal === o && e.specifier === link.specifier)
    ) {
      fail(p, `no module-state request event matches (ordinal ${o})`);
    }
  });
  const ecEvents = requests.filter((e) => e.kind === "eager-candidate");
  const ecLinks = arr(
    plan.eagerCandidates,
    "$.eagerCandidates",
  ) as EagerCandidateLink[];
  if (ecLinks.length !== ecEvents.length) {
    fail(
      "$.eagerCandidates",
      `${ecLinks.length} link(s) vs ${ecEvents.length} eager-candidate request event(s)`,
    );
  }
  ecLinks.forEach((link, i) => {
    const p = `$.eagerCandidates[${i}]`;
    str(link.specifier, `${p}.specifier`);
    const o = num(link.ordinal, `${p}.ordinal`);
    if (
      !ecEvents.some((e) => e.ordinal === o && e.specifier === link.specifier)
    ) {
      fail(p, `no eager-candidate request event matches (ordinal ${o})`);
    }
  });

  // --- shells: capability vs possession, two types (grok risk 4).
  if (!isObj(plan.shellCapability))
    fail("$.shellCapability", "expected object");
  const capIds = new Set<string>();
  arr(plan.shellCapability.shells, "$.shellCapability.shells").forEach(
    (sh, i) => {
      const p = `$.shellCapability.shells[${i}]`;
      const rec = sh as ShellCapability["shells"][number];
      str(rec.shellId, `${p}.shellId`);
      str(rec.templateSym, `${p}.templateSym`);
      str(rec.walksSym, `${p}.walksSym`);
      if (!(plan.symbols as any)[rec.templateSym]) {
        fail(`${p}.templateSym`, `unknown symbol ${rec.templateSym}`);
      }
      if (!(plan.symbols as any)[rec.walksSym]) {
        fail(`${p}.walksSym`, `unknown symbol ${rec.walksSym}`);
      }
      capIds.add(rec.shellId);
    },
  );
  if (!isObj(plan.shellPossession))
    fail("$.shellPossession", "expected object");
  if ("shells" in (plan.shellPossession as any)) {
    fail(
      "$.shellPossession",
      "possession facts must not embed capability records (two types, never one)",
    );
  }
  arr(plan.shellPossession.claimable, "$.shellPossession.claimable").forEach(
    (id, i) => {
      const s = str(id, `$.shellPossession.claimable[${i}]`);
      if (!capIds.has(s)) {
        fail(
          `$.shellPossession.claimable[${i}]`,
          `claimable shell ${JSON.stringify(s)} is not in this module's capability ` +
            `(an eager closure may only claim shells the module registers)`,
        );
      }
    },
  );
  // Possession tethering (@1.1, finding 7): deferred ids must come from
  // DEMAND-CLASS loaders in this plan, and never overlap claimable.
  const demandRendererIds = new Set(
    (plan.loaders as PreliminaryLoader[])
      .filter((l) => l.targetKind !== "scheduled-load-ready")
      .map((l) => l.rendererId),
  );
  const claimableSet = new Set(plan.shellPossession.claimable);
  arr(plan.shellPossession.deferred, "$.shellPossession.deferred").forEach(
    (id, i) => {
      const s = str(id, `$.shellPossession.deferred[${i}]`);
      if (!demandRendererIds.has(s)) {
        fail(
          `$.shellPossession.deferred[${i}]`,
          `deferred id ${JSON.stringify(s)} matches no demand-class loader ` +
            `rendererId in this plan (deferred ⊆ loaders, @1.1 finding 7)`,
        );
      }
      if (claimableSet.has(s)) {
        fail(
          `$.shellPossession.deferred[${i}]`,
          `${JSON.stringify(s)} is both claimable and deferred — symmetric ` +
            `over-claim (@1.1 finding 7)`,
        );
      }
    },
  );

  return plan;
}

/** SET-LEVEL cross-check for load-edge-child (@1.1, finding 1): the loader
 * that demands a setup virtual lives in the DEMANDING plan, so the tie is
 * not checkable per-plan. Every plan carrying a load-edge-child request must
 * itself be a loader target somewhere in the set (raw spellings compared
 * posix-normalized — a prototype simplification; canonical comparison
 * belongs to finalization). */
export function assertLoadEdgeDemandCoverage(plans: PreliminaryPlan[]) {
  const normalize = (s: string) =>
    s.replace(/^\.\//, "").replace(/\/\.\//g, "/");
  const loaderTargets = new Set<string>();
  for (const plan of plans) {
    for (const loader of plan.loaders) {
      for (const target of loader.targets) loaderTargets.add(normalize(target));
    }
  }
  for (const plan of plans) {
    for (const ev of plan.requestedModules) {
      if (ev.kind !== "load-edge-child") continue;
      if (!loaderTargets.has(normalize(plan.importer))) {
        throw new SchemaViolation(
          `$.requestedModules[ordinal ${ev.ordinal}]`,
          `plan ${JSON.stringify(plan.importer)} carries a load-edge-child ` +
            `request (${JSON.stringify(ev.specifier)}) but is not itself a ` +
            `loader target anywhere in the plan set — a load edge with no ` +
            `demand chain (@1.1 finding 1)`,
        );
      }
    }
  }
}
