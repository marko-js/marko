export const _template_ = "<button>Push</button><!><!>";
export const _walks_ = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _name_ as _child_input_name, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _expr_outer_inner$for_content = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    _: {
      outer
    },
    inner
  } = _scope;
  _child_input_name(_scope["#childScope/0"], `${outer}.${inner}`);
}, () => /* @__PURE__ */_$.inChild("#childScope/0", _child_input_name));
const _outer$for_content = /* @__PURE__ */_$.loopClosure("outer", "#text/0", 0, () => _expr_outer_inner$for_content);
const _inner$for_content = /* @__PURE__ */_$.value("inner", 0, () => _expr_outer_inner$for_content);
const _params_3$for_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _inner$for_content(_scope, _params_3[0]), () => _inner$for_content);
const _setup$for_content = _scope => {
  _outer$for_content._(_scope);
  _child(_scope["#childScope/0"]);
};
const _for_content2 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$for_content, () => _params_3$for_content);
const _for$for_content = /* @__PURE__ */_$.loopOf("#text/0", _for_content2);
const _outer$for_content2 = /* @__PURE__ */_$.value("outer", (_scope, outer) => _outer$for_content(_scope));
const _items$for_content = /* @__PURE__ */_$.loopClosure("items", "#text/1", (_scope, items) => _for$for_content(_scope, [items]), () => _for$for_content);
const _params_2$for_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outer$for_content2(_scope, _params_2[0]));
const _setup$for_content2 = _scope => {
  _items$for_content._(_scope);
};
const _for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", _setup$for_content2, () => _params_2$for_content);
const _for = /* @__PURE__ */_$.loopOf("#text/1", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/0"], "click", function () {
  _items(_scope, [...items, items.length]);
}));
const _items = /* @__PURE__ */_$.state("items", (_scope, items) => {
  _items_effect(_scope);
  _for(_scope, [items]);
  _items$for_content(_scope);
});
export function _setup_(_scope) {
  _items(_scope, [0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);