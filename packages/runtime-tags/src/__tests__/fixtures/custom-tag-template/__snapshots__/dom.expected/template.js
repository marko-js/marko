export const _template = _hello_template;
export const _walks = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
import { _setup as _hello, _input_name as _hello_input_name, _template as _hello_template, _walks as _hello_walks } from "./hello.marko";
export function _setup(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input_name(_scope["#childScope/0"], "Frank");
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);