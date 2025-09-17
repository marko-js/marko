export const $template = `<!>${_hello_template}<!>`;
export const $walks = /* over(1), beginChild, _hello_walks, endChild, over(1) */`b/${_hello_walks}&b`;
import { $setup as _hello, $input_foo as _hello_input_foo, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $foo_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "Foo!", /* over(1) */"b");
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  _hello_input_foo($scope["#childScope/0"], _.attrTag({
    content: $foo_content($scope)
  }));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);