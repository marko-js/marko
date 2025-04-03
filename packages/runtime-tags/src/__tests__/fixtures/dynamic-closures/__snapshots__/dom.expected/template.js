export const $template = `<button></button>${_customTag_template}<div></div>`;
export const $walks = /* get, over(1), beginChild, _customTag_walks, endChild, get, over(1) */` b/${_customTag_walks}& b`;
const a = 1;
import * as _$ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $c$if$content = /* @__PURE__ */_$.dynamicClosureRead("c", ($scope, c) => _$.data($scope["#text/2"], c), $scope => $scope._._);
const $b$if$content = /* @__PURE__ */_$.dynamicClosureRead("b", ($scope, b) => _$.data($scope["#text/1"], b), $scope => $scope._._);
const $setup$if$content = $scope => {
  _$.data($scope["#text/0"], a);
};
const $if_content2 = /* @__PURE__ */_$.createRenderer("<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", $setup$if$content, 0, $scope => {
  $b$if$content($scope);
  $c$if$content($scope);
});
const $if$if$content = /* @__PURE__ */_$.conditional("#text/0", $if_content2);
const $setup$if$content2 = $scope => {
  $if$if$content($scope, Math.random() ? 0 : 1);
};
const $if_content = /* @__PURE__ */_$.createRenderer("<!><!><!>", /* replace */"D%D", $setup$if$content2);
const $c$customtag$content = /* @__PURE__ */_$.dynamicClosureRead("c", ($scope, c) => _$.data($scope["#text/2"], c));
const $b$customtag$content = /* @__PURE__ */_$.dynamicClosureRead("b", ($scope, b) => _$.data($scope["#text/1"], b));
const $setup$customtag$content = $scope => {
  _$.data($scope["#text/0"], a);
};
const $customtag_content = /* @__PURE__ */_$.createContent("__tests__/template.marko_1_renderer", "<!> <!> <!>", /* replace, over(2), replace, over(2), replace */"%c%c%", $setup$customtag$content, 0, $scope => {
  $b$customtag$content($scope);
  $c$customtag$content($scope);
});
const $if = /* @__PURE__ */_$.conditional("#div/2", $if_content);
const $c_closure = /* @__PURE__ */_$.dynamicClosure($c$customtag$content, $c$if$content);
const $c = /* @__PURE__ */_$.state("c/4", $c_closure);
const $b = /* @__PURE__ */_$.value("b");
const $setup_effect = _$.effect("__tests__/template.marko_0", $scope => _$.on($scope["#button/0"], "click", function () {
  $c($scope, 4);
}));
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  $b($scope, 2);
  $c($scope, 3);
  _customTag_input_content($scope["#childScope/1"], $customtag_content($scope));
  $if($scope, Math.random() ? 0 : 1);
  $setup_effect($scope);
}
export default /* @__PURE__ */_$.createTemplate("__tests__/template.marko", $template, $walks, $setup);