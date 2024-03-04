const x = 1;
import { data as _data, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _setup = _scope => {
  _data(_scope["#text/0"], x);
};
export const template = "<div><span> </span></div>";
export const walks = /* next(2), get, out(2) */"E m";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-static/template.marko");