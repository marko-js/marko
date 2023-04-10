import { data as _data, value as _value, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _destructure2 = (_scope, {
  x,
  y
}) => {
  _x(_scope, x);
  _y(_scope, y);
};
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/1"], y));
const _x = /* @__PURE__ */_value("x", (_scope, x) => _data(_scope["#text/0"], x));
const _z = /* @__PURE__ */_value("z", (_scope, z) => _destructure2(_scope, z));
const _setup = _scope => {
  _z(_scope, {
    x: 1,
    y: 2
  });
};
export const template = "<div> </div><!>";
export const walks = /* next(1), get, out(1), replace, over(1) */"D l%b";
export const setup = _setup;
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, null, "packages/translator/src/__tests__/fixtures/const-tag-destructure/template.marko");