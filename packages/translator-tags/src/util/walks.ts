import { types as t } from "@marko/compiler";
import { WalkCode, WalkRangeSize } from "@marko/runtime-tags/common/types";
import { ReserveType } from "../util/reserve";
import {
  type Section,
  createSectionState,
  getSection,
  ContentType,
} from "../util/sections";
import { isOutputHTML } from "./marko-config";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { writeTo } from "./writer";

const [getWalks] = createSectionState<(string | t.Expression)[]>(
  "walks",
  () => [""],
);
const [getWalkComment] = createSectionState<(string | t.Expression)[]>(
  "walkComment",
  () => [],
);
const [getSteps] = createSectionState<Step[]>("steps", () => []);

export enum Step {
  Enter,
  Exit,
}

const walkCodeToName = {
  [WalkCode.Get]: "get",
  [WalkCode.Before]: "before",
  [WalkCode.After]: "after",
  [WalkCode.Inside]: "inside",
  [WalkCode.Replace]: "replace",
  [WalkCode.EndChild]: "endChild",
  [WalkCode.BeginChild]: "beginChild",
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
  | WalkCode.Before
  | WalkCode.After
  | WalkCode.Inside
  | WalkCode.Replace;

export function enter(path: t.NodePath<any>) {
  getSteps(getSection(path)).push(Step.Enter);
}

export function exit(path: t.NodePath<any>) {
  getSteps(getSection(path)).push(Step.Exit);
}

export function enterShallow(path: t.NodePath<any>) {
  getSteps(getSection(path)).push(Step.Enter, Step.Exit);
}

export function injectWalks(path: t.NodePath<any>, expr: t.Expression) {
  const walks = getWalks(getSection(path));
  const walkComment = getWalkComment(getSection(path));
  walkComment.push(
    `${walkCodeToName[WalkCode.BeginChild]}`,
    (expr as t.Identifier).name,
    walkCodeToName[WalkCode.EndChild],
  );
  appendLiteral(walks, String.fromCharCode(WalkCode.BeginChild));
  walks.push(expr, String.fromCharCode(WalkCode.EndChild));
}

export function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder | t.Program>,
  code?: VisitCodes,
) {
  const { reserve } = path.node.extra!;
  if (code && (!reserve || reserve.type !== ReserveType.Visit)) {
    throw path.buildCodeFrameError(
      "Tried to visit a node that was not marked as needing to visit during analyze.",
    );
  }

  if (isOutputHTML()) {
    return;
  }

  const section = getSection(path);
  const steps = getSteps(section);
  const walks = getWalks(section);
  const walkComment = getWalkComment(section);

  let walkString = "";

  if (steps.length) {
    const walks: WalkCode[] = [];
    let depth = 0;

    for (const step of steps) {
      if (step === Step.Enter) {
        depth++;
        walks.push(WalkCode.Next);
      } else {
        depth--;
        if (depth >= 0) {
          // delete back to and including previous NEXT
          walks.length = walks.lastIndexOf(WalkCode.Next);
          walks.push(WalkCode.Over);
        } else {
          // delete back to previous OUT
          walks.length = walks.lastIndexOf(WalkCode.Out) + 1;
          walks.push(WalkCode.Out);
          depth = 0;
        }
      }
    }

    let current = walks[0];
    let count = 0;

    for (const walk of walks) {
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
  }

  if (code !== undefined) {
    if (code !== WalkCode.Get) {
      writeTo(path)`<!>`;
    }
    walkComment.push(`${walkCodeToName[code]}`);
    walkString += String.fromCharCode(code);
  }

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
  const prefix =
    section.startNodeContentType === ContentType.Dynamic
      ? String.fromCharCode(WalkCode.Next + 1)
      : "";
  const postfix =
    section.endNodeContentType === ContentType.Dynamic
      ? String.fromCharCode(WalkCode.Next + 1)
      : "";
  const walks = getWalks(section);
  const walkLiteral =
    toTemplateOrStringLiteral([prefix, ...walks, postfix]) ||
    t.stringLiteral("");
  if ((walkLiteral as t.StringLiteral).value !== "") {
    walkLiteral.leadingComments = [
      {
        type: "CommentBlock",
        value: " " + getWalkComment(section).join(", ") + " ",
      } as t.CommentBlock,
    ] as const;
  }
  return walkLiteral;
}
