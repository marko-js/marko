// template.marko
const $template = "<svg><use></use></svg><div></div>";
const $walks = " D l b";
const $setup = () => {};
const $input_svg__script = _script("__tests__/template.marko_0_input_svg#5", ($scope) => _attrs_script($scope, "#svg/0"));
const $input_svg = /*@__PURE__*/ _const("input_svg", ($scope) => {
	_attrs($scope, "#svg/0", $scope.input_svg);
	$input_svg__script($scope);
});
const $input_use__script = _script("__tests__/template.marko_0_input_use#6", ($scope) => _attrs_script($scope, "#use/1"));
const $input_use = /*@__PURE__*/ _const("input_use", ($scope) => {
	_attrs_content($scope, "#use/1", $scope.input_use);
	$input_use__script($scope);
});
const $input_div__script = _script("__tests__/template.marko_0_input_div#7", ($scope) => _attrs_script($scope, "#div/2"));
const $input_div = /*@__PURE__*/ _const("input_div", ($scope) => {
	_attrs_content($scope, "#div/2", $scope.input_div);
	$input_div__script($scope);
});
const $input = ($scope, input) => {
	$input_svg($scope, input.svg);
	$input_use($scope, input.use);
	$input_div($scope, input.div);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);
