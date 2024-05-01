import { nextTagId as _nextTagId, data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _setup = _scope => {
  _x(_scope, _nextTagId());
  _y(_scope, _nextTagId());
};
export const _template_ = "<div> </div><!>";
export const _walks_ = /* next(1), get, out(1), replace, over(1) */"D l%b";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/id-tag/template.marko");