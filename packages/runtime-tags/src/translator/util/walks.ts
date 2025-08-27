import { types as t } from "@marko/compiler";

import { WalkCode, WalkRangeSize } from "../../common/types";
import { ContentType, getSection, type Section } from "../util/sections";
import { isOutputHTML } from "./marko-config";
import normalizeStringExpression, {
  appendLiteral,
} from "./normalize-string-expression";
import { createSectionState } from "./state";
import { withLeadingComment } from "./with-comment";
import { writeTo } from "./writer";

const [getWalks] = createSectionState<(string | t.Expression)[]>(
  "walks",
  () => [""],
);
const [getWalkComment] = createSectionState<(string | t.Expression)[]>(
  "walkComment",
  () => [],
);
const [getSteps] = createSectionState<Step[]>("steps", (section) => {
  if (section.content?.startType === ContentType.Dynamic) {
    return [Step.Enter, Step.Exit];
  }

  return [];
});

export enum Step {
  Enter,
  Exit,
}

const walkCodeToName = {
  [WalkCode.Get]: "get",
  [WalkCode.Inside]: "inside",
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

type VisitCodes =
  | WalkCode.Get
  | WalkCode.Inside
  | WalkCode.Replace
  | WalkCode.DynamicTagWithVar;

export function enter(path: t.NodePath<any>) {
  const steps = getSteps(getSection(path));
  steps.push(Step.Enter);
}

export function exit(path: t.NodePath<any>) {
  const steps = getSteps(getSection(path));
  steps.push(Step.Exit);
}

export function enterShallow(path: t.NodePath<any>) {
  const section = getSection(path);
  const steps = getSteps(section);
  steps.push(Step.Enter, Step.Exit);
}

export function injectWalks(tag: t.NodePath<t.MarkoTag>, expr: t.Expression) {
  const section = getSection(tag);
  const walks = getWalks(section);
  const walkComment = getWalkComment(section);
  visitInternal(section);
  walkComment.push(
    `${walkCodeToName[tag.node.var ? WalkCode.BeginChildWithVar : WalkCode.BeginChild]}`,
    (expr as t.Identifier).name,
    walkCodeToName[WalkCode.EndChild],
  );
  appendLiteral(
    walks,
    String.fromCharCode(
      tag.node.var ? WalkCode.BeginChildWithVar : WalkCode.BeginChild,
    ),
  );
  walks.push(expr, String.fromCharCode(WalkCode.EndChild));
}

export function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder | t.Program>,
  code: VisitCodes,
) {
  // const { binding } = path.node.extra!;
  // if (code && (!binding || binding.type !== BindingType.dom)) {
  //   throw path.buildCodeFrameError(
  //     "Tried to visit a node that was not marked as needing to visit during analyze.",
  //   );
  // }

  if (isOutputHTML()) {
    return;
  }

  const section = getSection(path);
  const walks = getWalks(section);
  const walkComment = getWalkComment(section);
  visitInternal(section);

  if (code !== WalkCode.Get) {
    writeTo(path)`<!>`;
  }

  walkComment.push(`${walkCodeToName[code]}`);
  appendLiteral(walks, String.fromCharCode(code));
}

function visitInternal(section: Section) {
  const steps = getSteps(section);
  if (!steps.length) return;

  const walks = getWalks(section);
  const walkComment = getWalkComment(section);
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

  let current = walkCodes[0];
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

export function getWalkString(section: Section) {
  if (section.content?.endType === ContentType.Dynamic) {
    getSteps(section).push(Step.Enter, Step.Exit);
  }

  visitInternal(section);
  const walks = getWalks(section);
  const walkLiteral = normalizeStringExpression(walks);
  if (walkLiteral && (walkLiteral as t.StringLiteral).value !== "") {
    withLeadingComment(walkLiteral, getWalkComment(section).join(", "));
  }
  return walkLiteral;
}
