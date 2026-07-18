import { types as t } from "@marko/compiler";
import {
  diagnosticWarn,
  getTagDefForTagName,
  importNamed,
} from "@marko/compiler/babel-utils";
import { generator } from "@marko/compiler/internal/babel";
import { createHash } from "crypto";
import path from "path";
import { inspect } from "util";

import { generateUid } from "../util/generate-uid";
import {
  type ComptimeFn,
  type ComptimeFnRecord,
  type ComptimeFnRegistry,
  type ComptimeGuard,
  type ComptimeLoader,
  type ComptimeModuleInput,
  createComptimeGuard,
  createLoader,
  evaluateComptimeModule,
  type EvaluatedComptimeModule,
  FN_REG_NAME,
} from "./evaluate";
import {
  createSerializeContext,
  type SerializeContext,
  serializeValue,
} from "./serialize";

// The comptime pass (design: comptime.md). Consumes `comptime` statements
// and `-` prefixed tags during transform; output is ordinary Marko AST.

declare module "@marko/compiler/dist/types" {
  export interface NodeExtra {
    comptimeSlot?: string;
    comptimeModuleRef?: string;
    comptimeImportRef?: number;
    comptimePlan?: number;
    comptimeRenameGroup?: number;
  }
}

declare module "@marko/compiler" {
  interface MarkoMeta {
    comptime?: { evaluated: true };
  }
}

// Fixed guards so runaway comptime code fails the build loudly.
const MAX_ITERATIONS = 100_000;
const MAX_EXPANSION_DEPTH = 100;

// User comptime code cannot mention `$ct` names, keeping evaluator internals
// (wrapper params, slots) unreachable and collision-free.
const RESERVED_PREFIX = "$ct";

function reservedMessage(name: string) {
  return `\`${name}\` is reserved: the \`${RESERVED_PREFIX}\` prefix belongs to the comptime evaluator.`;
}

/** `File#buildCodeFrameError` exists at runtime but is missing from the types. */
function buildError(
  file: t.BabelFile,
  node: t.Node,
  message: string,
  cause?: unknown,
): Error {
  const error = (
    file as unknown as {
      buildCodeFrameError(node: t.Node, message: string): Error;
    }
  ).buildCodeFrameError(node, message);
  if (cause !== undefined) (error as { cause?: unknown }).cause = cause;
  return error;
}

type RenameGroup = { group: number; name: string };

type MacroAttr =
  | { kind: "attr"; name: string; thunk: string }
  | { kind: "spread"; thunk: string };

interface AttrTagPlan {
  node: t.MarkoTag;
  name: string;
  attrs: MacroAttr[];
  contentRenameGroups: RenameGroup[];
}

type MacroTarget =
  | { kind: "slot"; slot: string }
  | { kind: "module"; name: string }
  | { kind: "file"; filename: string };

type Plan =
  | { kind: "if"; thunk: string; params: string[] }
  | {
      kind: "for";
      loop: "of" | "in" | "range";
      thunk?: string;
      rangeThunk?: string;
      inclusive?: boolean;
      destructureThunk: string;
      slotIds: string[];
      params: string[];
      /** Runtime bindings declared in the body, alpha-renamed per copy. */
      renameGroups: RenameGroup[];
    }
  | { kind: "const"; thunk: string; slotIds: string[]; params: string[] }
  | { kind: "log" | "debug"; thunk?: string; params: string[] }
  | {
      kind: "define";
      slot: string;
      attrs: MacroAttr[];
      destructureThunk: string;
      slotIds: string[];
      contentRenameGroups: RenameGroup[];
      params: string[];
    }
  | { kind: "return"; thunk: string; params: string[] }
  | {
      kind: "macro";
      name: string;
      target: MacroTarget;
      attrs: MacroAttr[];
      attributeTags: AttrTagPlan[];
      varThunk?: string;
      varSlotIds?: string[];
      contentRenameGroups: RenameGroup[];
      params: string[];
    };

interface ImportRecord {
  node: t.ImportDeclaration;
  usedAtRuntime: boolean;
  /** local name -> value (null when resolution failed). */
  values?: Record<string, unknown> | null;
}

interface ScriptletRecord {
  node: t.MarkoScriptlet;
  imports: ImportRecord[];
  statements: t.Statement[];
  bindingNames: string[];
}

/** One template file's comptime program: the compiled template itself, plus
 * one per file expanded into it (`isMacro`), evaluated once per compile. */
interface Unit {
  file: t.BabelFile;
  filename: string;
  isMacro: boolean;
  /** `input` rides the slot machinery in comptime-invoked files. */
  inputSlot?: string;
  loader: ComptimeLoader;
  scriptlets: ScriptletRecord[];
  importRecords: ImportRecord[];
  plans: Plan[];
  thunks: ComptimeModuleInput["thunks"];
  moduleBindingNames: Set<string>;
  usedModuleBindings: Set<string>;
  capturable: Set<string>;
  /** Slot ids in scope during annotation, innermost frame last. */
  frames: string[][];
  /** Tree runtime bindings, renamed per expansion of this unit. */
  treeRenameGroups: RenameGroup[];
  /** Module-level runtime bindings, renamed once per including compile. */
  moduleRenameGroups: RenameGroup[];
  moduleRenames: Map<number, string>;
  /** Module statements (imports/statics/styles) spliced once per compile. */
  moduleNodes: t.Statement[];
  treeNodes: t.Statement[];
  moduleSpliced?: boolean;
  /** Caller-side names for this unit's comptime bindings and import locals. */
  emittedNames: Map<string, string>;
  returnCount: number;
  evaluated?: EvaluatedComptimeModule;
  moduleBindings?: Record<string, unknown>;
  slotCount: number;
  thunkCount: number;
  renameGroupCount: number;
}

const kFragment = Symbol("comptime fragment");
const kSnippet = Symbol("comptime snippet");

/** A comptime content value: AST carrying its owning unit and scope. */
interface Fragment {
  [kFragment]: true;
  unit: Unit;
  body: t.Statement[];
  params: t.MarkoTagBody["params"];
  env: Env;
  renameGroups: RenameGroup[];
}

/** A `<-define>` binding: defaults plus a content fragment plus its params. */
interface Snippet {
  [kSnippet]: true;
  unit: Unit;
  attrs: Record<string, unknown>;
  content: Fragment;
  destructureThunk: string;
  slotIds: string[];
  params: string[];
}

function isFragment(value: unknown): value is Fragment {
  return typeof value === "object" && value !== null && kFragment in value;
}

function isSnippet(value: unknown): value is Snippet {
  return typeof value === "object" && value !== null && kSnippet in value;
}

interface FactoryEntry {
  record: ComptimeFnRecord;
  placeholder: string;
  refs: t.Identifier[];
}

interface PassContext {
  file: t.BabelFile;
  program: t.NodePath<t.Program>;
  callerUnit: Unit;
  units: Map<string, Unit>;
  slotsByBinding: Map<t.Identifier, string>;
  /** `<-define>` tag-variable identifiers (runtime invocation is an error). */
  snippetBindings: Set<t.Identifier>;
  exportedValues: Map<unknown, { request: string; name: string }>;
  fnRegistry: ComptimeFnRegistry;
  factories: Map<ComptimeFn, FactoryEntry>;
  guard: ComptimeGuard;
  serialize?: SerializeContext;
  /** Module statements spliced from expanded files (renamed clones). */
  moduleSplices: t.Statement[];
  returnStack: { has: boolean; value: unknown }[];
  depth: number;
  /** Most recently expanded node; anchors errors when no stack is live. */
  lastNode?: t.Node;
}

export function comptimeTransform(program: t.NodePath<t.Program>) {
  const file = program.hub.file;
  const detected = detectComptime(program.node);
  if (!detected) return;

  if (file.markoOpts.errorRecovery) {
    // Editor pipelines must never execute comptime code: lower constructs to
    // runtime analogues so bodies still analyze and type-check.
    preserveBody(program.node.body);
    return;
  }

  // stripTypes re-parents scriptlet imports with raw mutations, dropping
  // their bindings from the last crawl; classification needs them back.
  program.scope.crawl();

  const guard = createComptimeGuard();
  const ctx: PassContext = {
    file,
    program,
    callerUnit: undefined as unknown as Unit,
    units: new Map(),
    slotsByBinding: new Map(),
    snippetBindings: new Set(),
    exportedValues: new Map(),
    fnRegistry: new WeakMap(),
    factories: new Map(),
    guard,
    moduleSplices: [],
    returnStack: [],
    depth: 0,
  };

  const unit = (ctx.callerUnit = createUnit(ctx, file, false));
  ctx.serialize = createSerializeContext(
    file,
    ctx.exportedValues,
    (message: string): never => {
      throw buildError(file, currentNode(ctx), message);
    },
  );
  ctx.serialize.resolveFunction = (value) => resolveFunction(ctx, value);
  ctx.serialize.describeSpecial = (value) =>
    isFragment(value)
      ? "comptime content fragments splice structurally and cannot cross into runtime data"
      : isSnippet(value)
        ? "comptime snippets are invoked as tags (`<-Name>`) and cannot cross into runtime data"
        : undefined;

  annotate(ctx, unit);
  evaluateUnit(ctx, unit, detected);
  file.metadata.marko.comptime = { evaluated: true };

  try {
    ctx.guard.run(() => {
      program.node.body = expandBody(
        ctx,
        unit,
        program.node.body,
        new Map(),
        null,
      );
      lower(ctx);
      return undefined;
    });
  } catch (err) {
    if ((err as { comptimeBudget?: boolean })?.comptimeBudget) {
      throw buildError(file, currentNode(ctx), (err as Error).message, err);
    }
    throw err;
  }
}

// Runtime analogues let preserved comptime code analyze without evaluating:
// tags drop their `-` (`until` becomes `to`), effects vanish, scriptlets go
// static.
function preserveBody(body: t.Statement[]) {
  for (let i = body.length; i-- > 0;) {
    const node = body[i];
    if (t.isMarkoScriptlet(node)) {
      if (node.target === "comptime") node.target = null;
    } else if (t.isMarkoTag(node)) {
      if (isComptimeTagNode(node)) {
        const name = (node.name as t.StringLiteral).value;
        if (name === "-log" || name === "-debug") {
          body.splice(i, 1);
          continue;
        }
        (node.name as t.StringLiteral).value = name.slice(1);
        // The parse-time def cache still points at the comptime tag.
        (node as { tagDef?: unknown }).tagDef = undefined;
        if (name === "-for") {
          for (const attr of node.attributes) {
            if (t.isMarkoAttribute(attr) && attr.name === "until") {
              attr.name = "to";
            }
          }
        }
      }
      preserveBody(node.body.body);
      preserveBody(node.attributeTags as t.Statement[]);
    }
  }
}

// Used to anchor serialization errors at the node being expanded.
const currentNodeStack: t.Node[] = [];
function currentNode(ctx: PassContext): t.Node {
  return (
    currentNodeStack[currentNodeStack.length - 1] ||
    ctx.lastNode ||
    ctx.callerUnit.scriptlets[0]?.node ||
    ctx.program.node
  );
}

function detectComptime(program: t.Program) {
  let found: t.Node | undefined;
  t.traverseFast(program, (node) => {
    if (found) return;
    if (
      (node.type === "MarkoScriptlet" && node.target === "comptime") ||
      (node.type === "MarkoTag" && isComptimeTagNode(node))
    ) {
      found = node;
    }
  });
  return found;
}

function isComptimeTagNode(node: t.MarkoTag) {
  return t.isStringLiteral(node.name) && node.name.value[0] === "-";
}

function createUnit(ctx: PassContext, file: t.BabelFile, isMacro: boolean) {
  const unit: Unit = {
    file,
    filename: file.opts.filename as string,
    isMacro,
    loader: createLoader(file, ctx.guard, ctx.exportedValues),
    scriptlets: [],
    importRecords: [],
    plans: [],
    thunks: [],
    moduleBindingNames: new Set(),
    usedModuleBindings: new Set(),
    capturable: new Set(),
    frames: [[]],
    treeRenameGroups: [],
    moduleRenameGroups: [],
    moduleRenames: new Map(),
    moduleNodes: [],
    treeNodes: [],
    emittedNames: new Map(),
    returnCount: 0,
    slotCount: 0,
    thunkCount: 0,
    renameGroupCount: 0,
  };

  if (isMacro) {
    unit.inputSlot = allocateSlot(unit);
    unit.frames[0].push(unit.inputSlot);
    const inputParam = (file.path.node as t.Program).params?.[0];
    if (t.isIdentifier(inputParam)) {
      ctx.slotsByBinding.set(inputParam, unit.inputSlot);
    }
  }

  return unit;
}

function allocateSlot(unit: Unit) {
  const slot = `$cts${unit.slotCount++}`;
  unit.capturable.add(slot);
  return slot;
}

function evaluateUnit(ctx: PassContext, unit: Unit, detected: t.Node) {
  try {
    unit.evaluated = evaluateComptimeModule(unit.file, unit.loader, ctx.guard, {
      imports: unit.importRecords.map((record) => record.node),
      statements: unit.scriptlets.flatMap((scriptlet) => scriptlet.statements),
      thunks: unit.thunks,
      bindingNames: [...unit.moduleBindingNames],
      fnRegistry: ctx.fnRegistry,
      capturable: unit.capturable,
    });
  } catch (err) {
    const anchor =
      (err as { comptimeAnchor?: t.Node } | null)?.comptimeAnchor ||
      unit.scriptlets[0]?.node ||
      detected;
    throw buildError(
      unit.file,
      anchor,
      `Error evaluating comptime code: ${err instanceof Error ? err.message : String(err)}`,
      err,
    );
  }
}

// Classifies identifiers, builds per-site thunks (tree refs rewritten to
// slot names), and stamps runtime references for the expansion walk.
function annotate(ctx: PassContext, unit: Unit) {
  let moduleDepth = 0;

  if (unit.isMacro) {
    // Same stripTypes binding restoration the caller performs.
    unit.file.path.scope.crawl();
    collectUnitRenameGroups(unit);
  }

  unit.file.path.traverse({
    MarkoScriptlet: {
      enter: (scriptlet) => {
        if (scriptlet.node.target !== "comptime") return;
        moduleDepth++;
        const record: ScriptletRecord = {
          node: scriptlet.node,
          imports: [],
          statements: [],
          bindingNames: [],
        };

        for (const statement of scriptlet.node.body) {
          if (t.isImportDeclaration(statement)) {
            const importRecord: ImportRecord = {
              node: statement,
              usedAtRuntime: false,
            };
            record.imports.push(importRecord);
            unit.importRecords.push(importRecord);
            for (const specifier of statement.specifiers) {
              unit.capturable.add(specifier.local.name);
            }
          } else if (
            t.isExportDeclaration(statement) ||
            t.isExportDefaultDeclaration(statement)
          ) {
            throw buildError(
              unit.file,
              statement,
              "`export` is not supported in `comptime` statements.",
            );
          } else {
            record.statements.push(statement);
            for (const [name, id] of Object.entries(
              t.getOuterBindingIdentifiers(statement as any),
            )) {
              if (name.startsWith(RESERVED_PREFIX)) {
                throw buildError(
                  unit.file,
                  id as t.Node,
                  reservedMessage(name),
                );
              }
              record.bindingNames.push(name);
              unit.moduleBindingNames.add(name);
              unit.capturable.add(name);
            }
          }
        }

        unit.scriptlets.push(record);
      },
      exit: (scriptlet) => {
        if (scriptlet.node.target === "comptime") moduleDepth--;
      },
    },
    MarkoTag: {
      enter: (tag) => {
        let bodySlots: string[] | undefined;
        if (isComptimeTagNode(tag.node)) {
          bodySlots = buildPlan(ctx, unit, tag);
        } else {
          assertNotSnippetInvocation(ctx, unit, tag);
        }
        if (tag.node.body.body.length || tag.node.body.params.length) {
          // A `<-for>`'s (or `<-define>`'s) slots are visible in its body.
          unit.frames.push(bodySlots ? [...bodySlots] : []);
        }
      },
      exit: (tag) => {
        if (tag.node.body.body.length || tag.node.body.params.length) {
          unit.frames.pop();
        }
      },
    },
    ReferencedIdentifier: (identifier) => {
      if (identifier.isIdentifier()) {
        classifyReference(ctx, unit, identifier, moduleDepth > 0);
      }
    },
  });

  if (unit.isMacro) {
    partitionModuleNodes(unit);
  }
}

/** A runtime invocation of a `<-define>` binding cannot work; say so early. */
function assertNotSnippetInvocation(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
) {
  const { name } = tag.node;
  if (!t.isStringLiteral(name)) return;
  const binding = tag.scope.getBinding(name.value);
  if (binding && ctx.snippetBindings.has(binding.identifier)) {
    throw buildError(
      unit.file,
      tag.node,
      `\`<${name.value}>\` is a comptime snippet; invoke it with the \`-\` prefix (\`<-${name.value}>\`), or use runtime \`<define>\` for a runtime tag.`,
    );
  }
}

/** Stamps rename groups on the whole tree of an expanded file so each
 * inclusion declares fresh runtime bindings; plan-level stamps override. */
function collectUnitRenameGroups(unit: Unit) {
  unit.file.path.traverse({
    MarkoTag: (child) => {
      if (isComptimeTagNode(child.node)) return;
      if (child.node.var) {
        collectBindingGroups(
          unit,
          unit.treeRenameGroups,
          t.getBindingIdentifiers(child.node.var as any),
          child.scope,
        );
      }
      for (const param of child.node.body.params) {
        collectBindingGroups(
          unit,
          unit.treeRenameGroups,
          t.getBindingIdentifiers(param as any),
          child.get("body").scope,
        );
      }
    },
  });
}

/** Splits an expanded file's root: imports/statics/styles splice once per
 * compile; everything else is the per-expansion tree. */
function partitionModuleNodes(unit: Unit) {
  for (const node of (unit.file.path.node as t.Program).body) {
    if (t.isMarkoScriptlet(node)) {
      if (node.target !== "comptime") {
        collectModuleGroups(unit, node);
        unit.moduleNodes.push(node);
      }
    } else if (t.isImportDeclaration(node)) {
      for (const specifier of node.specifiers) {
        stampModuleGroup(unit, specifier.local.name, specifier.local);
      }
      unit.moduleNodes.push(node);
    } else if (
      t.isMarkoTag(node) &&
      t.isStringLiteral(node.name) &&
      node.name.value === "style"
    ) {
      unit.moduleNodes.push(node);
    } else if (
      t.isExportNamedDeclaration(node) ||
      t.isExportDefaultDeclaration(node)
    ) {
      throw buildError(
        unit.file,
        node,
        "`export`s in a comptime-expanded template are not supported yet.",
      );
    } else {
      unit.treeNodes.push(node);
    }
  }
}

function collectModuleGroups(unit: Unit, scriptlet: t.MarkoScriptlet) {
  const scope = unit.file.path.scope;
  for (const statement of scriptlet.body) {
    for (const name of Object.keys(
      t.getOuterBindingIdentifiers(statement as any),
    )) {
      const binding = scope.getBinding(name);
      if (binding) stampModuleGroup(unit, name, binding.identifier);
    }
  }
}

function stampModuleGroup(unit: Unit, name: string, identifier: t.Identifier) {
  const scope = unit.file.path.scope;
  const binding = scope.getBinding(name);
  const group = unit.renameGroupCount++;
  unit.moduleRenameGroups.push({ group, name });
  stampRename(identifier, group);
  if (binding) {
    for (const ref of binding.referencePaths) {
      if (ref.isIdentifier()) stampRename(ref.node, group);
    }
    for (const violation of binding.constantViolations) {
      const target = violation.isAssignmentExpression()
        ? violation.node.left
        : violation.isUpdateExpression()
          ? violation.node.argument
          : undefined;
      if (t.isIdentifier(target, { name })) stampRename(target, group);
    }
  }
}

type BindingKind =
  | { kind: "global" }
  | { kind: "module"; name: string }
  | { kind: "comptime-import"; record: ImportRecord }
  | { kind: "slot"; slot: string }
  | { kind: "plain-import" }
  | { kind: "input" }
  | { kind: "runtime" };

function classifyBinding(
  ctx: PassContext,
  unit: Unit,
  identifier: t.NodePath<t.Identifier>,
): BindingKind {
  return classifyName(ctx, unit, identifier.scope, identifier.node.name);
}

function classifyName(
  ctx: PassContext,
  unit: Unit,
  scope: t.Scope,
  name: string,
): BindingKind {
  const binding = scope.getBinding(name);
  if (!binding) return { kind: "global" };

  const slot = ctx.slotsByBinding.get(binding.identifier);
  if (slot) return { kind: "slot", slot };

  const declPath = binding.path;
  if (
    declPath.isImportSpecifier() ||
    declPath.isImportDefaultSpecifier() ||
    declPath.isImportNamespaceSpecifier()
  ) {
    const importDecl = declPath.parentPath as t.NodePath<t.ImportDeclaration>;
    if (
      importDecl.parentPath?.isMarkoScriptlet() &&
      importDecl.parentPath.node.target === "comptime"
    ) {
      const record = unit.importRecords.find(
        (record) => record.node === importDecl.node,
      )!;
      return { kind: "comptime-import", record };
    }
    return { kind: "plain-import" };
  }

  if (binding.identifier === (unit.file.path.node as t.Program).params?.[0]) {
    return { kind: "input" };
  }

  const scriptlet = declPath.findParent((parent) => parent.isMarkoScriptlet());
  if (scriptlet) {
    if ((scriptlet.node as t.MarkoScriptlet).target === "comptime") {
      // Bindings declared in comptime code live in the comptime program.
      return { kind: "module", name: binding.identifier.name };
    }
    return { kind: "runtime" };
  }

  return { kind: "runtime" };
}

function classifyReference(
  ctx: PassContext,
  unit: Unit,
  identifier: t.NodePath<t.Identifier>,
  inComptimeModule: boolean,
) {
  const kind = classifyBinding(ctx, unit, identifier);

  if (inComptimeModule) {
    assertReadableFromComptime(identifier, kind, "module");
    return;
  }

  switch (kind.kind) {
    case "slot":
      (identifier.node.extra ??= {}).comptimeSlot = kind.slot;
      break;
    case "module":
      (identifier.node.extra ??= {}).comptimeModuleRef = kind.name;
      break;
    case "comptime-import":
      (identifier.node.extra ??= {}).comptimeImportRef =
        unit.importRecords.indexOf(kind.record);
      break;
  }
}

function assertReadableFromComptime(
  identifier: t.NodePath<t.Identifier>,
  kind: BindingKind,
  context: "module" | "expression",
): void {
  const name = identifier.node.name;
  if (name.startsWith(RESERVED_PREFIX)) {
    throw identifier.buildCodeFrameError(reservedMessage(name));
  }
  switch (kind.kind) {
    case "global":
    case "module":
    case "comptime-import":
      return;
    case "slot":
      if (context === "module") {
        throw identifier.buildCodeFrameError(
          `\`${name}\` is a tree-scoped comptime binding and cannot be read from a \`comptime\` statement (module comptime statements run before the template body expands).`,
        );
      }
      return;
    case "plain-import":
      throw identifier.buildCodeFrameError(
        `\`${name}\` is imported for runtime and cannot be read from comptime code. Change its import to \`comptime import\`.`,
      );
    case "input":
      throw identifier.buildCodeFrameError(
        "`input` is a comptime binding only when this template is invoked as a comptime tag (`<-tag-name>`); add the `-` prefix at the call site, or move this expression out of comptime position to support runtime use.",
      );
    case "runtime":
      throw identifier.buildCodeFrameError(
        `\`${name}\` is a runtime binding and cannot be read from comptime code.`,
      );
  }
}

/** Plans a comptime tag; returns the slot ids its body brings into scope. */
function buildPlan(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): string[] | undefined {
  const node = tag.node;
  const name = (node.name as t.StringLiteral).value;

  if (node.arguments?.length) {
    throw buildError(
      unit.file,
      node,
      `\`<${name}>\` does not support arguments.`,
    );
  }

  switch (name) {
    case "-if":
      stampPlan(unit, node, planIf(ctx, unit, tag));
      return;
    case "-for": {
      const plan = planFor(ctx, unit, tag);
      stampPlan(unit, node, plan);
      return plan.slotIds;
    }
    case "-const":
      stampPlan(unit, node, planConst(ctx, unit, tag));
      return;
    case "-log":
    case "-debug":
      stampPlan(
        unit,
        node,
        planEffect(ctx, unit, tag, name.slice(1) as "log" | "debug"),
      );
      return;
    case "-define": {
      const plan = planDefine(ctx, unit, tag);
      stampPlan(unit, node, plan);
      return plan.slotIds;
    }
    case "-return":
      stampPlan(unit, node, planReturn(ctx, unit, tag));
      return;
    default:
      stampPlan(unit, node, planMacro(ctx, unit, tag, name.slice(1)));
      return;
  }
}

function stampPlan(unit: Unit, node: t.MarkoTag, plan: Plan) {
  (node.extra ??= {}).comptimePlan = unit.plans.push(plan) - 1;
  // Consumed by the plan's thunks; must not reach later stages.
  node.attributes = [];
}

function planIf(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): Plan {
  assertNoVar(unit, tag, "-if");
  assertNoParams(unit, tag, "-if");
  const next = tag
    .getAllNextSiblings()
    .find(
      (sibling) =>
        !(
          (sibling.isMarkoText() && /^\s*$/.test(sibling.node.value)) ||
          sibling.isMarkoComment()
        ),
    );
  if (
    next?.isMarkoTag() &&
    t.isStringLiteral(next.node.name) &&
    /^else(-if)?$/.test(next.node.name.value)
  ) {
    throw next.buildCodeFrameError(
      "`<else>` cannot follow `<-if>`: the branch is decided while compiling, and a false `<-if>` leaves nothing behind. Invert the condition in another `<-if>` (or use a runtime `<if>`).",
    );
  }
  const valueAttr = singleValueAttr(unit, tag, "-if");
  const params = currentParams(unit);
  return {
    kind: "if",
    thunk: exprThunk(ctx, unit, valueAttr.get("value") as any, params),
    params,
  };
}

function planFor(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): Plan & { kind: "for" } {
  assertNoVar(unit, tag, "-for");
  const params = currentParams(unit);
  const attrs = new Map<string, t.NodePath<t.MarkoAttribute>>();
  for (const attr of tag.get("attributes")) {
    if (!attr.isMarkoAttribute()) {
      throw attr.buildCodeFrameError(
        "`<-for>` does not support spread attributes.",
      );
    }
    if (attr.node.name === "by") {
      throw attr.buildCodeFrameError(
        "`<-for>` does not support the `by` attribute; an unrolled loop has nothing to reconcile.",
      );
    }
    if (!/^(of|in|from|to|until|step)$/.test(attr.node.name)) {
      throw attr.buildCodeFrameError(
        `\`<-for>\` does not support the \`${attr.node.name}\` attribute.`,
      );
    }
    attrs.set(attr.node.name, attr);
  }

  const { slotIds, destructureThunk } = paramsDestructure(
    ctx,
    unit,
    tag,
    params,
  );
  const renameGroups = collectRenameGroups(unit, tag);

  if (attrs.has("of") || attrs.has("in")) {
    const loop = attrs.has("of") ? "of" : "in";
    if (attrs.size > 1) {
      throw buildError(
        unit.file,
        tag.node,
        `\`<-for ${loop}>\` cannot be combined with other loop attributes.`,
      );
    }
    return {
      kind: "for",
      loop,
      thunk: exprThunk(ctx, unit, attrs.get(loop)!.get("value") as any, params),
      destructureThunk,
      slotIds,
      params,
      renameGroups,
    };
  }

  if (!attrs.has("to") && !attrs.has("until")) {
    throw buildError(
      unit.file,
      tag.node,
      "`<-for>` requires an `of`, `in`, `to`, or `until` attribute.",
    );
  }
  if (attrs.has("to") && attrs.has("until")) {
    throw buildError(
      unit.file,
      tag.node,
      "`<-for>` cannot combine `to` and `until`.",
    );
  }

  const rangeExpr = (name: string, fallback: t.Expression) => {
    const attr = attrs.get(name);
    return attr
      ? rewriteComptimeExpr(ctx, unit, attr.get("value") as any)
      : fallback;
  };

  return {
    kind: "for",
    loop: "range",
    inclusive: attrs.has("to"),
    rangeThunk: addThunk(
      unit,
      t.arrowFunctionExpression(
        params.map((slot) => t.identifier(slot)),
        t.arrayExpression([
          rangeExpr("from", t.numericLiteral(0)),
          rangeExpr(attrs.has("to") ? "to" : "until", t.numericLiteral(0)),
          rangeExpr("step", t.numericLiteral(1)),
        ]),
      ),
    ),
    destructureThunk,
    slotIds,
    params,
    renameGroups,
  };
}

/** Stamps runtime bindings declared under `tag` so each expanded copy can
 * alpha-rename them (avoiding duplicate declarations). */
function collectRenameGroups(unit: Unit, tag: t.NodePath<t.MarkoTag>) {
  const groups: RenameGroup[] = [];

  const ownBody = tag.get("body");
  for (const param of tag.node.body.params) {
    collectBindingGroups(
      unit,
      groups,
      t.getBindingIdentifiers(param as any),
      ownBody.scope,
      tag,
    );
  }

  ownBody.traverse({
    MarkoTag(child) {
      // Comptime tags declare comptime bindings (handled through slots).
      if (isComptimeTagNode(child.node)) return;
      if (child.node.var) {
        collectBindingGroups(
          unit,
          groups,
          t.getBindingIdentifiers(child.node.var as any),
          child.scope,
          tag,
        );
      }
      for (const param of child.node.body.params) {
        collectBindingGroups(
          unit,
          groups,
          t.getBindingIdentifiers(param as any),
          child.get("body").scope,
          tag,
        );
      }
    },
  });

  return groups;
}

function collectBindingGroups(
  unit: Unit,
  groups: RenameGroup[],
  identifiers: Record<string, t.Identifier | t.Identifier[]>,
  scope: t.Scope,
  within?: t.NodePath,
) {
  for (const name of Object.keys(identifiers)) {
    const binding = scope.getBinding(name);
    if (!binding) continue;

    const group = unit.renameGroupCount++;
    groups.push({ group, name });
    stampRename(binding.identifier, group);
    for (const ref of binding.referencePaths) {
      if (ref.isIdentifier()) {
        if (within && !isWithin(ref, within)) {
          throw ref.buildCodeFrameError(
            `\`${name}\` is declared inside an expanded comptime body (one binding per copy) and cannot be referenced from outside it.`,
          );
        }
        stampRename(ref.node, group);
      }
    }
    for (const violation of binding.constantViolations) {
      const target = violation.isAssignmentExpression()
        ? violation.node.left
        : violation.isUpdateExpression()
          ? violation.node.argument
          : undefined;
      if (t.isIdentifier(target, { name })) {
        if (within && !isWithin(violation, within)) {
          throw violation.buildCodeFrameError(
            `\`${name}\` is declared inside an expanded comptime body (one binding per copy) and cannot be assigned from outside it.`,
          );
        }
        stampRename(target, group);
      }
    }
  }
}

function stampRename(node: t.Identifier, group: number) {
  (node.extra ??= {}).comptimeRenameGroup = group;
}

function isWithin(path: t.NodePath, ancestor: t.NodePath) {
  return !!path.findParent((parent) => parent.node === ancestor.node);
}

function planConst(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): Plan {
  assertNoParams(unit, tag, "-const");
  if (!tag.node.var) {
    throw buildError(
      unit.file,
      tag.node,
      "`<-const>` requires a tag variable (`<-const/name=value/>`).",
    );
  }
  const valueAttr = singleValueAttr(unit, tag, "-const");
  const params = currentParams(unit);
  const valueExpr = rewriteComptimeExpr(
    ctx,
    unit,
    valueAttr.get("value") as any,
  );

  // Slots for the declared names; the thunk destructures a renamed clone.
  rewriteComptimeRefs(ctx, unit, tag.get("var") as t.NodePath);
  const { slotIds, pattern } = slotPattern(ctx, unit, tag.node.var as t.LVal);

  const thunk = addThunk(
    unit,
    t.arrowFunctionExpression(
      params.map((slot) => t.identifier(slot)),
      t.blockStatement([
        t.variableDeclaration("const", [
          t.variableDeclarator(pattern as any, valueExpr),
        ]),
        t.returnStatement(slotRecord(slotIds)),
      ]),
    ),
  );

  // The declared slots are visible to following siblings (document order).
  unit.frames[unit.frames.length - 1].push(...slotIds);
  return { kind: "const", thunk, slotIds, params };
}

function planEffect(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  kind: "log" | "debug",
): Plan {
  assertNoVar(unit, tag, `-${kind}`);
  assertNoParams(unit, tag, `-${kind}`);
  const params = currentParams(unit);
  const attrs = tag.get("attributes");

  if (!attrs.length) {
    if (kind === "log") {
      throw buildError(
        unit.file,
        tag.node,
        "`<-log>` requires a value to log.",
      );
    }
    return { kind, params };
  }

  const valueAttr = singleValueAttr(unit, tag, `-${kind}`);
  return {
    kind,
    thunk: exprThunk(ctx, unit, valueAttr.get("value") as any, params),
    params,
  };
}

function planDefine(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): Plan & { kind: "define" } {
  if (!t.isIdentifier(tag.node.var)) {
    throw buildError(
      unit.file,
      tag.node,
      "`<-define>` expects a simple tag variable naming the snippet (`<-define/Name>`).",
    );
  }
  const params = currentParams(unit);
  const attrs = macroAttrs(ctx, unit, tag, "-define", params);
  const { slotIds, destructureThunk } = paramsDestructure(
    ctx,
    unit,
    tag,
    params,
  );
  const contentRenameGroups = collectRenameGroups(unit, tag);
  const { slotIds: varSlots } = slotPattern(ctx, unit, tag.node.var);
  ctx.snippetBindings.add(tag.node.var);

  // The snippet binding is visible to following siblings (document order).
  unit.frames[unit.frames.length - 1].push(...varSlots);
  return {
    kind: "define",
    slot: varSlots[0],
    attrs,
    destructureThunk,
    slotIds,
    contentRenameGroups,
    params,
  };
}

function planReturn(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
): Plan {
  assertNoVar(unit, tag, "-return");
  assertNoParams(unit, tag, "-return");
  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoAttribute() && attr.node.name === "valueChange") {
      throw attr.buildCodeFrameError(
        "`<-return>` does not support `valueChange`: there is nothing to write back to at compile time.",
      );
    }
  }
  if (++unit.returnCount > 1) {
    throw buildError(
      unit.file,
      tag.node,
      "A template may contain at most one `<-return>`.",
    );
  }
  const valueAttr = singleValueAttr(unit, tag, "-return");
  const params = currentParams(unit);
  return {
    kind: "return",
    thunk: exprThunk(ctx, unit, valueAttr.get("value") as any, params),
    params,
  };
}

function planMacro(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  name: string,
): Plan & { kind: "macro" } {
  const params = currentParams(unit);
  const attrs = macroAttrs(ctx, unit, tag, `-${name}`, params);
  const attributeTags: AttrTagPlan[] = [];
  for (const attrTag of tag.get("attributeTags")) {
    if (!attrTag.isMarkoTag()) continue;
    const attrTagName = (attrTag.node.name as t.StringLiteral).value.slice(1);
    if (attrTag.node.var || attrTag.node.arguments?.length) {
      throw buildError(
        unit.file,
        attrTag.node,
        `\`<@${attrTagName}>\` on a comptime invocation does not support a tag variable or arguments.`,
      );
    }
    attributeTags.push({
      node: attrTag.node,
      name: attrTagName,
      attrs: macroAttrs(ctx, unit, attrTag, `@${attrTagName}`, params),
      contentRenameGroups: collectRenameGroups(unit, attrTag),
    });
    attrTag.node.attributes = [];
  }

  const contentRenameGroups = collectRenameGroups(unit, tag);
  const target = resolveMacroTarget(ctx, unit, tag, name);

  let varThunk: string | undefined;
  let varSlotIds: string[] | undefined;
  if (tag.node.var) {
    rewriteComptimeRefs(ctx, unit, tag.get("var") as t.NodePath);
    const { slotIds, pattern } = slotPattern(ctx, unit, tag.node.var as t.LVal);
    const valueId = t.identifier("$ctArgs");
    varThunk = addThunk(
      unit,
      t.arrowFunctionExpression(
        [valueId, ...params.map((slot) => t.identifier(slot))],
        t.blockStatement([
          t.variableDeclaration("const", [
            t.variableDeclarator(pattern as any, t.cloneNode(valueId)),
          ]),
          t.returnStatement(slotRecord(slotIds)),
        ]),
      ),
    );
    varSlotIds = slotIds;
    // The invocation's tag variable binds for following siblings.
    unit.frames[unit.frames.length - 1].push(...slotIds);
  }

  return {
    kind: "macro",
    name,
    target,
    attrs,
    attributeTags,
    varThunk,
    varSlotIds,
    contentRenameGroups,
    params,
  };
}

function macroAttrs(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  label: string,
  params: string[],
): MacroAttr[] {
  const attrs: MacroAttr[] = [];
  for (const attr of tag.get("attributes")) {
    if (attr.isMarkoSpreadAttribute()) {
      attrs.push({
        kind: "spread",
        thunk: exprThunk(ctx, unit, attr.get("value") as any, params),
      });
    } else if (attr.isMarkoAttribute()) {
      if (
        attr.node.bound ||
        attr.node.modifier ||
        attr.node.arguments?.length
      ) {
        throw attr.buildCodeFrameError(
          `\`<${label}>\` attributes are evaluated at compile time and do not support binding, modifiers, or arguments.`,
        );
      }
      attrs.push({
        kind: "attr",
        name: attr.node.name,
        thunk: exprThunk(ctx, unit, attr.get("value") as any, params),
      });
    }
  }
  return attrs;
}

/** Resolution per the doc: local comptime binding first, then the taglib
 * (filesystem + packages), then imported `.marko` files. */
function resolveMacroTarget(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  name: string,
): MacroTarget {
  const kind = classifyName(ctx, unit, tag.scope, name);
  if (kind.kind === "slot") return { kind: "slot", slot: kind.slot };
  if (kind.kind === "module") return { kind: "module", name: kind.name };

  const def = getTagDefForTagName(unit.file, name) as
    { template?: string } | undefined;
  if (def?.template && def.template.endsWith(".marko")) {
    return { kind: "file", filename: def.template };
  }

  if (kind.kind === "plain-import") {
    const binding = tag.scope.getBinding(name)!;
    const source = (binding.path.parentPath!.node as t.ImportDeclaration).source
      .value;
    if (source.endsWith(".marko") && source[0] === ".") {
      return {
        kind: "file",
        filename: path.resolve(path.dirname(unit.filename), source),
      };
    }
  }

  throw buildError(
    unit.file,
    tag.node,
    def
      ? `\`<-${name}>\` resolves to a tag with no template to expand.`
      : `Unable to resolve \`<-${name}>\`: no \`${name}\` tag or comptime snippet is in scope.`,
  );
}

function assertNoVar(unit: Unit, tag: t.NodePath<t.MarkoTag>, name: string) {
  if (tag.node.var) {
    throw buildError(
      unit.file,
      tag.node.var,
      `\`<${name}>\` does not support a tag variable.`,
    );
  }
}

function assertNoParams(unit: Unit, tag: t.NodePath<t.MarkoTag>, name: string) {
  if (tag.node.body.params.length) {
    throw buildError(
      unit.file,
      tag.node,
      `\`<${name}>\` does not support tag parameters.`,
    );
  }
}

function singleValueAttr(
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  name: string,
) {
  const attrs = tag.get("attributes");
  const valueAttr = attrs.find(
    (attr) => attr.isMarkoAttribute() && attr.node.name === "value",
  ) as t.NodePath<t.MarkoAttribute> | undefined;

  if (!valueAttr || attrs.length !== 1) {
    throw buildError(
      unit.file,
      tag.node,
      `\`<${name}>\` expects a single \`value\` attribute (\`<${name}=expression>\`).`,
    );
  }

  return valueAttr;
}

function currentParams(unit: Unit) {
  return unit.frames.flat();
}

/** Rewrites tree-binding references in a comptime expression to slot names. */
function rewriteComptimeExpr(
  ctx: PassContext,
  unit: Unit,
  expr: t.NodePath<t.Expression>,
): t.Expression {
  if (expr.isIdentifier()) {
    visitComptimeRef(ctx, unit, expr as t.NodePath<t.Identifier>);
  } else {
    rewriteComptimeRefs(ctx, unit, expr);
  }

  return expr.node;
}

/** Pattern variant of rewriteComptimeExpr: binding identifiers are
 * declarations, so only real references (e.g. defaults) classify. */
function rewriteComptimeRefs(ctx: PassContext, unit: Unit, path: t.NodePath) {
  path.traverse({
    ReferencedIdentifier: (identifier) => {
      if (identifier.isIdentifier()) visitComptimeRef(ctx, unit, identifier);
    },
  });
}

function visitComptimeRef(
  ctx: PassContext,
  unit: Unit,
  identifier: t.NodePath<t.Identifier>,
) {
  const kind = classifyBinding(ctx, unit, identifier);
  assertReadableFromComptime(identifier, kind, "expression");
  if (kind.kind === "slot") identifier.node.name = kind.slot;
}

function exprThunk(
  ctx: PassContext,
  unit: Unit,
  expr: t.NodePath<t.Expression>,
  params: string[],
) {
  return addThunk(
    unit,
    t.arrowFunctionExpression(
      params.map((slot) => t.identifier(slot)),
      rewriteComptimeExpr(ctx, unit, expr),
    ),
  );
}

function addThunk(unit: Unit, fn: t.Expression) {
  const id = `t${unit.thunkCount++}`;
  unit.thunks.push({ id, fn });
  return id;
}

/** Registers slots for a pattern's bindings; returns a slot-renamed clone. */
function slotPattern(ctx: PassContext, unit: Unit, original: t.LVal) {
  const slotByName = new Map<string, string>();
  for (const [name, identifier] of Object.entries(
    t.getBindingIdentifiers(original as any),
  )) {
    if (name.startsWith(RESERVED_PREFIX)) {
      throw buildError(
        unit.file,
        (Array.isArray(identifier) ? identifier[0] : identifier) as t.Node,
        reservedMessage(name),
      );
    }
    const slot = allocateSlot(unit);
    slotByName.set(name, slot);
    for (const id of Array.isArray(identifier) ? identifier : [identifier]) {
      ctx.slotsByBinding.set(id as t.Identifier, slot);
    }
  }

  const pattern = cloneForExpansion(original) as t.LVal;
  for (const [, identifier] of Object.entries(
    t.getBindingIdentifiers(pattern as any),
  )) {
    for (const id of Array.isArray(identifier) ? identifier : [identifier]) {
      (id as t.Identifier).name = slotByName.get((id as t.Identifier).name)!;
    }
  }

  return { slotIds: [...slotByName.values()], pattern };
}

function paramsDestructure(
  ctx: PassContext,
  unit: Unit,
  tag: t.NodePath<t.MarkoTag>,
  params: string[],
) {
  for (const param of tag.get("body").get("params")) {
    rewriteComptimeRefs(ctx, unit, param as t.NodePath);
  }

  const slotIds: string[] = [];
  const patterns: t.LVal[] = [];
  for (const param of tag.node.body.params) {
    const { slotIds: ids, pattern } = slotPattern(ctx, unit, param as t.LVal);
    slotIds.push(...ids);
    patterns.push(pattern);
  }

  const argsId = t.identifier("$ctArgs");
  const destructureThunk = addThunk(
    unit,
    t.arrowFunctionExpression(
      [argsId, ...params.map((slot) => t.identifier(slot))],
      t.blockStatement([
        ...(patterns.length
          ? [
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.arrayPattern(patterns as any),
                  t.cloneNode(argsId),
                ),
              ]),
            ]
          : []),
        t.returnStatement(slotRecord(slotIds)),
      ]),
    ),
  );

  return { slotIds, destructureThunk };
}

function slotRecord(slotIds: string[]) {
  return t.objectExpression(
    slotIds.map((slot) =>
      t.objectProperty(t.identifier(slot), t.identifier(slot), false, true),
    ),
  );
}

// Expansion: document-order walk over plain nodes. Comptime tags replace
// with their expansion; runtime nodes materialize their stamped references.
type Env = Map<string, unknown>;

function expandBody(
  ctx: PassContext,
  unit: Unit,
  nodes: t.Statement[],
  env: Env,
  /** Receives attribute tags surfaced by expansion (set only for bodies
   * of non-control-flow runtime tags). */
  routeAttributeTagsTo: t.MarkoTag | null,
): t.Statement[] {
  const out: t.Statement[] = [];

  for (const node of nodes) {
    const wasComptime = t.isMarkoTag(node) && isComptimeTagNode(node);
    for (const expanded of expandNode(ctx, unit, node, env)) {
      if (
        wasComptime &&
        routeAttributeTagsTo &&
        t.isMarkoTag(expanded) &&
        t.isStringLiteral(expanded.name) &&
        expanded.name.value[0] === "@"
      ) {
        routeAttributeTagsTo.attributeTags.push(expanded);
      } else {
        out.push(expanded);
      }
    }
  }

  return out;
}

function expandNode(
  ctx: PassContext,
  unit: Unit,
  node: t.Statement,
  env: Env,
): t.Statement[] {
  ctx.lastNode = node;
  if (t.isMarkoTag(node) && isComptimeTagNode(node)) {
    const plan = unit.plans[node.extra?.comptimePlan ?? -1];
    currentNodeStack.push(node);
    try {
      return expandComptimeTag(ctx, unit, node, plan, env);
    } finally {
      currentNodeStack.pop();
    }
  }

  if (t.isMarkoScriptlet(node) && node.target === "comptime") {
    // Lowered in place after expansion (see lower()).
    return [node];
  }

  if (t.isMarkoTag(node) && !t.isStringLiteral(node.name)) {
    // A dynamic tag naming a content fragment splices it structurally.
    const resolved = resolveComptimeRead(unit, node.name, env);
    if (resolved && isFragment(resolved.value)) {
      currentNodeStack.push(node);
      try {
        return spliceFragmentTag(ctx, unit, node, resolved.value, env);
      } finally {
        currentNodeStack.pop();
      }
    }
  }

  if (
    unit.isMacro &&
    ctx.returnStack.length &&
    t.isMarkoTag(node) &&
    t.isStringLiteral(node.name) &&
    node.name.value === "return"
  ) {
    throw buildError(
      unit.file,
      node,
      "A runtime `<return>` inside a comptime-invoked template is not supported yet; use `<-return>` for a compile-time result.",
    );
  }

  currentNodeStack.push(node);
  try {
    return [visitRuntime(ctx, unit, node, env) as t.Statement];
  } finally {
    currentNodeStack.pop();
  }
}

function expandComptimeTag(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  plan: Plan,
  env: Env,
): t.Statement[] {
  switch (plan.kind) {
    case "if": {
      const value = callThunk(
        ctx,
        unit,
        node,
        plan.thunk,
        thunkArgs(plan, env),
      );
      return value
        ? expandBody(ctx, unit, node.body.body, new Map(env), null)
        : [];
    }
    case "const": {
      defineSlots(
        env,
        callThunk(ctx, unit, node, plan.thunk, thunkArgs(plan, env)) as Record<
          string,
          unknown
        >,
        plan.slotIds,
      );
      return [];
    }
    case "log": {
      const value = callThunk(
        ctx,
        unit,
        node,
        plan.thunk!,
        thunkArgs(plan, env),
      );
      const from =
        unit === ctx.callerUnit
          ? ""
          : `[${path.relative(process.cwd(), unit.filename)}] `;
      diagnosticWarn(ctx.program, {
        label: `\`<-log>\` ${from}${inspect(value, { depth: 4 })}`,
        loc: unit === ctx.callerUnit ? (node.loc ?? undefined) : undefined,
      });
      return [];
    }
    case "debug": {
      const value = plan.thunk
        ? callThunk(ctx, unit, node, plan.thunk, thunkArgs(plan, env))
        : undefined;
      // eslint-disable-next-line no-debugger
      debugger; // `value` and `env` are in scope for inspection.
      void value;
      return [];
    }
    case "for":
      return expandFor(ctx, unit, node, plan, env);
    case "define": {
      const attrs: Record<string, unknown> = {};
      for (const attr of plan.attrs) {
        applyMacroAttr(ctx, unit, node, attr, plan.params, env, attrs);
      }
      const snippet: Snippet = {
        [kSnippet]: true,
        unit,
        attrs,
        content: makeFragment(
          unit,
          node.body.body,
          [],
          env,
          plan.contentRenameGroups,
        ),
        destructureThunk: plan.destructureThunk,
        slotIds: plan.slotIds,
        params: plan.params,
      };
      env.set(plan.slot, snippet);
      return [];
    }
    case "return": {
      const top = ctx.returnStack[ctx.returnStack.length - 1];
      const value = callThunk(
        ctx,
        unit,
        node,
        plan.thunk,
        thunkArgs(plan, env),
      );
      if (top) {
        if (top.has) {
          throw buildError(
            unit.file,
            node,
            "`<-return>` already ran for this expansion; at most one may run per invocation.",
          );
        }
        top.has = true;
        top.value = value;
      }
      // Outside a comptime invocation the tag is inert and erased.
      return [];
    }
    case "macro":
      return expandMacro(ctx, unit, node, plan, env);
  }
}

function expandMacro(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  plan: Plan & { kind: "macro" },
  env: Env,
): t.Statement[] {
  if (++ctx.depth > MAX_EXPANSION_DEPTH) {
    ctx.depth--;
    throw buildError(
      unit.file,
      node,
      `\`<-${plan.name}>\` exceeded the fixed ${MAX_EXPANSION_DEPTH} macro expansion depth; comptime tags must not recurse unboundedly.`,
    );
  }

  try {
    const input: Record<string, unknown> = {};
    for (const attr of plan.attrs) {
      applyMacroAttr(ctx, unit, node, attr, plan.params, env, input);
    }
    for (const attrTag of plan.attributeTags) {
      const value: Record<string, unknown> = {};
      for (const attr of attrTag.attrs) {
        applyMacroAttr(ctx, unit, node, attr, plan.params, env, value);
      }
      if (attrTag.node.body.body.length) {
        value.content = makeFragment(
          unit,
          attrTag.node.body.body,
          attrTag.node.body.params,
          env,
          attrTag.contentRenameGroups,
        );
      }
      const existing = input[attrTag.name];
      input[attrTag.name] = Array.isArray(existing)
        ? [...existing, value]
        : existing !== undefined
          ? [existing, value]
          : value;
    }
    if (node.body.body.length) {
      input.content = makeFragment(
        unit,
        node.body.body,
        node.body.params,
        env,
        plan.contentRenameGroups,
      );
    }

    ctx.returnStack.push({ has: false, value: undefined });
    let out: t.Statement[];
    let returned: { has: boolean; value: unknown };
    try {
      out = expandMacroTarget(ctx, unit, node, plan, env, input);
    } finally {
      returned = ctx.returnStack.pop()!;
    }
    if (plan.varThunk) {
      defineSlots(
        env,
        callThunk(ctx, unit, node, plan.varThunk, [
          returned.value,
          ...thunkArgs(plan, env),
        ]) as Record<string, unknown>,
        plan.varSlotIds!,
      );
    }
    return out;
  } catch (err) {
    throw withExpansionTrace(err, unit, node, plan.name);
  } finally {
    ctx.depth--;
  }
}

function expandMacroTarget(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  plan: Plan & { kind: "macro" },
  env: Env,
  input: Record<string, unknown>,
): t.Statement[] {
  let value: unknown;
  switch (plan.target.kind) {
    case "slot":
      value = env.get(plan.target.slot);
      break;
    case "module":
      value = (unit.moduleBindings ??= unit.evaluated!.getBindings())[
        plan.target.name
      ];
      break;
    case "file": {
      const target = loadUnit(ctx, unit, node, plan.target.filename);
      spliceUnitModule(ctx, target);
      const childEnv: Env = new Map([[target.inputSlot!, input]]);
      const renames = expansionRenames(target, target.treeRenameGroups);
      const cloned = target.treeNodes.map((tree) => {
        const clone = cloneForExpansion(tree);
        applyRenames(clone, renames);
        return clone;
      });
      return expandBody(ctx, target, cloned, childEnv, null);
    }
  }

  if (!isSnippet(value)) {
    throw buildError(
      unit.file,
      node,
      `\`<-${plan.name}>\` did not resolve to a comptime snippet or tag (got ${describeValue(value)}).`,
    );
  }

  const snippet = value;
  const childEnv = new Map(snippet.content.env);
  defineSlots(
    childEnv,
    callThunk(ctx, snippet.unit, node, snippet.destructureThunk, [
      [{ ...snippet.attrs, ...input }],
      ...snippet.params.map((slot) => snippet.content.env.get(slot)),
    ]) as Record<string, unknown>,
    snippet.slotIds,
  );
  return expandFragment(ctx, snippet.content, childEnv);
}

function applyMacroAttr(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  attr: MacroAttr,
  params: string[],
  env: Env,
  into: Record<string, unknown>,
) {
  const value = callThunk(
    ctx,
    unit,
    node,
    attr.thunk,
    thunkArgs({ params }, env),
  );
  if (attr.kind === "spread") {
    if (value != null) Object.assign(into, value);
  } else {
    into[attr.name] = value;
  }
}

function makeFragment(
  unit: Unit,
  body: t.Statement[],
  params: t.MarkoTagBody["params"],
  env: Env,
  renameGroups: RenameGroup[],
): Fragment {
  return {
    [kFragment]: true,
    unit,
    body,
    params,
    env: new Map(env),
    renameGroups,
  };
}

/** Splices a fragment: fresh clones, fresh runtime names, its own scope. */
function expandFragment(
  ctx: PassContext,
  fragment: Fragment,
  env?: Env,
  extra?: t.Statement[],
): t.Statement[] {
  const renames = expansionRenames(fragment.unit, fragment.renameGroups);
  const cloned = fragment.body.map((node) => {
    const clone = cloneForExpansion(node);
    applyRenames(clone, renames);
    return clone;
  });
  const out = extra ? [...extra] : [];
  out.push(
    ...expandBody(
      ctx,
      fragment.unit,
      cloned,
      env ?? new Map(fragment.env),
      null,
    ),
  );
  return out;
}

function expansionRenames(unit: Unit, groups: RenameGroup[]) {
  const renames = new Map(unit.moduleRenames);
  for (const { group, name } of groups) {
    renames.set(group, generateUid(name));
  }
  return renames;
}

/** `<${input.content}/>`: splice the caller's fragment; site arguments bind
 * the fragment's parameters through a runtime `<const>` destructure. */
function spliceFragmentTag(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  fragment: Fragment,
  env: Env,
): t.Statement[] {
  if (node.attributes.length || node.attributeTags.length) {
    throw buildError(
      unit.file,
      node,
      "A comptime content fragment cannot receive attributes; pass values through the fragment's parameters instead.",
    );
  }
  if (node.body.body.length) {
    throw buildError(
      unit.file,
      node,
      "A comptime content fragment cannot receive body content.",
    );
  }

  let extra: t.Statement[] | undefined;
  if (fragment.params.length) {
    const args = (node.arguments ?? []).map((arg) =>
      visitRuntime(ctx, unit, arg, env),
    ) as t.Expression[];
    const renames = expansionRenames(fragment.unit, fragment.renameGroups);
    const params = fragment.params.map((param) => {
      const clone = cloneForExpansion(param);
      applyRenames(clone, renames);
      return clone;
    });
    extra = [
      t.markoTag(
        t.stringLiteral("const"),
        [t.markoAttribute("value", t.arrayExpression(args))],
        t.markoTagBody([]),
        null,
        t.arrayPattern(params as any),
      ),
    ];
    // The parameter renames must match the body splice below.
    return [...extra, ...expandFragmentWithRenames(ctx, fragment, renames)];
  }

  return expandFragment(ctx, fragment);
}

function expandFragmentWithRenames(
  ctx: PassContext,
  fragment: Fragment,
  renames: Map<number, string>,
): t.Statement[] {
  const cloned = fragment.body.map((node) => {
    const clone = cloneForExpansion(node);
    applyRenames(clone, renames);
    return clone;
  });
  return expandBody(ctx, fragment.unit, cloned, new Map(fragment.env), null);
}

function withExpansionTrace(
  err: unknown,
  unit: Unit,
  node: t.MarkoTag,
  name: string,
) {
  if (err instanceof Error) {
    const traced = err as Error & { comptimeTraceCount?: number };
    const count = (traced.comptimeTraceCount =
      (traced.comptimeTraceCount ?? 0) + 1);
    if (count <= 8) {
      const loc = node.loc
        ? `:${node.loc.start.line}:${node.loc.start.column + 1}`
        : "";
      err.message += `\n  while expanding \`<-${name}>\` at ${path.relative(
        process.cwd(),
        unit.filename,
      )}${loc}`;
    } else if (count === 9) {
      err.message += "\n  … (deeper expansions omitted)";
    }
  }
  return err;
}

/** Loads a `.marko` file for macro expansion at the migrate stage (its own
 * comptime pass must not run) and evaluates its comptime program once. */
function loadUnit(
  ctx: PassContext,
  from: Unit,
  node: t.MarkoTag,
  filename: string,
): Unit {
  let unit = ctx.units.get(filename);
  if (unit) return unit;

  const { fileSystem } = ctx.file.markoOpts;
  let source: string;
  try {
    source = fileSystem.readFileSync(filename, "utf-8") as string;
  } catch (err) {
    throw buildError(
      from.file,
      node,
      `Unable to read ${JSON.stringify(filename)} for comptime expansion.`,
      err,
    );
  }

  const file = (
    ctx.file as unknown as {
      ___getMarkoFile(
        code: string,
        fileOpts: unknown,
        markoOpts: unknown,
      ): t.BabelFile;
    }
  ).___getMarkoFile(
    source,
    {
      ...(ctx.file.opts as Record<string, unknown>),
      filename,
      sourceFileName: path.basename(filename),
      sourceRoot: path.dirname(filename),
      filenameRelative: path.relative(process.cwd(), filename),
    },
    { ...ctx.file.markoOpts, output: "migrate" },
  );

  ctx.file.metadata.marko.watchFiles.push(filename);
  unit = createUnit(ctx, file, true);
  ctx.units.set(filename, unit);
  annotate(ctx, unit);
  evaluateUnit(ctx, unit, file.path.node);
  // The expanded file's own comptime dependencies invalidate the caller.
  for (const watched of file.metadata.marko.watchFiles) {
    ctx.file.metadata.marko.watchFiles.push(watched);
  }
  return unit;
}

/** Module statements of an expanded file (imports/statics/styles) splice
 * into the caller once, with their bindings renamed for hygiene. */
function spliceUnitModule(ctx: PassContext, unit: Unit) {
  if (unit.moduleSpliced) return;
  unit.moduleSpliced = true;
  for (const { group, name } of unit.moduleRenameGroups) {
    unit.moduleRenames.set(group, generateUid(name));
  }
  for (const node of unit.moduleNodes) {
    const clone = cloneForExpansion(node);
    applyRenames(clone, unit.moduleRenames);
    ctx.moduleSplices.push(
      visitRuntime(ctx, unit, clone, new Map()) as t.Statement,
    );
  }
}

function expandFor(
  ctx: PassContext,
  unit: Unit,
  node: t.MarkoTag,
  plan: Plan & { kind: "for" },
  env: Env,
): t.Statement[] {
  const out: t.Statement[] = [];
  let count = 0;

  const iteration = (args: unknown[]) => {
    if (++count > MAX_ITERATIONS) {
      throw buildError(
        unit.file,
        node,
        `\`<-for>\` exceeded ${MAX_ITERATIONS} iterations; a comptime loop must terminate while compiling (and unrolling this much output is almost never intended).`,
      );
    }

    const childEnv = new Map(env);
    defineSlots(
      childEnv,
      callThunk(ctx, unit, node, plan.destructureThunk, [
        args,
        ...thunkArgs(plan, env),
      ]) as Record<string, unknown>,
      plan.slotIds,
    );

    const cloned = node.body.body.map(cloneForExpansion) as t.Statement[];
    if (plan.renameGroups.length) {
      const renames = new Map(
        plan.renameGroups.map(
          ({ group, name }) => [group, generateUid(name)] as const,
        ),
      );
      for (const child of cloned) applyRenames(child, renames);
    }

    out.push(...expandBody(ctx, unit, cloned, childEnv, null));
  };

  switch (plan.loop) {
    case "of": {
      const iterable = callThunk(
        ctx,
        unit,
        node,
        plan.thunk!,
        thunkArgs(plan, env),
      ) as Iterable<unknown>;
      if (
        !iterable ||
        typeof (iterable as any)[Symbol.iterator] !== "function"
      ) {
        throw buildError(
          unit.file,
          node,
          "`<-for of>` expects an iterable value.",
        );
      }
      let index = 0;
      for (const item of iterable) iteration([item, index++]);
      break;
    }
    case "in": {
      const object = callThunk(
        ctx,
        unit,
        node,
        plan.thunk!,
        thunkArgs(plan, env),
      ) as Record<string, unknown>;
      if (!object || typeof object !== "object") {
        throw buildError(
          unit.file,
          node,
          "`<-for in>` expects an object value.",
        );
      }
      for (const key of Object.keys(object)) iteration([key, object[key]]);
      break;
    }
    case "range": {
      const [from, edge, step] = callThunk(
        ctx,
        unit,
        node,
        plan.rangeThunk!,
        thunkArgs(plan, env),
      ) as [number, number, number];
      const to = plan.inclusive ? edge : edge - (step > 0 ? 1 : -1);
      for (let i = from; step > 0 ? i <= to : i >= to; i += step) {
        iteration([i]);
      }
      break;
    }
  }

  return out;
}

function thunkArgs(plan: { params: string[] }, env: Env) {
  return plan.params.map((slot) => env.get(slot));
}

function defineSlots(
  env: Env,
  record: Record<string, unknown>,
  slotIds: string[],
) {
  for (const slot of slotIds) {
    env.set(slot, record[slot]);
  }
}

function callThunk(
  ctx: PassContext,
  unit: Unit,
  node: t.Node,
  id: string,
  args: unknown[],
) {
  let result: unknown;
  try {
    result = unit.evaluated!.thunks[id](...args);
  } catch (err) {
    throw buildError(
      unit.file,
      node,
      `Error evaluating comptime expression: ${err instanceof Error ? err.message : String(err)}`,
      err,
    );
  }

  if (
    result &&
    (typeof result === "object" || typeof result === "function") &&
    typeof (result as PromiseLike<unknown>).then === "function"
  ) {
    throw buildError(
      ctx.file,
      node,
      "Comptime evaluation is synchronous and cannot wait on a promise. Resolve the value before compiling (in the build script) instead.",
    );
  }

  return result;
}

/** Materializes stamped comptime references within a retained runtime node. */
function visitRuntime(
  ctx: PassContext,
  unit: Unit,
  node: t.Node,
  env: Env,
  noFold?: boolean,
): t.Node {
  if (!noFold) {
    const folded = tryFoldComptimeRead(ctx, unit, node, env);
    if (folded) return folded;
  }

  if (t.isIdentifier(node) && node.extra) {
    const { comptimeSlot, comptimeModuleRef, comptimeImportRef } = node.extra;
    if (comptimeSlot != null) {
      const serialized = serializeValue(ctx.serialize!, env.get(comptimeSlot));
      serialized.loc = node.loc;
      return serialized;
    }
    if (comptimeModuleRef != null) {
      unit.usedModuleBindings.add(comptimeModuleRef);
      if (unit !== ctx.callerUnit) {
        node.name = emittedName(unit, comptimeModuleRef);
      }
      return node;
    }
    if (comptimeImportRef != null) {
      unit.importRecords[comptimeImportRef].usedAtRuntime = true;
      if (unit !== ctx.callerUnit) {
        node.name = emittedName(unit, node.name);
      }
      return node;
    }
  }

  if (t.isMarkoTag(node)) {
    // Tag names must stay dynamic (static tag semantics are parse-time);
    // tag variables are declarations.
    visitChild(ctx, unit, node, "name", env, true);
    visitChild(ctx, unit, node, "var", env, true);
    visitChild(ctx, unit, node, "arguments", env, noFold);
    for (const attr of node.attributes) {
      // A bound attribute (`value:=x`) writes back into its expression.
      visitChild(
        ctx,
        unit,
        attr,
        "value",
        env,
        noFold || !!("bound" in attr && attr.bound),
      );
      if ("arguments" in attr) {
        visitChild(ctx, unit, attr, "arguments", env, noFold);
      }
    }
    node.attributeTags = expandBody(
      ctx,
      unit,
      node.attributeTags as t.Statement[],
      new Map(env),
      null,
    ) as typeof node.attributeTags;
    for (let i = 0; i < node.body.params.length; i++) {
      // Parameters are declarations.
      visitChild(ctx, unit, node.body.params, i as any, env, true);
    }
    node.body.body = expandBody(
      ctx,
      unit,
      node.body.body,
      new Map(env),
      isRuntimeControlFlow(node) ? null : node,
    ) as typeof node.body.body;
    return node;
  }

  for (const key of Object.keys(node)) {
    if (
      key === "extra" ||
      key === "loc" ||
      key === "start" ||
      key === "end" ||
      key === "leadingComments" ||
      key === "trailingComments" ||
      key === "innerComments"
    ) {
      continue;
    }
    visitChild(
      ctx,
      unit,
      node as any,
      key as any,
      env,
      noFold || mustKeepReference(node, key),
    );
  }

  return node;
}

/** Caller-side name for an expanded file's comptime binding/import local. */
function emittedName(unit: Unit, name: string) {
  let emitted = unit.emittedNames.get(name);
  if (!emitted) {
    emitted = generateUid(name);
    unit.emittedNames.set(name, emitted);
  }
  return emitted;
}

/** Whether `node[key]` must stay a reference: written at runtime, or a
 * callee whose `this` binding a replacement would change. */
function mustKeepReference(node: t.Node, key: string) {
  switch (node.type) {
    case "AssignmentExpression":
      return key === "left";
    case "UpdateExpression":
      return key === "argument";
    case "UnaryExpression":
      return node.operator === "delete" && key === "argument";
    case "ForInStatement":
    case "ForOfStatement":
      return key === "left";
    case "VariableDeclarator":
      return key === "id";
    case "CallExpression":
    case "OptionalCallExpression":
    case "NewExpression":
      return key === "callee";
    case "TaggedTemplateExpression":
      return key === "tag";
    default:
      return false;
  }
}

function visitChild(
  ctx: PassContext,
  unit: Unit,
  parent: any,
  key: string | number,
  env: Env,
  noFold?: boolean,
) {
  const value = parent[key];
  if (!value) return;

  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i++) {
      const item = value[i];
      if (item && typeof item.type === "string") {
        value[i] = visitRuntime(ctx, unit, item, env, noFold);
      }
    }
  } else if (typeof value.type === "string") {
    parent[key] = visitRuntime(ctx, unit, value, env, noFold);
  }
}

/** Resolves a member path rooted at a comptime binding to its value. */
function resolveComptimeRead(
  unit: Unit,
  node: t.Node,
  env: Env,
): { value: unknown; fromImport: boolean; steps: number } | undefined {
  const steps: { key: string | number; optional: boolean }[] = [];
  let cur: t.Node = node;
  while (t.isMemberExpression(cur) || t.isOptionalMemberExpression(cur)) {
    const { property } = cur;
    let key: string | number;
    if (!cur.computed && t.isIdentifier(property)) {
      key = property.name;
    } else if (t.isStringLiteral(property)) {
      key = property.value;
    } else if (t.isNumericLiteral(property)) {
      key = property.value;
    } else {
      return;
    }
    steps.push({
      key,
      optional: cur.type === "OptionalMemberExpression" && cur.optional,
    });
    cur = cur.object;
  }

  if (!t.isIdentifier(cur) || !cur.extra) return;
  const { comptimeSlot, comptimeModuleRef, comptimeImportRef } = cur.extra;
  let fromImport = false;
  let value: unknown;
  if (comptimeSlot != null) {
    value = env.get(comptimeSlot);
  } else if (comptimeModuleRef != null) {
    value = (unit.moduleBindings ??= unit.evaluated!.getBindings())[
      comptimeModuleRef
    ];
  } else if (comptimeImportRef != null) {
    const values = importedValues(unit, unit.importRecords[comptimeImportRef]);
    if (!values || !(cur.name in values)) return;
    fromImport = true;
    value = values[cur.name];
  } else {
    return;
  }

  try {
    for (let i = steps.length; i-- > 0;) {
      if (value == null && steps[i].optional) {
        // The chain short-circuits to undefined, like it would at runtime.
        value = undefined;
        break;
      }
      value = (value as Record<string | number, unknown>)[steps[i].key];
    }
  } catch {
    // A read that throws stays at runtime, with its error.
    return;
  }

  return { value, fromImport, steps: steps.length };
}

/** Folds a member path rooted at a comptime binding to a literal when the
 * value is a primitive; non-primitives keep the reference handoff. */
function tryFoldComptimeRead(
  ctx: PassContext,
  unit: Unit,
  node: t.Node,
  env: Env,
): t.Expression | undefined {
  const resolved = resolveComptimeRead(unit, node, env);
  if (!resolved) return;
  const { value, fromImport, steps } = resolved;

  const type = typeof value;
  if (type === "symbol" || isFragment(value) || isSnippet(value)) return;
  if ((type === "object" && value !== null) || type === "function") {
    // Non-primitive member reads serialize just the accessed subtree (ref
    // dedup keeps identity with wider uses); imports keep their import.
    if (fromImport || !steps) return;
  }

  const serialized = serializeValue(ctx.serialize!, value);
  serialized.loc = node.loc;
  return serialized;
}

/** Resolves a `comptime import`'s local bindings to their values. */
function importedValues(unit: Unit, record: ImportRecord) {
  if (record.values === undefined) {
    try {
      const namespace = unit.loader.requireNamespace(record.node.source.value);
      const values: Record<string, unknown> = (record.values = {});
      for (const specifier of record.node.specifiers) {
        values[specifier.local.name] = t.isImportNamespaceSpecifier(specifier)
          ? namespace
          : t.isImportDefaultSpecifier(specifier)
            ? namespace.default
            : namespace[
                t.isStringLiteral(specifier.imported)
                  ? specifier.imported.value
                  : specifier.imported.name
              ];
      }
    } catch {
      record.values = null;
    }
  }
  return record.values;
}

function isRuntimeControlFlow(tag: t.MarkoTag) {
  if (!t.isStringLiteral(tag.name)) return false;
  switch (tag.name.value) {
    case "if":
    case "else-if":
    case "else":
    case "for":
    case "await":
    case "try":
    case "show":
      return true;
    default:
      return false;
  }
}

/** Alpha-renames stamped per-copy bindings within a cloned subtree. */
function applyRenames(node: t.Node, renames: Map<number, string>) {
  const group = node.extra?.comptimeRenameGroup;
  if (t.isIdentifier(node) && group != null) {
    const name = renames.get(group);
    if (name != null) node.name = name;
  }

  for (const key of Object.keys(node)) {
    if (key === "extra" || key === "loc") continue;
    const value = (node as any)[key];
    if (Array.isArray(value)) {
      for (const item of value) {
        if (item && typeof item.type === "string") applyRenames(item, renames);
      }
    } else if (value && typeof value.type === "string") {
      applyRenames(value, renames);
    }
  }
}

/** Deep node clone that preserves (shallow-copied) `extra` stamps. */
function cloneForExpansion<T extends t.Node>(node: T): T {
  const out: any = {};
  for (const key of Object.keys(node)) {
    const value = (node as any)[key];
    out[key] =
      key === "extra"
        ? value && { ...value }
        : key === "loc"
          ? value
          : cloneValue(value);
  }
  return out;
}

function cloneValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(cloneValue);
  if (value && typeof value === "object") {
    if (typeof (value as t.Node).type === "string") {
      return cloneForExpansion(value as t.Node);
    }
    return value;
  }
  return value;
}

function describeValue(value: unknown) {
  return value === null
    ? "`null`"
    : typeof value === "object"
      ? "an object value"
      : `a ${typeof value} value`;
}

// The function handoff: comptime-owned functions become factories (in a
// content-addressed virtual module, or inline without a bundler hook).
function resolveFunction(ctx: PassContext, value: unknown) {
  const record =
    typeof value === "function" || (typeof value === "object" && value)
      ? ctx.fnRegistry.get(value as object)
      : undefined;
  if (!record) return;

  let entry = ctx.factories.get(record.node);
  if (!entry) {
    entry = {
      record,
      placeholder: generateUid(
        (record.node as { id?: t.Identifier | null }).id?.name || "comptimeFn",
      ),
      refs: [],
    };
    ctx.factories.set(record.node, entry);
  }

  const factory = t.identifier(entry.placeholder);
  entry.refs.push(factory);
  const captured = record.getCaptures();
  return {
    factory,
    captures: record.captures.map((name) => captured[name]),
  };
}

/** Emits the collected factories; returns inline declarations when no
 * `resolveVirtualDependency` hook is configured. */
function finalizeFunctions(ctx: PassContext): t.Statement[] {
  if (!ctx.factories.size) return [];
  const entries = [...ctx.factories.values()];
  const { resolveVirtualDependency } = ctx.file.markoOpts;
  const filename = ctx.file.opts.filename as string;

  if (resolveVirtualDependency) {
    const program = t.program(
      entries.map((entry, i) =>
        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(t.identifier(`_fn${i}`), factoryExpr(entry)),
          ]),
        ),
      ),
    );
    const code = generateCode(program);
    const hash = createHash("sha256").update(code).digest("hex").slice(0, 8);
    const importPath = resolveVirtualDependency(filename, {
      virtualPath: `./${path.basename(filename)}.comptime.${hash}.js`,
      code,
    });
    if (importPath) {
      entries.forEach((entry, i) => {
        const local = importNamed(
          ctx.file,
          importPath,
          `_fn${i}`,
          entry.placeholder,
        );
        for (const ref of entry.refs) ref.name = local.name;
      });
      return [];
    }
  }

  return entries.map((entry) =>
    t.variableDeclaration("const", [
      t.variableDeclarator(t.identifier(entry.placeholder), factoryExpr(entry)),
    ]),
  );
}

function factoryExpr(entry: FactoryEntry): t.ArrowFunctionExpression {
  const fn = stripRegistrations(cloneForExpansion(entry.record.node));
  const expr = t.isFunctionDeclaration(fn)
    ? t.functionExpression(fn.id, fn.params, fn.body, fn.generator, fn.async)
    : (fn as t.FunctionExpression | t.ArrowFunctionExpression);
  return t.arrowFunctionExpression(
    entry.record.captures.map((name) => t.identifier(name)),
    expr,
  );
}

/** Removes nested `$ctReg(fn, ...)` instrumentation wrappers for emission. */
function stripRegistrations<T extends t.Node>(node: T): T {
  const strip = (value: any): any => {
    if (Array.isArray(value)) {
      for (let i = 0; i < value.length; i++) value[i] = strip(value[i]);
      return value;
    }
    if (!value || typeof value.type !== "string") return value;
    if (
      value.type === "CallExpression" &&
      value.callee.type === "Identifier" &&
      value.callee.name === FN_REG_NAME
    ) {
      return strip(value.arguments[0]);
    }
    for (const key of Object.keys(value)) {
      if (key === "loc" || key === "extra") continue;
      value[key] = strip(value[key]);
    }
    return value;
  };
  return strip(node);
}

function generateCode(program: t.Program): string {
  return generator(program as any, { compact: false, sourceMaps: false }).code;
}

// Lowering: scriptlets become the runtime-referenced subset (plain imports
// + `static const`s), wrapped by the serializer's decls/assigns.
function lower(ctx: PassContext) {
  const unit = ctx.callerUnit;
  const bindings = unit.evaluated!.getBindings();
  const body: t.Statement[] = [];

  for (const node of ctx.program.node.body) {
    if (t.isMarkoScriptlet(node) && node.target === "comptime") {
      const record = unit.scriptlets.find((record) => record.node === node)!;

      for (const importRecord of record.imports) {
        if (importRecord.usedAtRuntime) {
          body.push(importRecord.node);
        }
      }

      const decls: t.Statement[] = [];
      for (const name of record.bindingNames) {
        if (unit.usedModuleBindings.has(name)) {
          currentNodeStack.push(node);
          try {
            decls.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.identifier(name),
                  serializeValue(ctx.serialize!, bindings[name]),
                ),
              ]),
            );
          } finally {
            currentNodeStack.pop();
          }
        }
      }
      if (decls.length) {
        body.push(t.markoScriptlet(decls, true));
      }
    } else {
      body.push(node);
    }
  }

  // Comptime bindings and imports of expanded files, under caller-side names.
  const childStatements: t.Statement[] = [];
  for (const child of ctx.units.values()) {
    const childBindings = child.evaluated!.getBindings();
    for (const record of child.importRecords) {
      if (record.usedAtRuntime) {
        childStatements.push(renamedImport(child, record.node));
      }
    }
    const decls: t.Statement[] = [];
    for (const scriptlet of child.scriptlets) {
      for (const name of scriptlet.bindingNames) {
        if (child.usedModuleBindings.has(name)) {
          currentNodeStack.push(scriptlet.node);
          try {
            decls.push(
              t.variableDeclaration("const", [
                t.variableDeclarator(
                  t.identifier(emittedName(child, name)),
                  serializeValue(ctx.serialize!, childBindings[name]),
                ),
              ]),
            );
          } finally {
            currentNodeStack.pop();
          }
        }
      }
    }
    if (decls.length) {
      childStatements.push(t.markoScriptlet(decls, true));
    }
  }

  // The body must be live before finalize: virtual-module imports land in it.
  ctx.program.node.body = body;
  const factories = finalizeFunctions(ctx);
  const { decls, assigns } = ctx.serialize!;
  const prelude: t.Statement[] = [];
  if (factories.length) prelude.push(t.markoScriptlet(factories, true));
  if (decls.length) prelude.push(t.markoScriptlet(decls, true));
  prelude.push(...childStatements, ...ctx.moduleSplices);
  body.unshift(...prelude);
  if (assigns.length) {
    body.push(t.markoScriptlet(assigns, true));
  }
}

/** Re-emits an expanded file's `comptime import` with caller-side locals. */
function renamedImport(unit: Unit, node: t.ImportDeclaration) {
  const clone = cloneForExpansion(node);
  for (const specifier of clone.specifiers) {
    specifier.local = t.identifier(emittedName(unit, specifier.local.name));
  }
  return clone;
}
