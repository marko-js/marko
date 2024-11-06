export const _template_ = "<button> </button>used to be <span> </span> which should be the same as <span> </span>";
export const _walks_ = /* get, next(1), get, out(1), over(1), next(1), get, out(1), over(1), next(1), get, out(1) */" D lbD lbD l";
import { on as _on, data as _data, state as _state, effect as _effect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _lastCount2 = /* @__PURE__ */_state("lastCount2", (_scope, lastCount2) => _data(_scope["#text/3"], lastCount2));
const _lastCount = /* @__PURE__ */_state("lastCount", (_scope, lastCount) => _data(_scope["#text/2"], lastCount));
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    const last = _lastCount(_scope, (_clickCount(_scope, clickCount + 1), clickCount));
    _lastCount2(_scope, last);
  };
};
const _clickCount_effect = _effect("packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_state("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _clickCount_effect(_scope);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _lastCount(_scope, 0);
  _lastCount2(_scope, 0);
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/nested-assignment-expression/template.marko");