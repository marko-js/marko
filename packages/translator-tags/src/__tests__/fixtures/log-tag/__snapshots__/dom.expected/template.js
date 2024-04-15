const staticVar = "static var";
import { value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _tagVar = /* @__PURE__ */_value("tagVar", (_scope, tagVar) => console.log(tagVar));
const _setup = _scope => {
  console.log("identifer");
  console.log(staticVar);
  _tagVar(_scope, "tag var");
};
export const template = "<!><!>";
export const walks = /*  */"DD";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/log-tag/template.marko");