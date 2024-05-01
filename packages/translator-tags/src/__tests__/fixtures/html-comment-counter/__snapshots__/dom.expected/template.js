import { on as _on, queueSource as _queueSource, data as _data, register as _register, queueEffect as _queueEffect, value as _value, createRenderer as _createRenderer, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _count_effect = _register("packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko_0_count", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    count
  } = _scope;
  _queueSource(_scope, _count, count + 1);
}));
const _count = /* @__PURE__ */_value("count", (_scope, count) => {
  _data(_scope["#text/1"], count);
  _data(_scope["#comment/2"], `${count} + ${count} = ${count + count}`);
  _queueEffect(_scope, _count_effect);
});
const _setup = _scope => {
  _count(_scope, 0);
};
export const _template_ = "<div><button> </button><!----></div>";
export const _walks_ = /* next(1), get, next(1), get, out(1), get, out(1) */"D D l l";
export const _setup_ = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/html-comment-counter/template.marko");