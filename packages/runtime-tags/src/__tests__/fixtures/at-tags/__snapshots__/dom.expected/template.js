export const $template = `<!>${_hello_template}<!>`;
export const $walks = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import { $setup as _hello, $input_foo as _hello_input_foo, $template as _hello_template, $walks as _hello_walks } from "./tags/hello/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $foo_content = _$.registerContent("__tests__/template.marko_1_renderer", "Foo!");
export function $setup($scope) {
  _hello($scope["#childScope/0"]);
  _hello_input_foo($scope["#childScope/0"], _$.attrTag({
    content: $foo_content($scope)
  }));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);