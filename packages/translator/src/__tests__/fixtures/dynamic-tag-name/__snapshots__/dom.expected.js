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

function _apply_isLarge(_scope, isLarge) {
  if (_write(_scope, 16, isLarge)) _apply_largeHeading(_scope, isLarge && "h1");
}

function _apply_showTagA(_scope, showTagA) {
  if (_write(_scope, 15, showTagA)) {}
}

function _apply_show(_scope, show) {
  if (_write(_scope, 14, show)) _apply_tagConstB(_scope, show ? "div" : null);
}

function _apply_x(_scope, x) {
  if (_write(_scope, 13, x)) {}
}

function _apply_renderBody(_scope, renderBody) {
  if (_write(_scope, 12, renderBody)) {}
}

function _apply_tagConstB(_scope, tagConstB) {
  if (_write(_scope, 11, tagConstB)) {}
}

function _apply_tagConstA(_scope, tagConstA) {
  if (_write(_scope, 10, tagConstA)) {}
}

function _apply_largeHeading(_scope, largeHeading) {
  if (_write(_scope, 9, largeHeading)) {}
}

function _apply(_scope) {
  _apply_tagConstA(_scope, "a");
}

export const applyAttrs = function (_scope, {
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}) {
  _apply_renderBody(_scope, renderBody);

  _apply_x(_scope, x);

  _apply_show(_scope, show);

  _apply_showTagA(_scope, showTagA);

  _apply_isLarge(_scope, isLarge);

  _apply_tag(_scope, tag);

  _apply_level(_scope, level);

  _apply_other(_scope, other);
};
export { _apply_renderBody, _apply_x, _apply_show, _apply_showTagA, _apply_isLarge, _apply_tag, _apply_level, _apply_other };
export const template = "";
export const walks = "";
export const apply = _apply;

const _temp = _createRenderer("Body content", "", null);

export default _createRenderFn(template, walks, apply, applyAttrs);