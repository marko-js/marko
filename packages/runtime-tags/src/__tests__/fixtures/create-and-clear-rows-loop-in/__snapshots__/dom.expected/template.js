export const $template = "<div><!><!></div>";
export const $walks = /* next(1), replace, over(1), replace, out(1) */"D%b%l";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content2__key = /* @__PURE__ */_._const("key", ($scope, key) => _._text($scope["#text/0"], key));
const $for_content2__$params = /* @__PURE__ */_._const("$params3", ($scope, $params3) => $for_content2__key($scope, $params3[0]));
const $for_content2 = /* @__PURE__ */_._content_branch("<p> </p>", /* next(1), get, out(1) */"D l", 0, $for_content2__$params);
const $for_content__key = /* @__PURE__ */_._const("key", ($scope, key) => _._text($scope["#text/0"], key));
const $for_content__text = /* @__PURE__ */_._const("text", ($scope, text) => _._text($scope["#text/1"], text));
const $for_content__$params = /* @__PURE__ */_._const("$params2", ($scope, $params2) => {
  $for_content__key($scope, $params2[0]);
  $for_content__text($scope, $params2[1]);
});
const $for_content = /* @__PURE__ */_._content_branch("<p><!>: <!></p>", /* next(1), replace, over(2), replace, out(1) */"D%c%l", 0, $for_content__$params);
const $for = /* @__PURE__ */_._for_in("#text/0", $for_content);
const $for2 = /* @__PURE__ */_._for_in("#text/1", $for_content2);
export const $input_children = /* @__PURE__ */_._const("input_children", ($scope, input_children) => {
  $for($scope, [input_children]);
  $for2($scope, [input_children]);
});
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => $input_children($scope, input.children));
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);