export const _template_ = "<!><!><!><div></div>";
export const _walks_ = /* replace, over(1), replace, over(1), get, over(1) */"D%b%b b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _else_content = /* @__PURE__ */_$.createRenderer("C");
const _elseIf_content = /* @__PURE__ */_$.createRenderer("B");
const _if_content3 = /* @__PURE__ */_$.createRenderer("A");
const _if_content2 = /* @__PURE__ */_$.createRenderer("World");
const _if_content = /* @__PURE__ */_$.createRenderer("Hello");
const _expr_input_x_input_y = /* @__PURE__ */_$.intersection(10, _scope => {
  const {
    "input_x/8": input_x,
    "input_y/9": input_y
  } = _scope;
  _if3(_scope, input_x ? 0 : input_y ? 1 : 2);
});
const _expr_input_a_input_b = /* @__PURE__ */_$.intersection(7, _scope => {
  const {
    "input_a/5": input_a,
    "input_b/6": input_b
  } = _scope;
  _if(_scope, input_a + input_b ? 0 : 1);
  _if2(_scope, (input_a, input_b) ? 0 : 1);
});
const _if3 = /* @__PURE__ */_$.conditional("#div/2", _if_content3, _elseIf_content, _else_content);
const _if2 = /* @__PURE__ */_$.conditional("#text/1", _if_content2);
const _if = /* @__PURE__ */_$.conditional("#text/0", _if_content);
export const _input_y_ = /* @__PURE__ */_$.value("input_y/9", (_scope, input_y) => _expr_input_x_input_y(_scope));
export const _input_x_ = /* @__PURE__ */_$.value("input_x/8", (_scope, input_x) => _expr_input_x_input_y(_scope));
export const _input_b_ = /* @__PURE__ */_$.value("input_b/6", (_scope, input_b) => _expr_input_a_input_b(_scope));
export const _input_a_ = /* @__PURE__ */_$.value("input_a/5", (_scope, input_a) => _expr_input_a_input_b(_scope));
export const _input_ = /* @__PURE__ */_$.value("input/4", (_scope, input) => {
  _input_a_(_scope, input.a);
  _input_b_(_scope, input.b);
  _input_x_(_scope, input.x);
  _input_y_(_scope, input.y);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/3", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, () => _params__);