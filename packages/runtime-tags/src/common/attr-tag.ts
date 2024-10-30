type Attrs = Record<PropertyKey, unknown>;
type AttrTag = Attrs & { [rest]: Attrs[] };
const empty: never[] = [];
const rest: unique symbol = (
  MARKO_DEBUG ? Symbol("Attribute Tag") : Symbol()
) as any;

export function attrTag(attrs: Attrs): AttrTag {
  attrs[Symbol.iterator] = attrTagIterator;
  attrs[rest] = empty;
  return attrs as AttrTag;
}

export function attrTags(first: undefined | AttrTag, attrs: Attrs) {
  if (first) {
    if (first[rest] === empty) {
      first[rest] = [attrs];
    } else {
      first[rest].push(attrs);
    }

    return first;
  }

  return attrTag(attrs);
}

function* attrTagIterator(this: AttrTag) {
  yield this;
  yield* this[rest];
}
