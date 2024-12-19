export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount$else_content = /* @__PURE__ */_$.closure("clickCount", (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount));
const _else_content = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", void 0, () => [_clickCount$else_content]));
const _clickCount$if_content_effect = _$.effect("__tests__/template.marko_1_clickCount", (_scope, {
  _: {
    clickCount
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope._, clickCount + 1), clickCount;
}));
const _clickCount$if_content = /* @__PURE__ */_$.closure("clickCount", (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount$if_content_effect(_scope);
});
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, () => [_clickCount$if_content]));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _clickCount = /* @__PURE__ */_$.state("clickCount", (_scope, clickCount) => _if(_scope, clickCount < 3 ? _if_content : _else_content), () => _$.intersections([_if, _$.inConditionalScope(_clickCount$if_content, "#text/0"), _$.inConditionalScope(_clickCount$else_content, "#text/0")]));
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);