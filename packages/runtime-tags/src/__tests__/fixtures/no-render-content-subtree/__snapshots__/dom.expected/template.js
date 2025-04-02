export const _template = "<div></div><!><!>";
export const _walks = /* get, over(1), replace, over(1) */" b%bD";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _get_output = _$.nodeRef("__tests__/template.marko_0/#div", "Getter:#div/0");
import { _setup as _child, _input as _child_input, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
const _setup$if_content = _scope => {
  _child(_scope["#childScope/0"]);
  _child_input(_scope["#childScope/0"], {
    foo: "bar",
    output: _get_output(_scope._)
  });
};
const _if_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$if_content);
const _if = /* @__PURE__ */_$.conditional("#text/1", _if_content);
export const _input_show = /* @__PURE__ */_$.value("input_show", (_scope, input_show) => _if(_scope, input_show ? 0 : 1));
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => _input_show(_scope, input.show));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup, _input);