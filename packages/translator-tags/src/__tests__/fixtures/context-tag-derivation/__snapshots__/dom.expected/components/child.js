import { data as _data, value as _value, contextClosure as _contextClosure, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _y = /* @__PURE__ */_value("y", (_scope, y) => _data(_scope["#text/0"], y));
const _x = /* @__PURE__ */_contextClosure("x", "packages/translator-tags/src/__tests__/fixtures/context-tag-derivation/template.marko", (_scope, x) => _y(_scope, x));
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = function () {};
export const closures = [_x];
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup, closures), "packages/translator-tags/src/__tests__/fixtures/context-tag-derivation/components/child.marko");