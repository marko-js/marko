export const _template_ = `<!>${_child_template}<!>`;
export const _walks_ = /* beginChild, _child_walks, endChild */`D/${_child_walks}&D`;
import { _setup_ as _child, _renderBody_ as _child_renderBody, _template_ as _child_template, _walks_ as _child_walks } from "./components/child/index.marko";
import { bindRenderer as _bindRenderer, inChild as _inChild, createRenderer as _createRenderer, register as _register, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _childBody = _register("packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko_1_renderer", /* @__PURE__ */_createRenderer("This is the body content", ""));
export function _setup_(_scope) {
  _child(_scope["#childScope/0"]);
  _child_renderBody(_scope["#childScope/0"], /* @__PURE__ */_bindRenderer(_scope, _childBody));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");