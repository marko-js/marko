export const _template = `<!>${_hello_template}<!>`;
export const _walks = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import { _setup as _hello, _input_foo as _hello_input_foo, _template as _hello_template, _walks as _hello_walks } from "./tags/hello/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _foo_content = _$.registerContent("__tests__/template.marko_1_renderer", "Foo!");
export function _setup(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input_foo(_scope["#childScope/0"], _$.attrTag({
    content: _foo_content(_scope)
  }));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);