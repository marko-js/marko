// template.marko
const $template = "<svg><use></use></svg>";
const $walks = "D l";
const $setup = () => {};
const $input_href = ($scope, input_href) => _attr_ns($scope["#use/0"], "xlink:href", input_href, "http://www.w3.org/1999/xlink");
const $input_hrefChange = /*@__PURE__*/ _const("input_hrefChange", ($scope) => _attr($scope["#use/0"], "xlink:hrefChange", $scope.input_hrefChange));
const $input = ($scope, input) => {
	$input_href($scope, input.href);
	$input_hrefChange($scope, input.hrefChange);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "D l", 0, $input);
