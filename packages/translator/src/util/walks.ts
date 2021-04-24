import { types as t } from "@marko/compiler";

const enum WalkCodes {
  Get = 33, // !
  Before = 35, // #
  After = 36, // $
  Inside = 37, // %
  Replace = 38, // &
  Out = 39,
  OutEnd = 49,
  Over = 58,
  OverEnd = 91,
  Next = 93,
  NextEnd = 126
}

const get = String.fromCharCode(WalkCodes.Get);
const before = String.fromCharCode(WalkCodes.Before);
const after = String.fromCharCode(WalkCodes.After);
const replace = String.fromCharCode(WalkCodes.Replace);
const inside = String.fromCharCode(WalkCodes.Inside);

function next(number: number) {
  return toCharString(number, WalkCodes.Next, WalkCodes.NextEnd);
}
function over(number: number) {
  return toCharString(number, WalkCodes.Over, WalkCodes.OverEnd);
}
function out(number: number) {
  return toCharString(number, WalkCodes.Out, WalkCodes.OutEnd);
}

function toCharString(
  number: number,
  startCharCode: number,
  endCharCode: number
) {
  const total = endCharCode - startCharCode + 1;
  let value = "";
  while (number > total) {
    value += String.fromCharCode(endCharCode);
    number -= total;
  }
  return value + String.fromCharCode(startCharCode + number - 1);
}

export const enum Walks {
  ENTER,
  EXIT,
  NEXT,
  OVER,
  GET,
  BEFORE,
  AFTER,
  INSIDE,
  REPLACE
}

type WalkInfo = {
  hasAction: boolean;
  sequence: Walks[];
  earlyExits: number;
};

const lookup = {
  [Walks.EXIT]: out,
  [Walks.NEXT]: next,
  [Walks.OVER]: over,
  [Walks.GET]: get,
  [Walks.BEFORE]: before,
  [Walks.AFTER]: after,
  [Walks.INSIDE]: inside,
  [Walks.REPLACE]: replace
};

function resolveSequence(walks: Walks[]) {
  let current: Walks;
  let count = 0;
  let results = "";
  for (let i = 0, len = walks.length; i < len; i++) {
    const w = walks[i];
    if (w !== current!) {
      if (current!) {
        results += (lookup[current] as any)(count);
      }
      current = w;
      count = 0;
    }
    count++;
  }
  if (current!) results += (lookup[current] as any)(count);
  return results;
}

export function encodeWalks(walks: (Walks | t.Expression)[]) {
  const statics: string[] = [""];
  const dynamics: t.Expression[] = [];
  let inner: WalkInfo;
  const current: WalkInfo[] = [
    {
      hasAction: false,
      sequence: [],
      earlyExits: 0
    }
  ];

  for (let i = 0, len = walks.length; i < len; i++) {
    switch (walks[i]) {
      case Walks.NEXT:
        current[0].sequence.push(Walks.NEXT);
        break;
      case Walks.ENTER:
        current.unshift({
          hasAction: false,
          sequence: [...current[0].sequence, Walks.NEXT],
          earlyExits: 0
        });
        break;
      case Walks.EXIT:
        inner = current.shift()!;
        if (!inner.hasAction) {
          current[0].sequence.push(Walks.OVER);
        } else {
          current[0].hasAction = true;
          current[0].earlyExits = inner.earlyExits;
          for (let j = 0, len = ++current[0].earlyExits; j < len; j++)
            current[0].sequence.push(Walks.EXIT);
        }
        break;
      default:
        current[0].hasAction = true;
        if (current[0].sequence.length) {
          statics[statics.length - 1] += resolveSequence(current[0].sequence);
          current[0].sequence = [];
          current[0].earlyExits = 0;
        }
        if (typeof walks[i] !== "number") {
          dynamics.push(walks[i] as t.Expression);
          statics.push("");
        } else statics[statics.length - 1] += lookup[walks[i] as Walks];
    }
  }
  statics[statics.length - 1] += resolveSequence(current[0].sequence);
  if (statics.length === 1) return t.stringLiteral(statics[0]);
  return t.templateLiteral(
    statics.map(s => t.templateElement({ raw: s })),
    dynamics
  );
}
