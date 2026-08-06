// template.marko
const $template = "<div><p>content</p><span class=base>badge</span></div>";
const $walks = " D b l";
const $setup = () => {};
const $input_theme = ($scope, input_theme) => _attr_class($scope["#div/0"], input_theme);
const $input_accent = ($scope, input_accent) => {
	_attr_style($scope["#p/1"], input_accent);
	_attr_style($scope["#span/2"], [input_accent, { margin: 0 }]);
};
const $input_on = /*@__PURE__*/ _const("input_on", ($scope) => _attr_class_item($scope["#span/2"], "compact", $scope.input_on));
const $input = ($scope, input) => {
	$input_theme($scope, input.theme);
	$input_accent($scope, input.accent);
	$input_on($scope, input.on);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
