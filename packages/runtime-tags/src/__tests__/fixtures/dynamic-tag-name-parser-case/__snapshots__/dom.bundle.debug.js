// template.marko
const $template = "<!><!><!><svg><!><!></svg>";
const $walks = "b%b%bD%b%l";
const $input_void_direct = /*@__PURE__*/ _dynamic_tag_content("#text/0");
const $input_svg_direct = /*@__PURE__*/ _dynamic_tag_content("#text/2");
const $input_camel_direct = /*@__PURE__*/ _dynamic_tag_content("#text/3");
const $inputhtml_content = _content("__tests__/template.marko_2*content", "html");
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $inputhtml_content);
const $for_content__input_html = /*@__PURE__*/ _for_closure("#text/1", ($scope) => $for_content__dynamicTag($scope, $scope._.input_html));
const $for_content__setup = $for_content__input_html;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $input_void = $dynamicTag;
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/1", "<!><!><!>", "b%", $for_content__setup);
function $setup($scope) {
	$for($scope, [
		2,
		0,
		1
	]);
}
const $dynamicTag2 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_svg = $dynamicTag2;
const $dynamicTag3 = /*@__PURE__*/ _dynamic_tag("#text/3");
const $input_camel = $dynamicTag3;
const $input = ($scope, input) => {
	$input_void($scope, input.void);
	$input_html($scope, input.html);
	$input_svg($scope, input.svg);
	$input_camel($scope, input.camel);
};
const $input_html = /*@__PURE__*/ _const("input_html", $for_content__input_html);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
