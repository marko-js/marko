export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _write = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_1/write", _scope => function (state) {
  _scope._["#div/1"].innerHTML = state;
});
import { _setup_ as _child, _input_ as _child_input, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _setup$ifBody = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input(_scope["#childScope/0"], {
    write: _write(_scope)
  });
};
const _ifBody = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$ifBody));
const _if = /* @__PURE__ */_$.conditional("#text/2");
const _onClick = _scope => {
  const {
    show
  } = _scope;
  return function () {
    _show(_scope, !show);
  };
};
const _show_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko_0_show", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _show = /* @__PURE__ */_$.state("show", (_scope, show) => {
  _show_effect(_scope);
  _if(_scope, show ? _ifBody : null);
});
export function _setup_(_scope) {
  _show(_scope, true);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-if-shallow/template.marko");