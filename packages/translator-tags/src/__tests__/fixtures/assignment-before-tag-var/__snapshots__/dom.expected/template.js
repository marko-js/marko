export const _template_ = "<button>+</button><span><!> was <!></span>";
export const _walks_ = /* get, over(1), next(1), replace, over(2), replace, out(1) */" bD%c%l";
import { on as _on, data as _data, queueSource as _queueSource, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _lastClickCount = /* @__PURE__ */_value("lastClickCount", (_scope, lastClickCount) => _data(_scope["#text/2"], lastClickCount));
const _onClick = _scope => {
  const {
    clickCount
  } = _scope;
  return function () {
    _queueSource(_scope, _lastClickCount, clickCount);
    _queueSource(_scope, _clickCount, clickCount + 1);
  };
};
const _clickCount_effect = _register("packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko_0_clickCount", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _clickCount = /* @__PURE__ */_value("clickCount", (_scope, clickCount) => {
  _data(_scope["#text/1"], clickCount);
  _queueEffect(_scope, _clickCount_effect);
});
export function _setup_(_scope) {
  _clickCount(_scope, 0);
  _lastClickCount(_scope, undefined);
}
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/assignment-before-tag-var/template.marko");