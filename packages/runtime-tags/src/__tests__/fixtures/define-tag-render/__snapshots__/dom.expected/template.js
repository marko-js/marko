const $MyTag_content__walks = /* next(1), over(1), replace, over(2), replace, out(1), get, next(1), get, out(1) */"Db%c%l D l",
  $MyTag_content__template = "<div>Hello <!> <!></div><button> </button>";
export const $template = `<!>${$MyTag_content__template}<!>`;
export const $walks = /* over(1), beginChild, $MyTag_content__walks, endChild, over(1) */`b/${$MyTag_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $MyTag_content__y__script = _._script("__tests__/template.marko_1_y", ($scope, {
  y
}) => _._on($scope["#button/2"], "click", function () {
  $MyTag_content__y($scope, ++y);
}));
const $MyTag_content__y = /* @__PURE__ */_._let("y/7", ($scope, y) => {
  _._text($scope["#text/1"], y);
  _._text($scope["#text/3"], y);
  $MyTag_content__y__script($scope);
});
const $MyTag_content__setup = /* @__PURE__ */_._child_setup($scope => $MyTag_content__y($scope, 1));
const $MyTag_content__name = /* @__PURE__ */_._const("name", ($scope, name) => _._text($scope["#text/0"], name));
const $MyTag_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $MyTag_content__$temp($scope, $params2?.[0]));
const $MyTag_content__$temp = /* @__PURE__ */_._const("$temp", ($scope, $temp) => $MyTag_content__name($scope, $temp.name));
export function $setup($scope) {
  $MyTag_content__setup._($scope["#childScope/0"], $scope);
  $MyTag_content__name($scope["#childScope/0"], "Ryan");
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);