export const $template = _myDiv_template;
export const $walks = /* <my-div> */`/${_myDiv_walks}&`;
import { $setup as _myDiv, $input as _myDiv_input, $template as _myDiv_template, $walks as _myDiv_walks } from "./tags/my-div.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $mydiv_content = _._content_resume("__tests__/template.marko_1_content", "Hello", /* over(1) */"b");
export function $setup($scope) {
  _myDiv($scope["#childScope/0"]);
  _myDiv_input($scope["#childScope/0"], {
    content: $mydiv_content($scope)
  });
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);