import * as assert from "assert/strict";
import fs from "fs";
import { createRequire } from "module";
import path from "path";
import { pathToFileURL } from "url";

import * as compiler from "@marko/compiler";
import { types as t } from "@marko/compiler";
import { generator, parse } from "@marko/compiler/internal/babel";
import { JSDOM } from "jsdom";

import {
  assertLoadEdgeDemandCoverage,
  type PreliminaryPlan,
  SchemaViolation,
  validatePreliminaryPlan,
} from "../translator/util/preliminary-plan";
import {
  markPlanStatement,
  recordPlanImport,
} from "../translator/util/update-plan-records";
import {
  GENERATED_STATEMENT_LINE,
  type PreliminaryUpdatePlans,
  publishUpdatePlan,
} from "../translator/visitors/program/update-plan";
import { assertPrintOnInheritance } from "./utils/bundle";
import {
  coveredPlanSet,
  entryPlan,
  loadEdgePlan,
  planRejections,
  uncoveredPlanSet,
} from "./utils/preliminary-plan-fixtures";

const require = createRequire(import.meta.url);

type FixtureName =
  | "template.marko"
  | "merges.marko"
  | "loaders.marko"
  | "frames.marko"
  | "frame-root.marko"
  | "signals.marko"
  | "signals-foil.marko"
  | "statics.marko";

// template.marko keeps a class-api child so the `needsCompat` post-emission
// relocation runs: published ordinals only match print order if the
// finalizer runs last.
type FixtureCompileResult = compiler.CompileResult & {
  /** The ACTUAL sources served through resolveVirtualDependency, captured
   * for the assertVirtualSource independent projection. */
  virtualSources: Map<string, string>;
};
const compileFixture = (
  fixture: FixtureName,
  overrides?: Partial<compiler.Config>,
): FixtureCompileResult => {
  const virtualSources = new Map<string, string>();
  const result = compiler.compileFileSync(
    path.join(import.meta.dirname, "update-plan", fixture),
    {
      translator: require.resolve("marko/translator"),
      cache: new Map(),
      output: "dom",
      persisted: true,
      entry: "persisted",
      writeVersionComment: false,
      linkAssets: { runtime: "asset-runtime", onAsset() {} },
      resolveVirtualDependency: (_from, dep) => {
        const id = `./${dep.virtualPath}`;
        virtualSources.set(id, (dep as { code: string }).code);
        return id;
      },
      babelConfig: {
        babelrc: false,
        configFile: false,
        browserslistConfigFile: false,
      },
      ...overrides,
    } as compiler.Config,
  ) as FixtureCompileResult;
  result.virtualSources = virtualSources;
  return result;
};
const compileEntry = (overrides?: Partial<compiler.Config>) =>
  compileFixture("template.marko", overrides);
const publishedPlan = (result: compiler.CompileResult) => {
  const updatePlan = result.meta.updatePlan;
  assert.ok(updatePlan, "expected metadata.marko.updatePlan");
  return updatePlan as PreliminaryUpdatePlans;
};
const planText = (entry: PreliminaryPlan) =>
  entry.statements.map((statement) => statement.text).join("\n");
const canonicalPrint = (code: string) =>
  generator(parse(code, { sourceType: "module" }).program, {
    comments: false,
  }).code;

/** Independent full-payload registry oracle: every `_`-helper call in the
 * plan text must match the emitted module call-for-call (registrations are
 * text-only under @1.1 — no structured record family to diff). */
function registryPayloads(code: string) {
  const payloads: [callee: string, args: string[]][] = [];
  const visit = (node: unknown) => {
    if (Array.isArray(node)) {
      for (const item of node) visit(item);
      return;
    }
    if (!node || typeof node !== "object") return;
    const expr = node as t.Node;
    if (
      expr.type === "CallExpression" &&
      expr.callee.type === "Identifier" &&
      expr.callee.name.startsWith("_")
    ) {
      payloads.push([
        expr.callee.name,
        expr.arguments.map((arg) => generator(arg, { comments: false }).code),
      ]);
    }
    for (const key of Object.keys(expr)) {
      if (key !== "loc" && key !== "extra") {
        visit((expr as unknown as Record<string, unknown>)[key]);
      }
    }
  };
  visit(parse(code, { sourceType: "module" }).program.body);
  return payloads;
}

function assertPayloadOracle(entry: PreliminaryPlan, code: string) {
  assert.deepEqual(registryPayloads(planText(entry)), registryPayloads(code));
}

/** Every lazy-edge request must be demanded by a loader on its statement —
 * a dropped loader record may not stay green. */
function assertLoaderCoverage(entry: PreliminaryPlan) {
  for (const event of entry.requestedModules) {
    if (event.kind !== "lazy-edge") continue;
    assert.ok(
      entry.loaders.some(
        (loader) =>
          loader.ordinal === event.ordinal &&
          loader.targets.includes(event.specifier),
      ),
      `lazy-edge ${event.specifier} has no loader record`,
    );
  }
}

/** The entry protocol surface: `patch`, `echo`, and the root update export
 * (a local export of the `_resume` merge binding). */
function assertProtocolExports(entry: PreliminaryPlan) {
  const patch = entry.exports.find((record) => record.exported === "patch");
  const echo = entry.exports.find((record) => record.exported === "echo");
  assert.ok(patch && patch.target.kind === "local", "patch export");
  assert.ok(echo, "echo export");
  assert.ok(
    entry.exports.some(
      (record) =>
        record.target.kind === "local" &&
        entry.symbols[record.target.symId]?.name.includes("merge"),
    ),
    "root update export targeting the merge binding",
  );
}

/** H4: the scheduled loader's renderer identity is the native load id —
 * never the opaque readiness spelling (retires the B0 dual-fill stand-in). */
function assertScheduledNativeIdentity(entry: PreliminaryPlan) {
  const scheduled = entry.loaders.find(
    (loader) => loader.targetKind === "scheduled-load-ready",
  );
  assert.ok(scheduled, "scheduled-load-ready loader");
  assert.ok(scheduled!.readyId, "scheduled readyId");
  assert.notEqual(scheduled!.rendererId, scheduled!.readyId);
  assert.doesNotMatch(scheduled!.rendererId, /^ready:/);
  assert.match(scheduled!.rendererId, /panel\.marko_0_update$/);
}

/** Independent projection of site 30: the emitted `_static_shells`
 * payload parsed back out of the published statement TEXT. */
const emittedShells = (entry: PreliminaryPlan) => {
  const statement = entry.statements.find((candidate) =>
    candidate.text.startsWith("_static_shells("),
  );
  if (!statement) return [];
  const call = (
    parse(statement.text, { sourceType: "module" }).program
      .body[0] as t.ExpressionStatement
  ).expression as t.CallExpression;
  return (call.arguments[0] as t.ObjectExpression).properties.map(
    (property) => {
      const { key, value } = property as t.ObjectProperty;
      const [templateExpr, walksExpr] = (value as t.ArrayExpression)
        .elements as t.Identifier[];
      return {
        shellId: (key as t.StringLiteral).value,
        templateSym: `%${templateExpr.name}`,
        walksSym: `%${walksExpr.name}`,
      };
    },
  );
};

/** Independent projection of site 37: the ACTUAL source served through
 * resolveVirtualDependency must re-parse to the published mini-plan. */
const assertVirtualSource = (
  plan: PreliminaryUpdatePlans,
  virtualSources: Map<string, string>,
) => {
  for (const [virtualId, virtual] of Object.entries(plan.virtuals)) {
    const source = virtualSources.get(virtualId);
    assert.ok(source, `served source captured for ${virtualId}`);
    const parsed = parse(source!, { sourceType: "module" }).program
      .body as t.Statement[];
    assert.equal(parsed.length, virtual.statements.length, virtualId);
    parsed.forEach((node: t.Statement, index: number) => {
      assert.equal(
        generator(node, { comments: false }).code,
        canonicalPrint(virtual.statements[index].text),
        `${virtualId} statement ${index}`,
      );
    });
    const parsedImports = parsed
      .filter(
        (node): node is t.ImportDeclaration =>
          node.type === "ImportDeclaration",
      )
      .map((node) => ({
        specifier: (node as t.ImportDeclaration).source.value,
        bare: !(node as t.ImportDeclaration).specifiers.length,
      }));
    assert.deepEqual(
      virtual.requestedModules.map((event) => ({
        specifier: event.specifier,
        bare: event.bare,
      })),
      parsedImports,
      virtualId,
    );
  }
};

function mutatedText(text: string, search: string | RegExp, replace: string) {
  const mutated = text.replace(search, replace);
  assert.notEqual(mutated, text, `mutation did not apply: ${search}`);
  return mutated;
}

describe("runtime-tags/update-plan", () => {
  describe("preliminary-plan@1.1 validator", () => {
    it("accepts the hand plans alone and as a covered set", () => {
      assert.equal(
        validatePreliminaryPlan(entryPlan()).importer,
        "app.marko?persisted",
      );
      assert.equal(
        validatePreliminaryPlan(loadEdgePlan()).importer,
        "./lazy.setup.js",
      );
      assertLoadEdgeDemandCoverage(coveredPlanSet());
    });

    it("rejects each representative mutation with a named path", () => {
      for (const rejection of planRejections()) {
        assert.throws(
          () => validatePreliminaryPlan(rejection.plan),
          (err: unknown) =>
            err instanceof SchemaViolation && err.path === rejection.path,
          rejection.name,
        );
      }
    });

    it("rejects an uncovered load edge only at set level", () => {
      const plans = uncoveredPlanSet();
      for (const plan of plans) validatePreliminaryPlan(plan);
      assert.throws(
        () => assertLoadEdgeDemandCoverage(plans),
        (err: unknown) =>
          err instanceof SchemaViolation &&
          /load edge with no demand chain/.test(err.message),
      );
    });
  });

  describe("program-exit plan finalizer", () => {
    it("assigns ordinals in final print order across the needsCompat relocation", () => {
      const result = compileEntry();
      const { entry } = publishedPlan(result);
      const relocated = entry.statements[0];
      assert.equal(relocated.kind, "import");
      assert.match(relocated.text, /tags-compat/);
      assert.match(result.code, /^import "[^"\n]*tags-compat/);
      entry.statements.forEach((statement, index) => {
        assert.equal(statement.ordinal, index);
        assert.equal(statement.evalOrdinal, statement.ordinal);
      });
    });

    it("publishes byte-identical plan JSON across compiles", () => {
      for (const fixture of [
        "template.marko",
        "merges.marko",
        "loaders.marko",
      ] as const) {
        assert.equal(
          JSON.stringify(publishedPlan(compileFixture(fixture))),
          JSON.stringify(publishedPlan(compileFixture(fixture))),
          fixture,
        );
      }
    });

    it("reprints the plan statement texts to the emitted module", () => {
      for (const fixture of [
        "template.marko",
        "merges.marko",
        "loaders.marko",
      ] as const) {
        const result = compileFixture(fixture);
        const { entry } = publishedPlan(result);
        assert.equal(
          canonicalPrint(planText(entry)),
          canonicalPrint(result.code),
          fixture,
        );
      }
    });

    it("publishes complete plans with no incomplete marker", () => {
      const plan = publishedPlan(compileEntry()) as PreliminaryUpdatePlans & {
        incomplete?: unknown;
      };
      assert.ok(!("incomplete" in plan), "carrier has no incomplete marker");
      validatePreliminaryPlan(plan.entry);
    });

    it("completes every published statement (origin policy included)", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      for (const statement of entry.statements) {
        assert.ok(Array.isArray(statement.spans), "spans");
        assert.ok(statement.comments, "comments");
        assert.ok(statement.origin, "origin");
      }
      // Origin policy: real loc for user-authored statements, binding loc
      // for attributed signals, the documented sentinel otherwise.
      const userImport = entry.statements.find((statement) =>
        statement.text.includes('from "./tags/widget.marko"'),
      )!;
      assert.ok(userImport.origin.line > 0, "user import keeps its source loc");
      const seed = entry.statements.find((statement) =>
        statement.text.includes("_update_signal("),
      )!;
      assert.ok(seed.origin.line > 0, "seed keeps its binding loc");
      const defaultExport = entry.statements.find(
        (statement) => statement.kind === "export-default",
      )!;
      assert.equal(defaultExport.origin.line, GENERATED_STATEMENT_LINE);
      assert.equal(defaultExport.origin.column, GENERATED_STATEMENT_LINE);
    });
  });

  describe("group A native records", () => {
    it("full-plan: every fixture validates WHOLE with zero fills", () => {
      for (const fixture of [
        "template.marko",
        "merges.marko",
        "loaders.marko",
        "frames.marko",
        "frame-root.marko",
        "signals.marko",
      ] as const) {
        const plan = publishedPlan(compileFixture(fixture));
        const plans = [plan.entry, ...Object.values(plan.virtuals)];
        for (const published of plans) validatePreliminaryPlan(published);
        assertLoadEdgeDemandCoverage(plans);
        assertLoaderCoverage(plan.entry);
        assertProtocolExports(plan.entry);
      }
    });

    it("H1: request/symbol/export ordinals are final-body ordinals by node identity", () => {
      const { entry } = publishedPlan(compileEntry());
      const childImport = entry.statements.find(
        (statement) =>
          statement.kind === "import" &&
          statement.text.includes("counter-child.marko?persisted"),
      );
      assert.ok(childImport, "child import statement");
      assert.ok(childImport!.ordinal > 0, "shifted by the compat relocation");
      const [request, ...rest] = entry.requestedModules.filter(
        (event) => event.kind === "internalized-child",
      );
      assert.equal(rest.length, 0);
      assert.equal(request.ordinal, childImport!.ordinal);
      assert.equal(request.specifier, "./tags/counter-child.marko?persisted");
      assert.equal(
        JSON.parse(
          childImport!.text.slice(request.span.start, request.span.end),
        ),
        request.specifier,
      );
      const importSymbol = Object.values(entry.symbols).find(
        (symbol) =>
          symbol.kind === "import" &&
          symbol.import!.specifier === request.specifier &&
          symbol.import!.imported === "$update",
      );
      assert.ok(importSymbol, "import symbol");
      assert.equal(importSymbol!.declOrdinal, childImport!.ordinal);
      // The late `_echo_snapshot`-backed export is the final statement.
      const echo = entry.exports.find((record) => record.exported === "echo")!;
      assert.equal(echo.ordinal, entry.statements.length - 1);
    });

    it("H2: the echo export classifies as an external runtime target", () => {
      const { entry } = publishedPlan(compileEntry());
      const echo = entry.exports.find((record) => record.exported === "echo")!;
      assert.ok(echo.target.kind === "external", "external target");
      assert.equal(echo.target.imported, "_echo_snapshot");
      assert.match(echo.target.specifier, /dom-persisted/);
      const specifier = echo.target.specifier;
      // The recorded specifier is the real runtime request of this module.
      assert.ok(
        entry.statements.some(
          (statement) =>
            statement.kind === "import" &&
            statement.text.includes(`"${specifier}"`),
        ),
        "echo target matches an actual runtime import",
      );
    });

    it("H3: shared-noop and direct-merge topology declares each symbol once", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      const symbolEntries = Object.entries(entry.symbols);
      const noops = symbolEntries.filter(([, symbol]) =>
        symbol.name.includes("noop_update"),
      );
      assert.equal(noops.length, 1, "one shared noop declaration");
      const [noopId, noop] = noops[0];
      const noopContentRefs = entry.statements.filter(
        (statement) =>
          statement.text.startsWith("_update_content(") &&
          statement.spans!.some(([, , symId]) => symId === noopId),
      );
      assert.ok(noopContentRefs.length >= 2, "noop shared by several sections");
      assert.equal(noop.refCount, noopContentRefs.length);
      // The for-body direct merge aliases its holes handler: one declaration,
      // no phantom per-section `<section>__update` symbol.
      const holesEntry = symbolEntries.find(([, symbol]) =>
        symbol.name.includes("for_content_holes"),
      );
      assert.ok(holesEntry, "direct-merge holes symbol");
      const [holesId] = holesEntry!;
      assert.ok(
        !symbolEntries.some(([, symbol]) =>
          /for_content__update/.test(symbol.name),
        ),
        "no phantom merge symbol for the aliased section",
      );
      const forStatement = entry.statements.find((statement) =>
        statement.text.includes("_update_for("),
      )!;
      assert.ok(
        forStatement.spans!.some(([, , symId]) => symId === holesId),
        "the for merge references the aliased holes handler",
      );
      // Empty branch sections registered through the shared noop must not
      // mint their own merge symbols.
      assert.ok(
        !symbolEntries.some(([, symbol]) =>
          /else_content.*update/.test(symbol.name),
        ),
        "no per-empty-section merge symbols",
      );
    });

    it("H4: loaders dedupe first-wins with native scheduled renderer identity", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const kinds = entry.loaders.map((loader) => loader.targetKind).sort();
      assert.deepEqual(kinds, [
        "escaped-direct",
        "scheduled-load-ready",
        "setup-virtual-demand",
        "template-loader",
      ]);
      assertScheduledNativeIdentity(entry);
      const scheduled = entry.loaders.find(
        (loader) => loader.targetKind === "scheduled-load-ready",
      )!;
      assert.equal(scheduled.readyChain, undefined);
      const demand = entry.loaders.find(
        (loader) => loader.targetKind === "setup-virtual-demand",
      )!;
      assert.ok(demand.readyChain, "demand chain");
      assert.equal(demand.readyChain!.failureLatch, true);
      assert.equal(demand.readyId, demand.readyChain!.readyId);
      assert.match(demand.rendererId, /panel\.marko$/);
      const escaped = entry.loaders.find(
        (loader) => loader.targetKind === "escaped-direct",
      )!;
      assert.equal(escaped.readyId, undefined);
      assert.equal(escaped.readyChain, undefined);
      assert.match(escaped.rendererId, /widget\.marko$/);
      assert.match(escaped.targets[0], /widget\.marko\?persisted$/);
      // One lazy-edge event per emitted loader, at the loader's ordinal.
      for (const loader of entry.loaders) {
        const events = entry.requestedModules.filter(
          (event) =>
            event.kind === "lazy-edge" && event.ordinal === loader.ordinal,
        );
        assert.equal(events.length, 1, loader.targetKind);
        assert.deepEqual(loader.targets, [events[0].specifier]);
      }
      // The duplicated `<Panel>` tags and dynamic candidates emitted exactly
      // one loader each (compile-time first-wins): the setup virtual appears
      // as two events (scheduled + demand chains), one per emitted loader.
      const setupEvents = entry.requestedModules.filter(
        (event) =>
          event.kind === "lazy-edge" &&
          event.specifier === scheduled.targets[0],
      );
      assert.equal(setupEvents.length, 2);
      assert.deepEqual(
        setupEvents.map((event) => event.firstOccurrence),
        [true, false],
      );
    });

    it("H5: the registry payload oracle matches the emitted module and rejects payload drift", () => {
      for (const fixture of ["merges.marko", "loaders.marko"] as const) {
        const result = compileFixture(fixture);
        const { entry } = publishedPlan(result);
        assertPayloadOracle(entry, result.code);
      }
      // Text-only payload mutations (no structured record changes) must
      // fail the oracle: zero sentinels, optional args, branch-id arrays.
      const result = compileFixture("merges.marko");
      const { entry } = publishedPlan(result);
      const reds: [name: string, search: string | RegExp, replace: string][] = [
        ["zero sentinel flip", "[0, 0]", "[0, 1]"],
        [
          "branch-id array strip",
          /, \["[^\n]*?_2_update", "[^\n]*?_4_update"\]\)/,
          ")",
        ],
        [
          "branch-id order swap",
          /\[("[^\n]*?_2_update"), ("[^\n]*?_4_update")\]/,
          "[$2, $1]",
        ],
        [
          "register-id corruption",
          /_update_content\("/,
          '_update_content("corrupt:',
        ],
        [
          "update-pair arg swap",
          "_update_pair($patch, $live)",
          "_update_pair($live, $patch)",
        ],
      ];
      for (const [name, search, replace] of reds) {
        const mutated = structuredClone(entry);
        const statement = mutated.statements.find((candidate) =>
          typeof search === "string"
            ? candidate.text.includes(search)
            : search.test(candidate.text),
        );
        assert.ok(statement, `${name}: no statement matched`);
        statement!.text = mutatedText(statement!.text, search, replace);
        assert.throws(() => assertPayloadOracle(mutated, result.code), name);
      }
      // Loaders fixture: the `_update_load` native ids are payload too.
      const loadResult = compileFixture("loaders.marko");
      const loadEntry = publishedPlan(loadResult).entry;
      const mutated = structuredClone(loadEntry);
      const loadStatement = mutated.statements.find((candidate) =>
        candidate.text.includes("_update_load("),
      )!;
      loadStatement.text = mutatedText(
        loadStatement.text,
        /_update_load\(\$patch\["([^"]+)"\], \$live\["\1"\], "/,
        '_update_load($patch["$1"], $live["$1"], "corrupt:',
      );
      assert.throws(() => assertPayloadOracle(mutated, loadResult.code));
    });

    it("H6: a shared comment object prints once, owned per kind authority", () => {
      const shared = {
        type: "CommentLine",
        value: " shared boundary note",
      } as t.Comment;
      const own = {
        type: "CommentLine",
        value: " own leading note",
      } as t.Comment;
      const first = t.expressionStatement(
        t.callExpression(t.identifier("first"), []),
      );
      first.trailingComments = [shared];
      const second = t.importDeclaration([], t.stringLiteral("./x.js"));
      second.leadingComments = [shared, own];
      const file = {
        opts: { filename: "synthetic.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      };
      // The import is group-A-marked so its regenerated-kind buckets fill.
      markPlanStatement(file as unknown as t.BabelFile, second);
      publishUpdatePlan({
        node: t.program([first, second]),
        hub: { file },
      } as unknown as t.NodePath<t.Program>);
      const { entry } = file.metadata.marko.updatePlan!;
      const texts = entry.statements.map((statement) => statement.text);
      const occurrences = texts
        .join("\n")
        .match(/shared boundary note/g)!.length;
      assert.equal(occurrences, 1, "exactly one authoritative occurrence");
      assert.match(texts[0], /shared boundary note/);
      assert.match(texts[1], /own leading note/);
      // Regenerated kind: buckets own the effective comments (shared one
      // excluded — it belongs to the previous statement's trailing).
      assert.deepEqual(entry.statements[1].comments, {
        leading: ["// own leading note"],
        internal: [],
        trailing: [],
      });
      // Spliced kinds keep comments in text only: real-fixture pin.
      const merges = publishedPlan(compileFixture("merges.marko")).entry;
      const pureStatement = merges.statements.find(
        (statement) =>
          statement.comments && statement.text.includes("@__PURE__"),
      )!;
      assert.equal(pureStatement.kind, "stmt");
      assert.deepEqual(pureStatement.comments, {
        leading: [],
        internal: [],
        trailing: [],
      });
    });

    it("rejects corrupted or dropped group-A records (per-site reds)", () => {
      const template = publishedPlan(compileEntry()).entry;
      const merges = publishedPlan(compileFixture("merges.marko")).entry;
      const loaders = publishedPlan(compileFixture("loaders.marko")).entry;
      const validate = (entry: PreliminaryPlan) =>
        void validatePreliminaryPlan(entry);
      const deleteSymbol = (entry: PreliminaryPlan, match: RegExp) => {
        const symId = Object.keys(entry.symbols).find((candidate) =>
          match.test(candidate),
        );
        assert.ok(symId, `no symbol matching ${match}`);
        delete entry.symbols[symId!];
      };
      const cases: {
        site: string;
        entry: PreliminaryPlan;
        mutate: (entry: PreliminaryPlan) => void;
        check?: (entry: PreliminaryPlan) => void;
      }[] = [
        {
          site: "1 construct declaration symbol",
          entry: merges,
          mutate: (entry) => deleteSymbol(entry, /\$construct$/),
        },
        {
          site: "3 merge declaration symbol",
          entry: template,
          mutate: (entry) => deleteSymbol(entry, /\$merge$/),
        },
        {
          site: "4 patch factory symbol",
          entry: template,
          mutate: (entry) => deleteSymbol(entry, /\$patch2$/),
        },
        {
          site: "5 patch protocol export",
          entry: template,
          mutate: (entry) => {
            entry.exports = entry.exports.filter(
              (record) => record.exported !== "patch",
            );
          },
          check: assertProtocolExports,
        },
        {
          site: "6 echo export flipped to a local target",
          entry: template,
          mutate: (entry) => {
            entry.exports.find((record) => record.exported === "echo")!.target =
              { kind: "local", symId: "%$missing_echo" };
          },
        },
        {
          site: "9 root update export",
          entry: template,
          mutate: (entry) => {
            entry.exports = entry.exports.filter(
              (record) =>
                record.target.kind !== "local" ||
                !entry.symbols[record.target.symId]?.name.includes("merge"),
            );
          },
          check: assertProtocolExports,
        },
        {
          site: "11 seed signal symbol",
          entry: merges,
          mutate: (entry) => deleteSymbol(entry, /\$count_seed$/),
        },
        {
          site: "12 value signal symbol",
          entry: merges,
          mutate: (entry) => deleteSymbol(entry, /\$input_step_update$/),
        },
        {
          site: "13 holes handler symbol",
          entry: merges,
          mutate: (entry) => deleteSymbol(entry, /%\$_holes$/),
        },
        {
          site: "14 globals signal symbol",
          entry: merges,
          mutate: (entry) => deleteSymbol(entry, /\$globals_update$/),
        },
        {
          site: "8 escaped loader registryFn swap",
          entry: loaders,
          mutate: (entry) => {
            entry.loaders.find(
              (loader) => loader.targetKind === "escaped-direct",
            )!.registryFn = "_load_ready";
          },
        },
        {
          site: "8 escaped loader drop",
          entry: loaders,
          mutate: (entry) => {
            entry.loaders = entry.loaders.filter(
              (loader) => loader.targetKind !== "escaped-direct",
            );
          },
          check: assertLoaderCoverage,
        },
        {
          site: "16 demand loader ready-chain strip",
          entry: loaders,
          mutate: (entry) => {
            const demand = entry.loaders.find(
              (loader) => loader.targetKind === "setup-virtual-demand",
            )!;
            delete demand.readyChain;
            delete demand.readyId;
          },
        },
        {
          site: "16 demand loader drop",
          entry: loaders,
          mutate: (entry) => {
            entry.loaders = entry.loaders.filter(
              (loader) => loader.targetKind !== "setup-virtual-demand",
            );
          },
          check: assertLoaderCoverage,
        },
        {
          site: "17 scheduled loader kind flip",
          entry: loaders,
          mutate: (entry) => {
            entry.loaders.find(
              (loader) => loader.targetKind === "scheduled-load-ready",
            )!.targetKind = "escaped-direct";
          },
        },
        {
          site: "17 scheduled loader readyId strip",
          entry: loaders,
          mutate: (entry) => {
            delete entry.loaders.find(
              (loader) => loader.targetKind === "scheduled-load-ready",
            )!.readyId;
          },
        },
        {
          site: "17 scheduled loader dual-fill regression (rendererId = readyId)",
          entry: loaders,
          mutate: (entry) => {
            const scheduled = entry.loaders.find(
              (loader) => loader.targetKind === "scheduled-load-ready",
            )!;
            scheduled.rendererId = scheduled.readyId!;
          },
          check: assertScheduledNativeIdentity,
        },
        {
          site: "19 internalized-child request drop",
          entry: template,
          mutate: (entry) => {
            entry.requestedModules = entry.requestedModules.filter(
              (event) => event.kind !== "internalized-child",
            );
          },
        },
      ];
      for (const { site, entry, mutate, check = validate } of cases) {
        const mutated = structuredClone(entry);
        mutate(mutated);
        assert.throws(
          () => check(mutated),
          `site ${site} mutation stayed green`,
        );
      }
      // Text-only registration sites (2, 7, 10, 15, 18) red through the
      // payload oracle in the H5 gate above.
    });
  });

  describe("group B native records", () => {
    const CONTENT_CALL = /(?<![\w$])_content\(/;
    const CONTENT_RESUME_CALL = /(?<![\w$])_content_resume\(/;
    const REGISTERED_SCRIPT_CALL =
      /(?<![\w$])_script\(|_script_update\(|_script_refresh\(/;

    /** Independent projection of the export surface: every completed
     * export-decl/default statement TEXT must have matching records. */
    const assertExportSurface = (entry: PreliminaryPlan) => {
      for (const statement of entry.statements) {
        if (!statement.comments) continue;
        if (statement.kind === "export-decl") {
          const declaration = (
            parse(statement.text, { sourceType: "module" }).program
              .body[0] as t.ExportNamedDeclaration
          ).declaration!;
          const names =
            declaration.type === "VariableDeclaration"
              ? declaration.declarations.map(
                  (declarator) => (declarator.id as t.Identifier).name,
                )
              : declaration.type === "FunctionDeclaration" && declaration.id
                ? [declaration.id.name]
                : [];
          for (const name of names) {
            const record = entry.exports.find(
              (candidate) =>
                candidate.exported === name &&
                candidate.ordinal === statement.ordinal,
            );
            assert.ok(record, `missing export record for ${name}`);
            assert.deepEqual(record!.target, {
              kind: "local",
              symId: `%${name}`,
            });
          }
        } else if (statement.kind === "export-default") {
          const record = entry.exports.find(
            (candidate) =>
              candidate.exported === "default" &&
              candidate.ordinal === statement.ordinal,
          );
          assert.ok(record, "missing default export record");
          assert.deepEqual(record!.target, {
            kind: "default-expr",
            ordinal: statement.ordinal,
          });
        }
      }
    };

    it("G1: suppression facts encode in the plan (never the resume variants)", () => {
      const frameRoot = publishedPlan(compileFixture("frame-root.marko")).entry;
      assert.equal(
        frameRoot.statements[0].text,
        'export const $template = "";',
      );
      assert.equal(frameRoot.statements[1].text, 'export const $walks = "";');
      assert.deepEqual(frameRoot.shellCapability, { shells: [] });
      assert.ok(
        !frameRoot.statements.some((statement) =>
          statement.text.startsWith("_static_shells("),
        ),
        "patch-stable root registers no shells",
      );

      const result = compileFixture("loaders.marko");
      const { entry } = publishedPlan(result);
      const text = planText(entry);
      assert.match(text, CONTENT_CALL);
      assert.doesNotMatch(text, CONTENT_RESUME_CALL);
      assert.match(text, /_script_shared\(/);
      assert.doesNotMatch(text, REGISTERED_SCRIPT_CALL);

      // Control: the same templates compiled OUTSIDE the entry use the
      // resume variants the entry suppresses (and publish no plan).
      const eager = compileFixture("loaders.marko", { entry: undefined });
      assert.equal(eager.meta.updatePlan, undefined);
      assert.match(eager.code, CONTENT_RESUME_CALL);
      const eagerMerges = compileFixture("merges.marko", { entry: undefined });
      assert.match(eagerMerges.code, /_script_update\(/);
      assert.doesNotMatch(eagerMerges.code, /_var_resume\("[^"]*count\/var/);

      // Reds: a wrong-encoding variant in the plan fails the oracle/reprint.
      const wrongContent = structuredClone(entry);
      const contentStatement = wrongContent.statements.find((candidate) =>
        CONTENT_CALL.test(candidate.text),
      )!;
      contentStatement.text = mutatedText(
        contentStatement.text,
        CONTENT_CALL,
        "_content_resume(",
      );
      assert.throws(() => assertPayloadOracle(wrongContent, result.code));

      const frameResult = compileFixture("frame-root.marko");
      const wrongFrame = structuredClone(publishedPlan(frameResult).entry);
      wrongFrame.statements[0].text = mutatedText(
        wrongFrame.statements[0].text,
        '= ""',
        '= "<div>"',
      );
      assert.notEqual(
        canonicalPrint(planText(wrongFrame)),
        canonicalPrint(frameResult.code),
      );
    });

    it("G2: ShellCapability is 1:1 with the emitted _static_shells payload", () => {
      const { entry } = publishedPlan(compileFixture("frames.marko"));
      assert.ok(entry.shellCapability, "capability published");
      assert.deepEqual(entry.shellCapability!.shells, emittedShells(entry));
      const branchShells = entry.shellCapability!.shells.filter((shell) =>
        /_[1-9]\d*_update$/.test(shell.shellId),
      );
      // The frame-composing branch is excluded: only the else branch claims.
      assert.equal(branchShells.length, 1);

      const phantom = structuredClone(entry);
      phantom.shellCapability!.shells.push({
        shellId: "ghost-shell",
        templateSym: "%$template",
        walksSym: "%$walks",
      });
      assert.throws(() =>
        assert.deepEqual(
          phantom.shellCapability!.shells,
          emittedShells(phantom),
        ),
      );
      const unknownSyms = structuredClone(entry);
      unknownSyms.shellCapability!.shells.push({
        shellId: "ghost-shell",
        templateSym: "%$missing_template",
        walksSym: "%$missing_walks",
      });
      assert.throws(
        () => validatePreliminaryPlan(unknownSyms),
        SchemaViolation,
      );
      const missing = structuredClone(entry);
      missing.shellCapability!.shells.pop();
      assert.throws(() =>
        assert.deepEqual(
          missing.shellCapability!.shells,
          emittedShells(missing),
        ),
      );
    });

    it("G3: the export-decl surface is complete against the statement texts", () => {
      const { entry } = publishedPlan(compileEntry());
      assertExportSurface(entry);
      const template = entry.exports.find(
        (record) => record.exported === "$template",
      )!;
      assert.equal(entry.statements[template.ordinal].kind, "export-decl");
      const defaultRecord = entry.exports.find(
        (record) => record.exported === "default",
      )!;
      assert.equal(
        entry.statements[defaultRecord.ordinal].kind,
        "export-default",
      );
      assert.match(
        entry.statements[defaultRecord.ordinal].text,
        /_template\("/,
      );
      // Site 25 signal exports surface too.
      const merges = publishedPlan(compileFixture("merges.marko")).entry;
      assertExportSurface(merges);
      assert.ok(
        merges.exports.some((record) => record.exported === "$input_title"),
        "signal export record",
      );

      const dropped = structuredClone(entry);
      dropped.exports = dropped.exports.filter(
        (record) => record.exported !== "$template",
      );
      assert.throws(() => assertExportSurface(dropped));
      const misclassified = structuredClone(entry);
      misclassified.exports.find(
        (record) => record.exported === "default",
      )!.target = { kind: "local", symId: "%$template" };
      assert.throws(() => assertExportSurface(misclassified));
    });

    it("G4: the entry effect path is construct + _script_shared", () => {
      const result = compileFixture("merges.marko");
      const { entry } = publishedPlan(result);
      const text = planText(entry);
      assert.match(text, /_script_shared\(/);
      assert.match(text, /_construct_effect\(/);
      assert.doesNotMatch(text, REGISTERED_SCRIPT_CALL);
      const eager = compileFixture("merges.marko", { entry: undefined });
      assert.doesNotMatch(eager.code, /_construct_effect\(/);

      const wrong = structuredClone(entry);
      const statement = wrong.statements.find((candidate) =>
        candidate.text.includes("_script_shared("),
      )!;
      statement.text = mutatedText(
        statement.text,
        "_script_shared(",
        "_script_update(",
      );
      assert.throws(() => assertPayloadOracle(wrong, result.code));
    });

    it("G5: the payload oracle covers _var_resume, globals _resume, and getters", () => {
      const result = compileFixture("merges.marko");
      const { entry } = publishedPlan(result);
      // Register-id pairing: every `_update_signal("id")` lookup (group A)
      // has its registration counterpart (`_var_resume`/`_resume`) in the
      // same plan (site 20's flip consequence at sites 22/28).
      const text = planText(entry);
      const lookupIds = [...text.matchAll(/_update_signal\("([^"]+)"\)/g)].map(
        (match) => match[1],
      );
      assert.ok(lookupIds.length >= 3, "expected signal lookups");
      const unpaired = lookupIds.filter(
        (id) =>
          !text.includes(`_var_resume("${id}"`) &&
          !text.includes(`_resume("${id}"`),
      );
      // R4b invariant: every `_update_signal("id")` lookup has its
      // registration in the same plan (registration runs after initValue
      // materializes property-alias signals, before writeSignals).
      assert.deepEqual(unpaired, []);
      // Effect-only input AND param property aliases both pair.
      assert.ok(
        lookupIds.some((id) => id.endsWith("input_step/var")),
        "input property alias looked up",
      );
      // And the fix never WIDENS registration: every `_var_resume` id is
      // demanded by a lookup (no signals materialize without one).
      const registrationIds = [...text.matchAll(/_var_resume\("([^"]+)"/g)].map(
        (match) => match[1],
      );
      for (const id of registrationIds) {
        assert.ok(lookupIds.includes(id), `unlooked-up registration ${id}`);
      }
      const reds: [name: string, search: string | RegExp, replace: string][] = [
        ["var-resume register id", '_var_resume("', '_var_resume("corrupt:'],
        [
          "globals resume register id",
          /_resume\("([^"]+)\/update_globals"/,
          '_resume("$1/corrupt"',
        ],
        ["hoist getter accessor", "_hoist(", '_hoist("corrupt:", '],
      ];
      for (const [name, search, replace] of reds) {
        const mutated = structuredClone(entry);
        const statement = mutated.statements.find((candidate) =>
          typeof search === "string"
            ? candidate.text.includes(search)
            : search.test(candidate.text),
        );
        assert.ok(statement, `${name}: no statement matched`);
        statement!.text = mutatedText(statement!.text, search, replace);
        assert.throws(() => assertPayloadOracle(mutated, result.code), name);
      }
      // Site 24 suppression: an inserted registered-fn `_resume` in the plan
      // is an extra payload the module does not have.
      const inserted = structuredClone(entry);
      inserted.statements[inserted.statements.length - 1].text +=
        '\n_resume("ghost-register", $patch2);';
      assert.throws(() => assertPayloadOracle(inserted, result.code));
    });

    it("G6: cross-group spans and refCounts are exact once group B fills symbols", () => {
      const { entry } = publishedPlan(compileEntry());
      const script = Object.entries(entry.symbols).find(([, symbol]) =>
        symbol.name.includes("__script"),
      );
      assert.ok(script, "group-B script symbol");
      const [scriptId, scriptSymbol] = script!;
      // Referenced from the group-B $setup body AND the group-A construct.
      assert.equal(scriptSymbol.refCount, 2);
      const construct = entry.statements.find((statement) =>
        statement.text.includes("_construct_effect("),
      )!;
      assert.ok(
        construct.spans!.some(([, , symId]) => symId === scriptId),
        "group-A statement spans the group-B symbol",
      );
      // $template: _template call + two _static_shells references.
      assert.equal(entry.symbols["%$template"].refCount, 3);
    });

    it("G7: conflicting kinds on a shared import throw instead of first-winning", () => {
      const file = {
        opts: { filename: "conflict.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      } as unknown as t.BabelFile;
      // Binding tuples are AST-derived since R4 (closes the local-only
      // merge residue structurally); only the KIND is recorded.
      recordPlanImport(file, "./child.marko?persisted", "internalized-child");
      recordPlanImport(file, "./child.marko?persisted", "internalized-child");
      assert.throws(
        () => recordPlanImport(file, "./child.marko?persisted", "external"),
        /recorded as both "internalized-child" and "external"/,
      );
      // The shared stage import keeps its site-19 classification after B.
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const stage = entry.requestedModules.find((event) =>
        event.specifier.includes("stage.marko"),
      )!;
      assert.equal(stage.kind, "internalized-child");
    });

    it("residue 2: a second fact write on one statement throws", () => {
      const file = {
        opts: { filename: "conflict.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      } as unknown as t.BabelFile;
      const statement = t.expressionStatement(t.identifier("x"));
      markPlanStatement(file, statement, { lazyEdges: ["./a.js"] });
      markPlanStatement(file, statement); // bare re-mark stays legal
      markPlanStatement(file, statement, {
        origin: { file: "conflict.marko", line: 1, column: 0 },
      });
      assert.throws(
        () => markPlanStatement(file, statement, { lazyEdges: ["./b.js"] }),
        /statement fact "lazyEdges" recorded twice/,
      );
    });

    it("G8: comment authority holds for export-decl vs import kinds", () => {
      const { entry } = publishedPlan(compileEntry());
      const walks = entry.statements.find(
        (statement) =>
          statement.kind === "export-decl" && statement.text.includes("$walks"),
      )!;
      // Spliced kind: the walks annotation lives in text, buckets empty.
      assert.match(walks.text, /\/\* get,/);
      assert.deepEqual(walks.comments, {
        leading: [],
        internal: [],
        trailing: [],
      });
      const doubleCarry = structuredClone(entry);
      doubleCarry.statements
        .find(
          (statement) =>
            statement.kind === "export-decl" &&
            statement.text.includes("$walks"),
        )!
        .comments!.internal.push("/* get, */");
      assert.throws(
        () => validatePreliminaryPlan(doubleCarry),
        (err: unknown) =>
          err instanceof SchemaViolation && /comments/.test(err.path),
      );
      // Regenerated kind: the completed child import owns (empty) buckets.
      const childImport = entry.statements.find(
        (statement) =>
          statement.kind === "import" &&
          statement.text.includes("counter-child"),
      )!;
      assert.deepEqual(childImport.comments, {
        leading: [],
        internal: [],
        trailing: [],
      });
    });

    it("G9: group-B records carry final-body ordinals on early statements", () => {
      const { entry } = publishedPlan(compileEntry());
      // The compat relocation shifts the whole dom-assembly prologue.
      assert.equal(entry.statements[0].kind, "import");
      const template = entry.exports.find(
        (record) => record.exported === "$template",
      )!;
      const walks = entry.exports.find(
        (record) => record.exported === "$walks",
      )!;
      assert.equal(template.ordinal, 1);
      assert.equal(walks.ordinal, 2);
      for (const record of entry.exports) {
        const statement = entry.statements[record.ordinal];
        assert.ok(statement, "export ordinal in range");
        assert.ok(
          statement.kind === "export-decl" ||
            statement.kind === "export-default" ||
            statement.kind === "export-locals",
          `${record.exported} points at ${statement.kind}`,
        );
      }
      for (const [symId, symbol] of Object.entries(entry.symbols)) {
        const declStatement = entry.statements[symbol.declOrdinal];
        assert.ok(
          declStatement.text.includes(symbol.name),
          `${symId} declOrdinal points at its declaration`,
        );
      }
    });

    it("G10: the register flip produces no record — only site 22's consequence", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      // The flip's only legitimate trace is the registration text pair
      // (gated in G5); records stay statement/request/export/loader/shell.
      const varResume = entry.statements.filter((statement) =>
        statement.text.includes("_var_resume("),
      );
      assert.ok(varResume.length >= 2, "registered value signals");
      for (const statement of varResume) {
        assert.ok(statement.comments, "swept as a completed statement");
      }
      assert.ok(
        entry.loaders.every((loader) =>
          entry.statements[loader.ordinal].text.includes(loader.registryFn),
        ),
        "loaders only where registry calls exist",
      );
    });
  });

  describe("group C native records", () => {
    /** Independent projection: every completed import statement TEXT must
     * agree with its request event and derived binding symbols. */
    const assertImportSurface = (entry: PreliminaryPlan) => {
      for (const statement of entry.statements) {
        if (!statement.comments || statement.kind !== "import") continue;
        const parsed = parse(statement.text, { sourceType: "module" }).program
          .body[0] as t.ImportDeclaration;
        const events = entry.requestedModules.filter(
          (event) =>
            event.ordinal === statement.ordinal &&
            event.form !== "dynamic-import",
        );
        assert.equal(events.length, 1, statement.text);
        const [event] = events;
        assert.equal(event.specifier, parsed.source.value);
        assert.equal(event.bare, !parsed.specifiers.length);
        const expected = parsed.specifiers
          .map((specifier) => [
            specifier.local.name,
            specifier.type === "ImportSpecifier"
              ? specifier.imported.type === "Identifier"
                ? specifier.imported.name
                : specifier.imported.value
              : specifier.type === "ImportDefaultSpecifier"
                ? "default"
                : "*",
          ])
          .sort();
        const actual = Object.values(entry.symbols)
          .filter(
            (symbol) =>
              symbol.kind === "import" &&
              symbol.declOrdinal === statement.ordinal,
          )
          .map((symbol) => [symbol.name, symbol.import!.imported])
          .sort();
        assert.deepEqual(actual, expected, statement.text);
      }
    };

    /** Every demand/scheduled loader target that is a compiler-issued setup
     * virtual must have its sibling mini-plan in the carrier. */
    const assertVirtualCoverage = (plan: PreliminaryUpdatePlans) => {
      for (const loader of plan.entry.loaders) {
        if (
          loader.targetKind === "setup-virtual-demand" ||
          loader.targetKind === "scheduled-load-ready"
        ) {
          for (const target of loader.targets) {
            assert.ok(
              plan.virtuals[target],
              `missing virtual mini-plan for ${target}`,
            );
          }
        }
      }
    };

    it("C1: runtime requests record the actual per-mode raw specifier", () => {
      const debug = publishedPlan(compileFixture("merges.marko")).entry;
      const debugSpecs = debug.requestedModules
        .filter((event) => event.kind === "external")
        .map((event) => event.specifier);
      assert.ok(debugSpecs.includes("@marko/runtime-tags/debug/dom"));
      assert.ok(debugSpecs.includes("@marko/runtime-tags/debug/dom-persisted"));

      const optimized = publishedPlan(
        compileFixture("merges.marko", { optimize: true }),
      ).entry;
      const optimizedSpecs = optimized.requestedModules
        .filter((event) => event.kind === "external")
        .map((event) => event.specifier);
      assert.ok(optimizedSpecs.includes("@marko/runtime-tags/dom"));
      assert.ok(optimizedSpecs.includes("@marko/runtime-tags/dom-persisted"));
      assert.ok(
        optimizedSpecs.every((specifier) => !specifier.includes("/debug/")),
      );
      validatePreliminaryPlan(optimized);
      // Determinism holds per mode.
      assert.equal(
        JSON.stringify(
          publishedPlan(compileFixture("merges.marko", { optimize: true })),
        ),
        JSON.stringify(
          publishedPlan(compileFixture("merges.marko", { optimize: true })),
        ),
      );
      // Red: a canonicalized/wrong-mode specifier no longer matches the
      // statement text's literal (span decode, untouched validator).
      const wrongMode = structuredClone(optimized);
      const runtimeEvent = wrongMode.requestedModules.find(
        (event) => event.specifier === "@marko/runtime-tags/dom",
      )!;
      runtimeEvent.specifier = "@marko/runtime-tags/debug/dom";
      assert.throws(
        () => validatePreliminaryPlan(wrongMode),
        (err: unknown) =>
          err instanceof SchemaViolation && /span/.test(err.path),
      );
    });

    it("C2: the colocated style request is a bare side-effect import", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      const style = entry.requestedModules.find((event) =>
        event.specifier.endsWith(".style.css"),
      )!;
      assert.equal(style.kind, "external");
      assert.equal(style.bare, true);
      assert.ok(
        !Object.values(entry.symbols).some(
          (symbol) =>
            symbol.kind === "import" &&
            symbol.import!.specifier === style.specifier,
        ),
        "no binding for a bare import",
      );
      assertImportSurface(entry);
      // Red: an invented binding symbol fails the text projection.
      const invented = structuredClone(entry);
      invented.symbols["%$ghost_style"] = {
        name: "$ghost_style",
        kind: "import",
        declKind: "module",
        refCount: 0,
        declOrdinal: style.ordinal,
        import: {
          specifier: style.specifier,
          imported: "default",
          attributes: [],
        },
      };
      assert.throws(() => assertImportSurface(invented));
    });

    it("C3: the module-state rewrite records its kind and link", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      const moduleState = entry.requestedModules.find(
        (event) => event.kind === "module-state",
      )!;
      assert.match(moduleState.specifier, /^\.\/merges\.marko$/);
      assert.deepEqual(entry.moduleStateLinks, [
        {
          specifier: moduleState.specifier,
          ordinal: moduleState.ordinal,
          imported: ["themeColor"],
        },
      ]);
      // Reds: misclassification breaks the 1:1 link tie in the untouched
      // validator, in both directions.
      const flipped = structuredClone(entry);
      flipped.requestedModules.find(
        (event) => event.kind === "module-state",
      )!.kind = "external";
      assert.throws(
        () => validatePreliminaryPlan(flipped),
        (err: unknown) =>
          err instanceof SchemaViolation && /moduleStateLinks/.test(err.path),
      );
      const linkless = structuredClone(entry);
      linkless.moduleStateLinks = [];
      assert.throws(
        () => validatePreliminaryPlan(linkless),
        (err: unknown) =>
          err instanceof SchemaViolation && /moduleStateLinks/.test(err.path),
      );
    });

    it("C4: the companion export stays in the plain module, never the entry", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      assert.ok(
        !entry.exports.some((record) => record.exported === "themeColor"),
        "entry does not fold the companion export",
      );
      assert.ok(
        !entry.statements.some((statement) =>
          /export \{ themeColor/.test(statement.text),
        ),
      );
      // The PLAIN module carries it; plain-module plans are outside B1's
      // publication (entry-gated), so the gate is entry non-containment.
      const plain = compileFixture("merges.marko", { entry: undefined });
      assert.equal(plain.meta.updatePlan, undefined);
      assert.match(plain.code, /export \{ themeColor \}/);
    });

    it("C5: the ?persisted rewriter cannot invent a second kind on the shared import", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const stageEvents = entry.requestedModules.filter((event) =>
        event.specifier.includes("stage.marko"),
      );
      assert.equal(stageEvents.length, 1, "one event on the shared statement");
      assert.equal(stageEvents[0].kind, "internalized-child");
      // The would-be conflict is caught by the record store, not first-won.
      const file = {
        opts: { filename: "conflict.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      } as unknown as t.BabelFile;
      recordPlanImport(file, "./shared.marko?persisted", "internalized-child");
      recordPlanImport(file, "./shared.marko?persisted", "internalized-child");
      assert.throws(
        () =>
          recordPlanImport(file, "./shared.marko?persisted", "eager-candidate"),
        /recorded as both/,
      );
    });

    it("C6: eager candidates are bare imports with 1:1 links", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const eager = entry.requestedModules.find(
        (event) => event.kind === "eager-candidate",
      )!;
      assert.equal(eager.bare, true);
      assert.match(eager.specifier, /widget\.marko\?persisted$/);
      assert.deepEqual(entry.eagerCandidates, [
        { specifier: eager.specifier, ordinal: eager.ordinal },
      ]);
      const linkless = structuredClone(entry);
      linkless.eagerCandidates = [];
      assert.throws(
        () => validatePreliminaryPlan(linkless),
        (err: unknown) =>
          err instanceof SchemaViolation && /eagerCandidates/.test(err.path),
      );
      const phantom = structuredClone(entry);
      phantom.eagerCandidates.push({ specifier: "./ghost.marko", ordinal: 0 });
      assert.throws(
        () => validatePreliminaryPlan(phantom),
        (err: unknown) =>
          err instanceof SchemaViolation && /eagerCandidates/.test(err.path),
      );
      const unbared = structuredClone(entry);
      unbared.requestedModules.find(
        (event) => event.kind === "eager-candidate",
      )!.bare = false;
      assert.throws(() => validatePreliminaryPlan(unbared), SchemaViolation);
    });

    it("C7: the setup virtual owns its load-edge-child in a sibling mini-plan", () => {
      const plan = publishedPlan(compileFixture("loaders.marko"));
      assertVirtualCoverage(plan);
      const demand = plan.entry.loaders.find(
        (loader) => loader.targetKind === "setup-virtual-demand",
      )!;
      const virtual = plan.virtuals[demand.targets[0]];
      assert.ok(virtual, "sibling mini-plan");
      assert.equal(virtual.importer, demand.targets[0]);
      const loadEdge = virtual.requestedModules.find(
        (event) => event.kind === "load-edge-child",
      )!;
      assert.equal(loadEdge.bare, true);
      assert.match(loadEdge.specifier, /panel\.marko\?persisted$/);
      // The parent NEVER synthesizes the child's bare import into itself.
      assert.ok(
        !plan.entry.requestedModules.some(
          (event) =>
            event.form === "import" &&
            event.specifier.endsWith("panel.marko?persisted"),
        ),
        "no synthesized parent request",
      );
      // Set-level demand coverage over the published set.
      assertLoadEdgeDemandCoverage([
        plan.entry,
        ...Object.values(plan.virtuals),
      ]);
      // Red 1: stripping the parent demand loaders orphans the load edge.
      const uncovered = structuredClone(plan);
      for (const loader of uncovered.entry.loaders) loader.targets = [];
      assert.throws(
        () =>
          assertLoadEdgeDemandCoverage([
            uncovered.entry,
            ...Object.values(uncovered.virtuals),
          ]),
        (err: unknown) =>
          err instanceof SchemaViolation &&
          /load edge with no demand chain/.test(err.message),
      );
      // Red 2: omitting the virtual plan breaks carrier coverage.
      const missing = structuredClone(plan);
      delete missing.virtuals[demand.targets[0]];
      assert.throws(() => assertVirtualCoverage(missing));
      // Red 3: dropping the load-edge-child event breaks the virtual's own
      // statement/request 1:1 (per-plan, untouched validator).
      const eventless = structuredClone(plan);
      eventless.virtuals[demand.targets[0]].requestedModules =
        eventless.virtuals[demand.targets[0]].requestedModules.filter(
          (event) => event.kind !== "load-edge-child",
        );
      assert.throws(
        () => validatePreliminaryPlan(eventless.virtuals[demand.targets[0]]),
        (err: unknown) =>
          err instanceof SchemaViolation && /request event/.test(err.message),
      );
    });

    it("C8: the template loader keeps its plain specifier and table row", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const templateLoader = entry.loaders.find(
        (loader) => loader.targetKind === "template-loader",
      )!;
      assert.equal(templateLoader.registryFn, "_load_template");
      assert.match(templateLoader.rendererId, /panel\.marko$/);
      assert.match(templateLoader.targets[0], /panel\.marko$/);
      assert.ok(!templateLoader.targets[0].includes("?persisted"));
      assert.equal(templateLoader.readyId, undefined);
      assert.equal(templateLoader.readyChain, undefined);
      const conflated = structuredClone(entry);
      conflated.loaders.find(
        (loader) => loader.targetKind === "template-loader",
      )!.targetKind = "setup-virtual-demand";
      assert.throws(
        () => validatePreliminaryPlan(conflated),
        (err: unknown) =>
          err instanceof SchemaViolation && /registryFn/.test(err.path),
      );
      const dropped = structuredClone(entry);
      dropped.loaders = dropped.loaders.filter(
        (loader) => loader.targetKind !== "template-loader",
      );
      assert.throws(() => assertLoaderCoverage(dropped));
    });

    it("C9: the entry:'load' facade is a separate module, never folded in", () => {
      const facade = compileFixture("loaders.marko", { entry: "load" });
      assert.equal(facade.meta.updatePlan, undefined);
      assert.match(facade.code, /Promise\.all/);
      assert.match(facade.code, /\?persisted/);
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      assert.ok(
        !entry.statements.some((statement) =>
          statement.text.includes("Promise.all"),
        ),
        "facade wiring never appears in the persisted entry",
      );
    });

    it("C10: the relocated compat request carries its final ordinal", () => {
      const { entry } = publishedPlan(compileEntry());
      const compat = entry.requestedModules.find((event) =>
        event.specifier.includes("tags-compat"),
      )!;
      assert.equal(compat.ordinal, 0);
      assert.equal(compat.kind, "external");
      assert.equal(compat.bare, true);
      assert.ok(entry.statements[0].comments, "compat statement completed");
      assert.equal(
        JSON.parse(
          entry.statements[0].text.slice(compat.span.start, compat.span.end),
        ),
        compat.specifier,
      );
    });
  });

  describe("group D + finalizer completion", () => {
    it("D13: claimable equals the emitted _static_shells ids", () => {
      for (const fixture of ["loaders.marko", "frames.marko"] as const) {
        const { entry } = publishedPlan(compileFixture(fixture));
        assert.deepEqual(
          entry.shellPossession.claimable,
          emittedShells(entry).map((shell) => shell.shellId),
          fixture,
        );
      }
      const frameRoot = publishedPlan(compileFixture("frame-root.marko")).entry;
      assert.deepEqual(frameRoot.shellPossession.claimable, []);
      // Reds: a phantom claimable id rejects in the untouched validator; a
      // dropped id diverges from the emitted registration text.
      const { entry } = publishedPlan(compileFixture("frames.marko"));
      const phantom = structuredClone(entry);
      phantom.shellPossession.claimable.push("ghost-shell");
      assert.throws(
        () => validatePreliminaryPlan(phantom),
        (err: unknown) =>
          err instanceof SchemaViolation && /claimable/.test(err.path),
      );
      const dropped = structuredClone(entry);
      dropped.shellPossession.claimable.pop();
      assert.throws(() =>
        assert.deepEqual(
          dropped.shellPossession.claimable,
          emittedShells(dropped).map((shell) => shell.shellId),
        ),
      );
    });

    it("D14: deferred is demand-class rendererIds only — scheduled excluded on the shared target", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const scheduled = entry.loaders.find(
        (loader) => loader.targetKind === "scheduled-load-ready",
      )!;
      const demand = entry.loaders.filter(
        (loader) => loader.targetKind !== "scheduled-load-ready",
      );
      assert.deepEqual(
        [...entry.shellPossession.deferred].sort(),
        [...new Set(demand.map((loader) => loader.rendererId))].sort(),
      );
      assert.ok(
        !entry.shellPossession.deferred.includes(scheduled.rendererId),
        "scheduled rendererId never deferred",
      );
      // The exclusion holds even though scheduled and demand loaders share
      // the SAME virtual target id.
      const sharedTarget = entry.loaders.find(
        (loader) => loader.targetKind === "setup-virtual-demand",
      )!;
      assert.equal(scheduled.targets[0], sharedTarget.targets[0]);
      // Reds: scheduled rendererId or readyId in deferred → named reject.
      for (const bogus of [scheduled.rendererId, scheduled.readyId!]) {
        const mutated = structuredClone(entry);
        mutated.shellPossession.deferred.push(bogus);
        assert.throws(
          () => validatePreliminaryPlan(mutated),
          (err: unknown) =>
            err instanceof SchemaViolation && /deferred/.test(err.path),
          bogus,
        );
      }
    });

    it("D16: fingerprintFields are the real compile inputs", () => {
      const plan = publishedPlan(compileFixture("loaders.marko"));
      const fields = plan.entry.fingerprintFields;
      assert.equal(fields.optimize, false);
      assert.equal(fields.markoDebug, true);
      assert.equal(fields.modules, "esm");
      assert.equal(fields.output, "dom");
      assert.equal(fields.persisted, true);
      assert.equal(fields.entry, "persisted");
      assert.match(fields.babelConfigHash as string, /^[0-9a-f]{16}$/);
      assert.match(fields.compiler as string, /^@marko\/compiler@\d/);
      assert.match(fields.translator as string, /^@marko\/runtime-tags@\d/);
      assert.match(fields.producer as string, /preliminary-plan@1\.1/);
      // Virtual mini-plans carry the SAME compile fingerprint.
      for (const virtual of Object.values(plan.virtuals)) {
        assert.deepEqual(virtual.fingerprintFields, fields);
      }
      // A changed compile input changes the fingerprint.
      const optimized = publishedPlan(
        compileFixture("merges.marko", { optimize: true }),
      ).entry.fingerprintFields;
      const debug = publishedPlan(compileFixture("merges.marko")).entry
        .fingerprintFields;
      assert.equal(optimized.optimize, true);
      assert.notDeepEqual(optimized, debug);
      // Reds: a missing required field / an injected resolver key reject.
      const missing = structuredClone(plan.entry) as PreliminaryPlan & {
        fingerprintFields: Record<string, unknown>;
      };
      delete missing.fingerprintFields.babelConfigHash;
      assert.throws(
        () => validatePreliminaryPlan(missing),
        (err: unknown) =>
          err instanceof SchemaViolation && /babelConfigHash/.test(err.message),
      );
      const withResolver = structuredClone(plan.entry);
      withResolver.fingerprintFields.resolver = "vite";
      assert.throws(
        () => validatePreliminaryPlan(withResolver),
        (err: unknown) =>
          err instanceof SchemaViolation && /resolver/.test(err.path),
      );
    });

    it("D17: a stripped origin rejects under full validation", () => {
      const { entry } = publishedPlan(compileFixture("merges.marko"));
      const mutated = structuredClone(entry) as unknown as {
        statements: { origin?: unknown }[];
      };
      delete mutated.statements[0].origin;
      assert.throws(
        () => validatePreliminaryPlan(mutated),
        (err: unknown) =>
          err instanceof SchemaViolation && /origin/.test(err.path),
      );
    });

    it("D18: user-authored imports complete — and their absence is loud", () => {
      const { entry } = publishedPlan(compileFixture("loaders.marko"));
      const userImport = entry.statements.find((statement) =>
        statement.text.includes('from "./tags/widget.marko"'),
      )!;
      const event = entry.requestedModules.find(
        (candidate) =>
          candidate.ordinal === userImport.ordinal &&
          candidate.form === "import",
      )!;
      assert.equal(event.kind, "external");
      assert.equal(event.plainTemplate, true);
      const widget = entry.symbols["%Widget"];
      assert.ok(widget, "user import binding symbol");
      assert.equal(widget.declOrdinal, userImport.ordinal);
      // Red: dropping the user import's request event breaks the untouched
      // validator's statement/request 1:1.
      const mutated = structuredClone(entry);
      mutated.requestedModules = mutated.requestedModules.filter(
        (candidate) => candidate.ordinal !== userImport.ordinal,
      );
      assert.throws(
        () => validatePreliminaryPlan(mutated),
        (err: unknown) =>
          err instanceof SchemaViolation &&
          /static request event/.test(err.message),
      );
    });

    it("D20: the three contribution families red at their central-gate consequences", () => {
      const result = compileFixture("merges.marko");
      const { entry } = publishedPlan(result);
      // a. addUpdateMerge: a dropped merge dispatch fails the oracle.
      const droppedMerge = structuredClone(entry);
      const patchStatement = droppedMerge.statements.find((statement) =>
        statement.text.includes("_update_if("),
      )!;
      patchStatement.text = mutatedText(
        patchStatement.text,
        /\n\s*if \("ConditionalRenderer[^\n]*_update_if\([^\n]*/,
        "",
      );
      assert.throws(() => assertPayloadOracle(droppedMerge, result.code));
      // b. addConstructFragment: a dropped construct fragment fails the
      // oracle.
      const droppedFragment = structuredClone(entry);
      const constructStatement = droppedFragment.statements.find((statement) =>
        statement.text.includes("_construct_effect("),
      )!;
      constructStatement.text = mutatedText(
        constructStatement.text,
        /\n\s*_construct_effect\([^\n]*/,
        "",
      );
      assert.throws(() => assertPayloadOracle(droppedFragment, result.code));
      // c. addUpdateGlobalsStatement: a dropped globals dispatch fails the
      // canonical reprint.
      const droppedGlobals = structuredClone(entry);
      const globalsStatement = droppedGlobals.statements.find((statement) =>
        statement.text.includes("$globals_update($live);"),
      )!;
      globalsStatement.text = mutatedText(
        globalsStatement.text,
        /\n\s*\$globals_update\(\$live\);/,
        "",
      );
      assert.notEqual(
        canonicalPrint(planText(droppedGlobals)),
        canonicalPrint(result.code),
      );
    });

    it("D4/D6/D9/D10: merge-shape gates (demotion pair, dual if, order, loop suppression)", () => {
      const result = compileFixture("merges.marko");
      const { entry } = publishedPlan(result);
      const text = planText(entry);
      // D4: the demotion pair coexists — live `_update_if` vs demoted
      // `_update_region`; dropping the region call fails the oracle.
      assert.match(text, /_update_if\(/);
      assert.match(text, /_update_region\(/);
      const droppedRegion = structuredClone(entry);
      const regionStatement = droppedRegion.statements.find((statement) =>
        statement.text.includes("_update_region("),
      )!;
      regionStatement.text = mutatedText(
        regionStatement.text,
        /\n\s*if \("ConditionalRenderer[^\n]*_update_region\([^\n]*/,
        "",
      );
      assert.throws(() => assertPayloadOracle(droppedRegion, result.code));
      // D6: state-selection vs construct-only stay distinct; swapping the
      // patch-time callee fails the oracle.
      assert.match(text, /_update_if_state\(/);
      // The construct pass rebuilds the structural if against the scope
      // (patch/live both $scope) — distinct from the patch-time dispatch.
      assert.match(text, /_update_if\(\$scope, \$scope/);
      const swapped = structuredClone(entry);
      const stateStatement = swapped.statements.find((statement) =>
        statement.text.includes("_update_if_state("),
      )!;
      stateStatement.text = mutatedText(
        stateStatement.text,
        "_update_if_state(",
        "_update_if(",
      );
      assert.throws(() => assertPayloadOracle(swapped, result.code));
      // D9: holes key order is payload order — swapping two handler
      // entries fails the ordered oracle.
      const reordered = structuredClone(entry);
      const holesStatement = reordered.statements.find(
        (statement) =>
          statement.text.includes("_update_scopes({") &&
          [...statement.text.matchAll(/"Patch[^"]+":/g)].length >= 2,
      )!;
      assert.ok(holesStatement, "a multi-entry holes object");
      const properties = [
        ...holesStatement.text.matchAll(/"Patch[^"]+": [^\n]+?(,?)\n/g),
      ];
      const [first, second] = properties;
      holesStatement.text = holesStatement.text
        .replace(first[0], "\0")
        .replace(second[0], first[0].replace(/,?\n$/, second[1] + "\n"))
        .replace("\0", second[0].replace(/,?\n$/, first[1] + "\n"));
      assert.throws(() => assertPayloadOracle(reordered, result.code));
      // D10: the request-derived loop signal is SUPPRESSED (zero) while its
      // merge dispatches; a live loop signal inserted into the plan fails
      // the oracle.
      assert.match(text, /const \$for\d* = 0;/);
      const inserted = structuredClone(entry);
      inserted.statements[inserted.statements.length - 1].text +=
        '\n_for_of("ghost-loop");';
      assert.throws(() => assertPayloadOracle(inserted, result.code));
    });

    it("D1: facts recorded on non-body nodes never publish", () => {
      const file = {
        opts: { filename: "orphan.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      } as unknown as t.BabelFile;
      const orphan = t.expressionStatement(t.identifier("orphan"));
      markPlanStatement(file, orphan, {
        loader: {
          targetKind: "escaped-direct",
          registryFn: "_update_loader",
          rendererId: "ghost",
          targets: [],
        },
        lazyEdges: [],
      });
      publishUpdatePlan({
        node: t.program([t.expressionStatement(t.identifier("kept"))]),
        hub: { file },
      } as unknown as t.NodePath<t.Program>);
      const { entry } = file.metadata.marko.updatePlan!;
      assert.deepEqual(entry.loaders, []);
      assert.equal(entry.statements.length, 1);
    });

    it("assertVirtualSource: the served virtual source re-parses to the mini-plan", () => {
      const result = compileFixture("loaders.marko");
      const plan = publishedPlan(result);
      assert.ok(Object.keys(plan.virtuals).length, "virtuals published");
      assertVirtualSource(plan, result.virtualSources);
      // Red: a drifted mini-plan statement no longer matches the served
      // source.
      const drifted = structuredClone(plan);
      const virtual = Object.values(drifted.virtuals)[0];
      virtual.statements[2].text = mutatedText(
        virtual.statements[2].text,
        "export const _ = [",
        "export const _ = [0, ",
      );
      assert.throws(() => assertVirtualSource(drifted, result.virtualSources));
    });
  });

  describe("plan-only mode (host-tagged)", () => {
    const PLAN_ONLY = compiler.withPlanOnlyPersistedEntry(
      {},
    ) as Partial<compiler.Config>;
    const ALL_FIXTURES = [
      "template.marko",
      "merges.marko",
      "loaders.marko",
      "frames.marko",
      "frame-root.marko",
      "signals.marko",
    ] as const;

    it("P2/P9: plan JSON is byte-identical print-ON vs plan-only, deterministic under skip", () => {
      for (const fixture of ALL_FIXTURES) {
        const on = compileFixture(fixture);
        const skip = compileFixture(fixture, PLAN_ONLY);
        assert.ok(on.code, fixture);
        assert.equal(skip.code, null, fixture);
        const skipJson = JSON.stringify(publishedPlan(skip));
        assert.equal(skipJson, JSON.stringify(publishedPlan(on)), fixture);
        assert.equal(
          JSON.stringify(publishedPlan(compileFixture(fixture, PLAN_ONLY))),
          skipJson,
          `${fixture} determinism`,
        );
      }
      // D16 extension: fingerprint fields identical field-for-field ON/OFF.
      assert.deepEqual(
        publishedPlan(compileFixture("merges.marko", PLAN_ONLY)).entry
          .fingerprintFields,
        publishedPlan(compileFixture("merges.marko")).entry.fingerprintFields,
      );
    });

    it("P3/P11: the plan-only plan reprints to the printed module, virtual sources included", () => {
      for (const fixture of [
        "template.marko",
        "merges.marko",
        "loaders.marko",
      ] as const) {
        const on = compileFixture(fixture);
        const skip = compileFixture(fixture, PLAN_ONLY);
        assert.equal(
          canonicalPrint(planText(publishedPlan(skip).entry)),
          canonicalPrint(on.code),
          fixture,
        );
      }
      const onLoaders = compileFixture("loaders.marko");
      assertVirtualSource(publishedPlan(onLoaders), onLoaders.virtualSources);
      const skipLoaders = compileFixture("loaders.marko", PLAN_ONLY);
      assertVirtualSource(
        publishedPlan(skipLoaders),
        skipLoaders.virtualSources,
      );
    });

    it("P7/P10/P12: plan-only still runs the translator; the plan validates whole with zero fills", () => {
      const skip = compileFixture("loaders.marko", PLAN_ONLY);
      assert.equal(skip.code, null);
      // metadata round-trips through the compile result without code.
      const plan = publishedPlan(skip);
      assert.ok(plan.entry.statements.length > 0);
      assert.equal(plan.entry.schemaVersion, "preliminary-plan@1.1");
      const plans = [plan.entry, ...Object.values(plan.virtuals)];
      for (const published of plans) validatePreliminaryPlan(published);
      assertLoadEdgeDemandCoverage(plans);
    });

    it("P4: the needsCompat relocation still precedes plan-only publication", () => {
      const { entry } = publishedPlan(
        compileFixture("template.marko", PLAN_ONLY),
      );
      assert.equal(entry.statements[0].kind, "import");
      assert.match(entry.statements[0].text, /tags-compat/);
      assert.equal(entry.statements[0].ordinal, 0);
    });

    it("P5: the version-comment option never reaches plan scope", () => {
      assert.equal(
        JSON.stringify(
          publishedPlan(
            compileFixture("merges.marko", { writeVersionComment: true }),
          ),
        ),
        JSON.stringify(publishedPlan(compileFixture("merges.marko"))),
      );
    });

    it("fail-closed: plan-only refuses suppressed publication loudly, never silent no-output", () => {
      assert.throws(
        () => compileFixture("merges.marko", { ...PLAN_ONLY, modules: "cjs" }),
        /plan-only.*suppressed here \(non-esm-modules\)/s,
      );
      const mutator = () => ({
        name: "test-body-mutator",
        visitor: {},
      });
      assert.throws(
        () =>
          compileFixture("merges.marko", {
            ...PLAN_ONLY,
            babelConfig: {
              babelrc: false,
              configFile: false,
              browserslistConfigFile: false,
              plugins: [mutator],
            },
          } as Partial<compiler.Config>),
        /plan-only.*suppressed here \(post-translator-babel-plugins\)/s,
      );
      // Outside persisted entries the option is inert: print still happens
      // and no plan publishes.
      const plain = compileFixture("merges.marko", {
        ...PLAN_ONLY,
        entry: undefined,
      });
      assert.ok(plain.code);
      assert.equal(plain.meta.updatePlan, undefined);
    });

    it("fail-closed: plan-only refuses every non-publishable output/entry configuration", () => {
      // A persisted entry that is not a DOM entry build can never publish:
      // plan-only must refuse loudly, never compile to silent no-output.
      for (const output of ["html", "hydrate", "source"] as const) {
        assert.throws(
          () => compileFixture("merges.marko", { ...PLAN_ONLY, output }),
          /plan-only[^\n]*persisted DOM entry/,
          `output: ${output}`,
        );
      }
      // Default output (html) via the same path.
      assert.throws(
        () =>
          compileFixture("merges.marko", {
            ...PLAN_ONLY,
            output: undefined,
          } as Partial<compiler.Config>),
        /plan-only[^\n]*persisted DOM entry/,
        "default output",
      );
      // The DOM entry happy path is unchanged.
      const skip = compileFixture("merges.marko", PLAN_ONLY);
      assert.equal(skip.code, null);
      assert.ok(skip.meta.updatePlan);
      // And the PUBLISH side of the shared predicate: a print-mode html
      // compile of a persisted entry never publishes (drift pin — an
      // entry-only gate on either side fails here or above).
      const htmlPrint = compileFixture("merges.marko", { output: "html" });
      assert.ok(htmlPrint.code);
      assert.equal(htmlPrint.meta.updatePlan, undefined);
    });

    it("P8/F7: the inherited suite cannot activate plan-only mode", () => {
      assert.throws(
        () =>
          assertPrintOnInheritance(
            compiler.withPlanOnlyPersistedEntry({}) as compiler.Config,
          ),
        /PRINT_SKIP_IN_INHERITANCE/,
      );
      assertPrintOnInheritance({} as compiler.Config);
    });

    it("user statics rewrite to module-state — no user export-locals reaches the entry", () => {
      const result = compileFixture("statics.marko");
      const { entry } = publishedPlan(result);
      validatePreliminaryPlan(entry);
      // `static export const b` and `static const a` become module-state
      // imports of the plain module; `static export { a }` never survives.
      const moduleState = entry.requestedModules.filter(
        (event) => event.kind === "module-state",
      );
      assert.deepEqual(
        moduleState.map((event) => event.specifier),
        ["./statics.marko", "./statics.marko"],
      );
      assert.deepEqual(
        moduleState.map((event) => event.firstOccurrence),
        [true, false],
      );
      assert.deepEqual(
        entry.moduleStateLinks.map((link) => link.imported),
        [["a"], ["b"]],
      );
      // Every export-locals statement is the compiler's protocol tail.
      for (const statement of entry.statements) {
        if (statement.kind === "export-locals") {
          assert.match(
            statement.text,
            /\$merge|\$patch|_echo_snapshot/,
            statement.text,
          );
        }
      }
      assert.ok(
        !entry.statements.some((statement) =>
          /export \{ (a|b) \}/.test(statement.text),
        ),
        "no user export-locals statement",
      );
    });

    it("origin keeps a real node.loc — never collapsed to the sentinel", () => {
      const file = {
        opts: { filename: "synthetic.marko" },
        markoOpts: { modules: "esm" },
        metadata: { marko: {} as compiler.MarkoMeta },
      };
      const located = t.expressionStatement(t.identifier("located"));
      located.loc = {
        start: { line: 7, column: 3, index: 0 },
        end: { line: 7, column: 12, index: 9 },
      } as t.SourceLocation;
      publishUpdatePlan({
        node: t.program([located]),
        hub: { file },
      } as unknown as t.NodePath<t.Program>);
      const [published] = file.metadata.marko.updatePlan!.entry.statements;
      assert.deepEqual(published.origin, {
        file: "synthetic.marko",
        line: 7,
        column: 3,
      });
      assert.notEqual(published.origin.line, GENERATED_STATEMENT_LINE);
    });
  });

  describe("R4b: input-property update signals register (dispatch-time)", () => {
    // Evaluates the emitted persisted entry in-process: runtime specifiers
    // rewritten to the src entries (same module instances as the test).
    const evaluateEntry = async (code: string, name: string) => {
      const srcUrl = (entry: string) =>
        JSON.stringify(
          pathToFileURL(path.join(import.meta.dirname, "..", entry)).href,
        );
      const evaluable = code
        .replaceAll('"@marko/runtime-tags/debug/dom"', srcUrl("dom.ts"))
        .replaceAll(
          '"@marko/runtime-tags/debug/dom-persisted"',
          srcUrl("dom-persisted.ts"),
        );
      const dir = path.join(import.meta.dirname, "update-plan", "dist");
      fs.mkdirSync(dir, { recursive: true });
      const file = path.join(dir, `${name}.mjs`);
      fs.writeFileSync(file, evaluable);
      return import(pathToFileURL(file).href);
    };
    const dispatch = async (code: string, name: string, updateName: string) => {
      const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
      (globalThis as { document?: unknown }).document = jsdom.window.document;
      const mod = (await evaluateEntry(code, name)) as Record<
        string,
        (patch: unknown, live: unknown) => void
      >;
      const { beginApply, endApply } =
        (await import("../dom/update-merges")) as unknown as {
          beginApply(pairs: Map<unknown, unknown>): number;
          endApply(): void;
        };
      const live: { input_step?: number } = {};
      beginApply(new Map());
      try {
        mod[updateName]({ input_step: 5 }, live);
      } finally {
        endApply();
        delete (globalThis as { document?: unknown }).document;
      }
      return live;
    };
    const rootUpdateName = (entry: PreliminaryPlan) =>
      entry.exports.find(
        (record) =>
          record.target.kind === "local" &&
          entry.symbols[record.target.symId]?.name.includes("merge"),
      )!.exported;

    it("applies a patch carrying an effect-only input alias; the unregistered foil throws", async () => {
      const result = compileFixture("signals.marko");
      const { entry } = publishedPlan(result);
      assert.match(result.code, /_update_signal\("[^"]*input_step\/var"\)/);
      assert.match(result.code, /_var_resume\("[^"]*input_step\/var"/);
      // Effect-only PARAM property aliases pair too (the rejected
      // root-only reorder is the hide-path).
      assert.match(result.code, /_update_signal\("[^"]*item_id\/var"\)/);
      assert.match(result.code, /_var_resume\("[^"]*item_id\/var"/);
      const live = await dispatch(
        result.code,
        "signals-fixed",
        rootUpdateName(entry),
      );
      assert.equal(live.input_step, 5, "registered signal applied the value");

      // FOIL: the pre-R4b emission (lookup without registration) — evaluated
      // under a distinct filename so register ids cannot collide — still
      // throws at dispatch, proving the registration is load-bearing.
      const foilResult = compileFixture("signals-foil.marko");
      const foilCode = foilResult.code.replace(
        /_var_resume\("[^"]*input_step\/var", /,
        "(",
      );
      assert.notEqual(foilCode, foilResult.code, "foil strip applied");
      await assert.rejects(
        dispatch(
          foilCode,
          "signals-foil",
          rootUpdateName(publishedPlan(foilResult).entry),
        ),
        TypeError,
      );
    });
  });

  describe("fail-closed publication (translator-exit body must be final)", () => {
    // Appends a statement AFTER translator exit, like any user Babel plugin.
    const bodyMutator = () => ({
      name: "test-body-mutator",
      visitor: {
        Program: {
          exit(program: t.NodePath<t.Program>) {
            program.pushContainer(
              "body",
              t.variableDeclaration("var", [
                t.variableDeclarator(
                  t.identifier("__mutated"),
                  t.numericLiteral(1),
                ),
              ]),
            );
          },
        },
      },
    });

    it("publishes for the plain ESM pipeline (control)", () => {
      const result = compileEntry();
      assert.ok(result.meta.updatePlan);
      assert.equal(result.meta.updatePlanSuppressed, undefined);
    });

    it("suppresses publication for non-ESM modules output", () => {
      const result = compileEntry({ modules: "cjs" });
      assert.match(result.code, /require\(/);
      assert.equal(result.meta.updatePlan, undefined);
      assert.equal(result.meta.updatePlanSuppressed, "non-esm-modules");
    });

    it("suppresses publication when Babel plugins run after the translator", () => {
      const result = compileEntry({
        babelConfig: {
          babelrc: false,
          configFile: false,
          browserslistConfigFile: false,
          plugins: [bodyMutator],
        },
      } as Partial<compiler.Config>);
      assert.match(result.code, /var __mutated = 1;/);
      assert.equal(result.meta.updatePlan, undefined);
      assert.equal(
        result.meta.updatePlanSuppressed,
        "post-translator-babel-plugins",
      );
    });
  });
});
