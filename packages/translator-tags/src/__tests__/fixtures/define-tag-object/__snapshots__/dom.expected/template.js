import { data as _data, on as _on, queueSource as _queueSource, value as _value, register as _register, queueEffect as _queueEffect, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _myObj = /* @__PURE__ */_value("myObj", (_scope, myObj) => _data(_scope["#text/0"], JSON.stringify(myObj)));
const _x_effect = _register("packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko_0_x", _scope => _on(_scope["#button/1"], "click", function () {
  const {
    x
  } = _scope;
  _queueSource(_scope, _x, x + 1);
}));
const _x = /* @__PURE__ */_value("x", (_scope, x) => {
  _data(_scope["#text/2"], x);
  _queueEffect(_scope, _x_effect);
  _myObj(_scope, {
    foo: 1,
    bar: x + 1
  });
});
const _setup = _scope => {
  _x(_scope, 1);
};
export const template = "<div> </div><button> </button>";
export const walks = /* next(1), get, out(1), get, next(1), get, out(1) */"D l D l";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/define-tag-object/template.marko");