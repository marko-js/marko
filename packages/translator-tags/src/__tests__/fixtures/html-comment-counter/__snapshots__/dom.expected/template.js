export const _template_ = "<div><button> </button><!----></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), get, out(1) */"D D l l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onClick = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(_scope, count + 1);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => {
  _$.data(_scope["#text/1"], count);
  _$.data(_scope["#comment/2"], `${count} + ${count} = ${count + count}`);
  _count_effect(_scope);
});
export function _setup_(_scope) {
  _count(_scope, 0);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko");