export const _template = "<div>a</div><span>b</span><p>c</p>";
export const _walks = /* over(3) */"d";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _input_effect = _$.effect("__tests__/tags/child.marko_0_input", (_scope, {
  input
}) => {
  input.write('mounted');
  _$.getAbortSignal(_scope, 0).onabort = () => {
    input.write('destroyed');
  };
});
export const _input = /* @__PURE__ */_$.value("input", _scope => {
  _$.resetAbortSignal(_scope, 0);
  _input_effect(_scope);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);