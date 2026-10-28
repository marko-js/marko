// template.marko
const $template = "<label> </label><input><button>show</button><output> </output>";
const $walks = " D l b bD l";
const $input_name__OR__uid = /*@__PURE__*/ _or(12, ($scope) => {
	_attr($scope["#label/0"], "for", `${$scope.uid}-${$scope.input_name}`);
	_attr($scope["#input/2"], "id", `${$scope.uid}-${$scope.input_name}`);
});
const $uid = /*@__PURE__*/ _let("uid/11", $input_name__OR__uid);
const $input_id = $uid;
const $shown = /*@__PURE__*/ _let("shown/13", ($scope) => _text($scope["#text/4"], $scope.shown));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$shown($scope, $scope.uid);
}));
function $setup($scope) {
	$shown($scope, "");
	$setup__script($scope);
}
const $input_name = /*@__PURE__*/ _const("input_name", ($scope) => {
	_attr($scope["#input/2"], "name", $scope.input_name);
	$input_name__OR__uid($scope);
});
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => _attr_input_value_default($scope, "#input/2", $scope.input_value));
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_name($scope, input.name);
	$input_label($scope, input.label);
	$input_value($scope, input.value);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
