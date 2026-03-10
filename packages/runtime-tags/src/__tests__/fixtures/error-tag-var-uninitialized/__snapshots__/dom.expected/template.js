const $Tag_content__walks = /* over(1), replace, over(2) */"b%c",
  $Tag_content__template = "<!><!><!>";
export const $template = `<!>${$Tag_content__template}<!>`;
export const $walks = /* over(1), <Tag/var>, over(1) */`b0${$Tag_content__walks}&b`;
import * as _ from "@marko/runtime-tags/debug/dom";
const $Tag_content2__name = /* @__PURE__ */_._closure_get("name", $scope => _._text($scope["#text/0"], _._assert_init($scope._, "name")));
const $Tag_content2__setup = $Tag_content2__name;
const $Tag_content2 = /* @__PURE__ */_._content("__tests__/template.marko_2_content", "<div> </div>", /* next(1), get, out(1) */"D l", $Tag_content2__setup);
const $Tag_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0");
const $Tag_content__input_content = ($scope, input_content) => $Tag_content__dynamicTag($scope, input_content);
const $Tag_content__setup = /* @__PURE__ */_._child_setup($scope => _._return($scope, "A"));
const $Tag_content__$params = ($scope, $params2) => $Tag_content__input($scope, $params2[0]);
const $Tag_content__input = ($scope, input) => $Tag_content__input_content($scope, input.content);
const $name = _._var_resume("__tests__/template.marko_0_name/var", /* @__PURE__ */_._const("name"));
export function $setup($scope) {
  _._var($scope, "#childScope/0", $name);
  $Tag_content__setup._($scope["#childScope/0"], $scope);
  $Tag_content__input_content($scope["#childScope/0"], $Tag_content2($scope));
}
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup);