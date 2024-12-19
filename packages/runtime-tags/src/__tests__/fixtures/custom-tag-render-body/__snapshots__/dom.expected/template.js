export const _template_ = `${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`/${_child_walks}&D`;
import { _setup_ as _child, _content_ as _child_input_content, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child/index.marko";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _child_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner("This is the body content", ""));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content(_scope));
  _child_input_name(_scope["#childScope/0"], "World");
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);