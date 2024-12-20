export const _template_ = `<!>${_hello_template}<!>`;
export const _walks_ = /* beginChild, _hello_walks, endChild */`D/${_hello_walks}&D`;
import { _setup_ as _hello, _input_foo_ as _hello_input_foo, _template_ as _hello_template, _walks_ as _hello_walks } from "./tags/hello/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _foo_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("Foo!", ""));
export function _setup_(_scope) {
  _hello(_scope["#childScope/0"]);
  _hello_input_foo(_scope["#childScope/0"], _$.attrTag({
    content: _foo_content(_scope)
  }));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);