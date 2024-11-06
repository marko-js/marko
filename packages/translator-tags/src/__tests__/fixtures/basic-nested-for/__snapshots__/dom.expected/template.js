export const _template_ = "<button>Push</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _expr_outer_inner$forBody = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      outer
    },
    inner
  } = _scope;
  _child_input_name(_scope["#childScope/0"], `${outer}.${inner}`);
}, () => _$.inChild("#childScope/0", _child_input_name));
const _outer$forBody = /* @__PURE__ */_$.closure("outer", null, void 0, () => _expr_outer_inner$forBody);
const _inner$forBody = /* @__PURE__ */_$.value("inner", null, () => _expr_outer_inner$forBody);
const _params_3$forBody = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _inner$forBody(_scope, _params_3[0]), () => _inner$forBody);
const _setup$forBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody2 = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_2_renderer", /* @__PURE__ */_$.createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$forBody, () => [_outer$forBody], void 0, () => _params_3$forBody));
const _for$forBody = /* @__PURE__ */_$.loopOf("#text/0", _forBody2);
const _outer$forBody2 = /* @__PURE__ */_$.value("outer", null, () => _$.inLoopScope(_outer$forBody, "#text/0"));
const _items$forBody = /* @__PURE__ */_$.closure("items", (_scope, items) => _for$forBody(_scope, [items]), void 0, () => _for$forBody);
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outer$forBody2(_scope, _params_2[0]), () => _outer$forBody2);
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", void 0, () => [_items$forBody], void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#text/1", _forBody);
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, [...items, items.length]);
  };
};
const _items_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko_0_items", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
}, () => _$.intersections([_for, _$.inLoopScope(_items$forBody, "#text/1")]));
export function _setup_(_scope) {
  _items(_scope, [0, 1]);
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/basic-nested-for/template.marko");