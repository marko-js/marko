import { WalkCodes, WalkRangeSizes } from "../../dom/walker";

export const get = String.fromCharCode(WalkCodes.Get);
export const before = String.fromCharCode(WalkCodes.Before);
export const after = String.fromCharCode(WalkCodes.After);
export const replace = String.fromCharCode(WalkCodes.Replace);
export const inside = String.fromCharCode(WalkCodes.Inside);
export const close = String.fromCharCode(WalkCodes.Close);

export function next(value: number) {
  return toCharString(value, WalkCodes.Next, WalkRangeSizes.Next);
}

export function over(value: number) {
  return toCharString(value, WalkCodes.Over, WalkRangeSizes.Over);
}

export function out(value: number) {
  return toCharString(value, WalkCodes.Out, WalkRangeSizes.Out);
}

export function open(value: number) {
  return toCharString(value, WalkCodes.Open, WalkRangeSizes.Open);
}

export function skip(value: number) {
  return toCharString(value, WalkCodes.Skip, WalkRangeSizes.Skip);
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
