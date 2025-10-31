export const $template = `<!>${_myLet_template}${_myTag_template}<!>`;
export const $walks = /* over(1), beginChildWithVar, _myLet_walks, endChild, beginChild, _myTag_walks, endChild, over(1) */`b0${_myLet_walks}&/${_myTag_walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
import { $setup as _myLet, $input_value as _myLet_input_value, $template as _myLet_template, $walks as _myLet_walks } from "./tags/my-let.marko";
import { $setup as _myTag, $input_content as _myTag_input_content, $template as _myTag_template, $walks as _myTag_walks } from "./tags/my-tag.marko";
const $mytag_content__count__script = _._script("__tests__/template.marko_1_count", $scope => _._on($scope["#button/0"], "click", function () {
  _._var_change($scope._["#childScope/0"], $scope._.count + 1, "count");
}));
const $mytag_content__count = /* @__PURE__ */_._closure_get("count", $scope => {
  _._text($scope["#text/1"], $scope._.count);
  $mytag_content__count__script($scope);
});
const $mytag_content__setup = $mytag_content__count;
const $mytag_content = /* @__PURE__ */_._content("__tests__/template.marko_1_content", "<button> </button>", /* get, next(1), get, out(1) */" D l", $mytag_content__setup);
const $count__closure = /* @__PURE__ */_._closure($mytag_content__count);
const $count = _._var_resume("__tests__/template.marko_0_count/var", /* @__PURE__ */_._const("count", $count__closure));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $count);
  _myLet($scope["#childScope/0"]);
  _myLet_input_value($scope["#childScope/0"], 0);
  _myTag($scope["#childScope/2"]);
  _myTag_input_content($scope["#childScope/2"], $mytag_content($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);