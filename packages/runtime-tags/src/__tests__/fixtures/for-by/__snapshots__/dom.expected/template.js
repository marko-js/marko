export const _template_ = "<div><div class=by-string></div><button>Rotate</button></div>";
export const _walks_ = /* next(1), get, over(1), get, out(1) */"D b l";
const getStringBy = _getStringBy;
const getFunctionBy = _getFunctionBy;
const getMissingBy = _getMissingBy;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _text$for_content = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _pattern_$for_content = /* @__PURE__ */_$.value("_pattern_", (_scope, _pattern_) => _text$for_content(_scope, _pattern_.text));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _pattern_$for_content(_scope, _params_2?.[0]));
const _for_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(" ", /* get */" ", void 0, () => _params_2$for_content));
const _for = /* @__PURE__ */_$.loopOf("#div/0", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/1"], "click", function () {
  _items(_scope, [...items.slice(1), items[0]]);
}));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items, "id"]);
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