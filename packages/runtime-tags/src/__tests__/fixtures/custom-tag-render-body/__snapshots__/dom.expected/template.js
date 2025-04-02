export const _template = `${_child_template}<!>`;
export const _walks = /* beginChild, _child_walks, endChild */`/${_child_walks}&D`;
import { _setup as _child, _content as _child_input_content, _name as _child_input_name, _template as _child_template, _walks as _child_walks } from "./tags/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "This is the body content");
export function _setup(_scope) {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
  _child_input_name(_scope["#childScope/0"], "World");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);