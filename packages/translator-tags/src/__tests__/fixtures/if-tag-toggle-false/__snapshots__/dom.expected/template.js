export const _template_ = "<button>update</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/if-tag-toggle-false/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("Hi", ""));
const _if = /* @__PURE__ */_$.conditional("#text/1", 0);
const _onClick = _scope => {
  const {
    x
  } = _scope;
  return function () {
    _x(_scope, x + 1);
  };
};
const _x_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/if-tag-toggle-false/template.marko_0_x", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _x_effect(_scope);
  _if(_scope, !x ? _ifBody : null);
});
export function _setup_(_scope) {
  _x(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/if-tag-toggle-false/template.marko", _template_, _walks_, _setup_);