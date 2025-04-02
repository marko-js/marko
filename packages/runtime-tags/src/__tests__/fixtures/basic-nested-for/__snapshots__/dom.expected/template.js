export const _template = "<button>Push</button><!><!>";
export const _walks = /* get, over(1), replace, over(1) */" b%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup as _child, _name as _child_input_name, _template as _child_template, _walks as _child_walks } from "./tags/child.marko";
const _expr_outer_inner$for_content = /* @__PURE__ */_$.intersection(3, _scope => {
  const {
    _: {
      outer
    },
    inner
  } = _scope;
  _child_input_name(_scope["#childScope/0"], `${outer}.${inner}`);
});
const _outer$for_content = /* @__PURE__ */_$.loopClosure("outer", "#text/0", _scope => _expr_outer_inner$for_content(_scope));
const _inner$for_content = /* @__PURE__ */_$.value("inner", _scope => _expr_outer_inner$for_content(_scope));
const _params3$for_content = /* @__PURE__ */_$.value("_params3", (_scope, _params3) => _inner$for_content(_scope, _params3[0]));
const _setup$for_content = _scope => {
  _child(_scope["#childScope/0"]);
};
const _for_content2 = /* @__PURE__ */_$.createRenderer(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$for_content, _params3$for_content, _scope => _outer$for_content._(_scope));
const _for$for_content = /* @__PURE__ */_$.loopOf("#text/0", _for_content2);
const _items$for_content = /* @__PURE__ */_$.loopClosure("items", "#text/1", (_scope, items) => _for$for_content(_scope, [items]));
const _outer$for_content2 = /* @__PURE__ */_$.value("outer", _scope => _outer$for_content(_scope));
const _params2$for_content = /* @__PURE__ */_$.value("_params2", (_scope, _params2) => _outer$for_content2(_scope, _params2[0]));
const _for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", 0, _params2$for_content, _scope => _items$for_content._(_scope));
const _for = /* @__PURE__ */_$.loopOf("#text/1", _for_content);
const _items_effect = _$.effect("__tests__/template.marko_0_items", (_scope, {
  items
}) => _$.on(_scope["#button/0"], "click", function () {
  _items(_scope, [...items, items.length]);
}));
const _items = /* @__PURE__ */_$.state("items/2", (_scope, items) => {
  _for(_scope, [items]);
  _items$for_content(_scope);
  _items_effect(_scope);
});
export function _setup(_scope) {
  _items(_scope, [0, 1]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template, _walks, _setup);