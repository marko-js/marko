// Hand-authored `preliminary-plan@1.1` fixtures for the vendored schema
// gates (b1-brief §6.1) and the scratch-side validator-equivalence harness.
import {
  PRELIMINARY_PLAN_VERSION,
  type PreliminaryPlan,
} from "../../translator/util/preliminary-plan";

export interface PlanRejection {
  name: string;
  /** Expected `SchemaViolation.path`. */
  path: string;
  plan: unknown;
}

/** Entry-side plan: import + shells + a demand loader with its lazy edge. */
export function entryPlan(): PreliminaryPlan {
  const importText =
    'import { _update_loader as _ul, _static_shells as _ss } from "@rt/dom-persisted";\n';
  const templateText = 'export const $template = "<section><!></section>";\n';
  const walksText = 'export const $walks = "D%";\n';
  const shellsText = '_ss({ "app-shell": [$template, $walks] });\n';
  const loaderText = '_ul("app-renderer", () => import("./lazy.setup.js"));\n';
  return {
    schemaVersion: PRELIMINARY_PLAN_VERSION,
    importer: "app.marko?persisted",
    originFile: "app.marko",
    fingerprintFields: fingerprintFields(),
    statements: [
      {
        ordinal: 0,
        evalOrdinal: 0,
        kind: "import",
        text: importText,
        nodeOffset: 0,
        spans: [],
        comments: comments(),
        origin: origin(1),
      },
      {
        ordinal: 1,
        evalOrdinal: 1,
        kind: "export-decl",
        text: templateText,
        nodeOffset: 0,
        innerOffset: templateText.indexOf("const"),
        spans: [span(templateText, "$template", "%$template")],
        comments: comments(),
        origin: origin(2),
      },
      {
        ordinal: 2,
        evalOrdinal: 2,
        kind: "export-decl",
        text: walksText,
        nodeOffset: 0,
        innerOffset: walksText.indexOf("const"),
        spans: [span(walksText, "$walks", "%$walks")],
        comments: comments(),
        origin: origin(3),
      },
      {
        ordinal: 3,
        evalOrdinal: 3,
        kind: "stmt",
        text: shellsText,
        nodeOffset: 0,
        spans: [
          span(shellsText, "$template", "%$template"),
          span(shellsText, "$walks", "%$walks"),
        ],
        comments: comments(),
        origin: origin(4),
      },
      {
        ordinal: 4,
        evalOrdinal: 4,
        kind: "stmt",
        text: loaderText,
        nodeOffset: 0,
        spans: [],
        comments: comments(),
        origin: origin(5),
      },
    ],
    symbols: {
      "%$template": {
        name: "$template",
        kind: "local",
        declKind: "const",
        refCount: 1,
        declOrdinal: 1,
      },
      "%$walks": {
        name: "$walks",
        kind: "local",
        declKind: "const",
        refCount: 1,
        declOrdinal: 2,
      },
      "%_ul": {
        name: "_ul",
        kind: "import",
        declKind: "module",
        refCount: 1,
        declOrdinal: 0,
        import: {
          specifier: "@rt/dom-persisted",
          imported: "_update_loader",
          attributes: [],
        },
      },
      "%_ss": {
        name: "_ss",
        kind: "import",
        declKind: "module",
        refCount: 1,
        declOrdinal: 0,
        import: {
          specifier: "@rt/dom-persisted",
          imported: "_static_shells",
          attributes: [],
        },
      },
    },
    requestedModules: [
      {
        specifier: "@rt/dom-persisted",
        attributes: [],
        kind: "external",
        form: "import",
        bare: false,
        ordinal: 0,
        firstOccurrence: true,
        plainTemplate: false,
        span: literalSpan(importText, "@rt/dom-persisted"),
      },
      {
        specifier: "./lazy.setup.js",
        attributes: [],
        kind: "lazy-edge",
        form: "dynamic-import",
        bare: false,
        ordinal: 4,
        firstOccurrence: true,
        plainTemplate: false,
        span: literalSpan(loaderText, "./lazy.setup.js"),
      },
    ],
    exports: [
      {
        exported: "$template",
        ordinal: 1,
        target: { kind: "local", symId: "%$template" },
      },
      {
        exported: "$walks",
        ordinal: 2,
        target: { kind: "local", symId: "%$walks" },
      },
    ],
    loaders: [
      {
        targetKind: "escaped-direct",
        registryFn: "_update_loader",
        rendererId: "app-renderer",
        targets: ["./lazy.setup.js"],
        ordinal: 4,
        firstWins: true,
      },
    ],
    moduleStateLinks: [],
    eagerCandidates: [],
    shellCapability: {
      shells: [
        {
          shellId: "app-shell",
          templateSym: "%$template",
          walksSym: "%$walks",
        },
      ],
    },
    shellPossession: { claimable: ["app-shell"], deferred: ["app-renderer"] },
  };
}

/** The demand-loaded module: its bare `?persisted` request is a load edge,
 * covered only at SET level by the entry plan's loader target. */
export function loadEdgePlan(): PreliminaryPlan {
  const importText = 'import "./app.marko?persisted";\n';
  return {
    schemaVersion: PRELIMINARY_PLAN_VERSION,
    importer: "./lazy.setup.js",
    originFile: "lazy.setup.src",
    fingerprintFields: fingerprintFields(),
    statements: [
      {
        ordinal: 0,
        evalOrdinal: 0,
        kind: "import",
        text: importText,
        nodeOffset: 0,
        spans: [],
        comments: comments(),
        origin: origin(1, "lazy.setup.src"),
      },
    ],
    symbols: {},
    requestedModules: [
      {
        specifier: "./app.marko?persisted",
        attributes: [],
        kind: "load-edge-child",
        form: "import",
        bare: true,
        ordinal: 0,
        firstOccurrence: true,
        plainTemplate: false,
        span: literalSpan(importText, "./app.marko?persisted"),
      },
    ],
    exports: [],
    loaders: [],
    moduleStateLinks: [],
    eagerCandidates: [],
    shellCapability: { shells: [] },
    shellPossession: { claimable: [], deferred: [] },
  };
}

export function coveredPlanSet(): PreliminaryPlan[] {
  return [entryPlan(), loadEdgePlan()];
}

/** Per-plan valid, set-invalid: the demand loader no longer targets the
 * load-edge plan, the designed set-level blind spot (@1.1 finding 1). */
export function uncoveredPlanSet(): PreliminaryPlan[] {
  const entry = entryPlan();
  entry.loaders[0].targets = [];
  return [entry, loadEdgePlan()];
}

/** Representative single-plan rejection classes for gate S1. */
export function planRejections(): PlanRejection[] {
  return [
    {
      name: "schemaVersion mismatch",
      path: "$.schemaVersion",
      plan: mutate((plan) => {
        plan.schemaVersion = "preliminary-plan@1" as never;
      }),
    },
    {
      name: "forbidden resolver-issued key (deep reject)",
      path: "$.requestedModules[0].canonical",
      plan: mutate((plan) => {
        (
          plan.requestedModules[0] as unknown as Record<string, unknown>
        ).canonical = "pkg:dom-persisted";
      }),
    },
    {
      name: "evalOrdinal !== ordinal",
      path: "$.statements[4].evalOrdinal",
      plan: mutate((plan) => {
        plan.statements[4].evalOrdinal = 0;
      }),
    },
    {
      name: "claimable outside capability",
      path: "$.shellPossession.claimable[0]",
      plan: mutate((plan) => {
        plan.shellPossession.claimable = ["ghost-shell"];
      }),
    },
    {
      name: "loader table registryFn swap",
      path: "$.loaders[0].registryFn",
      plan: mutate((plan) => {
        plan.loaders[0].registryFn = "_load_ready";
      }),
    },
    {
      name: "claimable and deferred overlap (symmetric over-claim)",
      path: "$.shellPossession.deferred[0]",
      plan: mutate((plan) => {
        plan.loaders[0].rendererId = "app-shell";
        plan.shellPossession.deferred = ["app-shell"];
      }),
    },
  ];
}

function mutate(fn: (plan: PreliminaryPlan) => void): PreliminaryPlan {
  const plan = entryPlan();
  fn(plan);
  return plan;
}

function fingerprintFields(): Record<string, string | boolean> {
  return {
    optimize: false,
    markoDebug: true,
    runtimeId: "default",
    modules: "esm",
    targets: "b1-hand",
    output: "dom",
    optimizeKnownTemplates: false,
    persisted: true,
    entry: "persisted",
    compiler: "hand@0",
    translator: "hand@0",
    babelConfigHash: "0",
    producer: "b1-hand-fixture@1",
  };
}

function comments() {
  return { leading: [], internal: [], trailing: [] };
}

function origin(line: number, file = "app.marko") {
  return { file, line, column: 0 };
}

function span(
  text: string,
  name: string,
  symId: string,
): [number, number, string] {
  const start = indexOf(text, name);
  return [start, start + name.length, symId];
}

function literalSpan(text: string, specifier: string) {
  const literal = JSON.stringify(specifier);
  const start = indexOf(text, literal);
  return { start, end: start + literal.length };
}

function indexOf(text: string, token: string) {
  const index = text.indexOf(token);
  if (index === -1) {
    throw new Error(
      `fixture token ${token} missing in ${JSON.stringify(text)}`,
    );
  }
  return index;
}
