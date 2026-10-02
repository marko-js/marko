// template.marko
const $template = "<button> </button>";
const $walks = " D l";
const $input_start = ($scope, input_start) => $scope.input_start;
const $x = /*@__PURE__*/ _let_change("x/7");
const $input_x__OR__input_xChange = /*@__PURE__*/ _or(7, ($scope) => $x($scope, $scope.input_x, $scope.input_xChange));
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__OR__input_xChange);
const $input_xChange = /*@__PURE__*/ _const("input_xChange", $input_x__OR__input_xChange);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	1;
}));
const $setup = $setup__script;
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => {
	$input_start($scope, input.start);
	$input_x($scope, input.x);
	$input_xChange($scope, input.xChange);
	$input_label($scope, input.label);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
