const $define_content__walks = /* next(1), get, out(1) */"D l",
  $define_content__template = "<div> </div>";
export const $template = `<!>${$define_content__template}<!><button> </button>`;
export const $walks = /* over(1), beginChild, $define_content__walks, endChild, replace, over(1), get, next(1), get, out(1) */`b/${$define_content__walks}&%b D l`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__setup = $scope => {
  $define_content__setup($scope["#childScope/0"], $scope._);
};
const $if_content = /* @__PURE__ */_._content_branch(`<!>${$define_content__template}<!>`, /* over(1), beginChild, $define_content__walks, endChild, over(1) */`b/${$define_content__walks}&b`, $if_content__setup);
const $define_content__x = /* @__PURE__ */_._closure_get("x", ($scope, x) => _._text($scope["#text/0"], x));
const $define_content__setup = _._child_setup($define_content__x);
const $define_content = _._content_resume("__tests__/template.marko_1_content", $define_content__template, $define_content__walks, $define_content__setup);
const $if = /* @__PURE__ */_._if("#text/1", $if_content);
const $x__closure = /* @__PURE__ */_._closure($define_content__x);
const $x__script = _._script("__tests__/template.marko_0_x", ($scope, {
  x
}) => _._on($scope["#button/2"], "click", function () {
  $x($scope, ++x);
}));
const $x = /* @__PURE__ */_._let("x/4", ($scope, x) => {
  _._text($scope["#text/3"], x);
  $if($scope, x || 1 ? 0 : 1);
  $x__closure($scope);
  $x__script($scope);
});
export function $setup($scope) {
  $define_content__setup($scope["#childScope/0"], $scope);
  $x($scope, 1);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);