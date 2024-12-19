export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _expr_outerItem_middleItem$for_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      outerItem
    },
    middleItem
  } = _scope;
  _child_input_name(_scope["#childScope/0"], `${outerItem}.${middleItem}`);
}, () => _$.inChild("#childScope/0", _child_input_name));
const _write$for_content2 = /* @__PURE__ */_$.dynamicClosure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), _scope => _scope._._, () => _$.inChild("#childScope/0", _child_input_write));
const _outerItem$for_content2 = /* @__PURE__ */_$.closure("outerItem", 0, void 0, () => _expr_outerItem_middleItem$for_content);
const _middleItem$for_content = /* @__PURE__ */_$.value("middleItem", 0, () => _expr_outerItem_middleItem$for_content);
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _middleItem$for_content(_scope, _params_3[0]), () => _middleItem$for_content);
const _setup$for_content2 = _scope => {
  _child(_scope["#childScope/0"]);
};
const _for_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}</div>`, /* next(1), beginChild, _child_walks, endChild */`D/${_child_walks}&`, _setup$for_content2, () => [_write$for_content2, _outerItem$for_content2], () => _params_3$for_content));
const _for$for_content = /* @__PURE__ */_$.loopOf("#text/1", _for_content2);
const _write$for_content = /* @__PURE__ */_$.closure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), void 0, () => _$.inChild("#childScope/0", _child_input_write));
const _outerItem$for_content = /* @__PURE__ */_$.value("outerItem", (_scope, outerItem) => _child_input_name(_scope["#childScope/0"], `${outerItem}`), () => _$.intersections([_$.inChild("#childScope/0", _child_input_name), _$.inLoopScope(_outerItem$for_content2, "#text/1")]));
const _items$for_content = /* @__PURE__ */_$.closure("items", (_scope, items) => _for$for_content(_scope, [items]), void 0, () => _for$for_content);
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outerItem$for_content(_scope, _params_2[0]), () => _outerItem$for_content);
const _setup$for_content = _scope => {
  _child(_scope["#childScope/0"]);
};
const _for_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`<div>${_child_template}<!></div>`, /* next(1), beginChild, _child_walks, endChild, replace */`D/${_child_walks}&%`, _setup$for_content, () => [_write$for_content, _items$for_content], () => _params_2$for_content));
const _for = /* @__PURE__ */_$.loopOf("#text/2", _for_content);
const _write = /* @__PURE__ */_$.value("write", 0, () => _$.intersections([_$.inLoopScope(_write$for_content, "#text/2"), _$.dynamicSubscribers("write")]));
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/0"], "click", function () {
  _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
}));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
}, () => _$.intersections([_for, _$.inLoopScope(_items$for_content, "#text/2")]));
export function _setup_(_scope) {
  _items(_scope, [1, 2, 3]);
  _write(_scope, _write2(_scope));
}
function _write2(_scope) {
  return function (msg) {
    _scope["#div/1"].innerHTML += '\n' + msg;
  };
}
_$.register("__tests__/template.marko_0/write", _write2);
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);