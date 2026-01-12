export const $template = "<div id=el></div><div></div>";
export const $walks = /* over(1), get, over(1) */"b b";
import * as _2 from "@marko/runtime-tags/debug/dom";
const $for_content__setup__script = _2._script("__tests__/template.marko_1", $scope => _2._on($scope["#button/0"], "click", function () {
  document.getElementById("el").innerHTML = $scope["#LoopKey"] === undefined ? 'index missing' : $scope["#LoopKey"];
}));
const $for_content__setup = $for_content__setup__script;
const $for = /* @__PURE__ */_2._for_of("#div/0", "<button>Click</button>", /* get, over(1) */" b", $for_content__setup);
export function $setup($scope) {
  $for($scope, [["hello"]]);
}
export default /* @__PURE__ */_2._template("__tests__/template.marko", $template, $walks, $setup);