export const $template = "<button>Click</button>";
export const $walks = /* get, over(1) */" b";
const identity = fn => fn;
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", identity(() => {
  /* value */"updated";
})));
export function $setup($scope) {
  /* value */"initial";
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);