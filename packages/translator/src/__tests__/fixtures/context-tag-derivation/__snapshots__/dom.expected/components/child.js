import { data as _data, derivation as _derivation, contextClosure as _contextClosure, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _y = /* @__PURE__ */_derivation("y", 1, [], (_scope, x = _scope["x"]) => x, (_scope, y) => _data(_scope["#text/0"], y));
const _x = _contextClosure("x", "packages/translator/src/__tests__/fixtures/context-tag-derivation/template.marko", [_y]);
export const template = "<div> </div>";
export const walks = /* next(1), get, out(1) */"D l";
export const setup = function () {};
export const closures = [_x];
export default /* @__PURE__ */_createRenderFn(template, walks, setup, null, closures, "packages/translator/src/__tests__/fixtures/context-tag-derivation/components/child.marko");