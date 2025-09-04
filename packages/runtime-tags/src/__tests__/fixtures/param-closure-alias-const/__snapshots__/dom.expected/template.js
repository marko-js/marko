export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
import * as _ from "@marko/runtime-tags/debug/dom";
const $if_content__baz = /* @__PURE__ */_._if_closure("foo", "#text/0", 0, ($scope, baz) => _._text($scope["#text/0"], baz));
const $if_content__setup = $if_content__baz;
const $if_content = /* @__PURE__ */_._content_branch(" ", /* get, over(1) */" b", $if_content__setup);
const $for_content__if = /* @__PURE__ */_._if("#text/0", $if_content);
const $for_content__setup = $scope => {
  $for_content__if($scope, true ? 0 : 1);
};
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => $for_content__foo($scope, $params2[0]));
const $for_content__foo = /* @__PURE__ */_._const("foo");
const $for_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_of("#text/0", $for_content);
export function $setup($scope) {
  $for($scope, [["foo"]]);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);