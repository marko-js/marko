export const _template_ = `${_child_template}<div> </div>`;
export const _walks_ = /* beginChildWithVar, _child_walks, endChild, next(1), get, out(1) */`0${_child_walks}&D l`;
import { _setup_ as _child, _input_extra_ as _child_input_extra, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_name_data = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    name,
    data
  } = _scope;
  _message(_scope, `${name} ${data}`);
}, 1, "#scopeOffset/1");
const _message = /* @__PURE__ */_$.value("message", (_scope, message) => _$.data(_scope["#text/2"], message));
const _data = _$.registerBoundSignal("__tests__/template.marko_0_data/var", /* @__PURE__ */_$.value("data", (_scope, data) => _expr_name_data(_scope)));
const _name = /* @__PURE__ */_$.state("name/3", (_scope, name) => _expr_name_data(_scope));
export function _setup_(_scope) {
  _$.setTagVar(_scope, "#childScope/0", _data);
  _child(_scope["#childScope/0"]);
  _name(_scope, "Marko");
  _child_input_extra(_scope["#childScope/0"], 1);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);