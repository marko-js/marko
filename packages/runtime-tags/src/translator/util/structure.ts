import { types as t } from "@marko/compiler";
import { getFile, getProgram } from "@marko/compiler/babel-utils";

import { WalkCode, WalkRangeSize } from "../../common/types";
import * as Step from "./constants/step";
import { generateUidIdentifier } from "./generate-uid";
import { importOrSelfReferenceName } from "./import-reference";
import normalizeStringExpression, {
  appendLiteral,
} from "./normalize-string-expression";
import {
  ContentType,
  getSection,
  type Section,
  StructureKind,
  type StructureOp,
  type StructureRef,
  type StructureVisit,
} from "./sections";
import { createSectionState } from "./state";
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
) {
  getSection(tag).structure?.push({
    kind: StructureKind.Child,
    name,
    hasVar: !!tag.node.var,
    renderer,
  });
}

// Records the client template's markup into the section structure stream.
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

function pushMarkup(structure: StructureOp[], str: string) {
  if (!str) return;
  const last = structure.length - 1;
  if (typeof structure[last] === "string") {
    structure[last] += str;
  } else {
    structure.push(str);
  }
}

export function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder | t.Program>,
  code: StructureVisit["code"],
  claimed = true,
) {
  const { structure } = getSection(path);
  if (!structure) return;
  const op: StructureVisit = { kind: StructureKind.Visit, code, claimed };
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
export function resolveStructure(section: Section) {
  const startDynamic = section.content?.startType === ContentType.Dynamic;
  const resolved: ResolvedStructure = {
    writes: [startDynamic ? "<!>" : ""],
    walks: [""],
    walkComment: [],
    steps: startDynamic ? [Step.Enter, Step.Exit] : [],
  };

  for (const op of section.structure!) {
    if (typeof op === "string") {
      appendLiteral(resolved.writes, op);
    } else if (typeof op === "number") {
      resolved.steps.push(op);
    } else {
      switch (op.kind) {
        case StructureKind.Visit:
          if (!op.claimed) continue;
          flushSteps(resolved);
          resolved.walkComment.push(walkCodeToName[op.code]);
          appendLiteral(resolved.walks, String.fromCharCode(op.code));
          if (op.code !== WalkCode.Get) {
            appendLiteral(resolved.writes, "<!>");
          }
          break;
        case StructureKind.Child: {
          flushSteps(resolved);
          const template = op.renderer && resolveRef(op.renderer, "template");
          if (template) {
            resolved.writes.push(template, "");
          }
          resolved.walkComment.push(`<${op.name}${op.hasVar ? "/var" : ""}>`);
          appendLiteral(
            resolved.walks,
            String.fromCharCode(
              op.hasVar ? WalkCode.BeginChildWithVar : WalkCode.BeginChild,
            ),
          );
          const walks = op.renderer && resolveRef(op.renderer, "walks");
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

// A ref reads this compile's identifier for a renderer part: a sibling
// section's hoisted constant, or a child export (imported unless this program).
function resolveRef(ref: StructureRef, part: "template" | "walks") {
  if (ref.kind === StructureKind.SectionRef) {
    return getSectionMetaIdentifiers(ref.section)[
      part === "template" ? "writes" : "walks"
    ];
  }
  const name = ref.program.domExports![part];
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
  decls: t.VariableDeclarator[] | undefined;
}

export const [getSectionMeta] = createSectionState<SectionMeta>(
  "SectionMeta",
  (section) => {
    if (!section.structure) {
      return { walks: undefined, writes: undefined, decls: undefined };
    }
    const { writes, walks, walkComment } = resolveStructure(section);
    const walkLiteral = normalizeStringExpression(walks, true);
    if (walkLiteral && (walkLiteral as t.StringLiteral).value !== "") {
      withLeadingComment(walkLiteral, walkComment.join(", "));
    }
    return {
      walks: walkLiteral,
      writes: normalizeStringExpression(writes, true),
      decls: undefined,
    };
  },
);

const sectionMetaIsIds = new WeakSet<SectionMeta>();
export function getSectionMetaIdentifiers(section: Section) {
  const meta = getSectionMeta(section);
  if (!sectionMetaIsIds.has(meta)) {
    sectionMetaIsIds.add(meta);
    const { walks, writes } = meta;
    const decls: t.VariableDeclarator[] = [];

    if (walks) {
      meta.walks = generateUidIdentifier(`${section.name}__walks`);
      decls.push(t.variableDeclarator(meta.walks, walks));
    }
    if (writes) {
      meta.writes = generateUidIdentifier(`${section.name}__template`);
      decls.push(t.variableDeclarator(meta.writes, writes));
    }

    if (decls.length) {
      meta.decls = decls;
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
