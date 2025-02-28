export const _template_ = _hello_template;
export const _walks_ = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
import { _setup_ as _hello, _input_name_ as _hello_input_name, _template_ as _hello_template, _walks_ as _hello_walks } from "./hello.marko";
export function _setup_(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input_name(_scope["#childScope/0"], "Frank");
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);