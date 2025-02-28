export const _template_ = "<div> </div>";
export const _walks_ = /* next(1), get, out(1) */"D l";
export const _setup_ = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const _expr_name_write_effect = _$.effect("__tests__/tags/child.marko_0_name_write", (_scope, {
  "name/3": name,
  "write/4": write
}) => {
  write(`mounted ${name}`);
  _$.getAbortSignal(_scope, 0).onabort = () => {
    write(`destroyed ${name}`);
  };
});
const _expr_name_write = /* @__PURE__ */_$.intersection(5, _scope => {
  const {
    "name/3": name,
    "write/4": write
  } = _scope;
  _$.resetAbortSignal(_scope, 0);
  _expr_name_write_effect(_scope);
});
export const _write_ = /* @__PURE__ */_$.value("write/4", (_scope, write) => _expr_name_write(_scope));
export const _name_ = /* @__PURE__ */_$.value("name/3", (_scope, name) => {
  _$.data(_scope["#text/0"], name);
  _expr_name_write(_scope);
});
export const _input_ = /* @__PURE__ */_$.value("input/2", (_scope, input) => {
  _name_(_scope, input.name);
  _write_(_scope, input.write);
});
export const _params__ = /* @__PURE__ */_$.value("_params_/1", (_scope, _params_) => _input_(_scope, _params_[0]));
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, () => _params__);