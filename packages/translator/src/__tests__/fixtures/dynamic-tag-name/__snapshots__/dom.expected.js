import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";

_dynamicTag(_scope, renderBody, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, x, {
  class: ["a", "b"],
  other: other
});

const _tagName = show ? "div" : null;

_dynamicTag(_scope, _tagName, {
  class: ["a", "b"],
  other: other
});

const _tagName2 = show && "div";

_dynamicTag(_scope, _tagName2, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, large ? "h1" : "h2", {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, showTagA ? tagA : tagB, {
  class: ["a", "b"],
  other: other,
  class: ["a", "b"],
  other: other
});

const _tagName3 = showTagA && tagA;

_dynamicTag(_scope, _tagName3, {
  class: ["a", "b"],
  other: other
});

const _tagName4 = showTagA && tagA;

_dynamicTag(_scope, _tagName4, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, tag || tagA, {
  class: ["a", "b"],
  other: other
});

const _tagName5 = largeHeading || "h2";

_dynamicTag(_scope, _tagName5, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, global.x = "a" + "b", {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, "h" + level, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, `h${level}`, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, tagConstA, {
  class: ["a", "b"],
  other: other
});

_dynamicTag(_scope, tagConstB, {
  class: ["a", "b"],
  other: other
});

import { dynamicTag as _dynamicTag, write as _write, createRenderer as _createRenderer, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

function _apply_tagConstB(_scope, tagConstB) {
  if (_write(_scope, 19, tagConstB)) {}
}

function _apply_tagConstA(_scope, tagConstA) {
  if (_write(_scope, 18, tagConstA)) {}
}

function _apply_largeHeading(_scope, largeHeading) {
  if (_write(_scope, 17, largeHeading)) {}
}

function _apply_isLarge(_scope, isLarge) {
  if (_write(_scope, 13, isLarge)) _apply_largeHeading(isLarge && "h1");
}

function _apply_show(_scope, show) {
  if (_write(_scope, 11, show)) _apply_tagConstB(show ? "div" : null);
}

function _apply(_scope) {
  _apply_tagConstA("a");
}

const _temp = _createRenderer("Body content", "", null);

export const template = "";
export const walks = "";
export const apply = _apply;
export default _createRenderFn(template, walks, apply);