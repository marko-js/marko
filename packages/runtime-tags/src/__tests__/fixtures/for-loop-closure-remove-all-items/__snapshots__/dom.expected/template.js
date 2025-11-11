export const $template = "<div><!><div></div></div>";
export const $walks = /* next(1), replace, over(1), get, out(1) */"D%b l";
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__items__script = _._script("__tests__/template.marko_1_items", $scope => _._on($scope["#button/0"], "click", function () {
  _._el_read($scope._["#div/1"]).textContent = $scope._.items.join(", ");
  $items($scope._, []);
}));
const $for_content__items = /* @__PURE__ */_._for_closure("#text/0", $for_content__items__script);
const $for_content__setup = $for_content__items;
const $for_content = /* @__PURE__ */_._content_branch("<button>Test</button>", /* get, over(1) */" b", $for_content__setup);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
const $items = /* @__PURE__ */_._let("items/2", $scope => {
  $for($scope, [$scope.items]);
  $for_content__items($scope);
});
export function $setup($scope) {
  $items($scope, ["hello"]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);