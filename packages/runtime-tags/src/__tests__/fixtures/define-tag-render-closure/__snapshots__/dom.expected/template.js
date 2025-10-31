const $MyTag_content__walks = /* next(1), get, out(1) */"D l",
  $MyTag_content__template = "<div> </div>";
export const $template = `<!>${$MyTag_content__template}<!><button> </button>`;
export const $walks = /* over(1), beginChild, $MyTag_content__walks, endChild, replace, over(1), get, next(1), get, out(1) */`b/${$MyTag_content__walks}&%b D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup = $scope => {
  $MyTag_content__setup._($scope["#childScope/0"], $scope._);
};
const $if_content = /* @__PURE__ */_._content_branch(`<!>${$MyTag_content__template}<!>`, /* over(1), beginChild, $MyTag_content__walks, endChild, over(1) */`b/${$MyTag_content__walks}&b`, $if_content__setup);
const $MyTag_content__x = /* @__PURE__ */_._closure_get("x", $scope => _._text($scope["#text/0"], $scope._.x));
const $MyTag_content__setup = /* @__PURE__ */_._child_setup($MyTag_content__x);
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $x__closure = /* @__PURE__ */_._closure($MyTag_content__x);
const $x__script = _._script("__tests__/template.marko_0_x", $scope => _._on($scope["#button/2"], "click", function () {
  $x($scope, $scope.x + 1);
}));
const $x = /* @__PURE__ */_._let("x/4", $scope => {
  _._text($scope["#text/3"], $scope.x);
  $if($scope, $scope.x || 1 ? 0 : 1);
  $x__closure($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $MyTag_content__setup._($scope["#childScope/0"], $scope);
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);