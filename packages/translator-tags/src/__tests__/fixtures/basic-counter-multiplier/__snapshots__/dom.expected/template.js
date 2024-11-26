export const _template_ = "<button id=multiplier>increase multiplier (<!>)</button><button id=count>increase count</button><div> </div>";
export const _walks_ = /* get, next(1), over(1), replace, out(1), get, over(1), next(1), get, out(1) */" Db%l bD l";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_count_multiplier = /* @__PURE__ */_$.intersection(2, ({
  count,
  multiplier
}) => _multipliedCount(count * multiplier));
const _multipliedCount = /* @__PURE__ */_$.value("multipliedCount", multipliedCount => _$.data("#text/3", multipliedCount));
const _onClick = _scope => {
  const {
    multiplier
  } = _scope;
  return function () {
    _multiplier(multiplier + 1, _scope);
  };
};
const _multiplier_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_multiplier", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _multiplier = /* @__PURE__ */_$.state("multiplier", multiplier => {
  _$.data("#text/1", multiplier);
  _multiplier_effect();
}, () => _expr_count_multiplier);
const _onClick2 = _scope => {
  const {
    count
  } = _scope;
  return function () {
    _count(count + 1, _scope);
  };
};
const _count_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko_0_count", _scope => _$.on(_scope["#button/2"], "click", _onClick2(_scope)));
const _count = /* @__PURE__ */_$.state("count", count => _count_effect(), () => _expr_count_multiplier);
export const _setup_ = _$.setup(() => {
  _count(0);
  _multiplier(1);
});
export default /* @__PURE__ */_$.createTemplate("packages/translator-tags/src/__tests__/fixtures/basic-counter-multiplier/template.marko", _template_, _walks_, _setup_);