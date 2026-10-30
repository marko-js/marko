import type {} from "../../index";
type Attrs = Record<PropertyKey, unknown>;
type Tag<T> = Marko.AttrTag<T> & {
  [rest]: T[];
};
const empty: never[] = [];
const rest: unique symbol = (
  MARKO_DEBUG ? Symbol("Attribute Tag") : Symbol()
) as any;

export function attrTag<T extends object>(attrs: T): Marko.AttrTag<T> {
  (attrs as Attrs)[Symbol.iterator] = attrTagIterator;
  (attrs as Attrs)[rest] = empty;
  return attrs as Tag<T>;
}

export function attrTags<T extends object>(
  first: Marko.AttrTag<T> | undefined,
  attrs: T,
): Marko.AttrTag<T> {
  if (first) {
    if ((first as Tag<T>)[rest] === empty) {
      (first as Tag<T>)[rest] = [attrs];
    } else {
      (first as Tag<T>)[rest].push(attrs);
    }

    return first;
  }

  return attrTag(attrs);
}

function* attrTagIterator<T>(this: Tag<T>): Generator<T> {
  yield this;
  yield* this[rest];
}
