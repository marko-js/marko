export const $template = "<!><!><!>";
export const $walks = /* over(1), replace, over(2) */"b%c";
export const $setup = () => {};
import * as _ from "@marko/runtime-tags/debug/dom";
const $for_content__dynamicTag = /* @__PURE__ */_._dynamic_tag("#text/0", 0, 0, 1);
const $for_content__input_content__OR__args = /* @__PURE__ */_._or(3, $scope => {
  let {
    _: {
      input_content
    },
    $params2: args
  } = $scope;
  $for_content__dynamicTag($scope, input_content, () => [...args]);
});
const $for_content__input_content = /* @__PURE__ */_._for_closure("input_content", "#text/0", $for_content__input_content__OR__args);
const $for_content__$params = /* @__PURE__ */_._const("$params2", $for_content__input_content__OR__args);
const $for_content__setup = $for_content__input_content;
const $for_content = /* @__PURE__ */_._content_branch("<!><!><!>", /* over(1), replace, over(2) */"b%c", $for_content__setup, $for_content__$params);
const $for = /* @__PURE__ */_._for_to("#text/0", $for_content);
export const $input_to = /* @__PURE__ */_._const("input_to", ($scope, input_to) => $for($scope, [input_to, 0, 1]));
export const $input = /* @__PURE__ */_._const("input", ($scope, input) => {
  $input_to($scope, input.to);
  $input_content($scope, input.content);
});
export const $input_content = /* @__PURE__ */_._const("input_content", $for_content__input_content);
export default /* @__PURE__ */_._template("__tests__/tags/my-for.marko", $template, $walks, $setup, $input);