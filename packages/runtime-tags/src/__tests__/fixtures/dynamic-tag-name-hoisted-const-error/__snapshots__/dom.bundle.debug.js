// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $inputshowTagdiv_content = _content_resume("__tests__/template.marko_1*content", "body");
const $Tag_getter = _hoist_resume("__tests__/template.marko_0_Tag#4/hoist", "Tag");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputshowTagdiv_content);
const $input_show = ($scope, input_show) => $dynamicTag($scope, input_show ? $Tag_getter($scope) : "div");
const $Tag = /*@__PURE__*/ _const("Tag", ($scope) => _assert_hoist($scope.Tag));
function $setup($scope) {
	$Tag($scope, "span");
}
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
