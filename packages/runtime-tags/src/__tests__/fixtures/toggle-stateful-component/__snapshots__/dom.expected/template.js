export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
import { _setup_ as _counter, _input_onCount_ as _counter_input_onCount, _template_ as _counter_template, _walks_ as _counter_walks } from "./tags/counter.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _onCount$if_content = /* @__PURE__ */_$.conditionalClosure("onCount", "#div/0", 0, (_scope, onCount) => _counter_input_onCount(_scope["#childScope/0"], onCount));
const _setup$if_content = _scope => {
  _onCount$if_content._(_scope);
  _counter(_scope["#childScope/0"]);
};
const _if_content = /* @__PURE__ */_$.createRenderer(`<div>${_counter_template}</div>`, /* next(1), beginChild, _counter_walks, endChild */`D/${_counter_walks}&`, _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#div/0", _if_content);
const _onCount = /* @__PURE__ */_$.value("onCount");
const _show = /* @__PURE__ */_$.state("show/1", (_scope, show) => _if(_scope, show ? 0 : 1));
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