export const _template_ = `<button>Inc</button>${_child_template}`;
export const _walks_ = /* get, over(1), beginChild, _child_walks, endChild */` b/${_child_walks}&`;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { _setup_ as _child, _content_ as _child_input_content, _value_ as _child_input_value, _template_ as _child_template, _walks_ as _child_walks } from "./tags/child.marko";
const _inner$child_content = /* @__PURE__ */_$.value("inner", (_scope, inner) => _$.data(_scope["#text/1"], inner));
const _outer$child_content = _$.registerDynamicClosure("__tests__/template.marko_2_outer/subscriber", "outer", (_scope, outer) => _$.data(_scope["#text/0"], outer));
const _params_3$child_content = /* @__PURE__ */_$.value("_params_3", (_scope, _params_3) => _inner$child_content(_scope, _params_3[0]));
const _setup$child_content = _scope => {
  _outer$child_content._(_scope);
};
const _child_content2 = _$.register("__tests__/template.marko_2_renderer", /* @__PURE__ */_$.createRendererWithOwner("<div><!>.<!></div>", /* next(1), replace, over(2), replace */"D%c%", _setup$child_content, () => _params_3$child_content));
const _y$child_content = _$.registerDynamicClosure("__tests__/template.marko_1_y/subscriber", "y", (_scope, y) => _child_input_value(_scope["#childScope/0"], y), () => /* @__PURE__ */_$.inChild("#childScope/0", _child_input_value));
const _outer$child_content2 = /* @__PURE__ */_$.value("outer", (_scope, outer) => _outer$child_content(_scope));
const _params_2$child_content = /* @__PURE__ */_$.value("_params_2", (_scope, _params_2) => _outer$child_content2(_scope, _params_2[0]));
const _setup$child_content2 = _scope => {
  _y$child_content._(_scope);
  _child(_scope["#childScope/0"]);
  _child_input_content(_scope["#childScope/0"], _child_content2(_scope));
};
const _child_content = _$.register("__tests__/template.marko_1_renderer", /* @__PURE__ */_$.createRendererWithOwner(_child_template, /* beginChild, _child_walks, endChild */`/${_child_walks}&`, _setup$child_content2, () => _params_2$child_content));
const _y = /* @__PURE__ */_$.state("y", (_scope, y) => _y$child_content(_scope));
const _x_effect = _$.effect("__tests__/template.marko_0_x", (_scope, {
  x
}) => _$.on(_scope["#button/0"], "click", function () {
  _x(_scope, x + 1), x;
}));
const _x = /* @__PURE__ */_$.state("x", (_scope, x) => {
  _x_effect(_scope);
  _child_input_value(_scope["#childScope/1"], x);
}, () => /* @__PURE__ */_$.inChild("#childScope/1", _child_input_value));
export function _setup_(_scope) {
  _child(_scope["#childScope/1"]);
  _x(_scope, 1);
  _y(_scope, 2);
  _child_input_content(_scope["#childScope/1"], _child_content(_scope));
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_);