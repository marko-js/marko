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
const _expr_name_write = /* @__PURE__ */_$.intersection(2, _scope => {
  const {
    name,
    write
  } = _scope;
  _$.resetAbortSignal(_scope, 0);
  _expr_name_write_effect(_scope);
});
export const _write_ = /* @__PURE__ */_$.value("write", 0, () => _expr_name_write);
export const _name_ = /* @__PURE__ */_$.value("name", (_scope, name) => {
  _$.data(_scope["#text/0"], name);
  _$.data(_scope["#text/1"], name);
  _$.data(_scope["#text/2"], name);
}, () => _expr_name_write);
export const _input_ = /* @__PURE__ */_$.value("input", (_scope, input) => {
  _name_(_scope, input.name);
  _write_(_scope, input.write);
}, () => _$.intersections([_name_, _write_]));
export const _params__ = /* @__PURE__ */_$.value("_params_", (_scope, _params_) => _input_(_scope, _params_[0]), () => _input_);
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", _template_, _walks_, _setup_, void 0, () => _params__);