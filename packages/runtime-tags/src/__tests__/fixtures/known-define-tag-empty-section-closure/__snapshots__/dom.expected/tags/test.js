const $Tag_content__walks = /* over(1), replace, over(2) */"b%c",
  $Tag_content__template = "<!><!><!>";
export const $template = `<!>${$Tag_content__template}<!>`;
export const $walks = /* over(1), <Tag>, over(1) */`b/${$Tag_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__count = /* @__PURE__ */_._closure_get("count", $scope => _._text($scope["#text/0"], $scope._._.count), $scope => $scope._._);
const $if_content__setup = $if_content__count;
const $Tag_content__if = /* @__PURE__ */_._if("#text/0", "<div> </div>", /* next(1), get, out(1) */"D l", $if_content__setup);
const $Tag_content__input_x = ($scope, input_x) => $Tag_content__if($scope, input_x ? 0 : 1);
const $Tag_content__$params = ($scope, $params2) => $Tag_content__input($scope, $params2[0]);
const $Tag_content__input = ($scope, input) => $Tag_content__input_x($scope, input.x);
const $count = /* @__PURE__ */_._const("count");
export function $setup($scope) {
  $scope["#childScope/0"]._ = $scope;
  $Tag_content__input_x($scope["#childScope/0"], 1);
  $count($scope, 123);
}
export default /* @__PURE__ */_._template("__tests__/tags/test.marko", $template, $walks, $setup);