export const _template_ = "<button>Toggle</button><div></div><!><!>";
export const _walks_ = /* get, over(1), get, over(1), replace, over(1) */" b b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _write_ as _child_input_write, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _write$for_content = /* @__PURE__ */_$.loopClosure("write", "#text/2", (_scope, write) => _child_input_write(_scope["#childScope/0"], write));
const _item$for_content = /* @__PURE__ */_$.value("item", (_scope, item) => _child_input_name(_scope["#childScope/0"], item));
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _item$for_content(_scope, _params_2[0]));
const _setup$for_content = _scope => {
  _write$for_content._(_scope);
  _child(_scope["#childScope/0"]);
};
const _for_content = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$for_content, _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/2", _for_content);
const _write = /* @__PURE__ */_$.value("write");
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/0"], "click", function () {
  _items(_scope, items.length ? items.slice(0, -1) : [1, 2, 3]);
}));
const _items = /* @__PURE__ */_$.state("items/3", (_scope, items) => {
  _for(_scope, [items]);
  _items_effect(_scope);
});
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