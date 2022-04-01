import { types as t } from "@marko/compiler";
import { createSectionState, getSectionId } from "../util/sections";
import { ReserveType } from "../util/reserve";
import { isOutputHTML } from "./marko-config";
import { callRuntime } from "./runtime";
import toTemplateOrStringLiteral, {
  appendLiteral,
} from "./to-template-string-or-literal";
import { writeTo } from "./writer";

const [getWalks] = createSectionState<(string | t.Expression)[]>(
  "walks",
  () => [""]
);
const [getWalkComment] = createSectionState<(string | t.Expression)[]>(
  "walkComment",
  () => []
);
const [getSteps] = createSectionState<Step[]>("steps", () => []);

export enum WalkCodes {
  Get = 32,
  Before = 33,
  After = 35,
  Inside = 36,
  Replace = 37,
  EndChild = 38,

  Skip = 40,
  SkipEnd = 46,

  BeginChild = 47,
  BeginChildEnd = 66,

  Next = 67,
  NextEnd = 91,

  Over = 97,
  OverEnd = 106,

  Out = 107,
  OutEnd = 116,

  Multiplier = 117,
  MultiplierEnd = 126,
}

export enum WalkRangeSizes {
  Skip = 7, // 40 through 46
  BeginChild = 20, // 47 through 66
  Next = 20, // 67 through 91
  Over = 10, // 97 through 106
  Out = 10, // 107 through 116
  Multiplier = 10, // 117 through 126
}

export enum Step {
  enter,
  exit,
}

const walkCodeToName = {
  [WalkCodes.Get]: "get",
  [WalkCodes.Before]: "before",
  [WalkCodes.After]: "after",
  [WalkCodes.Inside]: "inside",
  [WalkCodes.Replace]: "replace",
  [WalkCodes.EndChild]: "endChild",
  [WalkCodes.Skip]: "skip",
  [WalkCodes.BeginChild]: "beginChild",
  [WalkCodes.Next]: "next",
  [WalkCodes.Over]: "over",
  [WalkCodes.Out]: "out",
  [WalkCodes.Multiplier]: "multiplier",
  [WalkCodes.SkipEnd]: "skipEnd",
  [WalkCodes.BeginChildEnd]: "beginChildEnd",
  [WalkCodes.NextEnd]: "nextEnd",
  [WalkCodes.OverEnd]: "overEnd",
  [WalkCodes.OutEnd]: "outEnd",
  [WalkCodes.MultiplierEnd]: "multiplierEnd",
};

type VisitCodes =
  | WalkCodes.Get
  | WalkCodes.Before
  | WalkCodes.After
  | WalkCodes.Inside
  | WalkCodes.Replace;

export function enter(path: t.NodePath<any>) {
  getSteps(getSectionId(path)).push(Step.enter);
}

export function exit(path: t.NodePath<any>) {
  getSteps(getSectionId(path)).push(Step.exit);
}

export function enterShallow(path: t.NodePath<any>) {
  getSteps(getSectionId(path)).push(Step.enter, Step.exit);
}

export function injectWalks(
  path: t.NodePath<any>,
  childIndex: number,
  expr: t.Expression
) {
  const walks = getWalks(getSectionId(path));
  const walkComment = getWalkComment(getSectionId(path));
  walkComment.push(
    `${walkCodeToName[WalkCodes.BeginChild]}(${childIndex})`,
    (expr as t.Identifier).name,
    walkCodeToName[WalkCodes.EndChild]
  );
  appendLiteral(walks, nCodeString(WalkCodes.BeginChild, childIndex));
  walks.push(expr, String.fromCharCode(WalkCodes.EndChild));
}

export function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder | t.Program>,
  code?: VisitCodes
) {
  const { reserve } = path.node.extra;
  if (code && (!reserve || reserve.type !== ReserveType.Visit)) {
    throw path.buildCodeFrameError(
      "Tried to visit a node that was not marked as needing to visit during analyze."
    );
  }

  const sectionId = getSectionId(path);
  const steps = getSteps(sectionId);
  const walks = getWalks(sectionId);
  const walkComment = getWalkComment(sectionId);

  if (code && isOutputHTML()) {
    writeTo(path)`${callRuntime(
      "markHydrateNode",
      t.numericLiteral(reserve!.id)
    )}`;
  } else {
    let walkString = "";

    if (steps.length) {
      const walks: WalkCodes[] = [];
      let depth = 0;

      for (const step of steps) {
        if (step === Step.enter) {
          depth++;
          walks.push(WalkCodes.Next);
        } else {
          depth--;
          if (depth >= 0) {
            // delete back to and including previous NEXT
            walks.length = walks.lastIndexOf(WalkCodes.Next);
            walks.push(WalkCodes.Over);
          } else {
            // delete back to previous OUT
            walks.length = walks.lastIndexOf(WalkCodes.Out) + 1;
            walks.push(WalkCodes.Out);
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
      if (code !== WalkCodes.Get) {
        writeTo(path)`<!>`;
      }
      walkComment.push(`${walkCodeToName[code]}`);
      walkString += String.fromCharCode(code);
    }

    if (reserve?.size) {
      walkComment.push(`${walkCodeToName[WalkCodes.Skip]}(${reserve.size})`);
      walkString += nCodeString(WalkCodes.Skip, reserve.size);
    }

    appendLiteral(walks, walkString);
  }
}

function nCodeString(code: WalkCodes, number: number) {
  switch (code) {
    case WalkCodes.Next:
      return toCharString(number, code, WalkRangeSizes.Next);
    case WalkCodes.Over:
      return toCharString(number, code, WalkRangeSizes.Over);
    case WalkCodes.Out:
      return toCharString(number, code, WalkRangeSizes.Out);
    case WalkCodes.BeginChild:
      return toCharString(number, code, WalkRangeSizes.BeginChild);
    case WalkCodes.Skip:
      return toCharString(number, code, WalkRangeSizes.Skip);
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
      WalkCodes.Multiplier,
      WalkRangeSizes.Multiplier
    );
    number -= multiplier * rangeSize;
  }

  result += String.fromCharCode(startCode + number);
  return result;
}

export function getWalkString(sectionId: number) {
  const walkLiteral =
    toTemplateOrStringLiteral(getWalks(sectionId)) || t.stringLiteral("");
  if ((walkLiteral as t.StringLiteral).value !== "") {
    walkLiteral.leadingComments = [
      {
        type: "CommentBlock",
        value: " " + getWalkComment(sectionId).join(", ") + " ",
      } as t.CommentBlock,
    ] as const;
  }
  return walkLiteral;
}
