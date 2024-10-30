export const _template_ = `${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`/${_child_walks}&D`;
import { _setup_ as _child, _renderBody_ as _child_input_renderBody, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child/index.marko";
import { inChild as _inChild, createRendererWithOwner as _createRendererWithOwner, register as _register, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _childBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko_1_renderer", /* @__PURE__ */_createRendererWithOwner("This is the body content", ""));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child_input_renderBody(_scope["#childScope/0"], _childBody(_scope));
  _child_input_name(_scope["#childScope/0"], "World");
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");