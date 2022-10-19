import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";

const _tagName = show ? "div" : null;

const _tagName2 = show && "div";

const _tagName3 = showTagA && tagA;

const _tagName4 = showTagA && tagA;

const _tagName5 = largeHeading || "h2";

import { createRenderer as _createRenderer, source as _source, derivation as _derivation, notifySignal as _notifySignal, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";

const _dynamicBody2 = /* @__PURE__ */_createRenderer("Body content", "");

const _other = /* @__PURE__ */_source(19, []);

const _level = /* @__PURE__ */_source(18, []);

const _tag = /* @__PURE__ */_source(17, []);

const _isLarge = /* @__PURE__ */_source(16, [_largeHeading]);

const _showTagA = /* @__PURE__ */_source(15, []);

const _show = /* @__PURE__ */_source(14, [_tagConstB]);

const _x = /* @__PURE__ */_source(13, []);

const _renderBody = /* @__PURE__ */_source(12, []);

const _tagConstB = /* @__PURE__ */_derivation(11, 1, [], (_scope, show = _scope[14]) => show ? "div" : null);

const _tagConstA = /* @__PURE__ */_derivation(10, 1, [], _scope => "a");

const _largeHeading = /* @__PURE__ */_derivation(9, 1, [], (_scope, isLarge = _scope[16]) => isLarge && "h1");

const _setup = _scope => {
  _notifySignal(_scope, _tagConstA);
};

export const attrs = /* @__PURE__ */_destructureSources([_renderBody, _x, _show, _showTagA, _isLarge, _tag, _level, _other], (_scope, {
  renderBody,
  x,
  show,
  showTagA,
  isLarge,
  tag,
  level,
  other
}) => {
  _setSource(_scope, _renderBody, renderBody);

  _setSource(_scope, _x, x);

  _setSource(_scope, _show, show);

  _setSource(_scope, _showTagA, showTagA);

  _setSource(_scope, _isLarge, isLarge);

  _setSource(_scope, _tag, tag);

  _setSource(_scope, _level, level);

  _setSource(_scope, _other, other);
});
export { _renderBody as _apply_renderBody, _x as _apply_x, _show as _apply_show, _showTagA as _apply_showTagA, _isLarge as _apply_isLarge, _tag as _apply_tag, _level as _apply_level, _other as _apply_other };
export const template = "";
export const walks = "";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);