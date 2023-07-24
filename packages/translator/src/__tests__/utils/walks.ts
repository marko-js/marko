// TODO: These are duped, but when deduped they break everything
enum WalkCodes {
  Get = 32,
  Before = 33,
  After = 35,
  Inside = 36,
  Replace = 37,
  EndChild = 38,

  Skip = 40,
  SkipEnd = 46,

  BeginChild = 47,

  Next = 67,
  NextEnd = 91,

  Over = 97,
  OverEnd = 106,

  Out = 107,
  OutEnd = 116,

  Multiplier = 117,
  MultiplierEnd = 126,
}

enum WalkRangeSizes {
  Skip = 7, // 40 through 46
  BeginChild = 20, // 47 through 66
  Next = 20, // 67 through 91
  Over = 10, // 97 through 106
  Out = 10, // 107 through 116
  Multiplier = 10, // 117 through 126
}

export const get = String.fromCharCode(WalkCodes.Get);
export const before = String.fromCharCode(WalkCodes.Before);
export const after = String.fromCharCode(WalkCodes.After);
export const replace = String.fromCharCode(WalkCodes.Replace);
export const inside = String.fromCharCode(WalkCodes.Inside);
export const endChild = String.fromCharCode(WalkCodes.EndChild);
export const beginChild = String.fromCharCode(WalkCodes.BeginChild);

export function next(value: number) {
  return toCharString(value, WalkCodes.Next, WalkRangeSizes.Next);
}

export function over(value: number) {
  return toCharString(value, WalkCodes.Over, WalkRangeSizes.Over);
}

export function out(value: number) {
  return toCharString(value, WalkCodes.Out, WalkRangeSizes.Out);
}

function toCharString(value: number, startCode: number, rangeSize: number) {
  let string = "";

  if (value >= rangeSize) {
    const multiplier = Math.floor(value / rangeSize);
    string += toCharString(
      multiplier,
      WalkCodes.Multiplier,
      WalkRangeSizes.Multiplier
    );
    value -= multiplier * rangeSize;
  }

  string += String.fromCharCode(startCode + value);
  return string;
}
