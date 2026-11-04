// template.marko
const $template = "<a>x</a><img>";
const $walks = " b b";
const $setup = ($_) => {};
const $input_url__OR__input_width = /*@__PURE__*/ _or_patch("__tests__/template.marko_0_input_url#4_input_width#7/setup", 8, ($scope) => _attr($scope["#img/1"], "src", `${$scope.input_url}?w=${$scope.input_width}`));
const $input_url = /*@__PURE__*/ _const("input_url", ($scope) => {
	_attr($scope["#a/0"], "href", $scope.input_url);
	$input_url__OR__input_width($scope);
});
const $input_title = ($scope, input_title) => _attr($scope["#a/0"], "title", input_title);
const $input_cls = ($scope, input_cls) => _attr_class($scope["#a/0"], input_cls);
const $input_width = /*@__PURE__*/ _const("input_width", $input_url__OR__input_width);
const $input = ($scope, input) => {
	$input_url($scope, input.url);
	$input_title($scope, input.title);
	$input_cls($scope, input.cls);
	$input_width($scope, input.width);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
