export const $template = "<div><!> a</div><span><!> a</span><p><!> a</p>";
export const $walks = /* next(1), replace, out(1), next(1), replace, out(1), next(1), replace, out(1) */"D%lD%lD%l";
export const $setup = () => {};
import * as _$ from "@marko/runtime-tags/debug/dom";
const $expr_name_write_effect = _$.effect("__tests__/tags/child.marko_0_name_write", ($scope, {
  name,
  write
}) => {
  write(`${name} mounted`);
  _$.getAbortSignal($scope, 0).onabort = () => {
    write(`${name} destroyed`);
  };
});
const $expr_name_write = /* @__PURE__ */_$.intersection(7, $scope => {
  _$.resetAbortSignal($scope, 0);
  $expr_name_write_effect($scope);
});
export const $name = /* @__PURE__ */_$.value("name", ($scope, name) => {
  _$.data($scope["#text/0"], name);
  _$.data($scope["#text/1"], name);
  _$.data($scope["#text/2"], name);
  $expr_name_write($scope);
});
export const $write = /* @__PURE__ */_$.value("write", $expr_name_write);
export const $input = /* @__PURE__ */_$.value("input", ($scope, input) => {
  $name($scope, input.name);
  $write($scope, input.write);
});
export default /* @__PURE__ */_$.createTemplate("__tests__/tags/child.marko", $template, $walks, $setup, $input);