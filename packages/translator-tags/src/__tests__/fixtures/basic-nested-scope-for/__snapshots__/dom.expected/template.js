import { on as _on, attr as _attr, queueSource as _queueSource, data as _data, intersection as _intersection, register as _register, queueEffect as _queueEffect, value as _value, closure as _closure, createRenderer as _createRenderer, loopOf as _loopOf, inLoopScope as _inLoopScope, createTemplate as _createTemplate } from "@marko/runtime-tags/src/dom";
const _expr_selected_num$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      selected
    },
    num
  } = _scope;
  _attr(_scope["#button/0"], "data-selected", selected === num);
  _attr(_scope["#button/0"], "data-multiple", num % selected === 0);
});
const _num$forBody_effect = _register("packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko_1_num", _scope => _on(_scope["#button/0"], "click", function () {
  const {
    num
  } = _scope;
  _queueSource(_scope._, _selected, num);
}));
const _num$forBody = /* @__PURE__ */_value("num", (_scope, num) => {
  _data(_scope["#text/1"], num);
  _queueEffect(_scope, _num$forBody_effect);
}, _expr_selected_num$forBody);
const _selected$forBody = /* @__PURE__ */_closure("selected", null, void 0, _expr_selected_num$forBody);
const _forBody = /* @__PURE__ */_createRenderer("<button> </button>", /* get, next(1), get */" D ", void 0, [_selected$forBody], void 0, void 0, void 0, void 0, (_scope, _destructure, _clean) => {
  let num;
  if (!_clean) [num] = _destructure;
  _num$forBody(_scope, num, _clean);
});
const _for = /* @__PURE__ */_loopOf("#text/0", _forBody);
const _selected = /* @__PURE__ */_value("selected", null, _inLoopScope(_selected$forBody, "#text/0"));
const _setup = _scope => {
  _selected(_scope, 0);
  _for(_scope, [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]]);
};
export const template = "<!>";
export const walks = /* replace, over(1) */"%b";
export const setup = _setup;
export default /* @__PURE__ */_createTemplate( /* @__PURE__ */_createRenderer(template, walks, setup), "packages/translator-tags/src/__tests__/fixtures/basic-nested-scope-for/template.marko");