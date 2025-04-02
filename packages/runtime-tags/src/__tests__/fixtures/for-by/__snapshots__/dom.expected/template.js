export const _template = "<div><div class=by-string></div><div class=by-function></div><div class=by-unknown-string></div><div class=by-unknown-function></div><div class=by-unknown-missing></div><button>Rotate</button></div>";
export const _walks = /* next(1), get, over(1), get, over(1), get, over(1), get, over(1), get, over(1), get, out(1) */"D b b b b b l";
const getStringBy = _getStringBy;
const getFunctionBy = _getFunctionBy;
const getMissingBy = _getMissingBy;
import * as _$ from "@marko/runtime-tags/debug/dom";
const _text$for_content5 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _temp5$for_content = /* @__PURE__ */_$.value("_temp5", (_scope, _temp5) => _text$for_content5(_scope, _temp5.text));
const _params6$for_content = /* @__PURE__ */_$.value("_params6", (_scope, _params6) => _temp5$for_content(_scope, _params6?.[0]));
const _for_content5 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params6$for_content);
const _text$for_content4 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _temp4$for_content = /* @__PURE__ */_$.value("_temp4", (_scope, _temp4) => _text$for_content4(_scope, _temp4.text));
const _params5$for_content = /* @__PURE__ */_$.value("_params5", (_scope, _params5) => _temp4$for_content(_scope, _params5?.[0]));
const _for_content4 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params5$for_content);
const _text$for_content3 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _temp3$for_content = /* @__PURE__ */_$.value("_temp3", (_scope, _temp3) => _text$for_content3(_scope, _temp3.text));
const _params4$for_content = /* @__PURE__ */_$.value("_params4", (_scope, _params4) => _temp3$for_content(_scope, _params4?.[0]));
const _for_content3 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params4$for_content);
const _text$for_content2 = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _temp2$for_content = /* @__PURE__ */_$.value("_temp2", (_scope, _temp2) => _text$for_content2(_scope, _temp2.text));
const _params3$for_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _temp2$for_content(_scope, _params3?.[0]));
const _for_content2 = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params3$for_content);
const _text$for_content = /* @__PURE__ */_$.value("text", (_scope, text) => _$.data(_scope["#text/0"], text));
const _temp$for_content = /* @__PURE__ */_$.value("_temp", (_scope, _temp) => _text$for_content(_scope, _temp.text));
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _temp$for_content(_scope, _params2?.[0]));
const _for_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, _params2$for_content);
const _for5 = /* @__PURE__ */_$.loopOf("#div/4", _for_content5);
const _for4 = /* @__PURE__ */_$.loopOf("#div/3", _for_content4);
const _for3 = /* @__PURE__ */_$.loopOf("#div/2", _for_content3);
const _for2 = /* @__PURE__ */_$.loopOf("#div/1", _for_content2);
const _for = /* @__PURE__ */_$.loopOf("#div/0", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/5"], "click", function () {
  _items(_scope, [...items.slice(1), items[0]]);
}));
const _items = /* @__PURE__ */_$.state("items/6", (_scope, items) => {
  _for(_scope, [items, "id"]);
  _for2(_scope, [items, item => item.id]);
  _for3(_scope, [items, getStringBy()]);
  _for4(_scope, [items, getFunctionBy()]);
  _for5(_scope, [items, getMissingBy()]);
  _items_effect(_scope);
});
export function _setup(_scope) {
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
function _getFunctionBy() {
  return item => item.id;
}
function _getMissingBy() {
  return undefined;
}
_$.register("__tests__/template.marko_0/getStringBy", _getStringBy);
_$.register("__tests__/template.marko_0/getFunctionBy", _getFunctionBy);
_$.register("__tests__/template.marko_0/getMissingBy", _getMissingBy);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);