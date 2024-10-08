export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import { on as _on, register as _register, inChild as _inChild, queueSource as _queueSource, createRenderer as _createRenderer, intersection as _intersection, dynamicClosure as _dynamicClosure, closure as _closure, value as _value, registerRenderer as _registerRenderer, loopOf as _loopOf, inLoopScope as _inLoopScope, intersections as _intersections, dynamicSubscribers as _dynamicSubscribers, queueEffect as _queueEffect, createTemplate as _createTemplate } from "@marko/runtime-tags/debug/dom";
const _ = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0/_", _scope => function (msg) {
  _scope["#div/1"].innerHTML += '\n' + msg;
});
import { _setup_ as _child, _write_ as _child__write_, _name_ as _child__name_, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _expr_outerItem_middleItem$forBody = /* @__PURE__ */_intersection(2, _scope => {
  const {
    _: {
      outerItem
    },
    middleItem
  } = _scope;
  _child__name_(_scope["#childScope/0"], `${outerItem}.${middleItem}`);
}, () => _inChild("#childScope/0", _child__name_));
const _write$forBody2 = /* @__PURE__ */_dynamicClosure("write", (_scope, write) => _child__write_(_scope["#childScope/0"], write), _scope => _scope._._, () => _inChild("#childScope/0", _child__write_));
const _outerItem$forBody2 = /* @__PURE__ */_closure("outerItem", null, void 0, () => _expr_outerItem_middleItem$forBody);
const _middleItem$forBody = /* @__PURE__ */_value("middleItem", null, () => _expr_outerItem_middleItem$forBody);
const _params_3$forBody = /* @__PURE__ */_value("_params_3", (_scope, _params_3) => _middleItem$forBody(_scope, _params_3[0]), () => _middleItem$forBody);
const _setup$forBody2 = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody2 = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_2_renderer", /* @__PURE__ */_createRenderer(`<div>${_child_template}</div>`, /* next(1), beginChild, _child_walks, endChild */`D/${_child_walks}&`, _setup$forBody2, () => [_write$forBody2, _outerItem$forBody2], void 0, () => _params_3$forBody));
const _for$forBody = /* @__PURE__ */_loopOf("#text/1", _forBody2);
const _write$forBody = /* @__PURE__ */_closure("write", (_scope, write) => _child__write_(_scope["#childScope/0"], write), void 0, () => _inChild("#childScope/0", _child__write_));
const _outerItem$forBody = /* @__PURE__ */_value("outerItem", (_scope, outerItem) => _child__name_(_scope["#childScope/0"], `${outerItem}`), () => _intersections([_inChild("#childScope/0", _child__name_), _inLoopScope(_outerItem$forBody2, "#text/1")]));
const _items$forBody = /* @__PURE__ */_closure("items", (_scope, items) => _for$forBody(_scope, [items]), void 0, () => _for$forBody);
const _params_2$forBody = /* @__PURE__ */_value("_params_2", (_scope, _params_2) => _outerItem$forBody(_scope, _params_2[0]), () => _outerItem$forBody);
const _setup$forBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody = _registerRenderer("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_1_renderer", /* @__PURE__ */_createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$forBody, () => [_write$forBody, _items$forBody], void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_loopOf("#text/2", _forBody);
const _write = /* @__PURE__ */_value("write", null, () => _intersections([_inLoopScope(_write$forBody, "#text/2"), _dynamicSubscribers("write")]));
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _queueSource(_scope, _items, items.length ? items.slice(0, -1) : [1, 2, 3]);
  };
};
const _items_effect = _register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0_items", _scope => _on(_scope["#button/0"], "click", _onClick(_scope)));
const _items = /* @__PURE__ */_value("items", (_scope, items) => {
  _queueEffect(_scope, _items_effect);
  _for(_scope, [items]);
}, () => _intersections([_for, _inLoopScope(_items$forBody, "#text/2")]));
export function _setup_(_scope) {
  _items(_scope, [1, 2, 3]);
  _write(_scope, _(_scope));
}
export default /* @__PURE__ */_createTemplate(/* @__PURE__ */_createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko");