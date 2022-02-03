import { types as t } from "@marko/compiler";
import {
  ReserveType,
  createSectionState,
  getSectionId,
} from "../util/sections";
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
const [getSteps] = createSectionState<Step[]>("steps", () => []);

export enum WalkCodes {
  Get = 32,
  Before = 33,
  After = 35,
  Inside = 36,
  Replace = 37,
  Close = 38,

  Skip = 40,
  SkipEnd = 46,

  Open = 47,
  OpenEnd = 66,

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
  Open = 20, // 47 through 66
  Next = 20, // 67 through 91
  Over = 10, // 97 through 106
  Out = 10, // 107 through 116
  Multiplier = 10, // 117 through 126
}

export enum Step {
  enter,
  exit,
}

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

export function injectWalks(path: t.NodePath<any>, expr: t.Expression) {
  getWalks(getSectionId(path)).push(expr, "");
}

export function visit(
  path: t.NodePath<t.MarkoTag | t.MarkoPlaceholder>,
  code?: VisitCodes
) {
  const { reserve } = path.node.extra;
  if (!reserve || reserve.type !== ReserveType.Visit) {
    throw path.buildCodeFrameError(
      "Tried to visit a node that was not marked as needing to visit during analyze."
    );
  }

  const sectionId = getSectionId(path);
  const steps = getSteps(sectionId);
  const walks = getWalks(sectionId);

  if (isOutputHTML()) {
    writeTo(path)`${callRuntime(
      "markScopeOffset",
      t.numericLiteral(reserve.id)
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
          walkString += nCodeString(current, count);
          current = walk;
          count = 1;
        } else {
          count++;
        }
      }

      walkString += nCodeString(current, count);
      steps.length = 0;
    }

    if (code !== undefined) {
      if (code !== WalkCodes.Get) {
        writeTo(path)`<!>`;
      }
      walkString += String.fromCharCode(code);
    }

    if (reserve.size) {
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
    case WalkCodes.Open:
      return toCharString(number, code, WalkRangeSizes.Open);
    case WalkCodes.Skip:
      return toCharString(number, code, WalkRangeSizes.Skip);
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
  return toTemplateOrStringLiteral(getWalks(sectionId)) || t.stringLiteral("");
}
