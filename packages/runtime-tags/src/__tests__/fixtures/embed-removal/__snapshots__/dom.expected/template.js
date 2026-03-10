export const $template = "<button>Cleanup</button>";
export const $walks = /* get, over(1) */" b";
import * as _ from "@marko/runtime-tags/debug/dom";
const $setup__script = _._script("__tests__/template.marko_0", $scope => {
  _.$signal($scope, 0).onabort = () => {
    console.log("cleaned up");
  };
  _._on($scope["#button/0"], "click", function () {
    document.body.innerHTML = "";
  });
});
export function $setup($scope) {
  _.$signalReset($scope, 0);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);