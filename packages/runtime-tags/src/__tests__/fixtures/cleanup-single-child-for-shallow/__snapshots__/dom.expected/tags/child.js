export const _template = "<div> </div>";
export const _walks = /* next(1), get, out(1) */"D l";
export const _setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_name_write_effect = _$.effect("__tests__/tags/child.marko_0_name_write", (_scope, {
  name,
  write
}) => {
  write(`mounted ${name}`);
  _$.getAbortSignal(_scope, 0).onabort = () => {
    write(`destroyed ${name}`);
  };
});
const _expr_name_write = /* @__PURE__ */_$.intersection(5, _scope => {
  _$.resetAbortSignal(_scope, 0);
  _expr_name_write_effect(_scope);
});
export const _write = /* @__PURE__ */_$.value("write", _expr_name_write);
export const _name = /* @__PURE__ */_$.value("name", (_scope, name) => {
  _$.data(_scope["#text/0"], name);
  _expr_name_write(_scope);
});
export const _input = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _name(_scope, input.name);
  _write(_scope, input.write);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template, _walks, _setup, _input);