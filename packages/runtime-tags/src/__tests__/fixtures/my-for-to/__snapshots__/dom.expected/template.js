export const $template = `<!>${_myFor_template}<!>`;
export const $walks = /* over(1), beginChild, _myFor_walks, endChild, over(1) */`b/${_myFor_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _myFor, $input_content as _myFor_input_content, $input_to as _myFor_input_to, $template as _myFor_template, $walks as _myFor_walks } from "./tags/my-for.marko";
const $myfor_content__i = /* @__PURE__ */_._const("i", $scope => _._text($scope["#text/0"], $scope.i));
const $myfor_content__$params = /* @__PURE__ */_._const("$params2", $scope => $myfor_content__i($scope, $scope.$params2[0]));
const $myfor_content = _._content_resume("__tests__/template.marko_1_content", " ", /* get, over(1) */" b", 0, $myfor_content__$params);
export function $setup($scope) {
  _myFor($scope["#childScope/0"]);
  _myFor_input_content($scope["#childScope/0"], $myfor_content($scope));
  _myFor_input_to($scope["#childScope/0"], 5);
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);