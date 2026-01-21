export const $template = "<button>Click</button>";
export const $walks = /* get, over(1) */" b";
const identity = fn => fn;
import * as _2 from "@marko/runtime-tags/debug/dom";
const $setup__script = _2._script("__tests__/template.marko_0", $scope => _2._on($scope["#button/0"], "click", identity((_, el) => {
  let bar;
  (($result, value) => ({
    value,
    bar
  } = $result, $result))({
    value: "updated",
    bar: "bar"
  });
  el.textContent = bar;
})));
export function $setup($scope) {
  /* value */"initial";
  $setup__script($scope);
}
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);