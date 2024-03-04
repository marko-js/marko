import { data as _data, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _z = /* @__PURE__ */_value("z", (_scope, z) => _data(_scope["#text/0"], z));
const _y = /* @__PURE__ */_value("y", (_scope, y) => _z(_scope, y * 3));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _y(_scope, x * 2));
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-chain/template.marko");