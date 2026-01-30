export const $template = `${_wrap_template}<!>`;
export const $walks = /* <wrap>, over(1) */`/${_wrap_walks}&b`;
import { $setup as _wrap, $input_foo as _wrap_input_foo, $_class as _wrap_input_class, $rest as _wrap_input_$rest, $template as _wrap_template, $walks as _wrap_walks } from "./tags/wrap.marko";
import * as _ from "@marko/runtime-tags/debug/dom";
const $desc_content2 = _._content_resume("__tests__/template.marko_2_content", "Two", /* over(1) */"b");
const $desc_content = _._content_resume("__tests__/template.marko_1_content", "One", /* over(1) */"b");
export function $setup($scope) {
  _wrap($scope["#childScope/0"]);
  _wrap_input_foo($scope["#childScope/0"], (_.attrTags(_.attrTag({
    value: 1,
    desc: _.attrTag({
      content: $desc_content($scope)
    })
  }), {
    value: 1,
    desc: _.attrTag({
      content: $desc_content2($scope)
    })
  })));
}
export const $input = /* @__PURE__ */_._const("input", $scope => {
  const $wrap_input_spread = {
    "data-one": 2,
    "data-foo": 1,
    ...$scope.input
  };
  _wrap_input_class($scope["#childScope/0"], $wrap_input_spread.class);
  _wrap_input_$rest($scope["#childScope/0"], (({
    class: $class,
    foo,
    ...rest
  }) => rest)($wrap_input_spread));
});
export default /* @__PURE__ */_._template("__tests__/template.marko", $template, $walks, $setup, $input);