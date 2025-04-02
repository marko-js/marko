export const _template = "<button>Toggle</button><div></div><!><!>";
export const _walks = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _child, _input as _child_input, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
const _setup$if_content = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input(_scope["#childScope/0"], {
    write: _write(_scope)
  });
};
const _if_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/2", _if_content);
const _show_effect = _$.effect("__tests__/template.marko_0_show", (_scope, {
  show
}) => _$.on(_scope["#button/0"], "click", function () {
  _show(_scope, !show);
}));
const _show = /* @__PURE__ */_$.state("show/3", (_scope, show) => {
  _if(_scope, show ? 0 : 1);
  _show_effect(_scope);
});
export function _setup(_scope) {
  _show(_scope, true);
}
function _write(_scope) {
  return function (state) {
    _scope._["#div/1"].innerHTML = state;
  };
}
_$.register("__tests__/template.marko_1/write", _write);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);