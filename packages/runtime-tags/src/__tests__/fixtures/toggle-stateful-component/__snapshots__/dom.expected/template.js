export const _template_ = "<div><!></div>";
export const _walks_ = /* next(1), replace, out(1) */"D%l";
import { _setup_ as _counter, _input_onCount_ as _counter_input_onCount, _template_ as _counter_template, _walks_ as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onCount$if_content = /* @__PURE__ */_$.conditionalClosure("#text/0", () => _if_content, (_scope, onCount) => _counter_input_onCount(_scope["#childScope/0"], onCount), () => _$.inChild("#childScope/0", _counter_input_onCount));
const _setup$if_content = _scope => {
  _onCount$if_content._(_scope, _scope._["onCount"]);
  _counter(_scope["#childScope/0"]);
};
const _if_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_counter_template}</div>`, /* next(1), beginChild, _counter_walks, endChild */`D/${_counter_walks}&`, _setup$if_content));
const _if = /* @__PURE__ */_$.conditional("#text/0", 0);
const _onCount = /* @__PURE__ */_$.value("onCount", 0);
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => _if(_scope, show ? _if_content : null), () => _if);
export function _setup_(_scope) {
  _show(_scope, true);
  _onCount(_scope, _onCount2(_scope));
}
function _onCount2(_scope) {
  return function (count) {
    _show(_scope, count < 1);
  };
}
_$.register("__tests__/template.marko_0/onCount", _onCount2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);