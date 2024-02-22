import bazComp from "./components/baz.marko";
import { setup as _bazComp, template as _bazComp_template, walks as _bazComp_walks } from "./components/baz.marko";
const _setup = _scope => {
  _bazComp(_scope["#childScope/0"]);
  _bazComp(_scope["#childScope/1"]);
};
export const template = `<!>${_bazComp_template}${_bazComp_template}<!>`;
export const walks = /* beginChild, _bazComp_walks, endChild, beginChild, _bazComp_walks, endChild */`D/${_bazComp_walks}&/${_bazComp_walks}&D`;
export const setup = _setup;
import { createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/import-tag-shorthand/template.marko");