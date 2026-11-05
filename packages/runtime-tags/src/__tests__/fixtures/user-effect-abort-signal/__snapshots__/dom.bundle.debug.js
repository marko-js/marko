// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $a = /*@__PURE__*/ _let("a/5", ($scope) => _text($scope["#text/0"], $scope.a));
const $b = /*@__PURE__*/ _let("b/6", ($scope) => _text($scope["#text/1"], $scope.b));
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
}
const $input_value__script = _script("__tests__/template.marko_0_input_value#4", ($scope) => {
	{
		const previousValue = $a($scope, $scope.input_value + 1);
		onAbort($scope, 0, () => $b($scope, previousValue));
	}
	$signal($scope, 1).label = `run ${$scope.input_value}`;
});
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	$signalReset($scope, 0);
	$signalReset($scope, 1);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
