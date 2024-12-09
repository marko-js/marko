export const _template_ = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), get, over(1), next(1), get, out(1) */" Db%l bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_count_multiplier = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    count,
    multiplier
  } = _scope;
  _multipliedCount(_scope, count * multiplier);
});
const _multipliedCount = /* @__PURE__ */_$.value("multipliedCount", (_scope, multipliedCount) => _$.data(_scope["#text/3"], multipliedCount));
const _multiplier_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier", (_scope, {
  multiplier
}) => _$.on(_scope["#button/0"], "click", function () {
  _multiplier(_scope, multiplier + 1), multiplier;
}));
const _multiplier = /* @__PURE__ */_$.state("multiplier", (_scope, multiplier) => {
  _$.data(_scope["#text/1"], multiplier);
  _multiplier_effect(_scope);
}, () => _expr_count_multiplier);
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count", (_scope, {
  count
}) => _$.on(_scope["#button/2"], "click", function () {
  _count(_scope, count + 1), count;
}));
const _count = /* @__PURE__ */_$.state("count", (_scope, count) => _count_effect(_scope), () => _expr_count_multiplier);
export function _setup_(_scope) {
  _count(_scope, 0);
  _multiplier(_scope, 1);
}
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko", _template_, _walks_, _setup_);