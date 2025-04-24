export const $template = "<!><!><!>";
export const $walks = /* replace, over(1) */"D%bD";
import * as _$ from "@marko/runtime-tags/debug/dom";
const $baz$if$content = /* @__PURE__ */_$.state("baz/1", ($scope, baz) => _$.data($scope["#text/0"], baz));
const $foo$if$content = /* @__PURE__ */_$.conditionalClosure("foo", "#text/0", 0, $baz$if$content);
const $if_content = /* @__PURE__ */_$.createRenderer(" ", /* get */" ", 0, 0, $foo$if$content);
const $if$for$content = /* @__PURE__ */_$.conditional("#text/0", $if_content);
const $setup$for$content = $scope => {
  $if$for$content($scope, true ? 0 : 1);
};
const $params2$for$content = /* @__PURE__ */_$.value("$params2", ($scope, $params2) => $foo$for$content($scope, $params2[0]));
const $foo$for$content = /* @__PURE__ */_$.value("foo");
const $for_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$for$content, $params2$for$content);
const $for = /* @__PURE__ */_$.loopOf("#text/0", $for_content);
export function $setup($scope) {
  $for($scope, [["foo"]]);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);