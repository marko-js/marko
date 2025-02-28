export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _clickCount$else_content = /* @__PURE__ */_$.conditionalClosure("clickCount/1", "#text/0", 1, (_scope, clickCount) => _$.data(_scope["#text/0"], clickCount));
const _setup$else_content = _scope => {
  _clickCount$else_content._(_scope);
};
const _else_content = /* @__PURE__ */_$.createRenderer("<span>The button was clicked <!> times.</span>", /* next(1), over(1), replace */"Db%", _setup$else_content);
const _clickCount$if_content_effect = _$.effect("__tests__/template.marko_1_clickCount", (_scope, {
  _: {
    "clickCount/1": clickCount
  }
}) => _$.on(_scope["#button/0"], "click", function () {
  _clickCount(_scope._, clickCount + 1), clickCount;
}));
const _clickCount$if_content = /* @__PURE__ */_$.conditionalClosure("clickCount/1", "#text/0", 0, (_scope, clickCount) => {
  _$.data(_scope["#text/1"], clickCount);
  _clickCount$if_content_effect(_scope);
});
const _setup$if_content = _scope => {
  _clickCount$if_content._(_scope);
};
const _if_content = /* @__PURE__ */_$.createRenderer("<button> </button>", /* get, next(1), get */" D ", _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content, _else_content);
const _clickCount = /* @__PURE__ */_$.state("clickCount/1", (_scope, clickCount) => {
  _if(_scope, clickCount < 3 ? 0 : 1);
  _clickCount$if_content(_scope);
  _clickCount$else_content(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);