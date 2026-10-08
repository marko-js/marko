import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { ReservedId, WalkCode, WalkRangeSize } from "../../common/types";
import type { LoadImportConfig } from "../visitors/import-declaration";
import { type Binding, BindingType, createBinding } from "./bindings";
import * as Step from "./constants/step";
import { generateUidIdentifier } from "./generate-uid";
import { getParentTag } from "./get-parent-tag";
import { importOrSelfReferenceName } from "./import-reference";
import { getOnlyChildParentTagName } from "./is-only-child-in-parent";
import { isOutputHTML } from "./marko-config";
import { toModuleReadExpression } from "./module-read";
import normalizeStringExpression, {
  appendLiteral,
} from "./normalize-string-expression";
import {
  ContentType,
  getSection,
  getSectionForBody,
  type Section,
  StructureKind,
  type StructureOp,
  type StructureNode,
  type StructureRef,
} from "./sections";
import { createProgramState, createSectionState } from "./state";
import { withLeadingComment } from "./with-comment";

const walkCodeToName = {
  [WalkCode.Get]: "get",
  [WalkCode.Replace]: "replace",
  [WalkCode.EndChild]: "endChild",
  [WalkCode.BeginChild]: "beginChild",
  [WalkCode.BeginChildWithVar]: "beginChildWithVar",
  [WalkCode.DynamicTagWithVar]: "dynamicTagWithVar",
  [WalkCode.Next]: "next",
  [WalkCode.Over]: "over",
  [WalkCode.Out]: "out",
  [WalkCode.Multiplier]: "multiplier",
  [WalkCode.NextEnd]: "nextEnd",
  [WalkCode.OverEnd]: "overEnd",
  [WalkCode.OutEnd]: "outEnd",
  [WalkCode.MultiplierEnd]: "multiplierEnd",
};

export function enter(path: t.NodePath<any>) {
  getSection(path).structure?.push(Step.Enter);
}

export function exit(path: t.NodePath<any>) {
  getSection(path).structure?.push(Step.Exit);
}

export function enterShallow(path: t.NodePath<any>) {
  getSection(path).structure?.push(Step.Enter, Step.Exit);
}

export function child(
  tag: t.NodePath<t.MarkoTag>,
  name: string,
  renderer?: StructureRef,
  load?: LoadImportConfig,
) {
  getSection(tag).structure?.push({
    kind: StructureKind.Child,
    name,
    binding: tag.node.extra!.nodeBinding!,
    renderer,
    load,
  });
}

// Shells the client template's markup into the section structure stream.
export function writeTo(path: t.NodePath<any>) {
  const { structure } = getSection(path);
  return (strs: TemplateStringsArray, ...exprs: string[]): void => {
    if (!structure) return;
    const exprsLen = exprs.length;
    pushMarkup(structure, strs[0]);

    for (let i = 0; i < exprsLen; i++) {
      pushMarkup(structure, exprs[i]);
      pushMarkup(structure, strs[i + 1]);
    }
  };
}

export function writeModuleReadTo(path: t.NodePath<any>, read: string[]) {
  getSection(path).structure?.push({
    kind: StructureKind.ModuleRead,
    read,
  });
}

export function writeTextTo(path: t.NodePath<any>, value: string) {
  if (value) {
    getSection(path).structure?.push({ kind: StructureKind.Text, value });
  }
}

function pushMarkup(structure: StructureOp[], str: string) {
  if (!str) return;
  const last = structure.length - 1;
  if (typeof structure[last] === "string") {
    structure[last] += str;
  } else {
    structure.push(str);
  }
}

// A node the markup renders, held in `binding` (set later while unknown).
export function node(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  binding?: Binding,
) {
  return addNode(path, binding, false);
}

// A `<!>` marker that what renders in its place replaces.
export function marker(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  binding: Binding,
) {
  addNode(path, binding, true);
}

// A control flow tag that is its element's only child is addressed by that
// element, else by a marker of its own.
export function controlFlowNode(tag: t.NodePath<t.MarkoTag>, section: Section) {
  const extra = (tag.node.extra ??= {});
  if (getOnlyChildParentTagName(tag)) {
    const parentTag = getParentTag(tag)!.node;
    const parentTagName = (parentTag.name as t.StringLiteral).value;
    return (extra.nodeBinding = (parentTag.extra ??= {}).nodeBinding ??=
      createBinding(
        "#" + parentTagName.toLowerCase(),
        BindingType.dom,
        section,
      ));
  }

  const binding = (extra.nodeBinding = createBinding(
    "#text",
    BindingType.dom,
    section,
  ));
  marker(tag, binding);
  enterShallow(tag);
  return binding;
}

function addNode(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  binding: Binding | undefined,
  marker: boolean,
) {
  const { structure } = getSection(path);
  if (!structure) return;
  const op: StructureNode = {
    kind: StructureKind.Node,
    binding,
    marker,
  };
  structure.push(op);
  return op;
}

type ResolvedPart = string | t.Expression;
interface ResolvedStructure {
  writes: ResolvedPart[];
  walks: ResolvedPart[];
  walkComment: string[];
  steps: Step.Value[];
}

// Resolves a section's structure stream into its inert template markup and the
// walk string claiming each visited node, including dynamic content edges.
export function resolveStructure(section: Section, shell: boolean) {
  const startDynamic = section.content?.startType === ContentType.Dynamic;
  const resolved: ResolvedStructure = {
    writes: [startDynamic ? "<!>" : ""],
    walks: [""],
    walkComment: [],
    steps: startDynamic ? [Step.Enter, Step.Exit] : [],
  };
  let textEdge: undefined | "own" | "child";
  let skipSteps = 0;

  for (const op of section.structure!) {
    if (typeof op === "string") {
      appendLiteral(resolved.writes, op);
      textEdge = undefined;
    } else if (typeof op === "number") {
      if (skipSteps) skipSteps--;
      else resolved.steps.push(op);
    } else {
      switch (op.kind) {
        case StructureKind.Text:
          if (textEdge === "child") {
            separate(resolved);
          }
          appendLiteral(resolved.writes, op.value);
          textEdge = "own";
          break;
        case StructureKind.ModuleRead:
          resolved.writes.push(toModuleReadExpression(op.read), "");
          textEdge = undefined;
          break;
        case StructureKind.Node: {
          if (!op.binding) continue;
          const withVar = hasScopeOffset(op.binding);
          const code = op.marker
            ? withVar
              ? WalkCode.DynamicTagWithVar
              : WalkCode.Replace
            : WalkCode.Get;
          flushSteps(resolved);
          resolved.walkComment.push(walkCodeToName[code]);
          appendLiteral(resolved.walks, String.fromCharCode(code));
          if (op.marker) {
            appendLiteral(resolved.writes, "<!>");
            textEdge = undefined;
          }
          break;
        }
        case StructureKind.Child: {
          const withVar = hasScopeOffset(op.binding);
          // A shell composes a lazy child, as the flush creating it waits for
          // its module; the dom template leaves one to its own load.
          const composed = shell && !!op.load;
          const renderer = op.load && !composed ? undefined : op.renderer;
          if (composed) {
            // The walk steps over the marker into the composed child; the
            // tag's own shallow steps after the child are dropped.
            resolved.steps.push(Step.Enter, Step.Exit);
            skipSteps = 2;
          }
          const content = refContent(renderer);
          // A child with no content has no node for the walker to reach.
          if (content) {
            if (textEdge && content.startType === ContentType.Text) {
              separate(resolved);
            }
            textEdge =
              content.endType === ContentType.Text ? "child" : undefined;
            flushSteps(resolved);
          }
          const template = renderer && resolveRef(renderer, "template");
          if (template) {
            resolved.writes.push(template, "");
          }
          resolved.walkComment.push(`<${op.name}${withVar ? "/var" : ""}>`);
          appendLiteral(
            resolved.walks,
            String.fromCharCode(
              withVar ? WalkCode.BeginChildWithVar : WalkCode.BeginChild,
            ),
          );
          const walks = renderer && resolveRef(renderer, "walks");
          if (walks) {
            resolved.walks.push(walks, "");
          }
          appendLiteral(resolved.walks, String.fromCharCode(WalkCode.EndChild));
          break;
        }
      }
    }
  }

  if (section.content?.endType === ContentType.Dynamic) {
    appendLiteral(resolved.writes, "<!>");
    resolved.steps.push(Step.Enter, Step.Exit);
  }

  flushSteps(resolved);
  return resolved;
}

// A dom binding reserves only its scope offset, which the walker holds right
// after the node.
export function hasScopeOffset(nodeBinding: Binding) {
  return nodeBinding.reserveSize >= ReservedId.ScopeOffset;
}

function separate(resolved: ResolvedStructure) {
  appendLiteral(resolved.writes, "<!>");
  resolved.steps.push(Step.Enter, Step.Exit);
}

function refContent(ref: StructureRef | undefined) {
  const section =
    ref &&
    (ref.kind === StructureKind.SectionRef ? ref.section : ref.program.section);
  return section?.content;
}

// A ref reads this compile's identifier for a renderer part: a sibling
// section's hoisted constant, or a child export (imported unless this program).
function resolveRef(ref: StructureRef, part: "template" | "walks") {
  if (ref.kind === StructureKind.SectionRef) {
    return getSectionMetaIdentifiers(ref.section)[
      part === "template" ? "writes" : "walks"
    ];
  }
  const name = ref.program.exportNames![part];
  // Sections survive the per-compile AST clone; the extra objects do not.
  return ref.program.section === getProgram().node.extra.section
    ? t.identifier(name)
    : importOrSelfReferenceName(
        getFile(),
        ref.path,
        name,
        `${ref.hint}_${part}`,
      );
}

interface SectionMeta {
  walks: t.Expression | undefined;
  writes: t.Expression | undefined;
}

export const [getSectionMeta] = createSectionState<SectionMeta>(
  "SectionMeta",
  (section) => {
    if (!section.structure || section.pruned) {
      return { walks: undefined, writes: undefined };
    }
    const { writes, walks, walkComment } = resolveStructure(
      section,
      isOutputHTML(),
    );
    const walkLiteral = normalizeStringExpression(walks, true);
    if (walkLiteral && (walkLiteral as t.StringLiteral).value !== "") {
      withLeadingComment(walkLiteral, walkComment.join(", "));
    }
    return {
      walks: walkLiteral,
      writes: normalizeStringExpression(writes, true),
    };
  },
);

// Writes the program's template and walks exports, preceded by the constants
// hoisted for referenced sections. Every needed section meta must exist first.
export function writeStructureExports(program: t.NodePath<t.Program>) {
  const { walks, writes } = getSectionMeta(getSectionForBody(program)!);
  const exportNames = program.node.extra.exportNames!;
  const decls = getMetaDecls();
  program.node.body.unshift(
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(exportNames.template),
          writes || t.stringLiteral(""),
        ),
      ]),
    ),
    t.exportNamedDeclaration(
      t.variableDeclaration("const", [
        t.variableDeclarator(
          t.identifier(exportNames.walks),
          walks || t.stringLiteral(""),
        ),
      ]),
    ),
  );

  if (decls.length) {
    program.node.body.unshift(t.variableDeclaration("const", decls));
  }
}

// Naming a section's parts first resolves its meta, which names the sections
// it references, so this list is always in dependency order.
const [getMetaDecls] = createProgramState<t.VariableDeclarator[]>(() => []);
const sectionMetaIsIds = new WeakSet<SectionMeta>();
export function getSectionMetaIdentifiers(section: Section) {
  const meta = getSectionMeta(section);
  if (!sectionMetaIsIds.has(meta)) {
    sectionMetaIsIds.add(meta);
    const { walks, writes } = meta;
    const decls = getMetaDecls();

    if (walks) {
      meta.walks = generateUidIdentifier(`${section.name}__walks`);
      decls.push(t.variableDeclarator(meta.walks, walks));
    }
    if (writes) {
      meta.writes = generateUidIdentifier(`${section.name}__template`);
      decls.push(t.variableDeclarator(meta.writes, writes));
    }
  }

  return meta;
}

function flushSteps({ walks, walkComment, steps }: ResolvedStructure) {
  if (!steps.length) return;

  const walkCodes: WalkCode[] = [];
  let walkString = "";
  let depth = 0;

  for (const step of steps) {
    if (step === Step.Enter) {
      depth++;
      walkCodes.push(WalkCode.Next);
    } else {
      depth--;
      if (depth >= 0) {
        // delete back to and including previous NEXT
        walkCodes.length = walkCodes.lastIndexOf(WalkCode.Next);
        walkCodes.push(WalkCode.Over);
      } else {
        // delete back to previous OUT
        walkCodes.length = walkCodes.lastIndexOf(WalkCode.Out) + 1;
        walkCodes.push(WalkCode.Out);
        depth = 0;
      }
    }
  }

  // annotated because `let` widens a union of number literals to `number`
  let current: WalkCode = walkCodes[0];
  let count = 0;

  for (const walk of walkCodes) {
    if (walk !== current) {
      walkComment.push(`${walkCodeToName[current]}(${count})`);
      walkString += nCodeString(current, count);
      current = walk;
      count = 1;
    } else {
      count++;
    }
  }

  walkComment.push(`${walkCodeToName[current]}(${count})`);
  walkString += nCodeString(current, count);
  steps.length = 0;
  appendLiteral(walks, walkString);
}

function nCodeString(code: WalkCode, number: number) {
  switch (code) {
    case WalkCode.Next:
      return toCharString(number, code, WalkRangeSize.Next);
    case WalkCode.Over:
      return toCharString(number, code, WalkRangeSize.Over);
    case WalkCode.Out:
      return toCharString(number, code, WalkRangeSize.Out);
    default:
      throw new Error(`Unexpected walk code: ${code}`);
  }
}

function toCharString(number: number, startCode: number, rangeSize: number) {
  let result = "";

  if (number >= rangeSize) {
    const multiplier = Math.floor(number / rangeSize);
    result += toCharString(
      multiplier,
      WalkCode.Multiplier,
      WalkRangeSize.Multiplier,
    );
    number -= multiplier * rangeSize;
  }

  result += String.fromCharCode(startCode + number);
  return result;
}

/** `_content` strips trailing exit codes before it walks, so a renderer that
 * reaches the runtime through it never needs them on the wire. */
export function trimTrailingExits(walks: t.Expression | undefined) {
  if (!t.isStringLiteral(walks)) return walks;
  const value = walks.value.replace(/[^\0-1]+$/, "");
  return value === walks.value
    ? walks
    : value
      ? withLeadingComment(t.stringLiteral(value), getComment(walks))
      : undefined;
}

function getComment(node: t.Node) {
  return node.leadingComments?.[0]?.value.trim() || "";
}
