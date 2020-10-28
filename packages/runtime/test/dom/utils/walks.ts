import { WalkCodes } from "../../../src/dom/walker";

export const get = String.fromCharCode(WalkCodes.Get);
export const before = String.fromCharCode(WalkCodes.Before);
export const after = String.fromCharCode(WalkCodes.After);
export const replace = String.fromCharCode(WalkCodes.Replace);
export const inside = String.fromCharCode(WalkCodes.Inside);

export function next(number: number) {
  return toCharString(number, WalkCodes.Next, WalkCodes.NextEnd);
}
export function over(number: number) {
  return toCharString(number, WalkCodes.Over, WalkCodes.OverEnd);
}
export function out(number: number) {
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
