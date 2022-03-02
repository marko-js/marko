import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";

_dynamicTag(renderBody, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(x, {
  class: ["a", "b"],
  other: other
});

const _tagName = show ? "div" : null;

_dynamicTag(_tagName, {
  class: ["a", "b"],
  other: other
});

const _tagName2 = show && "div";

_dynamicTag(_tagName2, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(large ? "h1" : "h2", {
  class: ["a", "b"],
  other: other
});

_dynamicTag(showTagA ? tagA : tagB, {
  class: ["a", "b"],
  other: other,
  class: ["a", "b"],
  other: other
});

const _tagName3 = showTagA && tagA;

_dynamicTag(_tagName3, {
  class: ["a", "b"],
  other: other
});

const _tagName4 = showTagA && tagA;

_dynamicTag(_tagName4, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(tag || tagA, {
  class: ["a", "b"],
  other: other
});

const _tagName5 = largeHeading || "h2";

_dynamicTag(_tagName5, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(global.x = "a" + "b", {
  class: ["a", "b"],
  other: other
});

_dynamicTag("h" + level, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(`h${level}`, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(tagConstA, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(tagConstB, {
  class: ["a", "b"],
  other: other
});

import { dynamicTag as _dynamicTag, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_tagConstB(tagConstB) {
  if (_write(19, tagConstB)) {}
}

function _apply_tagConstA(tagConstA) {
  if (_write(18, tagConstA)) {}
}

function _apply_largeHeading(largeHeading) {
  if (_write(17, largeHeading)) {}
}

function _apply_isLarge(isLarge) {
  if (_write(13, isLarge)) _apply_largeHeading(isLarge && "h1");
}

function _apply_show(show) {
  if (_write(11, show)) _apply_tagConstB(show ? "div" : null);
}

function _apply() {
  _apply_tagConstA("a");
}

const _temp = _createRenderer("Body content", "", null);

export const template = "";
export const walks = "";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);