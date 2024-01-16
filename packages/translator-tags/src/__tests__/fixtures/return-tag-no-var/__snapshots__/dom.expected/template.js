import { setup as _child, template as _child_template, walks as _child_walks } from "./components/child.marko";
const _setup = _scope => {
  _child(_scope["#childScope/0"]);
};
export const template = `${_child_template}`;
export const walks = /* beginChild, _child_walks, endChild */`/${_child_walks}&`;
export const setup = _setup;
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/return-tag-no-var/template.marko");