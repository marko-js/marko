export const _template_ = "<div></div>";
export const _walks_ = /* get, over(1) */" b";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_input_foo_input_bar = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    input_foo,
    input_bar
  } = _scope;
  _$.attr(_scope["#div/0"], "nested", `a ${input_foo + ` nested ${input_bar}`} b`);
});
export const _input_bar_ = /* @__PURE__ */_$.value("input_bar", (_scope, input_bar) => {
  _$.attr(_scope["#div/0"], "bar", `a ${input_bar} b`);
  _expr_input_foo_input_bar(_scope);
});
export const _input_foo_ = /* @__PURE__ */_$.value("input_foo", (_scope, input_foo) => {
  _$.classAttr(_scope["#div/0"], input_foo);
  _$.attr(_scope["#div/0"], "foo", 'a' + input_foo + 'b');
  _expr_input_foo_input_bar(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _input_foo_(_scope, input.foo);
  _input_bar_(_scope, input.bar);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", _template_, _walks_, _setup_, _input_);