export const $template = _hello_template;
export const $walks = /* beginChild, _hello_walks, endChild */`/${_hello_walks}&`;
import { $setup as _hello, $input_name as _hello_input_name, $template as _hello_template, $walks as _hello_walks } from "./hello.marko";
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  _hello_input_name($scope["#childScope/0"], "Frank");
}
import * as _$ from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);