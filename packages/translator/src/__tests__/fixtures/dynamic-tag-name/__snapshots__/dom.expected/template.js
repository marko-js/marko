import tagA from "./components/tag-a/index.marko";
import tagB from "./components/tag-b/index.marko";
import { dynamicAttrsProxy as _dynamicAttrsProxy, dynamicTagAttrs as _dynamicTagAttrs, createRenderer as _createRenderer, subscriber as _subscriber, conditional as _conditional, derivation as _derivation, source as _source, notifySignal as _notifySignal, setSource as _setSource, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _dynamicBody2 = /* @__PURE__ */_createRenderer("Body content", "");
const _expr_dynamicTagName_other15 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/14")], 2, (_scope, dynamicTagName = _scope["#text/14"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/14", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other14 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/13")], 2, (_scope, dynamicTagName = _scope["#text/13"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/13", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other13 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/12")], 2, (_scope, dynamicTagName = _scope["#text/12"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/12", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other12 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/11")], 2, (_scope, dynamicTagName = _scope["#text/11"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/11", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other11 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/10")], 2, (_scope, dynamicTagName = _scope["#text/10"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/10", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other10 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/9")], 2, (_scope, dynamicTagName = _scope["#text/9"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/9", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other9 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/8")], 2, (_scope, dynamicTagName = _scope["#text/8"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/8", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other8 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/7")], 2, (_scope, dynamicTagName = _scope["#text/7"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/7", () => ({
  class: ["a", "b"],
  other: other
}), _dynamicBody2));
const _expr_dynamicTagName_other7 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/6")], 2, (_scope, dynamicTagName = _scope["#text/6"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/6", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other6 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/5")], 2, (_scope, dynamicTagName = _scope["#text/5"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/5", () => ({
  class: ["a", "b"],
  other: other,
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other5 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/4")], 2, (_scope, dynamicTagName = _scope["#text/4"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/4", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other4 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/3")], 2, (_scope, dynamicTagName = _scope["#text/3"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/3", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other3 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/2")], 2, (_scope, dynamicTagName = _scope["#text/2"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/2", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other2 = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/1")], 2, (_scope, dynamicTagName = _scope["#text/1"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/1", () => ({
  class: ["a", "b"],
  other: other
})));
const _expr_dynamicTagName_other = /* @__PURE__ */_subscriber([_dynamicAttrsProxy("#text/0")], 2, (_scope, dynamicTagName = _scope["#text/0"], other = _scope["other"]) => _dynamicTagAttrs(_scope, "#text/0", () => ({
  class: ["a", "b"],
  other: other
})));
const _dynamicTagName15 = /* @__PURE__ */_conditional("#text/14", 1, (_scope, tagConstB = _scope["tagConstB"]) => tagConstB, _expr_dynamicTagName_other15);
const _dynamicTagName14 = /* @__PURE__ */_conditional("#text/13", 1, (_scope, tagConstA = _scope["tagConstA"]) => tagConstA, _expr_dynamicTagName_other14);
const _dynamicTagName13 = /* @__PURE__ */_conditional("#text/12", 1, (_scope, level = _scope["level"]) => `h${level}`, _expr_dynamicTagName_other13);
const _dynamicTagName12 = /* @__PURE__ */_conditional("#text/11", 1, (_scope, level = _scope["level"]) => "h" + level, _expr_dynamicTagName_other12);
const _dynamicTagName11 = /* @__PURE__ */_conditional("#text/10", 1, _scope => global.x = "a" + "b", _expr_dynamicTagName_other11);
const _dynamicTagName10 = /* @__PURE__ */_conditional("#text/9", 1, (_scope, largeHeading = _scope["largeHeading"]) => largeHeading || "h2", _expr_dynamicTagName_other10);
const _dynamicTagName9 = /* @__PURE__ */_conditional("#text/8", 1, (_scope, tag = _scope["tag"]) => tag || tagA, _expr_dynamicTagName_other9);
const _dynamicTagName8 = /* @__PURE__ */_conditional("#text/7", 1, (_scope, showTagA = _scope["showTagA"]) => showTagA && tagA || _dynamicBody2, _expr_dynamicTagName_other8);
const _dynamicTagName7 = /* @__PURE__ */_conditional("#text/6", 1, (_scope, showTagA = _scope["showTagA"]) => showTagA && tagA, _expr_dynamicTagName_other7);
const _dynamicTagName6 = /* @__PURE__ */_conditional("#text/5", 1, (_scope, showTagA = _scope["showTagA"]) => showTagA ? tagA : tagB, _expr_dynamicTagName_other6);
const _dynamicTagName5 = /* @__PURE__ */_conditional("#text/4", 1, _scope => large ? "h1" : "h2", _expr_dynamicTagName_other5);
const _dynamicTagName4 = /* @__PURE__ */_conditional("#text/3", 1, (_scope, show = _scope["show"]) => show && "div", _expr_dynamicTagName_other4);
const _dynamicTagName3 = /* @__PURE__ */_conditional("#text/2", 1, (_scope, show = _scope["show"]) => show ? "div" : null, _expr_dynamicTagName_other3);
const _dynamicTagName2 = /* @__PURE__ */_conditional("#text/1", 1, (_scope, x = _scope["x"]) => x, _expr_dynamicTagName_other2);
const _dynamicTagName = /* @__PURE__ */_conditional("#text/0", 1, (_scope, renderBody = _scope["renderBody"]) => renderBody, _expr_dynamicTagName_other);
const _tagConstB = /* @__PURE__ */_derivation("tagConstB", 1, [_dynamicTagName15], (_scope, show = _scope["show"]) => show ? "div" : null);
const _tagConstA = /* @__PURE__ */_derivation("tagConstA", 1, [_dynamicTagName14], _scope => "a");
const _largeHeading = /* @__PURE__ */_derivation("largeHeading", 1, [_dynamicTagName10], (_scope, isLarge = _scope["isLarge"]) => isLarge && "h1");
const _other = /* @__PURE__ */_source("other", [_expr_dynamicTagName_other, _expr_dynamicTagName_other2, _expr_dynamicTagName_other3, _expr_dynamicTagName_other4, _expr_dynamicTagName_other5, _expr_dynamicTagName_other6, _expr_dynamicTagName_other7, _expr_dynamicTagName_other8, _expr_dynamicTagName_other9, _expr_dynamicTagName_other10, _expr_dynamicTagName_other11, _expr_dynamicTagName_other12, _expr_dynamicTagName_other13, _expr_dynamicTagName_other14, _expr_dynamicTagName_other15]);
const _level = /* @__PURE__ */_source("level", [_dynamicTagName12, _dynamicTagName13]);
const _tag = /* @__PURE__ */_source("tag", [_dynamicTagName9]);
const _isLarge = /* @__PURE__ */_source("isLarge", [_largeHeading]);
const _showTagA = /* @__PURE__ */_source("showTagA", [_dynamicTagName6, _dynamicTagName7, _dynamicTagName8]);
const _show = /* @__PURE__ */_source("show", [_dynamicTagName3, _dynamicTagName4, _tagConstB]);
const _x = /* @__PURE__ */_source("x", [_dynamicTagName2]);
const _renderBody = /* @__PURE__ */_source("renderBody", [_dynamicTagName]);
const _setup = _scope => {
  _notifySignal(_scope, _dynamicTagName5);
  _notifySignal(_scope, _dynamicTagName11);
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
export const template = "<!><!><!><!><!><!><!><!><!><!><!><!><!><!><!>";
export const walks = /* replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1), replace, over(1) */"%b%b%b%b%b%b%b%b%b%b%b%b%b%b%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs);