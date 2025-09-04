export const $template = "<div> </div>";
export const $walks = /* next(1), get, out(1) */"D l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $name__OR__write__script = _._script("__tests__/tags/child.marko_0_name_write", ($scope, {
  name,
  write
}) => {
  write(`mounted ${name}`);
  _.$signal($scope, 0).onabort = () => {
    write(`destroyed ${name}`);
  };
});
const $name__OR__write = /* @__PURE__ */_._or(5, $scope => {
  _.$signalReset($scope, 0);
  $name__OR__write__script($scope);
});
export const $name = /* @__PURE__ */_._const("name", ($scope, name) => {
  _._text($scope["#text/0"], name);
  $name__OR__write($scope);
});
export const $write = /* @__PURE__ */_._const("write", $name__OR__write);
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $name($scope, input.name);
  $write($scope, input.write);
});
export default /* @__PURE__ */_._template("__tests__/tags/child.marko", $template, $walks, $setup, $input);