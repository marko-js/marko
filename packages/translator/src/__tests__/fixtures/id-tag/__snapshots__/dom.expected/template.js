import { nextTagId as _nextTagId, data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-fluurt/src/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _setup = _scope => {
  _x(_scope, _nextTagId());
  _y(_scope, _nextTagId());
};
export const template = "<div> </div><!>";
export const walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator/src/__tests__/fixtures/id-tag/template.marko");