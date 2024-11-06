export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const _write = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0/write", _scope => function (msg) {
  _scope["#div/1"].innerHTML += '\n' + msg;
});
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./components/child.marko";
const _write$forBody = /* @__PURE__ */_$.closure("write", (_scope, write) => _child_input_write(_scope["#childScope/0"], write), void 0, () => _$.inChild("#childScope/0", _child_input_write));
const _item$forBody = /* @__PURE__ */_$.value("item", (_scope, item) => _child_input_name(_scope["#childScope/0"], item), () => _$.inChild("#childScope/0", _child_input_name));
const _params_2$forBody = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _item$forBody(_scope, _params_2[0]), () => _item$forBody);
const _setup$forBody = _scope => {
  _child(_scope["#childScope/0"]);
};
const _forBody = _$.register("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_1_renderer", /* @__PURE__ */_$.createRenderer(`${_child_template}`, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$forBody, () => [_write$forBody], void 0, () => _params_2$forBody));
const _for = /* @__PURE__ */_$.loopOf("#text/2", _forBody);
const _write2 = /* @__PURE__ */_$.value("write", null, () => _$.inLoopScope(_write$forBody, "#text/2"));
const _onClick = _scope => {
  const {
    items
  } = _scope;
  return function () {
    _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
  };
};
const _items_effect = _$.effect("packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko_0_items", _scope => _$.on(_scope["#button/0"], "click", _onClick(_scope)));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
}, () => _for);
export function _setup_(_scope) {
  _items(_scope, [1, 2, 3]);
  _write2(_scope, _write(_scope));
}
export default /* @__PURE__ */_$.createTemplate(/* @__PURE__ */_$.createRenderer(_template_, _walks_, _setup_), "packages/translator-tags/src/__tests__/fixtures/cleanup-n-child-for-shallow/template.marko");