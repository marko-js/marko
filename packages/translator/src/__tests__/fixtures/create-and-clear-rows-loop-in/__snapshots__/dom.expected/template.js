import { data as _data, computeLoopIn as _computeLoopIn, source as _source, createRenderer as _createRenderer, setSource as _setSource, loop as _loop, destructureSources as _destructureSources, createRenderFn as _createRenderFn } from "@marko/runtime-fluurt/src/dom";
const _key$forBody2 = /* @__PURE__ */_source("key", [], (_scope, key) => _data(_scope["#text/0"], key));
const _forBody2 = /* @__PURE__ */_createRenderer("<p> </p>", /* next(1), get */"D ");
const _text$forBody = /* @__PURE__ */_source("text", [], (_scope, text) => _data(_scope["#text/1"], text));
const _key$forBody = /* @__PURE__ */_source("key", [], (_scope, key) => _data(_scope["#text/0"], key));
const _forBody = /* @__PURE__ */_createRenderer("<p><!>: <!></p>", /* next(1), replace, over(2), replace */"D%c%");
const _for2 = /* @__PURE__ */_loop("#text/1", 1, _forBody2, [_key$forBody2], (_scope, [[key]]) => _setSource(_scope, _key$forBody2, key), (_scope, input = _scope["input"]) => _computeLoopIn(input.children));
const _for = /* @__PURE__ */_loop("#text/0", 1, _forBody, [_key$forBody, _text$forBody], (_scope, [[key, text]]) => {
  _setSource(_scope, _key$forBody, key);
  _setSource(_scope, _text$forBody, text);
}, (_scope, input = _scope["input"]) => _computeLoopIn(input.children));
const _input = /* @__PURE__ */_source("input", [_for, _for2]);
export const attrs = /* @__PURE__ */_destructureSources([_input], (_scope, input) => {
  _setSource(_scope, _input, input);
});
export { _input as _apply_input };
export const template = "<div><!><!></div>";
export const walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const setup = function () {};
export default /* @__PURE__ */_createRenderFn(template, walks, setup, attrs, null, "packages/translator/src/__tests__/fixtures/create-and-clear-rows-loop-in/template.marko");