// template.marko
const $template = "<div><!> <!></div>";
const $walks = "D%c%l";
const $a = /*@__PURE__*/ _let("a/5", ($scope) => _text($scope["#text/0"], $scope.a));
const $b = /*@__PURE__*/ _let("b/6", ($scope) => _text($scope["#text/1"], $scope.b));
function $setup($scope) {
	$a($scope, 0);
	$b($scope, 0);
}
const $input_value__script = _script("__tests__/template.marko_0_input_value", ($scope) => {
	{
		const previousValue = $a($scope, $scope.input_value + 1);
		$signal($scope, 0).onabort = () => $b($scope, previousValue);
	}
});
const $input_value = /*@__PURE__*/ _const("input_value", ($scope) => {
	$signalReset($scope, 0);
	$input_value__script($scope);
});
const $input = ($scope, input) => $input_value($scope, input.value);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
