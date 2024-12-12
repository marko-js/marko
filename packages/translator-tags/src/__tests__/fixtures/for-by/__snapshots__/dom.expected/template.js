export const _template_ = "<div><div class=by-string></div><div class=by-function></div><div class=by-unknown-string></div><div class=by-unknown-function></div><div class=by-unknown-missing></div><button>Rotate</button></div>";
export const _walks_ = /* next(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, out(1) */"D b b b b b l";
const getStringBy = _getStringBy;
const getFunctionBy = _getFunctionBy;
const getMissingBy = _getMissingBy;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _text$forBody5 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_5$forBody = /* @__PURE__ */_$.value("_pattern_5", (_scope, _pattern_5) => _text$forBody5(_scope, _pattern_5.text));
const _params_6$forBody = /* @__PURE__ */_$.value("_params_6", (_scope, _params_6) => _pattern_5$forBody(_scope, _params_6?.[0]));
const _forBody5 = _$.register("__tests__/template.marko_5_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, () => _params_6$forBody));
const _text$forBody4 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_4$forBody = /* @__PURE__ */_$.value("_pattern_4", (_scope, _pattern_4) => _text$forBody4(_scope, _pattern_4.text));
const _params_5$forBody = /* @__PURE__ */_$.value("_params_5", (_scope, _params_5) => _pattern_4$forBody(_scope, _params_5?.[0]));
const _forBody4 = _$.register("__tests__/template.marko_4_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, () => _params_5$forBody));
const _text$forBody3 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_3$forBody = /* @__PURE__ */_$.value("_pattern_3", (_scope, _pattern_3) => _text$forBody3(_scope, _pattern_3.text));
const _params_4$forBody = /* @__PURE__ */_$.value("_params_4", (_scope, _params_4) => _pattern_3$forBody(_scope, _params_4?.[0]));
const _forBody3 = _$.register("__tests__/template.marko_3_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, () => _params_4$forBody));
const _text$forBody2 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_2$forBody = /* @__PURE__ */_$.value("_pattern_2", (_scope, _pattern_2) => _text$forBody2(_scope, _pattern_2.text));
const _params_3$forBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _pattern_2$forBody(_scope, _params_3?.[0]));
const _forBody2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, () => _params_3$forBody));
const _text$forBody = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_$forBody = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _text$forBody(_scope, _pattern_.text));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$forBody(_scope, _params_2?.[0]));
const _forBody = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, void 0, () => _params_2$forBody));
const _for5 = /* @__PURE__ */_$.loopOf("#div/4", _forBody5);
const _for4 = /* @__PURE__ */_$.loopOf("#div/3", _forBody4);
const _for3 = /* @__PURE__ */_$.loopOf("#div/2", _forBody3);
const _for2 = /* @__PURE__ */_$.loopOf("#div/1", _forBody2);
const _for = /* @__PURE__ */_$.loopOf("#div/0", _forBody);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/5"], "click", function () {
  _items(_scope, [...items.slice(1), items[0]]);
}));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items, "id"]);
  _for2(_scope, [items, item => item.id]);
  _for3(_scope, [items, getStringBy()]);
  _for4(_scope, [items, getFunctionBy()]);
  _for5(_scope, [items, getMissingBy()]);
});
export function _setup_(_scope) {
  _items(_scope, [{
    id: 0,
    text: "first"
  }, {
    id: 1,
    text: "second"
  }, {
    id: 2,
    text: "third"
  }]);
}
function _getStringBy() {
  return "id";
}
function _anonymous(item) {
  return item.id;
}
function _getFunctionBy() {
  return _anonymous;
}
function _getMissingBy() {
  return undefined;
}
_$.register("__tests__/template.marko_0/getStringBy", _getStringBy);
_$.register("__tests__/template.marko_0/anonymous", _anonymous);
_$.register("__tests__/template.marko_0/getFunctionBy", _getFunctionBy);
_$.register("__tests__/template.marko_0/getMissingBy", _getMissingBy);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);