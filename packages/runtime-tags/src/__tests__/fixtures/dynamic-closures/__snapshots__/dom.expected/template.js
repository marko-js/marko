export const $template = `<button></button>${_customTag_template}<div></div>`;
export const $walks = /* get, over(1), <custom-tag>, get, over(1) */` b/${_customTag_walks}& b`;
const a = 1;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _customTag, $input_content as _customTag_input_content, $template as _customTag_template, $walks as _customTag_walks } from "./tags/custom-tag.marko";
const $if_content2__b = /* @__PURE__ */_._closure_get("b", $scope => _._text($scope["#text/1"], $scope._._.b), $scope => $scope._._);
const $if_content2__setup = $scope => {
  $if_content2__b($scope);
  $if_content2__c($scope);
  _._text($scope["#text/0"], a);
};
const $if_content2__c = /* @__PURE__ */_._closure_get("c", $scope => _._text($scope["#text/2"], $scope._._.c), $scope => $scope._._);
const $if_content__if = /* @__PURE__ */_._if("#text/0", "<!> <!> <!>", /* replace, over(2), replace, over(2), replace, over(1) */"%c%c%b", $if_content2__setup);
const $if_content__setup = $scope => $if_content__if($scope, Math.random() ? 0 : 1);
const $customtag_content__b = /* @__PURE__ */_._closure_get("b", $scope => _._text($scope["#text/1"], $scope._.b));
const $customtag_content__setup = $scope => {
  $customtag_content__b($scope);
  $customtag_content__c($scope);
  _._text($scope["#text/0"], a);
};
const $customtag_content__c = /* @__PURE__ */_._closure_get("c", $scope => _._text($scope["#text/2"], $scope._.c));
const $customtag_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<!> <!> <!>", /* replace, over(2), replace, over(2), replace, over(1) */"%c%c%b", $customtag_content__setup);
const $b = /* @__PURE__ */_._const("b");
const $c__closure = /* @__PURE__ */_._closure($customtag_content__c, $if_content2__c);
const $c = /* @__PURE__ */_._let("c/4", $c__closure);
const $if = /* @__PURE__ */_._if("#div/2", "<!><!><!>", /* over(1), replace, over(2) */"b%c", $if_content__setup);
const $setup__script = _._script("__tests__/template.marko_0", $scope => _._on($scope["#button/0"], "click", function () {
  $c($scope, 4);
}));
export function $setup($scope) {
  _customTag($scope["#childScope/1"]);
  _customTag_input_content($scope["#childScope/1"], $customtag_content($scope));
  $b($scope, 2);
  $c($scope, 3);
  $if($scope, Math.random() ? 0 : 1);
  $setup__script($scope);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);