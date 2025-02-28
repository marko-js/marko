export const _template_ = "<div></div><div></div><button>Click</button>";
export const _walks_ = /* get, over(1), get, over(1), get, over(1) */" b b b";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _foo = /* @__PURE__ */_$.state("foo/3", (_scope, foo) => {
  _$.classAttr(_scope["#div/0"], (foo, foo.class));
  _$.classAttr(_scope["#div/1"], (foo, foo.class));
});
const _setup__effect = _$.effect("__tests__/template.marko_0", _scope => _$.on(_scope["#button/2"], "click", function () {
  _foo(_scope, {
    class: "baz"
  });
}));
export function _setup_(_scope) {
  _foo(_scope, {});
  _setup__effect(_scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);