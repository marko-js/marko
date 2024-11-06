export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _write = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0/write", _scope => function (msg) {
  _scope["#div/1"].innerHTML += '\n' + msg;
});
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _expr_outerItem_middleItem$forBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      outerItem
    },
    middleItem
  } = _scope;
  _child_input_name(_scope["#childScope/0"], `${outerItem}.${middleItem}`);
}, () => _$.inChild("#childScope/0", _child_input_name));
const _write$forBody2 = /* @__PURE__ */_$.dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._, () => _$.inChild("#childScope/0", _child_input_write));
const _outerItem$forBody2 = /* @__PURE__ */_$.closure("outerItem", 0, void 0, () => _expr_outerItem_middleItem$forBody);
const _middleItem$forBody = /* @__PURE__ */_$.value("middleItem", 0, () => _expr_outerItem_middleItem$forBody);
const _params_3$forBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _middleItem$forBody(_scope, _params_3[0]), () => _middleItem$forBody);
const _setup$forBody2 = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}</div>`, /* next(1), beginChild, _child_walks, endChild */`D/${_child_walks}&`, _setup$forBody2, () => [_write$forBody2, _outerItem$forBody2], void 0, () => _params_3$forBody));
const _for$forBody = /* @__PURE__ */_$.loopOf("#text/1", _forBody2);
const _write$forBody = /* @__PURE__ */_$.closure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), void 0, () => _$.inChild("#childScope/0", _child_input_write));
const _outerItem$forBody = /* @__PURE__ */_$.value("outerItem", (_scope, outerItem) => _child_input_name(_scope["#childScope/0"], `${outerItem}`), () => _$.intersections([_$.inChild("#childScope/0", _child_input_name), _$.inLoopScope(_outerItem$forBody2, "#text/1")]));
const _items$forBody = /* @__PURE__ */_$.closure("items", (_scope, items) => _for$forBody(_scope, [items]), void 0, () => _for$forBody);
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outerItem$forBody(_scope, _params_2[0]), () => _outerItem$forBody);
const _setup$forBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$forBody, () => [_write$forBody, _items$forBody], void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#text/2", _forBody);
const _write2 = /* @__PURE__ */_$.value("write", 0, () => _$.intersections([_$.inLoopScope(_write$forBody, "#text/2"), _$.dynamicSubscribers("write")]));
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
  };
};
const _items_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko_0_items", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
}, () => _$.intersections([_for, _$.inLoopScope(_items$forBody, "#text/2")]));
export function _setup_(_scope) {
  _items(_scope, [1, 2, 3]);
  _write2(_scope, _write(_scope));
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-single-child-for-deep/template.marko");