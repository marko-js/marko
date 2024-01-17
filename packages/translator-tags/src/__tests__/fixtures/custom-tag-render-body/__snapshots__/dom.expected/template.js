import { setup as _child, attrs as _child_attrs, template as _child_template, walks as _child_walks } from "./components/child/index.marko";
import { bindRenderer as _bindRenderer, inChild as _inChild, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _childBody = /* @__PURE__ */_createRenderer("This is the body content", "");
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
  _child_attrs(_scope["#childScope/0"], {
    name: "World",
    renderBody: /* @__PURE__ */_bindRenderer(_scope, _childBody)
  });
};
export const template = `${_child_template}`;
export const walks = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/custom-tag-render-body/template.marko");