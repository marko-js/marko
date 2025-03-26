export const _template_ = "<div> </div><span> </span><p> </p>";
export const _walks_ = /* next(1), get, out(1), next(1), get, out(1), next(1), get, out(1) */"D lD lD l";
export const _setup_ = () => {};
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
const _expr_name_write = /* @__PURE__ */_$.intersection(7, _scope => {
  _$.resetAbortSignal(_scope, 0);
  _expr_name_write_effect(_scope);
});
export const _write_ = /* @__PURE__ */_$.value("write", (_scope, write) => _expr_name_write(_scope));
export const _name_ = /* @__PURE__ */_$.value("name", (_scope, name) => {
  _$.data(_scope["#text/0"], name);
  _$.data(_scope["#text/1"], name);
  _$.data(_scope["#text/2"], name);
  _expr_name_write(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _name_(_scope, input.name);
  _write_(_scope, input.write);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, _input_);